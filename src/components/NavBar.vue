<template>
  <div class="w-full flex justify-center pt-6">
    <div class="flex gap-0.5 bg-white/5 border border-white/10 rounded-full p-1">
      <RouterLink to="/" class="rounded-full px-[22px] py-[9px] text-[13px] font-medium transition-colors"
        :class="isActive('/') ? 'bg-white text-backgrund-900' : 'text-white/50 hover:text-white/80'">
        Home
      </RouterLink>
      <RouterLink to="/about" class="rounded-full px-[22px] py-[9px] text-[13px] font-medium transition-colors"
        :class="isActive('/about') ? 'bg-white text-backgrund-900' : 'text-white/50 hover:text-white/80'">
        About Me
      </RouterLink>
      <RouterLink to="/projects" class="rounded-full px-[22px] py-[9px] text-[13px] font-medium transition-colors"
        :class="isActive('/projects') ? 'bg-white text-backgrund-900' : 'text-white/50 hover:text-white/80'">
        Projects
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const isActive = (path) => route.path === path;
</script>
