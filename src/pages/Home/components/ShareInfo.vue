<template>
  <section
    class="flex md:flex-row flex-col items-center justify-center w-full mt-44 px-10"
  >
    <div class="mockup-wrapper w-5/6 md:w-96 md:mr-10 mb-10">
      <img
        class="mockup relative w-full rounded-md"
        src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-ui-kit-pro/landing-portfolio.png"
        alt="..."
      />
    </div>
    <article
      class="flex flex-col text-center md:text-left items-center md:items-start justify-center max-w-md lg:max-w-xl md:ml-10 mt-10 md:mt-0"
    >
      <h2 class="gradient-text font-bold text-3xl w-auto">
        Compartilhe seus resultados
      </h2>
      <p class="text-gray-700 text-md mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
        voluptatibus magni deserunt optio, doloremque obcaecati soluta omnis
        quaerat illo facilis, ut ullam quidem ipsum maiores eaque quam dicta
        laboriosam? Assumenda.
      </p>
      <button
        class="gradient-0 text-white text-md font-bold rounded-md px-5 py-2 flex-grow-0 mt-8"
        @click="goto('challenges')"
      >
        Aprenda mais sobre a Bíblia!
      </button>
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { goto } from '@/helpers'

export default defineComponent({
  methods: {
    goto,
  },
})
</script>

<style lang="postcss" scoped>
.mockup {
  transform: rotateY(30deg) rotateX(15deg) !important;
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%) !important;
}
.mockup-wrapper {
  perspective-origin: right center !important;
  perspective: 1500px !important;
  transform-style: preserve-3d !important;
}
</style>
