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
  title: 'PG SLOT TO เว็บลิขสิทธิ์แท้โบนัสแจ็กพอตแตกง่ายที่สุด 2025',
  meta: [
    { name: 'description', content: 'PGSLOT.TO เว็บใหม่มาแรงที่สุดพร้อมให้บริการเกมลิขสิทธิ์แท้ส่งตรงจาก POCKET GAMES SOFT พีจีสล็อตสีชมพูแจ็กพอตแตกบ่อยฝากถอนไวจ่ายจริงผ่านระบบ API แท้ไม่ผ่านเอเยนต์' },
    { name: 'keywords', content: 'PGSLOT, PG SLOT, PGSLOT TO, PG สีชมพู, สล็อตสีชมพู' },
    { property: 'og:title', content: 'PG SLOT TO เว็บลิขสิทธิ์แท้พีจีสล็อตโบนัสแจ็กพอตแตกง่ายที่สุด 2025' },
    { property: 'og:description', content: 'PGSLOT.TO เว็บใหม่มาแรงที่สุดพร้อมให้บริการเกมลิขสิทธิ์แท้ส่งตรงจาก POCKET GAMES SOFT พีจีสล็อตสีชมพูแจ็กพอตแตกบ่อยฝากถอนไวจ่ายจริงผ่านระบบ API แท้ไม่ผ่านเอเยนต์' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://pgslott.top' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'PG SLOT TO เว็บลิขสิทธิ์แท้พีจีสล็อตโบนัสแจ็กพอตแตกง่ายที่สุด 2025' },
    { name: 'twitter:description', content: 'PGSLOT.TO เว็บใหม่มาแรงที่สุดพร้อมให้บริการเกมลิขสิทธิ์แท้ส่งตรงจาก POCKET GAMES SOFT พีจีสล็อตสีชมพูแจ็กพอตแตกบ่อยฝากถอนไวจ่ายจริงผ่านระบบ API แท้ไม่ผ่านเอเยนต์' }
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
