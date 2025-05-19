<template>
  <div class="blog-list">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="post in posts" :key="post.id" class="blog-card">
          <nuxt-link :to="`/blog/${post.slug}`" class="block">
            <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover md:object-cover">
              <div class="p-6">
                <h3 class="text-xl font-bold text-white mb-2">{{ post.title }}</h3>
                <p class="text-white/80 mb-4">{{ post.excerpt }}</p>
                <div class="flex justify-between items-center text-sm text-white/70">
                  <span>{{ post.author }}</span>
                  <span>{{ formatDate(post.date) }}</span>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import blogPosts from '~/data/blog-posts.json'

const posts = ref(blogPosts.posts.sort((a, b) => new Date(b.date) - new Date(a.date)))

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.blog-card {
  transition: all 0.3s ease;
}
</style>
