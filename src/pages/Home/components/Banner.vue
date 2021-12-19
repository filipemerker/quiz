<template>
  <section
    class="banner gradient-3 flex justify-between flex-col flex-grow sm:mx-10 sm:mt-10 sm:bg-center"
  >
    <div
      class="background-dotted-pattern w-full h-full flex items-center relative"
    >
      <div
        class="px-10 lg:px-20 flex flex-col text-center lg:text-left items-center lg:items-start w-full"
      >
        <logo class="block sm:hidden mb-10" />
        <h1
          data-testid="title"
          class="text-4xl lg:text-5xl w-full max-w-xl xl:max-w-2xl font-bold leading-11"
        >
          Como conhecer melhor a Bíblia?
        </h1>
        <p
          data-testid="description-title"
          class="text-gray-600 w-full max-w-xl md:w-9/12 text-lg font-normal mt-7 m:leading-8"
        >
          Memorize textos, referências e eventos bíblicos que irão abençoar
          profundamente a sua vida.
        </p>
        <button
          class="gradient-0 text-white text-md font-bold rounded-md px-5 py-2 flex-grow-0 mt-10"
          @click="goto('challenges')"
        >
          Aprenda mais sobre a Bíblia!
        </button>
      </div>

      <img
        class="mockup absolute hidden lg:block"
        src="@/assets/iphone.png"
        alt="iphone mockup"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { goto } from '@/helpers'
import Logo from '@/components/Icons/Logo.vue'

export default defineComponent({
  components: { Logo },
  methods: {
    goto,
  },
})
</script>

<style lang="postcss" scoped>
.banner {
  height: calc(100vh - 200px);
}
.mockup {
  height: 100%;
  right: 8%;
  transform: rotate(10deg);
}

@screen xl {
  .mockup {
    height: 120%;
  }
}
</style>
