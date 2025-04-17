<template>
  <div>
    <header class="fixed top-0 left-0 w-full z-50 bg-[#ff98ba]">
      <div class="container mx-auto px-4 !py-6">
        <div class="flex justify-between items-center">
          <NuxtLink to="/" class="text-2xl font-bold text-white">
            <img src="/pgto-logo.webp" alt="PG SLOT VEGAS Logo" class="w-48 h-auto">
          </NuxtLink>
          
          <!-- Desktop Menu -->
          <nav class="hidden md:flex space-x-8">
            <NuxtLink to="/" class="text-white hover:text-btn-start transition-colors">หน้าหลัก</NuxtLink>
            <NuxtLink to="/promotions" class="text-white hover:text-btn-start transition-colors">โปรโมชั่น</NuxtLink>
            <NuxtLink to="/demo" class="text-white hover:text-btn-start transition-colors">ทดลองเล่น</NuxtLink>
            <NuxtLink to="/reviews" class="text-white hover:text-btn-start transition-colors">รีวิวเกม</NuxtLink>
            <NuxtLink to="/contact" class="text-white hover:text-btn-start transition-colors">ติดต่อ</NuxtLink>
            <NuxtLink to="/login" class="text-white hover:text-btn-start transition-colors">เข้าสู่ระบบ</NuxtLink>
          </nav>

          <!-- Mobile Menu Button -->
          <button @click="toggleMenu" class="md:hidden relative z-50 w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg" aria-label="Toggle Menu">
            <div class="w-6 h-6 relative flex items-center">
              <span class="absolute w-full h-[4px] bg-white transition-all duration-300 left-0" 
                :class="{ 'top-[14px] -rotate-45': isMenuOpen, 'top-1': !isMenuOpen }"></span>
              <span class="absolute w-[60%] h-[4px] bg-white transition-opacity duration-300 left-0" 
                :class="{ 'opacity-0': isMenuOpen, 'top-[14px]': !isMenuOpen }"></span>
              <span class="absolute w-full h-[4px] bg-white transition-all duration-300 left-0" 
                :class="{ 'top-[14px] rotate-45': isMenuOpen, 'top-[22px]': !isMenuOpen }"></span>
            </div>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Menu Overlay -->
    <div
      class="fixed top-0 right-0 bottom-0 left-0 bg-black/60 z-40 pointer-events-none cursor-pointer transition-all duration-500 ease-in-out"
      :class="{ 'opacity-100 pointer-events-auto': isMenuOpen, 'opacity-0': !isMenuOpen }"
      @click="closeMenu"
    ></div>

    <!-- Mobile Menu -->
    <nav 
      class="fixed top-0 right-0 w-[300px] min-h-screen bg-[#ff98ba] border-l-[10px] border-white transform transition-all duration-500 ease-in-out z-50 md:hidden"
      :class="{ 'translate-x-0': isMenuOpen, 'translate-x-full': !isMenuOpen }"
    >
      <div class="pt-8 px-4">
        <!-- Mobile Menu Logo -->
        <div class="flex justify-center mb-12">
          <img src="/pgto-logo.webp" alt="PG SLOT VEGAS Logo" class="w-48 h-auto">
        </div>
        <div class="flex flex-col space-y-6">
          <NuxtLink 
            v-for="item in menuItems" 
            :key="item.path" 
            :to="item.path" 
            class="text-white text-xl font-light hover:text-[#fbd95d] transition-all border-b border-white/10 pb-4"
            @click="closeMenu"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </div>
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
