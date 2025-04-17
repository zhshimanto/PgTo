<template>
  <section class="hero-section py-10 md:py-20">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="w-full md:w-1/2 text-white text-center md:text-left">
          <h1 class="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#eadb20] to-[#ffffff] bg-clip-text text-transparent leading-tight">
            TOURNAMENT<br>
            <span class="text-white">ประจำเดือนมีนาคม</span>
          </h1>
          <p class="text-base md:text-lg mb-6 md:mb-8 text-white px-4 md:px-0">
            สล็อตออนไลน์ PG SLOT เว็บตรง จากเจ้าของลิขสิทธิ์แท้ สล็อตแตกง่าย ฝากถอนออโต้ มีโปรโมชั่นพิเศษที่มีเฉพาะในเว็บตรงเท่านั้น
          </p>
          <div class="flex flex-col gap-4 justify-center">
            <button class="btn-gradient px-6 md:px-8 py-3 rounded-full font-semibold text-[#fff] text-sm md:text-base w-full max-w-[280px] mx-auto md:mx-0">
              สมัครสมาชิก
            </button>
            <button class="border-2 border-[#fbd95d] px-6 md:px-8 py-3 rounded-full font-semibold text-white hover:bg-[#fbd95d] hover:text-[#ffffff] transition-all duration-300 text-sm md:text-base w-full max-w-[280px] mx-auto md:mx-0">
              เข้าสู่ระบบ
            </button>
          </div>
        </div>
        <div class="w-full md:w-1/2 mt-8 md:mt-0">
          <ScoreBoard />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeroCarousel from '~/components/HeroCarousel.vue'
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
</style>
