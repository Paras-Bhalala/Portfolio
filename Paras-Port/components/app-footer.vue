<script setup>
import { profile } from '~/data/portfolio'

const currentYear = new Date().getFullYear()

const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<template>
  <footer id="contact" class="app-footer">
    <div class="dossier-container">
      <!-- Top Dossier Meta -->
      <div class="app-footer__meta font-mono">
        <div class="footer-telemetry">
          <span class="telemetry-beacon"></span>
          <span>DISPATCH TERMINAL // SECURE TRANSMISSION CHANNEL</span>
        </div>
        <div class="footer-status">
          <span>STATUS: ALL CHANNELS ACTIVE</span>
        </div>
      </div>

      <!-- Giant Display Heading -->
      <div class="app-footer__headline">
        <h2 class="giant-connect font-display">
          LET'S CONNECT
        </h2>
        <!-- <p class="connect-subtext font-body">
          Open for engineering opportunities, frontend architecture, and mission-critical collaborations.
        </p> -->
        <p class="connect-subtext font-body">
          Open for technical discussions, frontend architecture, and mission-critical collaborations.
        </p>
      </div>

      <!-- Contact Dispatch Channels -->
      <div class="app-footer__channels">
        <a 
          :href="profile.socials[2].url"
          class="channel-card tactical-frame"
          data-cursor-label="EMAIL"
        >
          <div class="channel-card__top font-mono">
            <span class="channel-code">[COMM-01]</span>
            <span class="channel-type">DIRECT DISPATCH</span>
          </div>
          <span class="channel-val font-mono">{{ profile.socials[2].address }}</span>
          <span class="channel-arrow font-mono">TRANSMIT COMMS →</span>
        </a>

        <a 
          :href="profile.socials[0].url" 
          target="_blank"
          class="channel-card tactical-frame"
          data-cursor-label="LINKEDIN"
        >
          <div class="channel-card__top font-mono">
            <span class="channel-code">[LNKD-02]</span>
            <span class="channel-type">PROFESSIONAL INTEL</span>
          </div>
          <span class="channel-val font-mono">linkedin.com/in/paras-bhalala</span>
          <span class="channel-arrow font-mono">VIEW PROFILE →</span>
        </a>

        <a 
          :href="profile.socials[1].url" 
          target="_blank"
          class="channel-card tactical-frame"
          data-cursor-label="GITHUB"
        >
          <div class="channel-card__top font-mono">
            <span class="channel-code">[GTHB-03]</span>
            <span class="channel-type">CODE VAULT</span>
          </div>
          <span class="channel-val font-mono">github.com/Paras-Bhalala</span>
          <span class="channel-arrow font-mono">RECON REPOSITORIES →</span>
        </a>
      </div>

      <!-- Barcode Graphic & Return Navigation -->
      <div class="app-footer__barcode-strip">
        <div class="barcode-wrapper" aria-hidden="true">
          <svg class="barcode-svg" viewBox="0 0 520 70" xmlns="http://www.w3.org/2000/svg">
            <!-- Authentic tactical barcode pattern -->
            <rect x="0" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="8" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="14" y="0" width="6" height="60" fill="currentColor"/>
            <rect x="24" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="30" y="0" width="8" height="60" fill="currentColor"/>
            <rect x="42" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="48" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="56" y="0" width="6" height="60" fill="currentColor"/>
            <rect x="66" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="72" y="0" width="8" height="60" fill="currentColor"/>
            <rect x="84" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="92" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="98" y="0" width="6" height="60" fill="currentColor"/>
            <rect x="108" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="116" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="122" y="0" width="8" height="60" fill="currentColor"/>
            <rect x="134" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="140" y="0" width="6" height="60" fill="currentColor"/>
            <rect x="150" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="158" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="164" y="0" width="8" height="60" fill="currentColor"/>
            <rect x="176" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="184" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="190" y="0" width="6" height="60" fill="currentColor"/>
            <rect x="200" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="208" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="214" y="0" width="8" height="60" fill="currentColor"/>
            <rect x="226" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="232" y="0" width="6" height="60" fill="currentColor"/>
            <rect x="242" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="250" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="256" y="0" width="8" height="60" fill="currentColor"/>
            <rect x="268" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="276" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="282" y="0" width="6" height="60" fill="currentColor"/>
            <rect x="292" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="300" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="306" y="0" width="8" height="60" fill="currentColor"/>
            <rect x="318" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="324" y="0" width="6" height="60" fill="currentColor"/>
            <rect x="334" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="342" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="348" y="0" width="8" height="60" fill="currentColor"/>
            <rect x="360" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="368" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="374" y="0" width="6" height="60" fill="currentColor"/>
            <rect x="384" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="392" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="398" y="0" width="8" height="60" fill="currentColor"/>
            <rect x="410" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="416" y="0" width="6" height="60" fill="currentColor"/>
            <rect x="426" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="434" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="440" y="0" width="8" height="60" fill="currentColor"/>
            <rect x="452" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="460" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="466" y="0" width="6" height="60" fill="currentColor"/>
            <rect x="476" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="484" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="490" y="0" width="8" height="60" fill="currentColor"/>
            <rect x="502" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="510" y="0" width="6" height="60" fill="currentColor"/>
          </svg>
          <span class="barcode-serial font-mono">PB-2024-0089-010006 // CADET DOSSIER</span>
        </div>

        <button 
          type="button" 
          class="tactical-btn tactical-btn--ghost"
          data-cursor-label="TOP"
          @click="scrollToTop"
        >
          <span>RETURN TO APEX [↑]</span>
        </button>
      </div>

      <!-- Copyright Legal strip -->
      <div class="app-footer__bottom font-mono">
        <span>© {{ currentYear }} PARAS BHALALA. ALL RIGHTS RESERVED.</span>
        <span>LOCATION: AHMEDABAD, GUJARAT, IN [23.02°N 72.57°E]</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  position: relative;
  background-color: var(--bg-surface);
  border-top: 2px solid var(--ink-primary);
  padding: 4rem 0 2rem;
  overflow: hidden;
}

