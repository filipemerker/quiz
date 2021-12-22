<template>
  <div class="flex flex-col justify-between">
    <div class="w-full flex-grow flex flex-col justify-center">
      <div class=" text-left  flex flex-wrap flex-col py-8 mx-5 mb-6">
        <span
          v-if="context"
          data-testid="question-title-before"
          class="select-none text-lg mb-3 opacity-80 text-white w-full"
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
          class="select-none text-lg mt-4 opacity-80 text-white w-full"
        >
          {{ question.title[2] }}
        </span>
      </div>
    </div>
    <div
      id="alternatives"
      class="p-5 flex flex-wrap content-center justify-between rounded-md"
    >
      <button
        v-for="alternative in question.alternatives"
        :key="alternative"
        :class="
          `${showResults &&
            alternative === question.rightAlternative &&
            `border-green-300 border-opacity-70 border-2 border-t-8 right-answer`} ${showResults &&
            alternative !== question.rightAlternative &&
            `border-red-400 border-opacity-70 border-2 border-t-8`} alternative my-2 h-12 shadow-lg font-semibold text-sm text-gray-100 bg-gray-100 bg-opacity-30 rounded-md px-2 transition-all wrong-answer`
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
    showResults: {
      type: Boolean,
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
