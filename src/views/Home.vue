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
      <div
        id="banner-content-container"
        class="w-full h-full flex items-center relative"
      >
        <div
          class="px-10 lg:px-20 flex flex-col text-center lg:text-left items-center lg:items-start w-full"
        >
          <logo id="mobile-logo" class="block sm:hidden mb-10 scale-125" />
          <h1
            data-testid="title"
            class="text-4xl lg:text-5xl w-full max-w-xl xl:max-w-2xl font-bold leading-11"
          >
            Como conhecer melhor a Bíblia?
          </h1>
          <p
            data-testid="description-title"
            class="text-gray-700 w-full max-w-xl md:w-9/12 text-xl font-normal mt-7 leading-5 m:leading-8"
          >
            Memorize textos, referências e eventos bíblicos que irão abençoar
            profundamente a sua vida.
          </p>
          <button
            class="bg-gray-800 text-gray-200 text-md font-bold rounded-md px-5 py-2 flex-grow-0 mt-10"
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
      class="flex md:flex-row flex-col items-center justify-center w-full mt-20 px-10"
    >
      <img
        id="mockup-2"
        class="relative w-60"
        src="@/assets/iphone.png"
        alt="iphone mockup"
      />
      <article
        class="flex flex-col text-center md:text-left items-center md:items-start justify-center max-w-xl md:ml-10 mt-10 md:mt-0"
      >
        <h2 class="section-title font-bold text-3xl w-auto">
          Compartilhe seus resultados
        </h2>
        <p class=" text-md mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          voluptatibus magni deserunt optio, doloremque obcaecati soluta omnis
          quaerat illo facilis, ut ullam quidem ipsum maiores eaque quam dicta
          laboriosam? Assumenda.
        </p>
        <button
          class="bg-gray-800 text-gray-200 text-md font-bold rounded-md px-5 py-2 flex-grow-0 mt-5"
        >
          Aprenda mais sobre a Bíblia!
        </button>
      </article>
    </section>

    <section id="challenges" class=" mt-36">
      <h2 class="section-title font-bold text-3xl w-auto">
        Desafios disponíveis
      </h2>
      <section class="flex flex-row w-full">
        <div
          id="cards"
          class="flex flex-wrap flex-row justify-center py-5 mt-5 lg:px-20 mx-5 mb-3 w-full"
        >
          <router-link
            v-for="(game, index) in games"
            :key="game"
            :class="
              `w-full sm:w-60 flex-grow-0 card-link outline-none card ${!game.active &&
                'opacity-50'} gradient-${index} flex flex-col justify-between h-48 mx-5 mb-10 rounded-sm shadow-orange-lg`
            "
            :to="game.route"
          >
            <header
              class="w-full pt-5 px-3 flex flex-col items-start text-left whitespace-pre-wrap"
            >
              <span class="font-extrabold text-xl text-white leading-5">
                {{ game.title }}
              </span>
              <span class="text-md text-white leading-4 mt-2">
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
          </router-link>
        </div>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Logo from '@/components/Icons/Logo.vue'

export default defineComponent({
  components: { Logo },
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
  transform: rotate(-8deg);
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
#banner-content-container {
  background-color: rgba(230, 230, 247, 0);
  background-image: radial-gradient(
    #ffffff 0.65px,
    rgba(230, 230, 247, 0) 0.65px
  );
  background-size: 13px 13px;
}
.card {
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
