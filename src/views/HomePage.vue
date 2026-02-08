<template>
  <ion-page class="iframe-page">
    <ion-content :fullscreen="true" class="ion-no-padding">
      <div class="iframe-wrapper">
        <iframe
          ref="iframeRef"
          :src="iframeUrl"
          class="fullscreen-iframe"
          title="DripEmails"
          frameborder="0"
          allow="fullscreen; clipboard-read; clipboard-write"
          allowfullscreen
        />
        <div v-if="loading" class="loading-overlay">
          <div class="loading-content">
            <div class="loading-spinner" />
            <p class="loading-text">Loading DripEmails…</p>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { IonContent, IonPage } from '@ionic/vue'

const IFRAME_URL = 'https://dripemails.org/?agent=mobile'

const iframeRef = ref<HTMLIFrameElement | null>(null)
const iframeUrl = ref(IFRAME_URL)
const loading = ref(true)

onMounted(() => {
  const iframe = iframeRef.value
  if (iframe) {
    iframe.addEventListener('load', () => {
      loading.value = false
    })
  }
  setTimeout(() => {
    loading.value = false
  }, 3000)
})
</script>

<style scoped>
.iframe-page {
  --background: transparent;
}

.iframe-wrapper {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.fullscreen-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100%;
  min-width: 100%;
  border: none;
  display: block;
}

.loading-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, #0f0e17 0%, #1a1926 50%, #242235 100%);
  z-index: 10;
  transition: opacity 0.5s ease;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.loading-spinner {
  width: 48px;
  height: 48px;
  border: 4px solid rgba(129, 140, 248, 0.2);
  border-top-color: #818cf8;
  border-radius: 50%;
  animation: spin 0.9s linear infinite;
}

.loading-text {
  margin: 0;
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #e2e8f0;
  letter-spacing: 0.02em;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.ion-no-padding {
  --padding-top: 0;
  --padding-bottom: 0;
  --padding-start: 0;
  --padding-end: 0;
}
</style>
