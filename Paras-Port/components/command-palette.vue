<script setup>
import { profile } from '~/data/portfolio'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const searchQuery = ref('')
const selectedIndex = ref(0)
const colorMode = useColorMode()
const copyStatus = ref('')

const commandItems = [
  { id: 'about', label: 'FILE 01 // PROFILE', desc: 'Cadet profile, bio, coordinates', category: 'NAVIGATION', action: () => jumpTo('#about') },
  { id: 'experience', label: 'FILE 02 // SERVICE RECORD', desc: '7Span active duty experience', category: 'NAVIGATION', action: () => jumpTo('#experience') },
  { id: 'skills', label: 'FILE 03 // ARSENAL', desc: 'Technical radar & weaponized skills', category: 'NAVIGATION', action: () => jumpTo('#skills') },
  { id: 'education', label: 'FILE 04 // TRAINING', desc: 'Sainik School, GLS Univ, awards', category: 'NAVIGATION', action: () => jumpTo('#education') },
  { id: 'projects', label: 'FILE 05 // MISSIONS', desc: 'Operation briefs: D2C Guru, Used Cars, Ani Help', category: 'NAVIGATION', action: () => jumpTo('#projects') },
  { id: 'theme', label: 'TOGGLE THEME', desc: 'Switch Light Paper / Night-Ops Phosphor', category: 'SYSTEM', action: () => toggleTheme() },
  { id: 'resume', label: 'DOWNLOAD RESUME (PDF)', desc: 'Open verified resume document', category: 'TRANSMISSION', action: () => openResume() },
  { id: 'email', label: 'COPY SECURE COMMS (EMAIL)', desc: 'parasbhalala04@gmail.com', category: 'TRANSMISSION', action: () => copyEmail() },
  { id: 'github', label: 'OPEN GITHUB RECON', desc: 'github.com/Paras-Bhalala', category: 'TRANSMISSION', action: () => openExternal(profile.socials[1].url) },
  { id: 'linkedin', label: 'OPEN LINKEDIN INTEL', desc: 'linkedin.com/in/paras-bhalala', category: 'TRANSMISSION', action: () => openExternal(profile.socials[0].url) }
]

const filteredItems = computed(() => {
  if (!searchQuery.value.trim()) return commandItems
  const q = searchQuery.value.toLowerCase()
  return commandItems.filter(item => 
    item.label.toLowerCase().includes(q) || 
    item.desc.toLowerCase().includes(q) ||
    item.category.toLowerCase().includes(q)
  )
})

const jumpTo = (selector) => {
  emit('close')
  const el = document.querySelector(selector)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  emit('close')
}

const openResume = () => {
  emit('close')
  window.open(profile.resumeUrl, '_blank')
}

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(profile.socials[2].address)
    copyStatus.value = 'COMMS COPIED'
    setTimeout(() => {
      copyStatus.value = ''
      emit('close')
    }, 900)
  } catch {
    window.location.href = profile.socials[2].url
    emit('close')
  }
}

const openExternal = (url) => {
  emit('close')
  window.open(url, '_blank')
}

const handleKeyDown = (e) => {
  if (!props.isOpen) return

  if (e.key === 'ArrowDown') {
    e.preventDefault()
    selectedIndex.value = (selectedIndex.value + 1) % filteredItems.value.length
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    selectedIndex.value = (selectedIndex.value - 1 + filteredItems.value.length) % filteredItems.value.length
  } else if (e.key === 'Enter') {
    e.preventDefault()
    const active = filteredItems.value[selectedIndex.value]
    if (active) active.action()
  } else if (e.key === 'Escape') {
    emit('close')
  }
}

watch(() => props.isOpen, (open) => {
  if (open) {
    searchQuery.value = ''
    selectedIndex.value = 0
    nextTick(() => {
      const input = document.getElementById('palette-input')
      if (input) input.focus()
    })
  }
})

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleKeyDown)
  }
})
</script>

