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
  <div class="marquee-ticker" aria-hidden="true">
    <div 
      class="marquee-ticker__track"
      :class="{ 'marquee-ticker__track--reverse': reverse }"
    >
      <div 
        v-for="cycle in 4" 
        :key="cycle" 
        class="marquee-ticker__group"
      >
        <span 
          v-for="(item, index) in items" 
          :key="`${cycle}-${index}`" 
          class="marquee-ticker__item"
        >
          {{ item }}
          <span class="marquee-ticker__sep">✦</span>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee-ticker {
  width: 100%;
  overflow: hidden;
  background-color: var(--ink-primary);
  color: var(--ink-inverse);
  padding: 0.625rem 0;
  border-top: 1px solid var(--border-strong);
  user-select: none;
}

.marquee-ticker__track {
  display: flex;
  width: max-content;
  animation: marqueeScroll 32s linear infinite;
}

.marquee-ticker__track--reverse {
  animation-direction: reverse;
}

.marquee-ticker:hover .marquee-ticker__track {
  animation-play-state: paused;
}

.marquee-ticker__group {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.marquee-ticker__item {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  font-weight: 700;
  white-space: nowrap;
}

.marquee-ticker__sep {
  margin: 0 1.25rem;
  color: var(--accent-signal);
  font-size: 0.625rem;
}

@keyframes marqueeScroll {
  from { transform: translateX(0); }
  to { transform: translateX(-25%); }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-ticker__track {
    animation: none;
  }
}
</style>
