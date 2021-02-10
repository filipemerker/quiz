<template>
  <div key="Challenge" class="w-screen h-screen flex justify-center">
    <Suspense>
      <template #default>
        <Challenge />
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent, Suspense } from 'vue'
import Challenge from '@/components/MultipleAnswer/Challenge.vue'

export default defineComponent({
  name: 'App',
  components: { Challenge },
  setup() {
    return {
      Suspense,
    }
  },
})
</script>
