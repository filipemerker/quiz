<template>
  <section
    v-if="challenge"
    class="challenge-card h-auto py-5 flex justify-between flex-col rounded-3xl"
  >
    <div
      class=" text-white flex flex-col text-center items-center justify-between w-full h-72 lg:h-96"
    >
      <logo class="logo flat block px-0" />
      <div>
        <h1 data-testid="title" class="lobster text-6xl w-full font-bold">
          {{ heading }}
        </h1>
        <p
          data-testid="description-title"
          class="montserrat font-normal w-full text-lg"
        >
          Colossenses 3:16
        </p>
      </div>
      <trophy class="relative -bottom-5 h-32 lg:h-40" />
    </div>
  </section>
  <div class="montserrat w-full text-2xl mt-10" v-html="message" />
  <div class="flex w-full justify-evenly mt-16 font-bold">
    <blue-button
      class="bg-blue-600 bg-opacity-80 pt-1.5 pb-2 flex-grow sm:flex-grow-0 mx-2 sm:px-10"
      @click="go(-1)"
    >
      Jogar Novamente
    </blue-button>
    <blue-button
      class=" bg-blue-600 bg-opacity-80 pt-1.5 pb-2 px-10 flex-grow sm:flex-grow-0 mx-2 sm:px-10"
      @click="push('/')"
    >
      Início
    </blue-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Suspense } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Logo from '@/components/Icons/Logo.vue'
import Trophy from '@/components/Icons/Trophy.vue'
import BlueButton from '@/components/Buttons/BlueButton.vue'

import { challengeDataAPI } from '@/proxies/challengeData/challengeData'

export default defineComponent({
  name: 'SuccessCard',
  components: { Logo, Trophy, BlueButton },
  async setup() {
    const { go, push } = useRouter()
    const {
      params: { id },
    } = useRoute()
    const challenge = ref(await challengeDataAPI.getChallengeData(id as string))

    const getHeadingGreeting = () => {
      if (challenge.value.experience >= 2000) return `Excelente!`
      if (challenge.value.experience >= 500) return `Parabéns!`
      if (challenge.value.experience < 500) return `Que pena`
    }

    const getMessage = () => {
      if (challenge.value.experience >= 2000)
        return `Você fez <strong>${challenge.value.experience}</strong> pontos. Impressionante!`
      if (challenge.value.experience >= 500)
        return `Você fez <strong>${challenge.value.experience}</strong> pontos.`
      if (challenge.value.experience < 500)
        return `Você fez apenas <strong>${challenge.value.experience}</strong> pontos.`
    }

    return {
      heading: getHeadingGreeting(),
      message: getMessage(),
      challenge,
      Suspense,
      go,
      push,
    }
  },
})
</script>

<style scoped>
.logo {
  transform: scale(0.75);
}
.challenge-card {
  width: 95%;
  max-width: 1000px;

  background: url('~@/assets/gradient.svg') no-repeat top center;
  background-size: 800px;
}

@media (min-width: 1024px) {
  .challenge-card {
    background-size: contain;
  }
}
</style>
