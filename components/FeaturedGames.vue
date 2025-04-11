<template>
  <section>
    <div class="container mx-4">
      <h2 class="text-4xl font-bold mb-12 text-center text-white" ref="featuredTitle">Featured Slots</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8" ref="gameGrid">
        <a v-for="game in featuredGames" 
           :key="game.id" 
           :href="game.buttonLink"
           class="game-card rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 block">
          <img :src="game.image" :alt="game.name" class="w-full object-contain">
            <h3 class="text-xl font-bold mb-2 text-white text-center">{{ game.name }}</h3>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const featuredTitle = ref(null)
const gameGrid = ref(null)

const featuredGames = ref([
  {
    id: 1,
    name: 'Fortune Tiger',
    image: '/images/games/1.jpg',
    buttonLink: '/games/fortune-tiger'
  },
  {
    id: 2,
    name: 'Sweet Bonanza',
    image: '/images/games/2.jpg',
    buttonLink: '/games/sweet-bonanza'
  },
  {
    id: 3,
    name: 'Gates of Olympus',
    image: '/images/games/3.jpg',
    buttonLink: '/games/gates-of-olympus'
  },
  {
    id: 4,
    name: 'Wild West Gold',
    image: '/images/games/4.jpg',
    buttonLink: '/games/wild-west-gold'
  },
  {
    id: 5,
    name: 'Starlight Princess',
    image: '/images/games/5.jpg',
    buttonLink: '/games/starlight-princess'
  },
  {
    id: 6,
    name: 'Sugar Rush',
    image: '/images/games/6.jpg',
    buttonLink: '/games/sugar-rush'
  }
])
</script>

<style scoped>
.game-card {
  background: linear-gradient(45deg, #ff4e9b, #12000a);
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(251, 217, 93, 0.3);
}

.game-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 4px 12px rgba(251, 217, 93, 0.3);
}
</style>
