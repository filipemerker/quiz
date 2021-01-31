<template>
  <!-- nav -->
  <div class="flex items-center justify-between">
    <div class="flex items-center justify-center">
      <div
        class="flex items-center justify-center text-3xl font-bold text-true-gray-800"
      >
        <svg
          class="w-10 h-10 mr-1 text-blue-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
          ></path>
        </svg>
        Quiz Bíblico
      </div>
    </div>
  </div>
  <!-- /nav -->

  <!-- hero section -->
  <div class="lg:2/6 xl:w-2/4 mt-20 lg:mt-40 lg:ml-16 text-left">
    <div class="text-6xl font-semibold text-gray-900 leading-none">
      Conheça sua Bíblia
    </div>
    <div class="mt-6 text-xl font-light text-true-gray-500 antialiased">
      A better experience for yout attendees and less stress yout team.
    </div>
    <button
      class="mt-6 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out"
    >
      Download for Free
    </button>
  </div>

  <!-- /hero section -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Content',
  props: {
    msg: {
      type: String,
      default: `That's my quiz!`,
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
