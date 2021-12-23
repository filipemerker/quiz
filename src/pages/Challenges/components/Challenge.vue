<template>
  <div class="flex relative flex-col min-h-screen-inner h-full w-full max-w-md">
    <!--<Achievement :icon="'🏅'" />-->
    <timer
      :percentile="percentile"
      :display="display"
      :points="points"
      :current-lives="currentLives"
    />
    <div
      v-if="newQuestion.question"
      class="w-full h-full flex-grow flex items-stretch"
    >
      <questions-renderer
        :type="newQuestion.type"
        :question="newQuestion.question"
        :on-select="onSelect"
        :show-results="showResults"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import { useRouter } from 'vue-router'
import {
  QuestionType,
  QuestionCreatorType,
} from '@/factories/questionCreator/createQuestionCreator'
import { Clock } from '@/helpers/Clock'
import Timer from '@/pages/Challenges/components/Timer.vue'
import QuestionsRenderer from '@/pages/Challenges/components/QuestionsRenderer.vue'

export default defineComponent({
  name: 'Challenge',
  components: { Timer, QuestionsRenderer },
  props: {
    questionCreator: {
      type: Function as PropType<QuestionCreatorType>,
      required: true,
    },
  },
  async setup(props) {
    const { push } = useRouter()
    const currentLives = ref<number>(5)
    const points = ref<number>(0)
    const showResults = ref<boolean>(false)
    const newQuestion = ref<QuestionType>(await props.questionCreator())

    const getNewQuestion = async () => {
      newQuestion.value = await props.questionCreator()
    }

    const onRightAnswer = () => {
      points.value += 100
    }
    const onWrongAnswer = () => {
      currentLives.value -= 1

      if (currentLives.value < 1) {
        push('/')
      }
    }
    const clock = new Clock({
      max: 300000,
      step: 100,
      onStart: async () => {
        await getNewQuestion()
      },
      onFinish: async () => {
        onWrongAnswer()
        await getNewQuestion()
        clock.reset()
        clock.resume()
      },
    })

    const onSelect = (option: string, rightAlternative: string) => {
      clock.stop()
      showResults.value = true

      setTimeout(async () => {
        if (option === rightAlternative) {
          onRightAnswer()
        } else {
          onWrongAnswer()
        }

        await getNewQuestion()
        showResults.value = false
        clock.reset()
        clock.resume()
      }, 2500)
    }

    return {
      percentile: clock.percentile,
      display: clock.display,
      currentLives,
      newQuestion,
      showResults,
      onSelect,
      points,
    }
  },
})
</script>
