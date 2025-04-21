<template>
  <div class="pt-[72px] flex-grow">
    <section class="px-5 md:px-0 py-12 mb-12">
      <div class="mx-auto max-w-6xl">
        <h1 class="text-4xl md:text-5xl font-bold mb-8 text-center text-white">
          Latest Blog Posts
        </h1>
        <p class="text-white/80 text-center max-w-2xl mx-auto mb-12">
          Stay updated with the latest news, tips, and insights from the gaming world.
        </p>
        <BlogList />
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>
