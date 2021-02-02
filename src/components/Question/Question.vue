<template>
  <div class="flex h-full flex-col justify-between">
    <div class="w-full px-5 flex-grow flex flex-col justify-center">
      <div class="w-full h-auto flex flex-col flex-wrap text-center font-light">
        <span v-if="context" class="px-6 text-md mb-4 text-gray-100 w-full">
          {{ contextBefore }}
        </span>
        <span class="text-xl mb-4 w-full text-gray-50">{{ title }}</span>
        <span v-if="context" class="px-6 text-md mb-4 text-gray-100 w-full">
          {{ contextAfter }}
        </span>
      </div>
    </div>
    <div
      class="shadow-sm w-full py-5 flex flex-wrap content-center justify-center"
    >
      <button
        v-for="alternative in question.alternatives"
        :key="alternative"
        class=" w-full mx-4 mb-3 h-12 shadow-lg bg-white text-gray-800 rounded-md px-2"
        @click="onSelect(alternative, question.rightAlternative)"
      >
        {{ alternative }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { MultipleAnswerQuestion } from '@/types/Quiz'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Content',
  props: {
    question: {
      type: Object as PropType<MultipleAnswerQuestion>,
      required: true,
    },
    onSelect: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    return {
      contextBefore: props.question.title[0],
      title: props.question.title[1],
      contextAfter: props.question.title[2],
    }
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped></style>
