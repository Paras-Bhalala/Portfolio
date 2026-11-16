<script setup>
const props = defineProps({
  error: {
    type: Object,
    default: () => ({})
  }
})

const statusCode = computed(() => props.error?.statusCode || 404)
const statusMessage = computed(() => {
  if (props.error?.statusCode === 404) {
    return 'FILE NOT FOUND // TRANSMISSION LOST'
  }
  return props.error?.message || 'TACTICAL ANOMALY DETECTED'
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="dossier-shell error-page">
    <GrainOverlay />
    <div class="dossier-container error-content">
      <div class="error-badge font-mono">
        <span>SECURITY PROTOCOL // ERROR {{ statusCode }}</span>
      </div>
      <h1 class="error-code font-display">{{ statusCode }}</h1>
      <p class="error-message font-mono">{{ statusMessage }}</p>
      <div class="error-actions">
        <button type="button" class="tactical-btn" @click="handleError">
          <span>RETURN TO BASE</span>
          <span>→</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-primary);
  color: var(--ink-primary);
  text-align: center;
}

.error-content {
  padding: 4rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.error-badge {
  font-size: 0.875rem;
  letter-spacing: 0.15em;
  color: var(--ink-muted);
}

.error-code {
  font-size: clamp(4rem, 12vw, 8rem);
  line-height: 1;
  letter-spacing: -0.02em;
}

.error-message {
  font-size: 1rem;
  letter-spacing: 0.08em;
  color: var(--ink-secondary);
}

.error-actions {
  margin-top: 1rem;
}
</style>
