<template>
  <header
    id="header"
    class="w-full flex flex-wrap flex-col text-gray-100 font-bold"
  >
    <div
      class="w-full py-3 px-4 mt-6 flex flex-wrap items-center justify-between flex-row relative"
    >
      <div
        id="points"
        class="relative leading-4 italic rounded-full w-auto h-10 px-3"
      >
        <div
          class="w-full h-full rounded-full z-10 relative flex items-center justify-center"
        >
          {{ points }}
          xp
        </div>
      </div>

      <div class="timer flex-1 text-xl text-center pt-2 absolute left-1/2">
        <progress-bar :progress="percentile" :display="display" />
      </div>
      <div
        id="lives"
        class="flex flex-row justify-evenly items-center w-16 h-10 pr-2 pl-1 rounded-full"
      >
        <heart id="heart" />
        <span class="">{{ currentLives }}</span>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, computed } from 'vue'
import 'vue3-circle-progress/dist/circle-progress.css'
import Heart from '@/components/Icons/Heart.vue'
import ProgressBar from '@/components/ProgressBar/ProgressBar.vue'

export default defineComponent({
  name: 'Timer',
  components: { Heart, ProgressBar },
  props: {
    percentile: {
      type: Number,
      required: true,
    },
    display: {
      type: String,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
    currentLives: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const state = reactive({
      lives: computed(() =>
        new Array(props.currentLives).fill('').map(Math.random)
      ),
    })

    return toRefs(state)
  },
})
</script>
<style scoped>
#points-bg {
  animation-iteration-count: 1;
}
#lives,
#points {
  border-width: 1px;
}
#heart {
  width: 50%;
  height: 50%;
}
.timer {
  transform: translateX(-50%);
}
</style>
