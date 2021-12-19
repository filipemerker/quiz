<template>
  <div
    key="Home"
    class="flex flex-col min-h-screen h-full w-full justify-start"
  >
    <logo class="hidden sm:block mt-10" />
    <banner />
    <share-info />
    <challenges />
    <home-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Logo from '@/components/Icons/Logo.vue'
import Banner from '@/pages/Home/components/Banner.vue'
import ShareInfo from '@/pages/Home/components/ShareInfo.vue'
import Challenges from '@/pages/Home/components/Challenges.vue'
import Footer from '@/pages/Home/components/Footer.vue'

export default defineComponent({
  components: {
    Logo,
    Banner,
    ShareInfo,
    Challenges,
    HomeFooter: Footer,
  },
})
</script>
