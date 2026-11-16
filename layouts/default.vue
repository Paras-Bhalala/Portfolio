<template>
  <div class="min-h-screen relative bg-bg-primary text-ink-primary flex flex-col">
    <!-- Film Grain Overlay -->
    <GrainOverlay />

    <!-- Tactical Crosshair Targeting Cursor (Client Only, Desktop Only) -->
    <ClientOnly>
      <CustomCursor />
    </ClientOnly>

    <!-- Main Navigation Header -->
    <AppHeader />

    <!-- Main Dossier Content -->
    <main id="main-content" class="flex-1">
      <slot />
    </main>

    <!-- Dispatch & Comms Footer -->
    <AppFooter />
  </div>
</template>
