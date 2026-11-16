<template>
  <div class="fixed inset-0 w-screen h-screen pointer-events-none z-[9999] opacity-[var(--grain-opacity)] mix-blend-multiply dark:mix-blend-overlay overflow-hidden" aria-hidden="true">
    <svg class="w-full h-full absolute top-0 left-0 opacity-70" xmlns="http://www.w3.org/2000/svg">
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
