<template>
  <div class="site-wrapper">
    <div class="content-wrapper">
      <AppHeader />
      <main class="flex-grow">
        <NuxtPage />
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap');

html, body {
  font-family: 'Kanit', sans-serif;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  width: 100%;
  position: relative;
  max-width: 100vw;
}

.site-wrapper {
  min-height: 100vh;
  background-image: url('/images/background/background1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  max-width: 100vw;
}

.site-wrapper::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 146, 164, 0.3);
  z-index: 1;
  pointer-events: none;
}

.content-wrapper {
  position: relative;
  z-index: 2;
  overflow: hidden;
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
}

main {
  flex: 1 0 auto;
}

@media (max-width: 768px) {
  .site-wrapper {
    background-image: url('/images/background/background-mobile-1.jpg');
  }
}

/* Remove any existing background colors that might interfere */
.bg-primary, .bg-secondary {
  background-color: transparent !important;
}
</style>
