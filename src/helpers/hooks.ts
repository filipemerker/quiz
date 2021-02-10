import { ref, Ref } from 'vue'

const setGlobalInterval = (cb: () => void, step = 100) => {
  if (window.clock) {
    clearInterval(window.clock)
  }

  return (window.clock = setInterval(() => {
    console.log('Running!')
    cb()
  }, step))
}
type Interval = number | undefined

export class Clock {
  private onFinish: () => void
  private clock: Interval
  private max: number
  private step: number
  public time: Ref<number>
  public percentile: Ref<number>
  public display: Ref<string>

  constructor({
    max = 20000,
    step = 100,
    onFinish,
  }: {
    max?: number
    step: number
    onFinish: () => void
  }) {
    this.clock = setGlobalInterval(this.onInterval, step)

    this.max = max
    this.step = step
    this.onFinish = onFinish

    this.time = ref(0)
    this.percentile = ref(0)
    this.display = ref(this.getDisplay())
  }

  private hasReachedMax = () => this.time.value >= this.max

  private onInterval = () => {
    this.time.value += this.step
    this.percentile.value = this.getPercentile()
    this.display.value = this.getDisplay()

    if (this.hasReachedMax()) {
      this.onFinish()
      this.kill()
    }
  }

  private getPercentile() {
    return (this.time.value * 100) / this.max
  }

  private getDisplay() {
    const max = this.max / 1000
    const time = Math.floor(this.time.value / 1000)

    return (max - time).toString()
  }

  public reset = () => {
    this.time.value = 0
    this.percentile.value = 0
  }

  public kill = () => {
    clearInterval(this.clock)
    this.time.value = 0
    this.percentile.value = 0
  }
}
