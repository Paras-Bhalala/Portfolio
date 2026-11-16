<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: 'red' // 'red' | 'signal' | 'green'
  },
  angle: {
    type: Number,
    default: -3
  }
})
</script>

<template>
  <span 
    class="rubber-stamp" 
    :class="{
      'rubber-stamp--alt': variant === 'signal',
      'rubber-stamp--green': variant === 'green'
    }"
    :style="{ transform: `rotate(${angle}deg)` }"
  >
    {{ text }}
  </span>
</template>

<style scoped>
/* Inherits base .rubber-stamp from main.css */
</style>
