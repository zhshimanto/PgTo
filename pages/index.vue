<template>
  <div class="pt-[72px]">
    <HeroSection />
    <AdvantagesSection />
    <FeaturedGames />
    <SignupInvite />
    <JackpotSection />
    <SafeContentSection />
  </div>
</template>

<script setup>
useHead({
  title: 'PG SLOT VEGAS - Best Online Slot Games',
  meta: [
    { name: 'description', content: 'Experience the thrill of premium slot games with PG SLOT VEGAS. Play the best online slots, get exclusive bonuses, and win big with our Vegas-style gaming experience.' },
    { name: 'keywords', content: 'PG SLOT VEGAS, online slots, casino games, slot games, gambling, gaming, vegas slots' },
    { property: 'og:title', content: 'PG SLOT VEGAS - Best Online Slot Games' },
    { property: 'og:description', content: 'Experience the thrill of premium slot games with PG SLOT VEGAS. Play the best online slots and win big!' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://pg-vegas.com' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'PG SLOT VEGAS - Best Online Slot Games' },
    { name: 'twitter:description', content: 'Experience the thrill of premium slot games with PG SLOT VEGAS. Play the best online slots and win big!' }
  ]
})

import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import HeroSection from '~/components/HeroSection.vue'
import FeaturedGames from '~/components/FeaturedGames.vue'
import AdvantagesSection from '~/components/AdvantagesSection.vue'
import SignupInvite from '~/components/SignupInvite.vue'
import JackpotSection from '~/components/JackpotSection.vue'

onMounted(() => {
  // No hero section animation
})
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
