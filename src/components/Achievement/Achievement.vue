<template>
  <div>
    <transition
      name="fade"
      mode="out-in"
    >
      <span v-if="show" id="achievement" class=" box-border pl-4 pr-4 shadow-md fixed flex flex-col justify-center items-stretch top-5 left-1/2 h-28 w-full max-w-md transform -translate-x-1/2 bg-white bg-opacity-80 rounded-md z-30">
        <span class="flex flex-row items-center w-full">
          <span v-if="icon" id="icon" class="flex-1 text-6xl text-center top-1 relative">{{icon}}</span>
          <span class="font-normal text-2xl italic text-center w-full">{{title}}</span>
        </span>

      </span>
    </transition>
  </div>

</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  name: 'achievements',
  props: {
    title: {
      type: String,
      required: true,
      default: '5 acertos consecutivos, muito bom!'
    },
    icon: {
      type: String,
    }
  },
  setup() {
    const show = ref<boolean>(false)

    setTimeout(() => show.value = true, 2000)

    return {
      show
    }
  }
})
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s cubic-bezier(0.42, 0, 0.02, 1.18);
  top: theme('spacing.5');
}

.fade-enter-from,
.fade-leave-to {
  top: -2rem;
  opacity: 0;
}
#achievement {
  width: calc(100% - theme('spacing.8'));
}
#icon{
    animation: spin 2s cubic-bezier(0.83,-0.47, 0.27, 1.07) infinite;
    display: block;
    min-width: 7rem;
}
@keyframes spin {
    0%{
       transform: rotateY(0deg);
    }
    100%{
        transform: rotateY(720deg);
    }
}
</style>
