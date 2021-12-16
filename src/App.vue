<template>
  <div
    class="flex text-gray-800 justify-center min-h-screen-inner h-full w-screen bg-gradient-to-t from-gray-100 to-gray-50"
  >
    <router-view v-slot="{ Component }">
      <transition
        :duration="{ enter: 500, leave: 800 }"
        name="fade"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
