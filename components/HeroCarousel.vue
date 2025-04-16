<template>
  <div class="hero-carousel">
    <div class="relative overflow-hidden rounded-lg">
      <div class="relative">
        <div v-for="game in games" 
           :key="game.id" 
           class="transition-opacity duration-500"
           :class="{ 'block': currentPage === game.id - 1, 'hidden': currentPage !== game.id - 1 }">
          <a :href="game.buttonLink" class="block">
            <img :src="game.image" :alt="game.name" class="w-full h-auto rounded-lg">
          </a>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-4 gap-2">
      <button 
        v-for="(_, index) in Math.ceil(games.length / gamesPerPage)" 
        :key="index"
        @click="currentPage = index"
        class="w-3 h-3 rounded-full transition-all duration-300"
        :class="currentPage === index ? 'bg-[#fbd95d]' : 'bg-white/30 hover:bg-white/50'"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

const currentPage = ref(0)
const gamesPerPage = 1
const autoplayInterval = 5000 // 5 seconds per page

const games = ref([
  {
    id: 1,
    name: 'Fortune Tiger',
    image: '/images/games/1.png',
    buttonLink: '#'
  },
  {
    id: 2,
    name: 'Sweet Bonanza',
    image: '/images/games/2.png',
    buttonLink: '#'
  },
  {
    id: 3,
    name: 'Gates of Olympus',
    image: '/images/games/3.png',
    buttonLink: '#'
  },
  {
    id: 4,
    name: 'Wild West Gold',
    image: '/images/games/4.png',
    buttonLink: '#'
  },
  {
    id: 5,
    name: 'Starlight Princess',
    image: '/images/games/5.png',
    buttonLink: '#'
  },
  {
    id: 6,
    name: 'Sugar Rush',
    image: '/images/games/6.png',
    buttonLink: '#'
  }
])

const displayedGames = computed(() => {
  const start = currentPage.value * gamesPerPage
  return games.value.slice(start, start + gamesPerPage)
})

let autoplayTimer

const startAutoplay = () => {
  autoplayTimer = setInterval(() => {
    currentPage.value = (currentPage.value + 1) % Math.ceil(games.value.length / gamesPerPage)
  }, autoplayInterval)
}

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
  }
}

onMounted(() => {
  startAutoplay()
  
  // Animate games on first load
  gsap.from('.game-card', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power2.out'
  })
})

onBeforeUnmount(() => {
  stopAutoplay()
})
</script>

<style scoped>
.hero-carousel {
  background: transparent;
  padding: 1rem;
  border-radius: 1rem;
}
</style>
