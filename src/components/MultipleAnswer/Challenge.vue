<template>
  <div class="flex relative flex-col min-h-screen-inner h-full w-full max-w-md">
    <!--<Achievement :icon="'🏅'" />-->
    <timer
      :percentile="percentile"
      :display="display"
      :points="points"
      :current-lives="currentLives"
    />
    <div v-if="question" class="w-full flex-grow flex items-stretch">
      <Question
        data-testid="question"
        :question="question"
        :on-select="onSelect"
        :show-results="showResults"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Clock } from '@/helpers/Clock'
import Question from '@/components/MultipleAnswer/Question.vue'
import Timer from '@/components/Timer/Timer.vue'
import { createMultipleChoiceQuestion } from '@/helpers/bible'
import { MultipleAnswerQuestion } from '@/types/Quiz'

export default defineComponent({
  name: 'Challenge',
  components: { Question, Timer },
  async setup() {
    const { push } = useRouter()
    const currentLives = ref<number>(5)
    const points = ref<number>(0)
    const showResults = ref<boolean>(false)
    const question = ref<MultipleAnswerQuestion | null>(null)

    const getNewQuestion = async (): Promise<void> => {
      question.value = await createMultipleChoiceQuestion()
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
      max: 200000,
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
      Question,
      question,
      onSelect,
      percentile: clock.percentile,
      display: clock.display,
      points,
      currentLives,
      showResults,
    }
  },
})
</script>

<style lang="postcss" scoped></style>
