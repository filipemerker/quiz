<template>
  <div
    class="flex flex-col min-h-screen h-full w-full max-w-md content-center justify-center"
  >
    <header class="w-full pb-4 flex flex-wrap px-4">
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
      <div
        class="w-full overflow-auto whitespace-nowrap flex flex-row pl-4 pb-4 mt-3"
      >
        <router-link
          v-for="game in games"
          :key="game"
          class="card-link"
          :to="game.route"
        >
          <div
            :class="
              `card ${!game.active &&
                'opacity-40'} flex flex-col justify-between flex-shrink-0 w-40 h-48 mr-4 rounded-xl shadow-orange-lg`
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
            <footer class="w-full flex">
              <button
                class="shadow-lg w-full h-10 m-3 rounded-md bg-white bg-opacity-30"
              >
                <span class="font-bold text-sm text-white">Jogar</span>
              </button>
            </footer>
          </div>
        </router-link>
        <div class="flex-shrink-0 w-0.5 h-52"></div>
      </div>
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
        subtitle: 'Acerte os textos bíblicos e siga jogando!',
        route: '/',
        active: true,
      },
      {
        title: 'Perguntas Bíblicas',
        subtitle: 'Em breve',
        route: '/',
        active: true,
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
  background-image: linear-gradient(
    135deg,
    #feae95 10%,
    #fb9089 50%,
    #fb7780 100%
  );
  box-shadow: 0 10px 18px -2px rgb(251 119 128 / 38%),
    0 2px 9px -2px rgb(254 171 147 / 50%);
  border-top-right-radius: 4rem;
}
.card-link:nth-child(2) .card {
  background-image: linear-gradient(
    135deg,
    #8798e7 10%,
    #717ce4 50%,
    #5355d3 100%
  );
  box-shadow: 0 10px 18px -2px rgb(92 95 220 / 38%),
    0 2px 9px -2px rgb(121 141 231 / 50%);
}
.card-link:nth-child(3) .card {
  background-image: linear-gradient(135deg, #34dfc8 10%, #4c83ff 100%);
  box-shadow: 0 10px 18px -2px rgb(76 131 255 / 38%),
    0 2px 9px -2px rgb(76 131 255 / 50%);
}
</style>
