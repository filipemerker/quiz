<template>
  <div
    key="Success"
    class="flex flex-col min-h-screen h-full w-full justify-center items-center"
  >
    <section
      class="gradient-1 h-auto w-10/12 md:w-6/12 my-5 flex justify-between flex-col sm:bg-center rounded-3xl"
    >
      <div
        class="background-dotted-pattern w-full h-full py-10 flex items-center relative"
      >
        <div
          class="px-5 lg:px-20 flex flex-col text-center items-center w-full"
        >
          <logo class="block mb-14 px-0" />
          <h1
            data-testid="title"
            class="text-3xl lg:text-5xl w-full max-w-xl xl:max-w-2xl font-bold leading-11"
          >
            Parabéns, você fez {{ params.id }} pontos!
          </h1>
          <p
            data-testid="description-title"
            class="text-white w-full text-md sm:text-xl font-normal mt-7 m:leading-8"
          >
            Habite, ricamente, em vós a palavra de Cristo; instruí-vos e
            aconselhai-vos mutuamente em toda a sabedoria, louvando a Deus, com
            salmos, e hinos, e cânticos espirituais, com gratidão, em vosso
            coração.
            <br />
            <br />

            <strong>Colossenses 3:16</strong>
          </p>
          <div id="badge" class="text-8xl mt-14">🏆</div>

          <div class="flex w-full justify-around mt-10 font-bold">
            <a href="/">Voltar</a>
            <a href="javascript:history.back()">Jogar Novamente</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import Logo from '@/components/Icons/Logo.vue'

export default defineComponent({
  name: 'Success',
  components: { Logo },
  props: {},
  setup() {
    const { params } = useRoute()

    return { params }
  },
})
</script>
