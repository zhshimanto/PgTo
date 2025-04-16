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
import { ref } from 'vue'

const promotions = ref([
  {
    id: 1,
    name: 'Welcome Bonus',
    description: 'Get up to 100% bonus on your first deposit',
    image: '/images/promotions/1.png',
    bonus: '100% up to ฿50,000',
    buttonLink: '#'
  },
  {
    id: 2,
    name: 'Daily Cashback',
    description: 'Receive up to 20% cashback on daily losses',
    image: '/images/promotions/2.png',
    bonus: '20% Cashback',
    buttonLink: '#'
  },
  {
    id: 3,
    name: 'Weekly Reload',
    description: 'Reload your account and get extra bonus every week',
    image: '/images/promotions/3.png',
    bonus: '50% up to ฿25,000',
    buttonLink: '#'
  },
  {
    id: 4,
    name: 'VIP Program',
    description: 'Join our VIP program for exclusive benefits',
    image: '/images/promotions/4.png',
    bonus: 'Exclusive Rewards',
    buttonLink: '#'
  },
  {
    id: 5,
    name: 'Refer a Friend',
    description: 'Get bonus for every friend you refer',
    image: '/images/promotions/5.png',
    bonus: '฿1,000 per referral',
    buttonLink: '#'
  },
  {
    id: 6,
    name: 'Tournament Prize Pool',
    description: 'Participate in our weekly tournaments',
    image: '/images/promotions/6.png',
    bonus: '฿100,000 Prize Pool',
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
