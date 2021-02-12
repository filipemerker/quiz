<template>
  <div key="Challenge" class="w-screen min-h-screen-inner flex justify-center">
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
