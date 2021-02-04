import { ref } from 'vue'

export const useTimer = (max: number) => {
  const time = ref(0)
  const percentile = ref(0)

  const clock = ref(
    setInterval(() => {
      time.value += 100
      percentile.value = (time.value * 100) / max
    }, 100)
  )

  return {
    time,
    percentile,
    reset: () => {
      time.value = 0
      percentile.value = 0
    },
    kill: () => {
      clearInterval(clock.value)
      time.value = 0
      percentile.value = 0
    },
  }
}
