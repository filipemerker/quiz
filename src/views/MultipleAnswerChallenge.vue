<template>
  <div id="asd" key="Challenge" class="w-screen h-screen flex">
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