@media (min-width: 1024px) {
  .app-footer {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3.5rem 0 1.5rem;
    box-sizing: border-box;
  }
}

.app-footer__meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-size: 0.75rem;
  color: var(--ink-muted);
  border-bottom: 1px dashed var(--border-dash);
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}

.footer-telemetry {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.telemetry-beacon {
  width: 8px;
  height: 8px;
  background-color: var(--accent-signal);
  border-radius: 50%;
  box-shadow: 0 0 6px var(--accent-signal);
}

.app-footer__headline {
  margin-bottom: 2rem;
}

.giant-connect {
  font-size: clamp(3rem, 8vw, 7.5rem);
  line-height: 0.9;
  letter-spacing: -0.02em;
  color: var(--ink-primary);
  margin-bottom: 0.5rem;
}

.connect-subtext {
  font-size: clamp(1.1rem, 2vw, 1.45rem);
  color: var(--ink-secondary);
  max-width: 720px;
}

.app-footer__channels {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .app-footer__channels {
    grid-template-columns: repeat(3, 1fr);
  }
}

.channel-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  background-color: var(--bg-surface-elevated);
  text-decoration: none;
  min-height: 135px;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.channel-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-signal);
}

.channel-card__top {
  display: flex;
  justify-content: space-between;
  font-size: 0.6875rem;
  color: var(--ink-muted);
}

.channel-code {
  color: var(--accent-signal);
  font-weight: 700;
}

.channel-val {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--ink-primary);
  word-break: break-all;
  margin: 1rem 0;
}

.channel-arrow {
  font-size: 0.75rem;
  color: var(--accent-phosphor);
  font-weight: 700;
}

.channel-card:hover .channel-arrow {
  color: var(--accent-signal);
}

/* Barcode Strip */
.app-footer__barcode-strip {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  border-top: 1px dashed var(--border-dash);
  padding-top: 2rem;
  margin-bottom: 2rem;
}

.barcode-wrapper {
  color: var(--ink-primary);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.barcode-svg {
  height: 48px;
  max-width: 320px;
}

.barcode-serial {
  font-size: 0.6875rem;
  letter-spacing: 0.2em;
  color: var(--ink-muted);
}

.app-footer__bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.6875rem;
  color: var(--ink-muted);
  border-top: 1px solid var(--border-subtle);
  padding-top: 1.25rem;
}

@media (max-width: 640px) {
  .giant-connect {
    font-size: clamp(2.35rem, 11vw, 4rem);
  }

  .connect-subtext {
    font-size: 1rem;
  }

  .channel-card {
    padding: 1rem;
    min-height: auto;
    gap: 0.75rem;
  }

  .channel-val {
    margin: 0.4rem 0;
    font-size: 0.8125rem;
  }

  .app-footer__barcode-strip {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
    padding-top: 1.5rem;
  }

  .app-footer__barcode-strip .tactical-btn {
    width: 100%;
    justify-content: center;
  }

  .barcode-svg {
    max-width: 100%;
    height: 38px;
  }
}
</style>
