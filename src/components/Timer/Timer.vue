<template>
  <header
    class="w-full py-5 px-4 flex flex-wrap items-center justify-center flex-row"
  >
    <div
      class="bg-gray-50 leading-4 italic shadow-lg bg-opacity-20 text-white font-bold rounded-full w-20 h-20 flex items-center justify-center transition-all ease-in-out"
    >
      {{ points }}
      <br />
      pontos
    </div>
    <div class="timer flex-1 h-3 bg-gray-100 bg-opacity-20 rounded-full mx-4">
      <div
        :style="{ width: `${percentile}%` }"
        :class="
          `${
            percentile < 60 ? `bg-green-300` : `bg-red-400`
          } bg-opacity-70 h-full max-w-full rounded-full shadow-lg transition-all ease-in-out`
        "
      ></div>
    </div>
    <div
      class="bg-gray-50 bg-opacity-20 text-white font-bold text-xs rounded-full w-8 h-8 flex items-center justify-center"
    >
      {{ display }}
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Timer',
  props: {
    percentile: {
      type: Number,
      required: true,
    },
    display: {
      type: Number,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
  },
})
</script>
<style></style>
