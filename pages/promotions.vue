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
             class="rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 block">
            <div class="overflow-hidden">
              <img :src="promo.image" :alt="promo.name" class="w-full h-full object-cover">
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-white">{{ promo.name }}</h3>
              <p class="text-gray-300 mb-4">{{ promo.description }}</p>
              <div class="flex items-center justify-between">
                <span class="text-[#fbd95d] font-semibold">{{ promo.bonus }}</span>
                <button class="btn-gradient px-4 py-2 rounded-full text-sm font-semibold text-[#12000a]">
                  Claim Now
                </button>
              </div>
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
    name: 'Fortune Tiger',
    description: 'Enjoy our latest and greatest promotion!',
    image: '/images/promotions/1.webp',
    bonus: 'Special Bonus',
    buttonLink: '#'
  },
  {
    id: 2,
    name: 'Sweet Bonanza',
    description: 'Enjoy our latest and greatest promotion!',
    image: '/images/promotions/2.webp',
    bonus: 'Special Bonus',
    buttonLink: '#'
  },
  {
    id: 3,
    name: 'Gates of Olympus',
    description: 'Enjoy our latest and greatest promotion!',
    image: '/images/promotions/3.webp',
    bonus: 'Special Bonus',
    buttonLink: '#'
  },
  {
    id: 4,
    name: 'Wild West Gold',
    description: 'Enjoy our latest and greatest promotion!',
    image: '/images/promotions/4.webp',
    bonus: 'Special Bonus',
    buttonLink: '#'
  },
  {
    id: 5,
    name: 'Starlight Princess',
    description: 'Enjoy our latest and greatest promotion!',
    image: '/images/promotions/5.webp',
    bonus: 'Special Bonus',
    buttonLink: '#'
  },
  {
    id: 6,
    name: 'Sugar Rush',
    description: 'Enjoy our latest and greatest promotion!',
    image: '/images/promotions/6.webp',
    bonus: 'Special Bonus',
    buttonLink: '#'
  },
  {
    id: 7,
    name: 'Lucky Spin',
    description: 'Enjoy our latest and greatest promotion!',
    image: '/images/promotions/7.webp',
    bonus: 'Special Bonus',
    buttonLink: '#'
  },
  {
    id: 8,
    name: 'Mega Jackpot',
    description: 'Enjoy our latest and greatest promotion!',
    image: '/images/promotions/8.webp',
    bonus: 'Special Bonus',
    buttonLink: '#'
  },
  {
    id: 9,
    name: 'Golden Wheel',
    description: 'Enjoy our latest and greatest promotion!',
    image: '/images/promotions/9.webp',
    bonus: 'Special Bonus',
    buttonLink: '#'
  },
  {
    id: 10,
    name: 'Bonus Blast',
    description: 'Enjoy our latest and greatest promotion!',
    image: '/images/promotions/10.webp',
    bonus: 'Special Bonus',
    buttonLink: '#'
  },
  {
    id: 11,
    name: 'Super Streak',
    description: 'Enjoy our latest and greatest promotion!',
    image: '/images/promotions/11.webp',
    bonus: 'Special Bonus',
    buttonLink: '#'
  },
  {
    id: 12,
    name: 'Royal Rewards',
    description: 'Enjoy our latest and greatest promotion!',
    image: '/images/promotions/12.webp',
    bonus: 'Special Bonus',
    buttonLink: '#'
  },
  {
    id: 13,
    name: 'Cash Carnival',
    description: 'Enjoy our latest and greatest promotion!',
    image: '/images/promotions/13.webp',
    bonus: 'Special Bonus',
    buttonLink: '#'
  },
  {
    id: 14,
    name: 'Spin Frenzy',
    description: 'Enjoy our latest and greatest promotion!',
    image: '/images/promotions/14.webp',
    bonus: 'Special Bonus',
    buttonLink: '#'
  },
  {
    id: 15,
    name: 'Jackpot Jive',
    description: 'Enjoy our latest and greatest promotion!',
    image: '/images/promotions/15.webp',
    bonus: 'Special Bonus',
    buttonLink: '#'
  },
  {
    id: 16,
    name: 'Vegas Nights',
    description: 'Enjoy our latest and greatest promotion!',
    image: '/images/promotions/16.webp',
    bonus: 'Special Bonus',
    buttonLink: '#'
  },
  {
    id: 17,
    name: "Winner's Circle",
    description: 'Enjoy our latest and greatest promotion!',
    image: '/images/promotions/17.webp',
    bonus: 'Special Bonus',
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
