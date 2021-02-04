<template>
  <div
    key="Home"
    class="flex flex-col min-h-screen h-full w-full max-w-md content-center justify-center"
  >
    <header class="flex flex-wrap pb-4 px-4">
      <h1 data-testid="title" class="text-xl font-bold text-left w-full italic">
        BIBLOS App
      </h1>
      <h2
        data-testid="sub-title"
        class="text-4xl font-bold text-left w-full mt-2 leading-9"
      >
        Aumente seu conhecimento Bíblico!
      </h2>
      <h2
        data-testid="description-title"
        class="text-lg font-normal text-left w-full mt-4 leading-6"
      >
        Aprenda textos e eventos bíblicos que irão abençoar profundamente a sua
        vida.
      </h2>
    </header>
    <div class="w-screen max-w-full overflow-hidden mt-10">
      <h2
        data-testid="description-title"
        class="text-lg font-semibold leading-6 text-left ml-4"
      >
        Escolha um desafio
      </h2>
      <section
        class="w-full overflow-auto whitespace-nowrap flex flex-row pl-4 pb-4 mt-3"
      >
        <router-link
          v-for="(game, index) in games"
          :key="game"
          class="card-link"
          :to="game.route"
        >
          <div
            :class="
              `card ${!game.active &&
                'opacity-30'} gradient-${index} flex flex-col justify-between flex-shrink-0 w-40 h-48 mr-4 rounded-xl fold shadow-orange-lg`
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
        <div class="flex-shrink-0 w-0.5 h-52"></div>
      </section>
    </div>
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
.card {
  width: calc(50vw - 3rem);
  max-width: 10rem;
  min-width: 8rem;
}
</style>
