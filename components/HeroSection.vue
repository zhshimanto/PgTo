<template>
  <section class="hero-section py-20">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between gap-8">
        <div class="w-1/2 text-white">
          <h1 class="text-5xl font-bold mb-6 bg-gradient-to-r from-[#fbd95d] to-[#ff851c] bg-clip-text text-transparent">
            Experience Vegas-Style Gaming
          </h1>
          <p class="text-lg mb-8 text-gray-300">
            Join the ultimate gaming destination where excitement meets opportunity. Play, win, and experience the thrill of Vegas from anywhere.
          </p>
          <div class="flex gap-4">
            <button class="btn-gradient px-8 py-3 rounded-full font-semibold text-[#12000a]">
              Play Now
            </button>
            <button class="border-2 border-[#fbd95d] px-8 py-3 rounded-full font-semibold text-white hover:bg-[#fbd95d] hover:text-[#12000a] transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
        <div class="w-1/2">
          <ScoreBoard />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ScoreBoard from '~/components/ScoreBoard.vue'
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
