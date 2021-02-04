<template>
  <div class="flex flex-col min-h-screen h-full w-full max-w-md">
    <header class="w-full py-5 flex flex-wrap content-center justify-center">
      <h1
        data-testid="title"
        class="text-indigo-800 text-2xl font-bold text-center"
      >
        Desafio do Novo Testamento
      </h1>
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
import Question from '@/components/MultipleAnswer/Question.vue'
import { createMultipleChoiceQuestion } from '@/helpers/bible'
import { MultipleAnswerQuestion } from '@/types/Quiz'

export default defineComponent({
  name: 'Challenge',
  components: { Question },
  async setup() {
    const { push } = useRouter()
    const question = ref<MultipleAnswerQuestion | null>(null)
    question.value = await createMultipleChoiceQuestion()

    const onSelect = async (option: string, rightAlternative: string) => {
      if (option === rightAlternative) {
        question.value = await createMultipleChoiceQuestion()
      } else {
        push('/')
      }
    }

    return {
      Question,
      question,
      onSelect,
    }
  },
})
</script>

<style lang="postcss" scoped></style>
