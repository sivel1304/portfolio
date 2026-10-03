<template>
  <div>
    <div class="flex items-baseline gap-2.5 mb-3">
      <span class="font-mono text-[10.5px] text-white/40 border border-white/15 rounded px-1.5 py-0.5">WIP</span>
      <h3 class="text-lg font-semibold m-0">{{ title }}</h3>
    </div>
    <p v-if="description" class="text-[14.5px] leading-[1.75] text-white/60 font-light mb-4 max-w-[600px]">{{ description }}</p>
    <p v-else class="text-[14.5px] leading-[1.75] text-white/45 font-light mb-4">Write-up coming soon — check back for tools, process, and details.</p>
    <div class="flex flex-col gap-4" @click="onImageAreaClick">
      <slot name="image"></slot>
    </div>
  </div>

  <Teleport to="body">
    <div v-if="lightbox" class="fixed inset-0 z-50 bg-[rgba(0,0,0,0.8)] backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out"
      @click="lightbox = null">
      <img :src="lightbox" class="max-w-full max-h-full object-contain rounded-md" @click.stop />
      <button class="absolute top-5 right-6 text-white/70 hover:text-white text-3xl leading-none"
        @click="lightbox = null">&times;</button>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

defineProps({
  title: String,
  description: { type: String, default: '' },
});

const lightbox = ref(null);

const onImageAreaClick = (e) => {
  if (e.target.tagName === 'IMG') lightbox.value = e.target.currentSrc || e.target.src;
};

const onKeydown = (e) => {
  if (e.key === 'Escape') lightbox.value = null;
};

onMounted(() => window.addEventListener('keydown', onKeydown));
onUnmounted(() => window.removeEventListener('keydown', onKeydown));
</script>

<style scoped>
.flex.flex-col.gap-4 :deep(img) {
  cursor: zoom-in;
  transition: opacity 0.15s;
}

.flex.flex-col.gap-4 :deep(img:hover) {
  opacity: 0.85;
}
</style>
