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
htmlAttrs: {
    lang: 'th'},
  title: 'PG SLOT TO เว็บตรงไม่ผ่านเอเย่นต์ ลิขสิทธิ์แท้จาก PGSLOT สล็อตแตกง่ายอันดับ 1 แห่งปี',
  meta: [
    { name: 'description', content: 'PGSLOT.TO สล็อตเว็บตรงลิขสิทธิ์แท้จาก PGSOFT แจ็กพอตแตกง่าย ฝากถอนผ่านระบบ API แท้ จ่ายจริง ไม่ผ่านเอเยนต์ เล่นได้ 24 ชม.' },
    { name: 'keywords', content: 'PGSLOT, PG SLOT, PGSLOT TO, PG สีชมพู, สล็อตสีชมพู' },
    { property: 'og:title', content: 'PG SLOT TO เว็บตรงไม่ผ่านเอเย่นต์ ลิขสิทธิ์แท้จาก PGSLOT สล็อตแตกง่ายอันดับ 1 แห่งปี' },
    { property: 'og:description', content: 'PGSLOT.TO สล็อตเว็บตรงลิขสิทธิ์แท้จาก PGSOFT แจ็กพอตแตกง่าย ฝากถอนผ่านระบบ API แท้ จ่ายจริง ไม่ผ่านเอเยนต์ เล่นได้ 24 ชม.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://pgslott.to' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'PG SLOT TO เว็บตรงไม่ผ่านเอเย่นต์ ลิขสิทธิ์แท้จาก PGSLOT สล็อตแตกง่ายอันดับ 1 แห่งปี' },
    { name: 'twitter:description', content: 'PGSLOT.TO สล็อตเว็บตรงลิขสิทธิ์แท้จาก PGSOFT แจ็กพอตแตกง่าย ฝากถอนผ่านระบบ API แท้ จ่ายจริง ไม่ผ่านเอเยนต์ เล่นได้ 24 ชม.' }
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
