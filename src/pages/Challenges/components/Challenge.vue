<template>
  <div class="flex relative flex-col min-h-screen-inner h-full w-full max-w-md">
    <!--<Achievement :icon="'🏅'" />-->
    <timer
      :percentile="percentile"
      :display="display"
      :points="challengeData.experience"
      :current-lives="currentLives"
    />
    <div
      v-if="newQuestion.question"
      class="w-full h-full flex-grow flex items-stretch"
    >
      <questions-renderer
        :type="newQuestion.type"
        :question="newQuestion.question"
        :on-select="onSelectOption"
        :show-results="showResults"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import { useRouter } from 'vue-router'

import { QuestionType, QuestionCreatorType } from "@/factories/questionCreator/createQuestionCreator"
import { Clock } from '@/modules/Clock'
import { challengeDataAPI } from '@/proxies/challengeData/challengeData'

import Timer from '@/pages/Challenges/components/Timer.vue'
import QuestionsRenderer from '@/pages/Challenges/components/QuestionsRenderer.vue'

import type { ClockInstance } from '@/modules/Clock'
import type { PartialChallengeData } from '@/proxies/challengeData/challengeData'

export default defineComponent({
  name: 'Challenge',
  components: { Timer, QuestionsRenderer },
  props: {
    questionCreator: {
      type: Function as PropType<QuestionCreatorType>,
      required: true,
    },
    challengeType: {
      type: String,
      required: true,
    }
  },
  async setup(props) {
    const { push } = useRouter()
    const currentLives = ref<number>(5)
    const showResults = ref<boolean>(false)
    const newQuestion = ref<QuestionType>(await props.questionCreator())
    const challengeData = ref<PartialChallengeData>({
      challengeType: props.challengeType,
      experience: 0
    })

    const getNewQuestion = async () => {
      newQuestion.value = await props.questionCreator()
    }

    const onRightAnswer = () => {
      challengeData.value.experience += 100
    }

    const onWrongAnswer = async (clockInstance: ClockInstance) => {
      currentLives.value -= 1

      if (currentLives.value < 1) {
        const { id } = await challengeDataAPI.createChallenge(challengeData.value)

        clockInstance.kill()

        push(`/sucesso/${id}`)
      }
    }

    const clock: ClockInstance = new Clock({
      step: 100,
      onFinish: async () => {
        await onWrongAnswer(clock)
        await getNewQuestion()

        clock.reset({ max: newQuestion.value.time })
        clock.resume()
      },
    })

    const onSelectOption = (option: string, rightAlternative: string) => {
      clock.stop()
      showResults.value = true

      setTimeout(async () => {
        if (option === rightAlternative) {
          onRightAnswer()
        } else {
          onWrongAnswer(clock)
        }

        await getNewQuestion()
        showResults.value = false
        clock.reset({ max: newQuestion.value.time })
        clock.resume()
      }, 2500)
    }

    return {
      percentile: clock.percentile,
      display: clock.display,
      currentLives,
      newQuestion,
      showResults,
      onSelectOption,
      challengeData,
    }
  },
})
</script>
