<template>
  <header class="w-full flex flex-wrap flex-col">
    <div
      class="w-full py-5 px-4 flex flex-wrap items-center justify-center flex-row"
    >
      <div
        class=" relative leading-4 italic shadow-lg rounded-full text-white font-bold  w-20 h-20"
      >
        <div
          id="points-bg"
          :key="points"
          class="animate-ping w-full h-full bg-green-400 absolute rounded-full"
        ></div>
        <div
          id="points"
          class="bg-gray-50 w-full h-full rounded-full z-10 relative flex items-center justify-center"
        >
          {{ points }}
          <br />
          pontos
        </div>
      </div>
      <div class="flex flex-col flex-1 items-end pl-5 mt-3">
        <div
          class="timer w-full h-3 bg-gray-100 bg-opacity-20 rounded-full ml-4 overflow-hidden mb-3"
        >
          <div
            :style="{ width: `${percentile}%` }"
            :class="
              `${
                percentile < 60 ? `bg-green-300` : `bg-red-400`
              } bg-opacity-70 h-full max-w-full rounded-full shadow-lg transition-all ease-in-out`
            "
          ></div>
        </div>
        <div class="w-full flex flex-row justify-between items-center">
          <div id="lives" class="flex flex-row">
            <div
              v-for="live in lives"
              :key="live"
              class="bg-gray-50 bg-opacity-20 w-6 h-6 rounded-full items-center justify-center flex mr-2"
            >
              <heart id="heart"></heart>
            </div>
          </div>
          <div
            class="bg-gray-50 bg-opacity-20 text-white font-bold text-xs rounded-full w-7 h-7 flex items-center justify-center"
          >
            {{ display }}
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, computed } from 'vue'
import Heart from '@/components/Icons/Heart.vue'

export default defineComponent({
  name: 'Timer',
  components: { Heart },
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
<style>
#points {
  background: #aed0fd;
}
#points-bg {
  animation-iteration-count: 1;
}

#heart {
  width: 50%;
  height: 50%;
}
</style>
