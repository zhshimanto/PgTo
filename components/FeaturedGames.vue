<template>
  <section class="px-5 md:px-0 mb-24">
    <div class="mx-auto featured-container">
      <h2 class="text-4xl font-bold mb-4 text-center text-white" ref="featuredTitle">โปรโมชั่นเยอะ รับโปรใหม่ได้ทุกวัน
      </h2>
      <p class="text-white text-center mb-4">PG SLOT VEGAS แจกเครดิตฟรีอย่างจุใจให้กับทุกผู้เล่นใหม่. นอกจากนี้ ยังมีโปรโมชั่นแบบแพคเกจที่ผู้เล่นเลือกเองได้ทุกวัน มีเฉพาะในเว็บตรงเท่านั้น!

</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8" ref="gameGrid">
        <a v-for="game in featuredGames" 
           :key="game.id" 
           :href="game.buttonLink"
           class="game-card rounded-lg block">
          <div class="hover:scale-105 transition-transform duration-300">
            <div class="w-full overflow-hidden rounded-lg">
              <img :src="game.image" :alt="game.name" class="w-full object-cover" />
            </div>
            <h3 class="text-xl font-bold mb-2 text-white text-center">{{ game.name }}</h3>
          </div>
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
    name: 'ทุกยอดฝาก 10%',
    image: '/images/games/1.webp',
    buttonLink: '#'
  },
  {
    id: 2,
    name: 'ฝากแรก 20%',
    image: '/images/games/2.webp',
    buttonLink: '#'
  },
  {
    id: 3,
    name: 'ฝาก 80 รับ 240',
    image: '/images/games/3.webp',
    buttonLink: '#'
  },
  {
    id: 4,
    name: 'คืนยอดเสียสูง',
    image: '/images/games/4.webp',
    buttonLink: '#'
  },
  {
    id: 5,
    name: 'ฝาก 29 รับ 100',
    image: '/images/games/5.webp',
    buttonLink: '#'
  },
  {
    id: 6,
    name: 'สมาชิกใหม่ 100%',
    image: '/images/games/6.webp',
    buttonLink: '#'
  }
])
</script>

<style scoped>
.featured-container {
  max-width: 620px;
}


</style>
