<template>
  <div class="pt-[72px] flex-grow">
    <section class="px-5 md:px-0 py-12 mb-12">
      <div class="mx-auto max-w-6xl">
        <h1 class="text-4xl md:text-5xl font-bold mb-8 text-center text-white">
          เกมสล็อตออนไลน์ยอดนิยม
        </h1>
        <GameGrid />
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

import GameGrid from '~/components/GameGrid.vue'
</script>

<style scoped>
.container {
  max-width: 1200px;
}

</style>
