<template>
  <div class="grain-overlay" aria-hidden="true">
    <svg class="grain-overlay__svg" xmlns="http://www.w3.org/2000/svg">
      <filter id="noise-filter">
        <feTurbulence 
          type="fractalNoise" 
          baseFrequency="0.8" 
          numOctaves="3" 
          stitchTiles="stitch" 
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise-filter)" />
    </svg>
  </div>
</template>

<style scoped>
.grain-overlay {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  opacity: var(--grain-opacity);
  mix-blend-mode: multiply;
  overflow: hidden;
}

.dark .grain-overlay {
  mix-blend-mode: overlay;
}

.grain-overlay__svg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
