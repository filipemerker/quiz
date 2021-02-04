<template>
  <div
    class="flex flex-col min-h-screen h-full w-full max-w-md content-center justify-center"
  >
    <header class="w-full pb-4 flex flex-wrap px-4 border-b border-purple-600">
      <h1
        data-testid="title"
        class="text-gray-50 text-xl font-bold text-left w-full italic"
      >
        BIBLOS App
      </h1>
      <h2
        data-testid="sub-title"
        class="text-gray-50 text-4xl font-bold text-left w-full mt-2 leading-9"
      >
        Aumente seu conhecimento bíblico
      </h2>
      <h2
        data-testid="description-title"
        class="text-gray-50 text-lg font-light text-left w-full mt-4 leading-6"
      >
        Memorize textos e eventos bíblicos que irão abençoar profundamente a sua
        vida.
      </h2>
    </header>
    <div class="w-screen max-w-full overflow-hidden mt-7">
      <h2
        data-testid="description-title"
        class="text-gray-50 text-lg font-light text-left ml-4"
      >
        Confira os desafios disponíveis:
      </h2>
      <div
        class="w-full overflow-auto whitespace-nowrap flex flex-row pl-4 mt-2"
      >
        <router-link v-for="game in games" :key="game" :to="game.route">
          <div
            :class="
              `card ${!game.active &&
                'opacity-40'} flex flex-col justify-between flex-shrink-0 w-40 h-48 mr-3 rounded-lg shadow-lg`
            "
          >
            <header
              class="w-full pt-4 flex flex-col items-center whitespace-pre-wrap px-2"
            >
              <span class="font-bold text-md text-white leading-4">
                {{ game.title }}
              </span>
              <span
                class="font-bold text-xs text-purple-200 opacity-70 leading-4 mt-1"
              >
                {{ game.subtitle }}
              </span>
            </header>
            <footer class="w-full flex">
              <button
                class="shadow-md w-full h-10 m-3 rounded-md bg-white bg-opacity-30"
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
        subtitle: 'Recorde: 1203',
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
  width: calc(50vw - 30px);
  max-width: 10rem;
  background-image: linear-gradient(135deg, #5151e5 10%, #9708cc 100%);
}
</style>
