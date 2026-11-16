<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [
      'FRONTEND ARCHITECTURE',
      'FLUTTER MOBILE',
      'PYTHON AI & ML',
      'SAINIK SCHOOL BALACHADI',
      'NCC CADET',
      'ACTIVE DUTY // 7SPAN'
    ]
  },
  reverse: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="w-full overflow-hidden bg-ink-primary text-ink-inverse py-2.5 border-t border-border-strong select-none" aria-hidden="true">
    <div 
      class="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none"
      :class="{ '[animation-direction:reverse]': reverse }"
    >
      <div 
        v-for="cycle in 4" 
        :key="cycle" 
        class="flex items-center shrink-0"
      >
        <span 
          v-for="(item, index) in items" 
          :key="`${cycle}-${index}`" 
          class="inline-flex items-center font-mono text-xs tracking-[0.2em] font-bold whitespace-nowrap"
        >
          {{ item }}
          <span class="mx-5 text-accent-signal text-[0.625rem]">✦</span>
        </span>
      </div>
    </div>
  </div>
</template>
