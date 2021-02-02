<template>
  <div class="flex flex-col h-screen w-full max-w-md">
    <header class="w-full py-10 flex flex-wrap content-center justify-center">
      <h1 class="text-gray-50 text-2xl font-bold text-center">
        Welcome to a new challenge
      </h1>
    </header>
    <div class="w-full flex-grow flex items-stretch">
      <div v-for="question in challenge" :key="question.rightAlternative">
        <Question :question="question" :on-select="onSelect" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Question from '@/components/Question/Question.vue'
import { createMultipleChoiceChallenge } from '@/helpers/bible'
import { MultipleAnswerChallenge } from '@/types/Quiz'

export default defineComponent({
  name: 'App',
  components: { Question },
  async setup() {
    const challenge = ref<MultipleAnswerChallenge>([])
    challenge.value = await createMultipleChoiceChallenge(1)

    const onSelect = async (option: string, rightAlternative: string) => {
      if (option === rightAlternative) {
        alert(`Parabéns! A passagem é: ${rightAlternative}`)
        challenge.value = await createMultipleChoiceChallenge(1)
      }
    }

    return {
      Question,
      challenge,
      onSelect,
    }
  },
})
</script>

<style lang="postcss" scoped></style>
