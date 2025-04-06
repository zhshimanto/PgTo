<template>
  <div>
    <!-- Hero Section -->
    <section class="min-h-screen relative flex items-center bg-primary">
      <div class="w-full px-4 md:px-0 max-w-[1024px] mx-auto z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        <!-- Left Content -->
        <div class="w-full lg:w-1/2">
          <h1 class="text-6xl font-bold mb-6 text-white" ref="heroTitle">Welcome to PG SLOT VEGAS</h1>
          <p class="text-xl mb-8 text-white/90" ref="heroText">Experience the thrill of premium slot games and Vegas-style gaming from anywhere in the world.</p>
          <NuxtLink to="/games" class="inline-block btn-gradient px-8 py-4 rounded-full text-lg font-bold text-black hover:scale-105 transition-transform duration-300" ref="heroButton">
            Explore Games
          </NuxtLink>
        </div>
        
        <!-- Right Content - Leaderboard -->
        <div class="w-full lg:w-1/2 mt-8 lg:mt-0" ref="leaderboard">
          <ScoreBoard />
        </div>
      </div>
    </section>

    <!-- Featured Games Section -->
    <section class="py-20 bg-primary">
      <div class="w-full px-4 md:px-0 max-w-[1024px] mx-auto">
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
import gsap from 'gsap'
import ScoreBoard from '~/components/ScoreBoard.vue'

const heroTitle = ref(null)
const heroText = ref(null)
const heroButton = ref(null)
const leaderboard = ref(null)
const featuredTitle = ref(null)
const gameGrid = ref(null)

const featuredGames = ref([
  {
    id: 1,
    name: 'Fortune Tiger',
    description: 'Discover the wealth of the East in this exciting slot game.',
    image: '/img/games/fortune-tiger.jpg'
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
  // Hero Section Animation
  const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } })
  
  tl.from(heroTitle.value, { 
    y: 50, 
    opacity: 0 
  })
  .from(heroText.value, { 
    y: 30, 
    opacity: 0 
  }, '-=0.8')
  .from(heroButton.value, { 
    y: 20, 
    opacity: 0 
  }, '-=0.8')
  .from(leaderboard.value, {
    x: 50,
    opacity: 0
  }, '-=0.8')
})
</script>

<style>
.btn-gradient {
  background: linear-gradient(to right, #fbd95d, #ff851c);
  transition: all 0.3s ease;
}

.bg-primary {
  background-color: #5067e7;
}

.bg-secondary {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
