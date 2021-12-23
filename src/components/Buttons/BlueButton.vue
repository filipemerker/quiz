<template>
  <button
    :class="
      `relative my-2 shadow-lg text-white bg-gray-100 bg-opacity-20 rounded-md px-4`
    "
  >
    <div
      :class="
        ` absolute left-0 top-0 right-0 bottom-0 correctness-display transition-all rounded-md
        ${showResult &&
          isCorrect &&
          `border-green-300 border-opacity-70 border-2 border-t-4`}
        ${showResult &&
          !isCorrect &&
          `border-red-400 border-opacity-70 border-2 border-t-4`}`
      "
    ></div>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BlueButton',
  props: {
    showResult: {
      type: Boolean,
      required: true,
    },
    isCorrect: {
      type: Boolean,
      required: true,
    },
  },
})
</script>
