<template>
  <div v-for="(Question, currentType) in Questions" :key="currentType">
    <div
      v-if="Number(currentType) === type"
      class="h-full flex-grow flex items-stretch"
    >
      <component
        :is="Question.component"
        :question="question"
        :on-select="onSelect"
        :show-results="showResults"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { MultipleAnswerQuestion } from '@/types/Quiz'
import {
  Questions,
  QuestionTypes,
} from '@/factories/questionCreator/createQuestionCreator'

export default defineComponent({
  name: 'QuestionsRenderer',
  props: {
    question: {
      type: Object as PropType<MultipleAnswerQuestion>,
      required: true,
    },
    type: {
      type: Number as PropType<QuestionTypes>,
      required: true,
    },
    onSelect: {
      type: Function,
      required: true,
    },
    showResults: {
      type: Boolean,
    },
  },
  setup() {
    return {
      Questions,
    }
  },
})
</script>
