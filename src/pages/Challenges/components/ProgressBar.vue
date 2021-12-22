<template>
  <div class="percent">
    <svg>
      <circle
        class="baseline"
        cx="50%"
        cy="50%"
        :r="RADIUS_OF_THE_OFFSET"
      ></circle>
      <circle
        class="offset"
        :style="{
          strokeDasharray: `${circumference} ${circumference}`,
          strokeDashoffset: `${circumference -
            (progress / 100) * circumference}`,
        }"
        cx="50%"
        cy="50%"
        :r="RADIUS_OF_THE_OFFSET"
      ></circle>
    </svg>
    <div class="number text-md font-bold text-white">
      <h2>
        {{ display }}
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProgressBar',
  props: {
    progress: {
      type: Number,
      required: true,
      default: 0,
    },
    display: {
      type: String,
      required: true,
      default: '0',
    },
  },
  setup() {
    const RADIUS_OF_THE_OFFSET = 25

    return {
      circumference: RADIUS_OF_THE_OFFSET * 2 * Math.PI,
      RADIUS_OF_THE_OFFSET,
    }
  },
})
</script>
<style>
.offset {
  stroke: theme('colors.white');
  stroke-width: 3;
}
.baseline {
  stroke: theme('colors.gray.100');
  stroke-opacity: 0.4;
  stroke-width: 3;
}

svg {
  position: relative;
  width: 100%;
  height: 100%;
}

svg circle {
  fill: none;
  stroke-linecap: round;
  transform: translate(0, 0px) rotate(270deg);
  transform-origin: 50% 50%;
  transition: 0.35s stroke-dashoffset;
}

.number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.percent {
  position: relative;
  display: inline-block;
  width: 70px;
  height: 70px;
}
</style>
