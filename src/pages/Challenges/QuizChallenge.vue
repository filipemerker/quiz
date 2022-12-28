<template>
  <div key="Challenge" class="w-screen min-h-screen-inner gradient-3">
    <div class="w-full background-dotted-pattern-alpha-05 flex justify-center">
      <Suspense>
        <template #default>
          <Challenge
            challenge-type="quiz"
            :question-creator="QuizQuestionCreator"
          />
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Suspense, onUnmounted } from 'vue'
import {
  createQuestionCreator,
  QuestionTypes,
} from '@/factories/questionCreator/createQuestionCreator'

import Challenge from '@/pages/Challenges/components/Challenge.vue'

const QuizQuestionCreator = createQuestionCreator(QuestionTypes.Quiz)

export default defineComponent({
  components: { Challenge },
  setup() {
    onUnmounted(() => clearInterval(window.clock)) // TODO think of a workaround

    return {
      Suspense,
      QuizQuestionCreator,
    }
  },
})
</script>
