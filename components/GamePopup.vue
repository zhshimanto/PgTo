<template>
  <div v-if="isOpen" class="game-popup">
    <div class="popup-overlay" @click="close"></div>
    <div class="popup-content">
      <button class="close-button" @click="close">×</button>
        <iframe 
        v-if="gameUrl"
        :src="gameUrl" 
          frameborder="0"
          allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          loading="lazy"
          referrerpolicy="no-referrer"
          class="game-iframe">
        </iframe>
      </div>
    </div>
</template>

<script>
export default {
  name: 'GamePopup',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    gameUrl: {
      type: String,
      default: ''
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.game-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
}

.popup-content {
  position: relative;
  width: 90%;
  height: 90%;
  max-width: 1200px;
  background: #000;
  border-radius: 10px;
  overflow: hidden;
  z-index: 1;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.3);
}

.iframe-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.game-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: #000;
}
</style>
