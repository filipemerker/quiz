<template>
  <div
    key="Challenge"
    class="w-screen min-h-screen-inner flex justify-center gradient-3"
  >
    <Suspense>
      <template #default>
        <Challenge />
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent, Suspense } from 'vue'
import Challenge from '@/pages/MultipleAnswerChallenge/components/Challenge.vue'

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
