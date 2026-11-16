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
    class="fixed top-0 left-0 pointer-events-none z-[10000] flex items-center justify-center transition-[width,height,margin] duration-200 motion-reduce:hidden"
    :class="isHovering ? 'w-12 h-12 -mt-6 -ml-6' : 'w-8 h-8 -mt-4 -ml-4'"
    :style="{
      transform: `translate3d(${cursorX}px, ${cursorY}px, 0)`
    }"
    aria-hidden="true"
  >
    <!-- Targeting Crosshair Ring -->
    <div 
      class="absolute inset-0 rounded-full transition-all duration-200 animate-radar-rotate"
      :class="isHovering ? 'border border-solid border-accent-signal scale-115' : 'border border-dashed border-accent-phosphor'"
    ></div>
    
    <!-- Reticle Corner Ticks -->
    <div class="absolute -top-1 w-px h-1.5 bg-accent-phosphor"></div>
    <div class="absolute -bottom-1 w-px h-1.5 bg-accent-phosphor"></div>
    <div class="absolute -left-1 w-1.5 h-px bg-accent-phosphor"></div>
    <div class="absolute -right-1 w-1.5 h-px bg-accent-phosphor"></div>
    
    <!-- Central Dot -->
    <div 
      class="w-1 h-1 bg-accent-signal rounded-full transition-transform duration-200"
      :class="{ 'scale-150': isHovering }"
    ></div>

    <!-- HUD readout badge on hover -->
    <span v-if="targetLabel" class="absolute top-9 left-1/2 -translate-x-1/2 font-mono text-[0.625rem] tracking-[0.15em] bg-ink-primary text-ink-inverse px-1.5 py-0.5 rounded-[2px] whitespace-nowrap">
      {{ targetLabel }}
    </span>
  </div>
</template>
