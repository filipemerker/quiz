<template>
  <div class="my-10 px-10">
    <div>{{ title }}</div>
    <button
      v-for="alternative in question.alternatives"
      :key="alternative"
      class="mx-2 bg-green-400 rounded-md px-2"
      @click="onSelect(alternative, question.rightAlternative)"
    >
      {{ alternative }}
    </button>
  </div>
</template>

<script lang="ts">
import { MultipleAnswerQuestion } from '@/types/Quiz'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Content',
  props: {
    question: {
      type: Object as PropType<MultipleAnswerQuestion>,
      required: true,
    },
    onSelect: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    return {
      contextBefore: props.question.title[0],
      title: props.question.title[1],
      contextAfter: props.question.title[2],
    }
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
