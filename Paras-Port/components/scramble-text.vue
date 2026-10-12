<script setup>
import { useScramble } from '~/composables/use-scramble'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  as: {
    type: String,
    default: 'span'
  },
  triggerOnHover: {
    type: Boolean,
    default: true
  },
  duration: {
    type: Number,
    default: 900
  },
  immediate: {
    type: Boolean,
    default: false
  }
})

const displayText = ref(props.text)
const { scramble } = useScramble()
let cleanup = null

const triggerScramble = () => {
  if (cleanup) cleanup()
  cleanup = scramble(props.text, (val) => {
    displayText.value = val
  }, props.duration)
}

watch(() => props.text, (newVal) => {
  displayText.value = newVal
  if (props.immediate) {
    triggerScramble()
  }
})

onMounted(() => {
  if (props.immediate) {
    triggerScramble()
  }
})

onBeforeUnmount(() => {
  if (cleanup) cleanup()
})
</script>

<template>
  <component 
    :is="as" 
    class="scramble-text"
    @mouseenter="triggerOnHover ? triggerScramble() : null"
  >
    {{ displayText }}
  </component>
</template>

<style scoped>
.scramble-text {
  display: inline-block;
  will-change: contents;
}
</style>
