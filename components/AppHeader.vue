<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-[#ff98ba]">
    <div class="container mx-auto px-4 !py-6">
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold text-white">PG SLOT VEGAS</NuxtLink>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8">
          <NuxtLink to="/" class="text-white hover:text-btn-start transition-colors">Home</NuxtLink>
          <NuxtLink to="/promotions" class="text-white hover:text-btn-start transition-colors">Promotions</NuxtLink>
          <NuxtLink to="/about" class="text-white hover:text-btn-start transition-colors">About</NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="toggleMenu" class="md:hidden text-white p-2" aria-label="Toggle Menu">
          <div class="w-6 h-5 relative flex flex-col justify-between">
            <span class="w-full h-0.5 bg-white transition-all" :class="{ 'rotate-45 translate-y-2': isMenuOpen }"></span>
            <span class="w-full h-0.5 bg-white transition-all" :class="{ 'opacity-0': isMenuOpen }"></span>
            <span class="w-full h-0.5 bg-white transition-all" :class="{ '-rotate-45 -translate-y-2': isMenuOpen }"></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div 
      class="fixed top-[72px] left-0 w-full h-screen bg-[#66364f] transform transition-transform duration-300 md:hidden"
      :class="{ 'translate-x-0': isMenuOpen, 'translate-x-full': !isMenuOpen }"
    >
      <div class="container mx-auto px-4 py-4">
        <div class="flex flex-col space-y-3">
          <NuxtLink 
            v-for="item in menuItems" 
            :key="item.path" 
            :to="item.path" 
            class="text-white text-lg hover:text-btn-start transition-all py-2 border-b border-white/10"
            @click="closeMenu"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const isMenuOpen = ref(false)
const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Games', path: '/games' },
  { name: 'Promotions', path: '/promotions' },
  { name: 'About', path: '/about' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

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

<style scoped>
.container {
  height: 100%;
}
</style>
