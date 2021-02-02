<template>
  <div class="flex justify-center h-screen w-screen bg-gradient-to-t from-green-600 to-green-300">
    <Suspense>
      <template #default>
        <Challenge />
      </template>
      <template #fallback>
        <span>Loading... Please wait.</span>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent, Suspense } from 'vue'
import Challenge from '@/components/Challenge/Challenge.vue'

export default defineComponent({
  name: 'App',
  components: { Challenge },
  setup() {
    return {
      Challenge,
      Suspense,
    }
  },
})
</script>

<style lang="postcss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
