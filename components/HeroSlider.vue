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
        <div class="overflow-hidden">
          <img 
            :src="`/images/slider/1280/Slider-${index + 1}.jpg`" 
            :alt="`Slide ${index + 1}`"
            class="w-full transform-gpu"
          >
        </div>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <div class="hidden md:flex justify-between absolute top-1/2 -translate-y-1/2 inset-x-4">
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
let autoplayInterval = null
let isAnimating = false
const totalSlides = 5
const autoplayDelay = 5000
let direction = 1 // 1 for forward, -1 for backward

const animateSlide = (from, to) => {
  if (isAnimating) return
  isAnimating = true

  // Determine direction based on slide numbers
  const moveForward = (to > from && to - from === 1) || (from === totalSlides - 1 && to === 0)
  const moveDirection = moveForward ? 1 : -1

  // Create timeline for smoother animations
  const tl = gsap.timeline({
    onComplete: () => {
      isAnimating = false
    }
  })

  // Fade out current slide with effects
  tl.to(slideRefs.value[from], {
    opacity: 0,
    scale: 0.85,
    x: moveDirection === 1 ? '-100%' : '100%',
    rotationY: moveDirection === 1 ? -15 : 15,
    filter: 'brightness(0.7) blur(5px)',
    duration: 0.8,
    ease: 'power2.inOut'
  })

  // Animate current slide's image
  tl.to(slideRefs.value[from].querySelector('img'), {
    scale: 1.1,
    filter: 'brightness(0.7)',
    duration: 0.8,
    ease: 'power2.inOut'
  }, "-=0.8")

  // Prepare next slide
  gsap.set(slideRefs.value[to], {
    opacity: 0,
    scale: 1.15,
    x: moveDirection === 1 ? '100%' : '-100%',
    rotationY: moveDirection === 1 ? 15 : -15,
    filter: 'brightness(0.7) blur(5px)',
    zIndex: 2
  })

  gsap.set(slideRefs.value[to].querySelector('img'), {
    scale: 1.2,
    filter: 'brightness(0.7)'
  })

  // Animate in new slide
  tl.fromTo(slideRefs.value[to],
    {
      opacity: 0,
      scale: 1.15,
      x: moveDirection === 1 ? '100%' : '-100%',
      rotationY: moveDirection === 1 ? 15 : -15,
      filter: 'brightness(0.7) blur(5px)'
    },
    {
      opacity: 1,
      scale: 1,
      x: '0%',
      rotationY: 0,
      filter: 'brightness(1) blur(0px)',
      duration: 0.8,
      ease: 'power2.inOut'
    },
    "-=0.8"
  )

  // Animate new slide's image
  tl.to(slideRefs.value[to].querySelector('img'), {
    scale: 1,
    filter: 'brightness(1)',
    duration: 0.8,
    ease: 'power2.inOut'
  }, "-=0.8")
}

const nextSlide = () => {
  if (isAnimating) return
  const from = currentSlide.value
  direction = 1
  currentSlide.value = (currentSlide.value + 1) % totalSlides
  animateSlide(from, currentSlide.value)
  resetAutoplay()
}

const prevSlide = () => {
  if (isAnimating) return
  const from = currentSlide.value
  direction = -1
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides
  animateSlide(from, currentSlide.value)
  resetAutoplay()
}

const startAutoplay = () => {
  if (!autoplayInterval) {
    autoplayInterval = setInterval(() => {
      if (!isAnimating) {
        const from = currentSlide.value
        if (direction === 1) {
          currentSlide.value = (currentSlide.value + 1) % totalSlides
        } else {
          currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides
        }
        animateSlide(from, currentSlide.value)
        
        // Change direction at edges
        if (currentSlide.value === totalSlides - 1) {
          direction = -1
        } else if (currentSlide.value === 0) {
          direction = 1
        }
      }
    }, autoplayDelay)
  }
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

const resetAutoplay = () => {
  stopAutoplay()
  startAutoplay()
}

onMounted(() => {
  // Initialize all slides with perspective for 3D effects
  gsap.set(slideRefs.value[0].parentElement, {
    perspective: 1000
  })
  
  slideRefs.value.forEach((slide, index) => {
    gsap.set(slide, { 
      opacity: 0,
      scale: 1.15,
      x: '100%',
      rotationY: 15,
      filter: 'brightness(0.7) blur(5px)'
    })
    gsap.set(slide.querySelector('img'), {
      scale: 1.2,
      filter: 'brightness(0.7)'
    })
  })

  // Animate first slide with enhanced effects
  const tl = gsap.timeline({
    onComplete: () => {
      startAutoplay()
    }
  })

  tl.fromTo(slideRefs.value[0],
    {
      opacity: 0,
      scale: 1.15,
      x: '100%',
      rotationY: 15,
      filter: 'brightness(0.7) blur(5px)'
    },
    {
      opacity: 1,
      scale: 1,
      x: '0%',
      rotationY: 0,
      filter: 'brightness(1) blur(0px)',
      duration: 0.8,
      ease: 'power2.inOut'
    }
  )

  tl.fromTo(slideRefs.value[0].querySelector('img'),
    {
      scale: 1.2,
      filter: 'brightness(0.7)'
    },
    {
      scale: 1,
      filter: 'brightness(1)',
      duration: 0.8,
      ease: 'power2.inOut'
    },
    "-=0.8"
  )
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

/* Add transform-style for 3D effects */
.relative {
  transform-style: preserve-3d;
}

/* Optimize performance */
img {
  backface-visibility: hidden;
  transform: translateZ(0);
  will-change: transform, filter;
}
</style>
