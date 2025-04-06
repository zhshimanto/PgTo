<template>
  <div>
    <!-- Hero Section -->
    <section class="min-h-screen relative flex items-center bg-primary">
      
      <div class="container mx-auto px-4 z-10">
        <div class="max-w-3xl">
          <h1 class="text-6xl font-bold mb-6 text-white" ref="heroTitle">Welcome to PG SLOT VEGAS</h1>
          <p class="text-xl mb-8 text-white/90" ref="heroText">Experience the thrill of premium slot games and Vegas-style gaming from anywhere in the world.</p>
          <NuxtLink to="/games" class="inline-block btn-gradient px-8 py-4 rounded-full text-lg font-bold text-black hover:scale-105 transition-transform duration-300" ref="heroButton">
            Explore Games
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Featured Games Section -->
    <section class="py-20 bg-primary">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mb-12 text-center text-white" ref="featuredTitle">Featured Slots</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref="gameGrid">
          <div v-for="game in featuredGames" :key="game.id" class="game-card bg-secondary rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img :src="game.image" :alt="game.name" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-white">{{ game.name }}</h3>
              <p class="text-white/80 mb-4">{{ game.description }}</p>
              <button class="btn-gradient text-black px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300">
                Play Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const heroTitle = ref(null)
const heroText = ref(null)
const heroButton = ref(null)
const featuredTitle = ref(null)
const gameGrid = ref(null)

const featuredGames = ref([
  {
    id: 1,
    name: 'Fortune Tiger',
    description: 'Experience the power of the mighty tiger in this Asian-themed slot game.',
    image: '/images/game1.jpg'
  },
  {
    id: 2,
    name: 'Sweet Bonanza',
    description: 'A delicious candy-themed slot with exciting multiplier features.',
    image: '/images/game2.jpg'
  },
  {
    id: 3,
    name: 'Gates of Olympus',
    description: 'Join Zeus in this mythological adventure with massive win potential.',
    image: '/images/game3.jpg'
  }
])

onMounted(() => {
  // Hero section animations
  gsap.from(heroTitle.value, {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.2
  })
  
  gsap.from(heroText.value, {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.4
  })
  
  gsap.from(heroButton.value, {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.6
  })

  // Featured games section animations
  gsap.from(featuredTitle.value, {
    scrollTrigger: {
      trigger: featuredTitle.value,
      start: 'top 80%'
    },
    y: 50,
    opacity: 0,
    duration: 1
  })

  gsap.from(gameGrid.value.children, {
    scrollTrigger: {
      trigger: gameGrid.value,
      start: 'top 80%'
    },
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
  })
})
</script>
