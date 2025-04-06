<template>
  <footer class="bg-secondary text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 place-items-center text-center">
        <!-- About Section -->
        <div class="space-y-4 max-w-lg">
          <h3 class="text-xl font-bold text-white">PG SLOT VEGAS</h3>
          <p class="text-sm">Experience the thrill of premium slot games with the best online gaming experience.</p>
        </div>
      </div>
      <!-- Bottom Bar -->
      <div class="border-t border-primary/20 mt-8 pt-8 text-sm text-center">
        <p>&copy; {{ new Date().getFullYear() }} PG SLOT VEGAS. All rights reserved.</p>
        <div class="mt-4 space-x-4">
          <NuxtLink to="/terms" class="hover:text-btn-start transition-colors">Terms & Conditions</NuxtLink>
          <NuxtLink to="/privacy" class="hover:text-btn-start transition-colors">Privacy Policy</NuxtLink>
          <NuxtLink to="/responsible-gaming" class="hover:text-btn-start transition-colors">Responsible Gaming</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // Footer animation
  gsap.from('footer', {
    y: 50,
    opacity: 0,
    duration: 1
  })
})
</script>
