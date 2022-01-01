<template>
  <section
    v-if="challenge"
    class="gradient-1 h-auto w-10/12 md:w-6/12 my-5 flex justify-between flex-col sm:bg-center rounded-3xl"
  >
    <div
      class="background-dotted-pattern w-full h-full py-10 flex items-center relative"
    >
      <div class="px-5 lg:px-20 flex flex-col text-center items-center w-full">
        <logo class="block mb-10 px-0" />
        <h1
          data-testid="title"
          class="text-2xl lg:text-4xl w-full max-w-xl xl:max-w-2xl font-bold leading-11"
        >
          Parabéns, você fez {{ challenge.experience }} pontos!
        </h1>
        <p
          data-testid="description-title"
          class="text-white w-full text-md sm:text-xl font-normal mt-5 m:leading-8"
        >
          Habite, ricamente, em vós a palavra de Cristo; instruí-vos e
          aconselhai-vos mutuamente em toda a sabedoria.
          <br />

          <strong>Colossenses 3:16</strong>
        </p>
        <div id="badge" class="text-6xl mt-10">🏆</div>

        <div class="flex w-full justify-around mt-10 font-bold underline">
          <a href="/">Voltar</a>
          <a href="javascript:history.back()">Jogar Novamente</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, Suspense } from 'vue'
import { useRoute } from 'vue-router'
import Logo from '@/components/Icons/Logo.vue'

import { challengeDataAPI } from '@/proxies/challengeData/challengeData'

export default defineComponent({
  name: 'SuccessCard',
  components: { Logo },
  async setup() {
    const {
      params: { id },
    } = useRoute()
    const challenge = ref(await challengeDataAPI.getChallengeData(id as string))

    return { challenge, Suspense }
  },
})
</script>
