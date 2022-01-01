<template>
  <div
    key="Success"
    class="flex flex-col min-h-screen h-full w-full justify-center items-center"
  >
    <Suspense>
      <template #default>
        <success-card />
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent, Suspense } from 'vue'
import SuccessCard from './components/Card.vue'

export default defineComponent({
  name: 'Success',
  components: { SuccessCard },
  setup() {
    return { Suspense }
  },
})
</script>
