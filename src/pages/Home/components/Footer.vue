<template>
  <footer class="footer text-sm h-96 w-full">
    <div
      class="background-dotted-pattern w-full h-full flex flex-col justify-center items-center"
    >
      <logo class="w-auto" />
      <a class="mt-5" href="mailto:filipesmerker@gmail.com" target="_blank">
        filipesmerker@gmail.com
      </a>
      <span>Made with ♥️ by Filipe Merker</span>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from '@/components/Icons/Logo.vue'

export default defineComponent({
  components: { Logo },
})
</script>

<style lang="postcss" scoped>
.footer {
  background: linear-gradient(
    0deg,
    rgba(153, 195, 254, 1) 0%,
    rgba(153, 195, 254, 0) 100%
  );
}
</style>
