<template>
  <RouterLink :to="project.route"
    class="block border border-white/10 rounded-md overflow-hidden bg-surface hover:border-white/25 transition-colors">
    <div class="relative h-[150px] md:h-[160px] overflow-hidden">
      <img :src="project.image" :alt="project.title" class="w-full h-full object-cover">
      <div class="absolute top-2.5 left-2.5 font-mono text-xs bg-backgrund-900/85 px-1.5 py-0.5"
        :style="{ color: accentFor(project.n) }">
        {{ String(project.n).padStart(2, '0') }}
      </div>
    </div>
    <div class="p-4">
      <div class="text-[15px] font-medium text-[#f2f0f5]">{{ project.title }}</div>
      <div class="text-[12.5px] text-white/50 mt-1">{{ project.subtitle }}</div>
    </div>
  </RouterLink>
</template>

<script setup>
import { accentFor } from '@/data/projects';

defineProps({
  project: { type: Object, required: true },
});
</script>
