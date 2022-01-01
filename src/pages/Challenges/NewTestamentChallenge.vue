<template>
  <div key="Challenge" class="w-screen min-h-screen-inner gradient-3">
    <div class="w-full background-dotted-pattern-alpha-05 flex justify-center">
      <Suspense>
        <template #default>
          <Challenge
            challenge-type="newTestament"
            :question-creator="newTestamentQuestionCreator"
          />
        </template>
      </Suspense>
    </div>
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
  QuestionTypes.GuessTheVerse,
  QuestionTypes.GuessTheReference
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
