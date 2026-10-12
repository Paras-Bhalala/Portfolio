<script setup>
const isTouch = ref(true)
const isVisible = ref(false)
const isHovering = ref(false)
const targetLabel = ref('')
const posX = ref(-100)
const posY = ref(-100)
const cursorX = ref(-100)
const cursorY = ref(-100)

let rafId = null

const handleMouseMove = (e) => {
  posX.value = e.clientX
  posY.value = e.clientY
  isVisible.value = true

  // Check target element
  const target = e.target.closest('a, button, [role="button"], input, .tactical-btn, .clickable')
  if (target) {
    isHovering.value = true
    targetLabel.value = target.getAttribute('data-cursor-label') || 'ENGAGE'
  } else {
    isHovering.value = false
    targetLabel.value = ''
  }
}

const handleMouseLeave = () => {
  isVisible.value = false
}

const updateCursorPosition = () => {
  // Smooth spring lerp
  const speed = 0.22
  cursorX.value += (posX.value - cursorX.value) * speed
  cursorY.value += (posY.value - cursorY.value) * speed

  rafId = requestAnimationFrame(updateCursorPosition)
}

onMounted(() => {
  if (window.matchMedia('(pointer: coarse)').matches) {
    isTouch.value = true
    return
  }

  isTouch.value = false
  window.addEventListener('mousemove', handleMouseMove, { passive: true })
  document.body.addEventListener('mouseleave', handleMouseLeave)
  rafId = requestAnimationFrame(updateCursorPosition)
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('mousemove', handleMouseMove)
    document.body.removeEventListener('mouseleave', handleMouseLeave)
  }
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<template>
  <div 
    v-if="!isTouch && isVisible" 
    class="custom-cursor"
    :class="{ 'custom-cursor--hover': isHovering }"
    :style="{
      transform: `translate3d(${cursorX}px, ${cursorY}px, 0)`
    }"
    aria-hidden="true"
  >
    <!-- Targeting Crosshair Ring -->
    <div class="custom-cursor__ring"></div>
    
    <!-- Reticle Corner Ticks -->
    <div class="custom-cursor__cross custom-cursor__cross--top"></div>
    <div class="custom-cursor__cross custom-cursor__cross--bottom"></div>
    <div class="custom-cursor__cross custom-cursor__cross--left"></div>
    <div class="custom-cursor__cross custom-cursor__cross--right"></div>
    
    <!-- Central Dot -->
    <div class="custom-cursor__dot"></div>

    <!-- HUD readout badge on hover -->
    <span v-if="targetLabel" class="custom-cursor__label">
      {{ targetLabel }}
    </span>
  </div>
</template>

<style scoped>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  margin-top: -16px;
  margin-left: -16px;
  pointer-events: none;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.2s ease, height 0.2s ease, margin 0.2s ease;
}

.custom-cursor__ring {
  position: absolute;
  inset: 0;
  border: 1px dashed var(--accent-phosphor);
  border-radius: 50%;
  transition: transform 0.2s ease, border-color 0.2s ease;
  animation: radarRotate 12s linear infinite;
}

.custom-cursor__dot {
  width: 4px;
  height: 4px;
  background-color: var(--accent-signal);
  border-radius: 50%;
}

.custom-cursor__cross {
  position: absolute;
  background-color: var(--accent-phosphor);
}

.custom-cursor__cross--top {
  top: -4px;
  width: 1px;
  height: 6px;
}

.custom-cursor__cross--bottom {
  bottom: -4px;
  width: 1px;
  height: 6px;
}

.custom-cursor__cross--left {
  left: -4px;
  width: 6px;
  height: 1px;
}

.custom-cursor__cross--right {
  right: -4px;
  width: 6px;
  height: 1px;
}

.custom-cursor__label {
  position: absolute;
  top: 36px;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-mono);
  font-size: 0.625rem;
  letter-spacing: 0.15em;
  background-color: var(--ink-primary);
  color: var(--ink-inverse);
  padding: 2px 6px;
  border-radius: 2px;
  white-space: nowrap;
}

/* Hovering active element */
.custom-cursor--hover {
  width: 48px;
  height: 48px;
  margin-top: -24px;
  margin-left: -24px;
}

.custom-cursor--hover .custom-cursor__ring {
  border-style: solid;
  border-color: var(--accent-signal);
  transform: scale(1.15);
}

.custom-cursor--hover .custom-cursor__dot {
  transform: scale(1.5);
}

@keyframes radarRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .custom-cursor {
    display: none !important;
  }
}
</style>
