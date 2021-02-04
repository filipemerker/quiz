<template>
  <div class="flex flex-col justify-between">
    <div class="w-full flex-grow flex flex-col justify-center">
      <div
        class="fold text-left rounded-md gradient-1 shadow-lg flex flex-wrap flex-col py-8 px-3 mx-4 mb-6"
      >
        <span
          v-if="context"
          data-testid="question-title-before"
          class="select-none text-md mb-3 opacity-80 text-white w-full"
        >
          {{ question.title[0] }}
        </span>
        <span
          class="select-none text-xl font-bold w-full text-white"
          data-testid="question-title"
          @click="toggleContext(true)"
        >
          {{ question.title[1] }}
        </span>
        <span
          v-if="context"
          data-testid="question-title-after"
          class="select-none text-md mt-4 opacity-80 text-white w-full"
        >
          {{ question.title[2] }}
        </span>
      </div>
    </div>
    <div
      id="alternatives"
      class=" bg-gray-200 shadow-inner w-full p-5 flex flex-wrap content-center justify-between "
    >
      <button
        v-for="alternative in question.alternatives"
        :key="alternative"
        :class="
          `alternative my-2 h-12 shadow-md font-bold text-xs text-gray-800 bg-gray-300 border-gray-400 border-b-2 rounded-md px-2`
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
<style lang="postcss" scoped>
.alternative {
  width: calc(50% - 0.5rem);
}
</style>
