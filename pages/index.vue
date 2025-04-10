<template>
  <div class="pt-[72px]">
    <!-- Hero Slider Section -->
    <section class="mt-4">
      <div class="mx-4">
        <HeroSlider />
      </div>
    </section>

    <!-- Featured Games Section -->
    <section class="py-20">
      <div class="container mx-4">
        <h2 class="text-4xl font-bold mb-12 text-center text-white" ref="featuredTitle">Featured Slots</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref="gameGrid">
          <div v-for="game in featuredGames" :key="game.id" class="game-card rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img :src="game.image" :alt="game.name" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-white">{{ game.name }}</h3>
              <p class="text-white/80 mb-4">{{ game.description }}</p>
              <a :href="game.buttonLink" class="inline-block btn-gradient text-black px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300">
                Play Now
              </a>
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
import HeroSlider from '~/components/HeroSlider.vue'

const featuredTitle = ref(null)
const gameGrid = ref(null)

const featuredGames = ref([
  {
    id: 1,
    name: 'Fortune Tiger',
    description: 'Discover the wealth of the East in this exciting slot game.',
    image: '/img/games/fortune-tiger.jpg',
    buttonLink: '/games/fortune-tiger'
  },
  {
    id: 2,
    name: 'Sweet Bonanza',
    description: 'A delicious candy-themed slot with exciting multiplier features.',
    image: '/images/game2.jpg',
    buttonLink: '/games/sweet-bonanza'
  },
  {
    id: 3,
    name: 'Gates of Olympus',
    description: 'Join Zeus in this mythological adventure with massive win potential.',
    image: '/images/game3.jpg',
    buttonLink: '/games/gates-of-olympus'
  },
  {
    id: 4,
    name: 'Gates of Olympus',
    description: 'Join Zeus in this mythological adventure with massive win potential.',
    image: '/images/game3.jpg',
    buttonLink: '/games/gates-of-olympus-2'
  },
  {
    id: 5,
    name: 'Gates of Olympus',
    description: 'Join Zeus in this mythological adventure with massive win potential.',
    image: '/images/game3.jpg',
    buttonLink: '/games/gates-of-olympus-3'
  }
])

onMounted(() => {
  // No hero section animation
})
</script>

<style scoped>
.btn-gradient {
  background: linear-gradient(to right, #fbd95d, #ff851c);
  transition: all 0.3s ease;
}

.btn-gradient:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(251, 217, 93, 0.3);
}

.game-card {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
