<template>
  <div class="pt-[72px]">
    <HeroSection />
    <AdvantagesSection />
    <FeaturedGames />
    <SignupInvite />
    <JackpotSection />
  </div>
</template>

<script setup>
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
