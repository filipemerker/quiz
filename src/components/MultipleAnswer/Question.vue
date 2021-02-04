<template>
  <div class="flex flex-col justify-between">
    <div class="w-full px-5 flex-grow flex flex-col justify-center">
      <div class="w-full h-auto flex flex-col flex-wrap text-center font-light">
        <span
          v-if="context"
          data-testid="question-title-before"
          class="select-none px-6 text-md mb-3 text-indigo-700 w-full"
        >
          {{ question.title[0] }}
        </span>
        <span
          class="select-none text-xl mb-4 w-full text-indigo-800"
          data-testid="question-title"
          @click="toggleContext(true)"
        >
          {{ question.title[1] }}
        </span>
        <span
          v-if="context"
          data-testid="question-title-after"
          class="select-none px-6 text-md mb-5 text-indigo-700 w-full"
        >
          {{ question.title[2] }}
        </span>
      </div>
    </div>
    <div
      id="alternatives"
      class="shadow-sm w-full py-5 flex flex-wrap content-center justify-center"
    >
      <button
        v-for="alternative in question.alternatives"
        :key="alternative"
        :class="
          `alternative w-full mx-4 mb-3 h-12 shadow-md font-bold text-sm text-white rounded-md bg-white bg-opacity-30 px-2`
        "
        :data-testid="alternative"
        @click="onSelect(alternative, question.rightAlternative)"
      >
        {{ alternative }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { MultipleAnswerQuestion } from '@/types/Quiz'
import { defineComponent, PropType, ref, watch } from 'vue'

export default defineComponent({
  name: 'Question',
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
    const context = ref(false)
    const toggleContext = (value: boolean) => {
      context.value = value
    }

    watch(
      () => props.question.title[1],
      () => toggleContext(false)
    )

    return {
      context,
      toggleContext,
    }
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped></style>
