<template>
  <div class="relative overflow-hidden">
    <!-- Slides -->
    <div class="relative">
      <div 
        v-for="(_, index) in 5" 
        :key="index"
        class="w-full"
        :class="{ 'absolute top-0 left-0': index !== currentSlide }"
        :ref="el => slideRefs[index] = el"
      >
        <img 
          :src="`/images/slider/1920/Slider-${index + 1}.jpg`" 
          :alt="`Slide ${index + 1}`"
          class="w-full"
        >
      </div>
    </div>

    <!-- Navigation Arrows -->
    <div class="flex justify-between absolute top-1/2 -translate-y-1/2 inset-x-4">
      <button 
        @click="prevSlide" 
        class="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        @click="nextSlide" 
        class="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const currentSlide = ref(0)
const slideRefs = ref([])
let autoplayInterval

const animateSlide = (from, to) => {
  // Fade out current slide
  gsap.to(slideRefs.value[from], {
    opacity: 0,
    x: from < to ? '-100%' : '100%',
    duration: 0.8,
    ease: 'power2.inOut'
  })

  // Reset and fade in new slide
  gsap.fromTo(slideRefs.value[to],
    {
      opacity: 0,
      x: from < to ? '100%' : '-100%'
    },
    {
      opacity: 1,
      x: '0%',
      duration: 0.8,
      ease: 'power2.inOut'
    }
  )
}

const nextSlide = () => {
  const from = currentSlide.value
  currentSlide.value = (currentSlide.value + 1) % 5
  animateSlide(from, currentSlide.value)
}

const prevSlide = () => {
  const from = currentSlide.value
  currentSlide.value = (currentSlide.value - 1 + 5) % 5
  animateSlide(from, currentSlide.value)
}

const startAutoplay = () => {
  autoplayInterval = setInterval(nextSlide, 5000)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
}

onMounted(() => {
  // Initialize all slides
  slideRefs.value.forEach((slide, index) => {
    if (index !== currentSlide.value) {
      gsap.set(slide, { opacity: 0, x: '100%' })
    }
  })
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.8s ease;
}
</style>
