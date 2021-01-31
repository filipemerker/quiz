<template>
  <h1>Welcome to a new challenge</h1>

  <div v-for="question in challenge" :key="question.rightAlternative">
    <Question :question="question" :on-select="onSelect" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Question from '@/components/Question/Question.vue'
import { createMultipleChoiceChallenge } from '@/helpers/bible'

export default defineComponent({
  name: 'App',
  components: { Question },
  async setup() {
    const challenge = await createMultipleChoiceChallenge(5)

    const onSelect = (option: string, rightAlternative: string) => {
      if (option === rightAlternative) {
        alert(`Parabéns! A passagem é: ${rightAlternative}`)
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

<style lang="postcss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
