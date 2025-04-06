<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-secondary/80 backdrop-blur-sm">
    <div class="container mx-auto px-4 py-6">
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold text-white">PG SLOT VEGAS</NuxtLink>
        <div class="space-x-8">
          <NuxtLink to="/" class="text-white hover:text-btn-start transition-colors">Home</NuxtLink>
          <NuxtLink to="/games" class="text-white hover:text-btn-start transition-colors">Games</NuxtLink>
          <NuxtLink to="/about" class="text-white hover:text-btn-start transition-colors">About</NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  // Initialize GSAP animations
  gsap.from('nav', {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  })
})
</script>
