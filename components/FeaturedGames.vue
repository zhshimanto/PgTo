<template>
  <section class="px-5 md:px-0 mb-24">
    <div class="mx-auto featured-container">
      
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
      <h2 class="text-3xl font-bold mb-4 text-white mt-8">บริการเกมสล็อต PG สะดวกสบาย 24 ชั่วโมง</h2>
      <p class="text-white">ไม่ว่าต้องการจะเดิมพันเมื่อไหร่ก็เข้าในระบบเกมได้เลยทันทีตลอด 24 ชั่วโมงตามที่ต้องการ ด้วยความที่ว่าเราคือผู้ให้บริการหลักรายใหญ่ที่เชื่อถือได้และได้รับความนิยมมาโดยตลอด เพราะฉะนั้นจึงมีทีมงานโปรแกรมเมอร์มืออาชีพคอยอัปเดตระบบหลังบ้านให้สามารถตอบสนองการให้บริการอย่างมีคุณภาพได้อย่างต่อเนื่อง</p>
      <p class="text-white">จะเป็นวันไหนหรือเมื่อไหร่ก็พร้อมเปิดให้บริการตลอดเวลาไม่มีปิดระบบแม้แต่วันหยุดราชการ ยกเว้นแต่ว่ามีการแจ้งเตือนจะอัปเกรดข้อมูลการให้บริการด้านต่าง ๆ ให้ดีขึ้นทางเว็บก็จะแจ้งการปิดระบบให้รู้ก่อน</p>
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
