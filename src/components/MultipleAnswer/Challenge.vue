<template>
  <div class="flex flex-col min-h-screen-inner h-full w-full max-w-md">
    <header
      class="w-full py-5 px-4 flex flex-wrap content-center justify-center"
    >
      <div class="timer w-full h-1 bg-gray-300 rounded-full ">
        <div
          :style="{ width: `${percentile}%` }"
          class="h-full max-w-full rounded-full gradient-1 transition-all ease-in-out"
        ></div>
        <div>{{display}}</div>
      </div>
    </header>
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
import { Clock } from '@/helpers/hooks'
import Question from '@/components/MultipleAnswer/Question.vue'
import { createMultipleChoiceQuestion } from '@/helpers/bible'
import { MultipleAnswerQuestion } from '@/types/Quiz'

export default defineComponent({
  name: 'Challenge',
  components: { Question },
  async setup() {
    const { push } = useRouter()
    const question = ref<MultipleAnswerQuestion | null>(null)
    const onWrongAnswer = () => push('/')
    const { percentile, display, reset } = new Clock({
      max: 20000,
      step: 10,
      onFinish: () => onWrongAnswer(),
    })

    question.value = await createMultipleChoiceQuestion()

    const onSelect = async (option: string, rightAlternative: string) => {
      if (option === rightAlternative) {
        question.value = await createMultipleChoiceQuestion()
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
      display
    }
  },
})
</script>

<style lang="postcss" scoped></style>
