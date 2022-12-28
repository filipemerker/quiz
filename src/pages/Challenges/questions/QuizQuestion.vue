<template>
  <div class="flex flex-col justify-between">
    <div class="w-full flex-grow flex flex-col justify-center">
      <div class=" text-left flex flex-wrap flex-col py-8 mx-5 mb-3 mt-3">
        <span
          class="select-none text-xl font-bold w-full text-white"
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
        class="alternative h-12 font-semibold text-sm"
        @click="onSelect(alternative, question.rightAlternative)"
      >
        {{ alternative }}
      </blue-button>
    </div>
  </div>
</template>

<script lang="ts">
import { MultipleAnswerQuestion } from '@/types/Quiz'
import BlueButton from '@/components/Buttons/BlueButton.vue'
import { defineComponent, PropType, ref } from 'vue'

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
  setup() {
    const context = ref(false)

    return {
      context,
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
