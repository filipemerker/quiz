<template>
  <div
    class="flex justify-center min-h-screen h-full w-screen bg-gradient-to-t from-gray-100 to-gray-50"
  >
    <router-view v-slot="{ Component }">
      <transition
        enter-active-class="transition-all duration-600 ease-in-out"
        leave-active-class="transition-all duration-100 ease-in-out"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
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
  color: rgb(40 38 75);
}
</style>
