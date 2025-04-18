<template>
  <div class="pt-[72px] flex-grow">
    <section class="px-5 md:px-0 py-12 mb-12">
      <div class="mx-auto max-w-6xl">
        <h1 class="text-4xl md:text-5xl font-bold mb-8 text-center text-white">
          Latest Promotions
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a v-for="promo in promotions" 
             :key="promo.id" 
             :href="promo.buttonLink"
             class="rounded-lg overflow-hidden relative block">
            <div class="overflow-hidden">
              <img :src="promo.image" :alt="promo.name" class="w-full h-full object-cover">
            </div>
            <div class="p-4">
              <h3 class="text-xl font-bold text-white text-center">{{ promo.name }}</h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Promotions & Bonuses - PG SLOT VEGAS',
  meta: [
    { name: 'description', content: 'Discover amazing promotions and bonuses at PG SLOT VEGAS. Get welcome bonus, daily cashback, weekly reload bonus, and join our VIP program for exclusive rewards.' },
    { name: 'keywords', content: 'PG SLOT VEGAS promotions, casino bonuses, welcome bonus, cashback, reload bonus, VIP program, casino rewards' },
    { property: 'og:title', content: 'Promotions & Bonuses - PG SLOT VEGAS' },
    { property: 'og:description', content: 'Discover amazing promotions and bonuses at PG SLOT VEGAS. Join now and claim your rewards!' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://pg-vegas.com/promotions' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Promotions & Bonuses - PG SLOT VEGAS' },
    { name: 'twitter:description', content: 'Discover amazing promotions and bonuses at PG SLOT VEGAS. Join now and claim your rewards!' }
  ]
})

import { ref } from 'vue'

const promotions = ref([
  {
    id: 1,
    name: 'ทุกยอดฝาก 10%',
    image: '/images/promotions/1.webp',
    buttonLink: '#'
  },
  {
    id: 2,
    name: 'ฝากแรก 20%',
    image: '/images/promotions/2.webp',
    buttonLink: '#'
  },
  {
    id: 3,
    name: 'ฝาก 80 รับ 240',
    image: '/images/promotions/3.webp',
    buttonLink: '#'
  },
  {
    id: 4,
    name: 'คืนยอดเสียทุกวัน',
    image: '/images/promotions/4.webp',
    buttonLink: '#'
  },
  {
    id: 5,
    name: 'ฝาก 29 รับ 100',
    image: '/images/promotions/5.webp',
    buttonLink: '#'
  },
  {
    id: 6,
    name: 'สมาชิกใหม่ 100%',
    image: '/images/promotions/6.webp',
    buttonLink: '#'
  },
  {
    id: 7,
    name: 'กงล้อหมุนวงล้อฟรีเครดิต',
    image: '/images/promotions/7.webp',
    buttonLink: '#'
  },
  {
    id: 8,
    name: 'ฝาก 40 รับ 120',
    image: '/images/promotions/8.webp',
    buttonLink: '#'
  },
  {
    id: 9,
    name: 'ระบบแรงกิ้ง',
    image: '/images/promotions/9.webp',
    buttonLink: '#'
  },
  {
    id: 10,
    name: 'ฝากแรกของวัน',
    image: '/images/promotions/10.webp',
    buttonLink: '#'
  },
  {
    id: 11,
    name: 'ฝาก 80 รับ 200',
    image: '/images/promotions/11.webp',
    buttonLink: '#'
  },
  {
    id: 12,
    name: 'กล่องสุ่มแจกเครดิต',
    image: '/images/promotions/12.webp',
    buttonLink: '#'
  },
  {
    id: 13,
    name: 'ฝาก 40 รับ 100',
    image: '/images/promotions/13.webp',
    buttonLink: '#'
  },
  {
    id: 14,
    name: 'ชวนเพื่อนคอมมิชชั่น 0.3%',
    image: '/images/promotions/14.webp',
    buttonLink: '#'
  },
  {
    id: 15,
    name: 'เช็คอินเครดิตฟรี 100',
    image: '/images/promotions/15.webp',
    buttonLink: '#'
  },
  {
    id: 16,
    name: 'โบนัสฟรีทั้งวัน',
    image: '/images/promotions/16.webp',
    buttonLink: '#'
  },
  {
    id: 17,
    name: 'โปรเอาใจสมาชิกใหม่',
    image: '/images/promotions/17.webp',
    buttonLink: '#'
  }
])
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

.promo-card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
</style>
