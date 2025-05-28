<template>
  <footer class="text-white py-12 mt-auto w-full max-w-[640px] mx-auto">
    <div class="mx-auto px-4 w-full">
      <!-- Main Footer Content -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 mb-8">
        <!-- Logo Section -->
        <div class="w-48">
          <img src="/pgto-logo.webp" alt="PG TO Logo" class="w-32 h-auto">
        </div>
        
        <!-- Copyright -->
        <div class="text-sm text-center md:text-right">
          <p>&copy; {{ new Date().getFullYear() }} PG TO. All rights reserved.</p>
        </div>
      </div>

      <!-- Footer Links -->
      <div class="border-t border-white/10 pt-6">
        <div class="flex flex-wrap justify-center gap-8 text-sm">
          <NuxtLink to="/game-manual" class="hover:text-[#fbd95d] transition-colors">Game Manual</NuxtLink>
          <NuxtLink to="/responsible-gaming" class="hover:text-[#fbd95d] transition-colors">Responsible Gaming</NuxtLink>
          <NuxtLink to="/terms-and-conditions" class="hover:text-[#fbd95d] transition-colors">Terms & Conditions</NuxtLink>
          <NuxtLink to="/privacy-policy" class="hover:text-[#fbd95d] transition-colors">Privacy Policy</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>


