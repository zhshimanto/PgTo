<template>
  <footer class="text-white py-12 mt-auto w-full max-w-[640px] mx-auto">
    <div class="mx-auto px-4 w-full">
      <!-- Main Footer Content -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 mb-8">
        <!-- Logo Section -->
        <div class="w-48">
          <img src="/pgto-logo.webp" alt="PG SLOT VEGAS Logo" class="w-32 h-auto">
        </div>
        
        <!-- Copyright -->
        <div class="text-sm text-center md:text-right">
          <p>&copy; {{ new Date().getFullYear() }} PG SLOT VEGAS. All rights reserved.</p>
        </div>
      </div>

      <!-- Footer Links -->
      <div class="border-t border-white/10 pt-6">
        <div class="flex flex-wrap justify-center gap-8 text-sm">
          <NuxtLink to="/terms" class="hover:text-[#fbd95d] transition-colors">Terms & Conditions</NuxtLink>
          <NuxtLink to="/privacy" class="hover:text-[#fbd95d] transition-colors">Privacy Policy</NuxtLink>
          <NuxtLink to="/responsible-gaming" class="hover:text-[#fbd95d] transition-colors">Responsible Gaming</NuxtLink>
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
    opacity: 1,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: 'footer',
      start: 'top bottom',
      toggleActions: 'play none none reverse'
    }
  })
})
</script>
