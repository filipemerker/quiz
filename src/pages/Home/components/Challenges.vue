<template>
  <section id="challenges" class="flex flex-col mt-40 items-center">
    <h2 class="gradient-text font-bold text-3xl w-auto">
      Desafios disponíveis
    </h2>
    <section class="w-full flex flex-col items-center max-w-6xl mt-10 mb-52">
      <div
        class="gradient-1 w-full max-w-4xl h-44 shadow-none -mb-40 opacity-70"
      >
        <div class="background-dotted-pattern w-full h-full" />
      </div>
      <Carousel
        v-model="currentSlide"
        class="w-full"
        :items-to-show="smallWindow ? 1.3 : 3"
      >
        <Slide v-for="game in games" :key="game">
          <article
            :class="
              `card-link flex flex-col items-center justify-between w-full h-60 bg-white rounded-md shadow-lg my-10 mx-5 md:mx-10 p-5 outline-none`
            "
          >
            <header
              :class="
                `w-full pt-2 flex flex-col items-start text-left whitespace-pre-wrap ${
                  !game.active ? 'opacity-50' : 'opacity-80'
                }`
              "
            >
              <h2
                class="
                    font-extrabold text-xl text-gray-700 leading-5
                  "
              >
                {{ game.title }}
              </h2>
              <span
                class="text-sm text-gray-600 leading-4 mt-3"
                v-html="game.subtitle"
              />
            </header>
            <footer v-if="game.active" class="w-full flex">
              <router-link :to="game.route" class="card-link w-full">
                <orange-button class="mt-10 text-sm w-full">
                  Começar o desafio!
                </orange-button>
              </router-link>
            </footer>
          </article>
        </Slide>
        <template #addons>
          <pagination v-if="smallWindow" />
        </template>
      </Carousel>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import OrangeButton from '@/components/Buttons/OrangeButton.vue'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  components: {
    Slide,
    Carousel,
    Pagination,
    OrangeButton,
  },
  setup() {
    const games = ref([
      {
        title: 'Antigo Testamento',
        subtitle: 'Em breve',
        route: '/',
        active: false,
      },
      {
        title: 'Versículos do Novo Testamento',
        subtitle:
          'Acerte o máximo de <strong>referências bíblicas</strong> que conseguir no <strong>Novo Testamento</strong>.',
        route: '/multipla-escolha/novo-testamento',
        active: true,
      },
      {
        title: 'Perguntas Bíblicas',
        subtitle: 'Em breve',
        route: '/',
        active: false,
      },
    ])

    const currentSlide = ref<undefined | number>(undefined)

    onMounted(() => {
      currentSlide.value = 1
    })

    return {
      games,
      currentSlide,
      smallWindow: window.innerWidth < 777,
    }
  },
})
</script>

<style lang="postcss">
.carousel__slide--active > article {
  transform: scale(1.1);
  margin-left: 1rem;
  margin-right: 1rem;
  transition: transform ease-in-out 0.2s;
}

.carousel__pagination-button {
  height: 10px;
  background-color: rgb(194, 195, 199);
}

.carousel__pagination-button--active {
  background-color: rgb(31, 41, 55);
}

.card-link {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
