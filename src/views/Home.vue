<template>
  <div
    key="Home"
    class="flex flex-col min-h-screen h-full w-full justify-start"
  >
    <header
      id="header"
      class="flex justify-between flex-col pt-16 flex-grow sm:mx-10 sm:mt-10 sm:rounded-3xl sm:bg-center text-gray-200 bg-gray-700"
    >
      <div class="px-12 flex flex-col items-start">
        <h1
          data-testid="title"
          class="text-2xl lg:text-3xl w-full md:w-9/12 font-bold text-left italic"
        >
          BIBLOS App
        </h1>
        <h2
          data-testid="sub-title"
          class="text-4xl lg:text-6xl w-full max-w-xl lg:max-w-2xl font-bold text-left mt-2 leading-11"
        >
          Aumente seu conhecimento Bíblico!
        </h2>
        <p
          data-testid="description-title"
          class="text-gray-300 w-full max-w-xl md:w-9/12 md:text-2xl text-l font-normal text-left mt-7 leading-5 m:leading-8"
        >
          Aprenda textos e eventos bíblicos que irão abençoar profundamente a
          sua vida.
        </p>
        <button
          class="gradient-0 rounded-sm shadow-orange-lg px-5 py-2 flex-grow-0 mt-10 text-xl"
        >
          Aprenda mais sobre a Bíblia!
        </button>
      </div>
    </header>
    <section class="flex flex-row w-full justify-center ">
      <div id="cards" class="overflow-hidden py-5 px-8 rounded-2xl mx-3 mb-3">
        <section
          class="w-full overflow-auto whitespace-nowrap flex flex-row pl-4 pb-4 mt-3"
        >
          <router-link
            v-for="(game, index) in games"
            :key="game"
            class="card-link outline-none"
            :to="game.route"
          >
            <div
              :class="
                `card ${!game.active &&
                  'opacity-60'} gradient-${index} flex flex-col justify-between flex-shrink-0 w-40 h-48 mr-4 rounded-xl fold shadow-orange-lg`
              "
            >
              <header
                class="w-full pt-5 px-3 flex flex-col items-start text-left whitespace-pre-wrap"
              >
                <span class="font-extrabold text-lg text-white leading-5">
                  {{ game.title }}
                </span>
                <span class="text-sm text-white leading-4 mt-2">
                  {{ game.subtitle }}
                </span>
              </header>
              <footer v-if="game.active" class="w-full flex">
                <button
                  class="shadow-lg w-full h-10 m-3 rounded-md bg-white bg-opacity-30"
                >
                  <span class="font-bold text-sm text-white">Jogar</span>
                </button>
              </footer>
            </div>
          </router-link>
        </section>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const games = ref([
      {
        title: 'Novo Testamento',
        subtitle: 'Acerte os textos bíblicos e siga jogando!',
        route: '/multipla-escolha',
        active: true,
      },
      {
        title: 'Antigo Testamento',
        subtitle: 'Em breve',
        route: '/',
        active: false,
      },
      {
        title: 'Perguntas Bíblicas',
        subtitle: 'Em breve',
        route: '/',
        active: false,
      },
    ])

    return {
      games,
    }
  },
})
</script>

<style lang="postcss" scoped>
#header {
  background-repeat: no-repeat;
  background-image: url(../assets/background.png);
  background-size: cover;
  background-position: 35% 10%;
  height: calc(100vh - 110px);
}
#cards {
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}
.card {
  width: calc(50vw - 3rem);
  max-width: 10rem;
  min-width: 8rem;
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
