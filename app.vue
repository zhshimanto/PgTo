<template>
  <div class="min-h-screen bg-primary flex flex-col">
    <AppHeader />
    <main class="pt-24 flex-grow">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>