<template>
  <Teleport to="body">
    <div 
      v-if="isOpen" 
      class="command-palette-backdrop"
      @click.self="emit('close')"
      role="dialog"
      aria-modal="true"
      aria-label="Tactical Command Palette"
    >
      <div class="command-palette-modal tactical-frame">
        <!-- Header Strip -->
        <div class="palette-header">
          <div class="palette-telemetry">
            <span class="palette-indicator"></span>
            <span>TACTICAL HUD // COMMAND PALETTE</span>
          </div>
          <span class="palette-esc">ESC TO ABORT</span>
        </div>

        <!-- Input Bar -->
        <div class="palette-input-wrap">
          <span class="palette-prompt">></span>
          <input 
            id="palette-input"
            v-model="searchQuery"
            type="text"
            placeholder="TYPE COMMAND OR DIRECTORY (e.g. MISSIONS, THEME)..."
            autocomplete="off"
            spellcheck="false"
            class="palette-input"
          />
        </div>

        <div v-if="copyStatus" class="palette-alert">
          {{ copyStatus }}
        </div>

        <!-- Command List -->
        <div class="palette-list" role="listbox">
          <div 
            v-for="(item, index) in filteredItems" 
            :key="item.id"
            class="palette-item"
            :class="{ 'palette-item--active': index === selectedIndex }"
            role="option"
            :aria-selected="index === selectedIndex"
            @click="item.action"
            @mouseenter="selectedIndex = index"
          >
            <div class="palette-item__info">
              <span class="palette-item__category">[{{ item.category }}]</span>
              <span class="palette-item__label">{{ item.label }}</span>
            </div>
            <span class="palette-item__desc">{{ item.desc }}</span>
          </div>

          <div v-if="filteredItems.length === 0" class="palette-empty">
            NO CADET PROTOCOLS MATCHING QUERY
          </div>
        </div>

        <!-- Footer -->
        <div class="palette-footer">
          <span>↑↓ NAVIGATE</span>
          <span>↵ EXECUTE</span>
          <span>CTRL+K TOGGLE</span>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.command-palette-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(11, 13, 10, 0.75);
  backdrop-filter: blur(8px);
  z-index: 11000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 10vh 1.5rem 2rem;
  animation: fadeIn 0.15s ease-out;
}

.command-palette-modal {
  width: 100%;
  max-width: 680px;
  background-color: var(--bg-surface-elevated);
  border: 1px solid var(--accent-phosphor);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px var(--border-strong);
  padding: 0;
  overflow: hidden;
}

.palette-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.25rem;
  background-color: var(--ink-primary);
  color: var(--ink-inverse);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
}

.palette-telemetry {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.palette-indicator {
  width: 8px;
  height: 8px;
  background-color: var(--accent-signal);
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

.palette-esc {
  opacity: 0.6;
  font-size: 0.6875rem;
}

.palette-input-wrap {
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--border-subtle);
  background-color: var(--bg-surface);
  gap: 0.75rem;
}

.palette-prompt {
  font-family: var(--font-mono);
  font-weight: 700;
  color: var(--accent-signal);
  font-size: 1.25rem;
}

.palette-input {
  flex: 1;
  background: transparent;
  border: none;
  font-family: var(--font-mono);
  font-size: 0.9375rem;
  color: var(--ink-primary);
  outline: none;
  letter-spacing: 0.05em;
}

.palette-input::placeholder {
  color: var(--ink-muted);
}

.palette-alert {
  padding: 0.5rem 1.25rem;
  background-color: var(--accent-signal);
  color: #FFFFFF;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  font-weight: 700;
}

.palette-list {
  max-height: 380px;
  overflow-y: auto;
  padding: 0.5rem 0;
}

.palette-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.25rem;
  cursor: pointer;
  border-left: 3px solid transparent;
  transition: all 0.12s ease;
}

.palette-item--active {
  background-color: var(--bg-surface);
  border-left-color: var(--accent-signal);
}

.palette-item__info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.palette-item__category {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  color: var(--accent-phosphor);
}

.palette-item__label {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--ink-primary);
}

.palette-item__desc {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--ink-muted);
}

.palette-empty {
  padding: 2.5rem;
  text-align: center;
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  color: var(--ink-muted);
  letter-spacing: 0.1em;
}

.palette-footer {
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
  padding: 0.625rem 1.25rem;
  background-color: var(--bg-surface);
  border-top: 1px solid var(--border-subtle);
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  color: var(--ink-muted);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
</style>
