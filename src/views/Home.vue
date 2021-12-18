<template>
  <div
    key="Home"
    class="flex flex-col min-h-screen h-full w-full justify-start"
  >
    <logo class="hidden sm:block mt-10" />

    <section
      id="banner"
      class="flex justify-between flex-col flex-grow sm:mx-10 sm:mt-10 sm:bg-center gradient-3"
    >
      <div class="background-pattern w-full h-full flex items-center relative">
        <div
          class="px-10 lg:px-20 flex flex-col text-center lg:text-left items-center lg:items-start w-full"
        >
          <logo id="mobile-logo" class="block sm:hidden mb-10" />
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
          id="mockup-1"
          class="absolute hidden lg:block"
          src="@/assets/iphone.png"
          alt="iphone mockup"
        />
      </div>
    </section>

    <section
      id="share"
      class="flex md:flex-row flex-col items-center justify-center w-full mt-20 md:mt-44 px-10"
    >
      <div id="mockup-2-wrapper" class=" w-5/6 md:w-96 md:mr-10 mb-10">
        <img
          id="mockup-2"
          class="relative w-full rounded-md"
          src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-ui-kit-pro/landing-portfolio.png"
          alt="..."
        />
      </div>
      <article
        class="flex flex-col text-center md:text-left items-center md:items-start justify-center max-w-md lg:max-w-xl md:ml-10 mt-10 md:mt-0"
      >
        <h2 class="section-title font-bold text-3xl w-auto">
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

    <section
      id="challenges"
      ref="challenges"
      class="flex flex-col mt-36 items-center"
    >
      <h2 class="section-title font-bold text-3xl w-auto">
        Desafios disponíveis
      </h2>
      <section class="w-full flex flex-col items-center max-w-6xl mt-10 mb-52">
        <div
          class="w-full max-w-4xl h-44 gradient-1 shadow-none carousel-backdrop -mb-40 opacity-70"
        >
          <div class="background-pattern w-full h-full" />
        </div>
        <Carousel
          v-model="currentSlide"
          class="w-full"
          :items-to-show="smallWindow ? 1.3 : 3"
        >
          <Slide v-for="game in games" :key="game">
            <article
              :class="
                `flex flex-col items-center justify-between w-full h-60 bg-white rounded-md shadow-lg my-10 mx-5 md:mx-10 p-5 card-link outline-none`
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
                <router-link
                  :to="game.route"
                  class="gradient-0 text-white rounded-md w-full text-md font-bold px-5 py-2 flex-grow-0 mt-10"
                >
                  <span class="font-bold text-sm">Começar o desafio!</span>
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
    <footer class="footer text-sm h-96 w-full">
      <div
        class="background-pattern w-full h-full flex flex-col justify-center items-center"
      >
        <logo class="w-auto" />
        <a class="mt-5" href="mailto:filipesmerker@gmail.com" target="_blank">
          filipesmerker@gmail.com
        </a>
        <span>Made with ♥️ by Filipe Merker</span>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import Logo from '@/components/Icons/Logo.vue'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  components: { Logo, Carousel, Slide, Pagination },
  setup() {
    const smallWindow = window.innerWidth < 777
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
        route: '/multipla-escolha',
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
      smallWindow,
      currentSlide,
    }
  },
  methods: {
    goto(refName: string) {
      const element = this.$refs[refName] as HTMLElement
      const top = element.offsetTop - 100

      window.scrollTo({
        top,
        behavior: 'smooth',
      })
    },
  },
})
</script>

<style lang="postcss">
#mobile-logo {
  transform: scale(1.25);
}
#banner {
  height: calc(100vh - 200px);
}
#mockup-1 {
  height: 100%;
  right: 8%;
  transform: rotate(10deg);
}
#mockup-2 {
  transform: rotateY(30deg) rotateX(15deg) !important;
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%) !important;
}
#mockup-2-wrapper {
  perspective-origin: right center !important;
  perspective: 1500px !important;
  transform-style: preserve-3d !important;
}
@media (min-width: 1177px) {
  #mockup-1 {
    height: 120%;
  }
}
.section-title {
  background: linear-gradient(90deg, #aacff3 0%, #25315c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.background-pattern {
  background-color: rgba(230, 230, 247, 0);
  background-image: radial-gradient(
    #ffffff 0.65px,
    rgba(230, 230, 247, 0) 0.65px
  );
  background-size: 13px 13px;
}
.carousel__slide--active > article {
  transform: scale(1.1);
  margin-left: 1rem;
  margin-right: 1rem;
  transition: transform ease-in-out 0.2s;
}

.carousel__pagination {
}
.carousel__pagination-item {
}
.carousel__pagination-button {
  height: 10px;
  background-color: rgb(194, 195, 199);
}
.carousel__pagination-button--active {
  background-color: rgb(31, 41, 55);
}
.footer {
  background: linear-gradient(
    0deg,
    rgba(153, 195, 254, 1) 0%,
    rgba(153, 195, 254, 0) 100%
  );
}
.glass {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
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
