<template>
  <div
    key="Challenge"
    class="w-screen min-h-screen-inner flex justify-center gradient-3"
  >
    <Suspense>
      <template #default>
        <Challenge :question-creator="newTestamentQuestionCreator" />
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent, Suspense } from 'vue'
import {
  createQuestionCreator,
  QuestionTypes,
} from '@/factories/questionCreator/createQuestionCreator'

import Challenge from '@/pages/Challenges/components/Challenge.vue'

const newTestamentQuestionCreator = createQuestionCreator(
  QuestionTypes.GuessTheReference,
  QuestionTypes.Quiz
)

export default defineComponent({
  components: { Challenge },
  setup() {
    return {
      Suspense,
      newTestamentQuestionCreator,
    }
  },
})
</script>
