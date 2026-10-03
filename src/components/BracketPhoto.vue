<template>
  <div class="relative flex-shrink-0" :style="{ width: size, height: size }">
    <div class="absolute inset-0 border border-white/25"></div>
    <div class="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-primary"></div>
    <div class="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-primary"></div>
    <div class="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 border-primary"></div>
    <div class="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-primary"></div>
    <img src="../assets/pb2.jpg" class="w-full h-full object-cover" style="filter: grayscale(.3) contrast(1.05)">
    <div class="absolute bottom-2 left-2 font-mono text-[10px] text-[#f2f0f5] bg-black/55 px-1.5 py-0.5">{{ label }}</div>
  </div>
</template>

<script setup>
defineProps({
  size: { type: String, default: '220px' },
  label: { type: String, default: 'FIG.01' },
});
</script>
