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
      <blue-button
        v-for="alternative in question.alternatives"
        :key="alternative"
        :data-testid="alternative"
        :show-result="showResults"
        :is-correct="alternative === question.rightAlternative"
        class="alternative h-12 font-semibold text-sm"
        @click="onSelect(alternative, question.rightAlternative)"
      >
        {{ alternative }}
      </blue-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
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
