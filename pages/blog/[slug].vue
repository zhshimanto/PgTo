<template>
  <div class="pt-[72px] flex-grow">
    <section v-if="post" class="px-5 md:px-0 py-12 mb-12">
      <div class="mx-auto max-w-4xl">
        
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">{{ post.title }}</h1>
        <div class="flex items-center gap-4 text-white/80 mb-8">
          <span>{{ post.author }}</span>
          <span>•</span>
          <span>{{ formatDate(post.date) }}</span>
        </div>
        <img :src="post.image" :alt="post.title" class="w-full h-[400px] object-cover rounded-lg mb-8">
        <div class="prose prose-invert max-w-none">
          <div class="text-lg leading-relaxed blog-content" v-html="post.content"></div>
        </div>
        <div class="mt-12">
          <nuxt-link to="/blog" class="inline-flex items-center text-white hover:text-[#fbd95d]">
            <span class="mr-2">←</span> Back to Blog
          </nuxt-link>
        </div>
      </div>
    </section>
    <section v-else class="px-5 md:px-0 py-12 mb-12 text-center text-white">
      <div class="mx-auto max-w-4xl">
        Post not found
      </div>
    </section>
  </div>
</template>

<script setup>
import blogPosts from '~/data/blog-posts.json'

const route = useRoute()
const post = ref(blogPosts.posts.find(p => p.slug === route.params.slug))

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

if (!post.value) {
  throw createError({
    statusCode: 404,
    message: 'Post not found'
  })
}

// SEO Configuration
useHead(() => ({
  title: post.value.metaTitle,
  meta: [
    { name: 'description', content: post.value.metaDescription },
    { name: 'keywords', content: post.value.keywords },
    // Open Graph
    { property: 'og:title', content: post.value.metaTitle },
    { property: 'og:description', content: post.value.metaDescription },
    { property: 'og:image', content: post.value.image },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: `https://pgvegas.com/blog/${post.value.slug}` },
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: post.value.metaTitle },
    { name: 'twitter:description', content: post.value.metaDescription },
    { name: 'twitter:image', content: post.value.image },
    // Article specific meta
    { property: 'article:published_time', content: post.value.date },
    { property: 'article:author', content: post.value.author }
  ],
  link: [
    { rel: 'canonical', href: `https://pgvegas.com/blog/${post.value.slug}` }
  ]
}))
</script>
