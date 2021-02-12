<template>
  <div
    class="flex flex-col min-h-screen-inner h-full w-full max-w-md gradient-3"
  >
    <timer :percentile="percentile" :display="display" :points="points" />
    <div v-if="question" class="w-full flex-grow flex items-stretch">
      <Question
        data-testid="question"
        :question="question"
        :on-select="onSelect"
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
    const points = ref<number>(0)
    const question = ref<MultipleAnswerQuestion | null>(null)
    const { push } = useRouter()
    const onWrongAnswer = () => push('/')
    const { percentile, display, reset } = new Clock({
      max: 20000,
      step: 100,
      onFinish: () => onWrongAnswer(),
    })

    question.value = await createMultipleChoiceQuestion()

    const onSelect = async (option: string, rightAlternative: string) => {
      if (option === rightAlternative) {
        question.value = await createMultipleChoiceQuestion()
        points.value += 100
        reset()
      } else {
        onWrongAnswer()
      }
    }

    return {
      Question,
      question,
      onSelect,
      percentile,
      display,
      points,
    }
  },
})
</script>

<style lang="postcss" scoped></style>
