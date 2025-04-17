<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-[#ff98ba]">
    <div class="container mx-auto px-4 !py-6">
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold text-white">
          <img src="/pgto-logo.webp" alt="PG SLOT VEGAS Logo" class="w-48 h-auto">
        </NuxtLink>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8">
          <NuxtLink to="/" class="text-white hover:text-btn-start transition-colors">หน้าหลัก</NuxtLink>
          <NuxtLink to="/promotions" class="text-white hover:text-btn-start transition-colors">โปรโมชั่น</NuxtLink>
          <NuxtLink to="/demo" class="text-white hover:text-btn-start transition-colors">ทดลองเล่น</NuxtLink>
          <NuxtLink to="/reviews" class="text-white hover:text-btn-start transition-colors">รีวิวเกม</NuxtLink>
          <NuxtLink to="/contact" class="text-white hover:text-btn-start transition-colors">ติดต่อ</NuxtLink>
          <NuxtLink to="/login" class="text-white hover:text-btn-start transition-colors">เข้าสู่ระบบ</NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="toggleMenu" class="md:hidden relative z-50 w-10 h-10 flex items-center justify-center" aria-label="Toggle Menu">
          <div class="w-8 h-8 relative">
            <span class="absolute w-full h-[2px] bg-white transition-all duration-300 rounded-full" 
              :class="{ 'top-4 -rotate-45': isMenuOpen, 'top-1': !isMenuOpen }"></span>
            <span class="absolute w-full h-[2px] bg-white transition-opacity duration-300 rounded-full top-4" 
              :class="{ 'opacity-0': isMenuOpen }"></span>
            <span class="absolute w-full h-[2px] bg-white transition-all duration-300 rounded-full" 
              :class="{ 'top-4 rotate-45': isMenuOpen, 'top-7': !isMenuOpen }"></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div 
      class="fixed top-0 left-0 w-full h-screen bg-[#66364f]/95 backdrop-blur-sm transform transition-all duration-300 md:hidden flex items-center justify-center"
      :class="{ 'opacity-100 visible': isMenuOpen, 'opacity-0 invisible': !isMenuOpen }"
    >
      <div class="container mx-auto px-4 py-4">
        <div class="flex flex-col items-center space-y-6">
          <NuxtLink 
            v-for="item in menuItems" 
            :key="item.path" 
            :to="item.path" 
            class="text-white text-2xl font-light hover:text-[#fbd95d] transition-all"
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
  { name: 'หน้าหลัก', path: '/' },
  { name: 'โปรโมชั่น', path: '/promotions' },
  { name: 'ทดลองเล่น', path: '/demo' },
  { name: 'รีวิวเกม', path: '/reviews' },
  { name: 'ติดต่อ', path: '/contact' },
  { name: 'เข้าสู่ระบบ', path: '/login' },
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
