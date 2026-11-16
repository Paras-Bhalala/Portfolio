<template>
  <div class="dossier-shell">
    <!-- Film Grain Overlay -->
    <GrainOverlay />

    <!-- Tactical Crosshair Targeting Cursor (Client Only, Desktop Only) -->
    <ClientOnly>
      <CustomCursor />
    </ClientOnly>

    <!-- Main Navigation Header -->
    <AppHeader />

    <!-- Main Dossier Content -->
    <main id="main-content">
      <slot />
    </main>

    <!-- Dispatch & Comms Footer -->
    <AppFooter />
  </div>
</template>

<style>
/* Global shell styles */
.dossier-shell {
  min-height: 100vh;
  position: relative;
  background-color: var(--bg-primary);
  color: var(--ink-primary);
  display: flex;
  flex-direction: column;
}

#main-content {
  flex: 1;
}
</style>
