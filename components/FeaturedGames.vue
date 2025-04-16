<template>
  <section class="px-5 md:px-0 mb-24">
    <div class="mx-auto featured-container">
      <h2 class="text-4xl font-bold mb-4 text-center text-white" ref="featuredTitle">Featured Slots</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8" ref="gameGrid">
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
</script>

<style scoped>
.featured-container {
  max-width: 620px;
}


</style>
