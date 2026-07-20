<template>
  <div>
    <div class="flex items-baseline gap-2.5 mb-3">
      <span class="font-mono text-[10.5px] text-white/40 border border-white/15 rounded px-1.5 py-0.5">WIP</span>
      <h3 class="text-lg font-semibold m-0">{{ title }}</h3>
    </div>
    <p v-if="description" class="text-[14.5px] leading-[1.75] text-white/60 font-light mb-4 max-w-[600px]">{{ description }}</p>
    <p v-else class="text-[14.5px] leading-[1.75] text-white/45 font-light mb-4">Write-up coming soon — check back for tools, process, and details.</p>
    <div class="flex flex-col gap-4">
      <slot name="image"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: { type: String, default: '' },
});
</script>
