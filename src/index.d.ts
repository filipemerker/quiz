export {}

declare global {
  interface Window {
    clock: number | undefined
  }

  interface Crypto {
    randomUUID: () => string
  }
}
