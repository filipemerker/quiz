<template>
  <div class="flex flex-col justify-between">
    <div class="w-full flex-grow flex flex-col justify-center">
      <div class=" text-left flex flex-wrap flex-col py-8 mx-5 mb-4">
        <span class="text-md w-full text-white">
          Qual a passagem de
        </span>
        <span
          class="select-none text-2xl font-bold w-full text-white"
          data-testid="question-title"
        >
          {{ question.title }}
        </span>
      </div>
    </div>
    <div
      id="alternatives"
      class="p-5 flex flex-wrap content-center justify-between rounded-md"
    >
      <blue-button
        v-for="alternative in question.alternatives"
        :key="alternative"
        :data-testid="alternative"
        :show-result="showResults"
        :is-correct="alternative === question.rightAlternative"
        class="text-left px-2 py-3 text-white bg-gray-100 bg-opacity-20 w-full text-md"
        @click="onSelect(alternative, question.rightAlternative)"
      >
        {{ alternative }}
      </blue-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { MultipleAnswerQuestion } from '@/types/Quiz'
import BlueButton from '@/components/Buttons/BlueButton.vue'

export default defineComponent({
  name: 'Question',
  components: { BlueButton },
  props: {
    question: {
      type: Object as PropType<MultipleAnswerQuestion>,
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
})
</script>
