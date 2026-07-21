<template>
  <div class="w-full max-w-[1280px] mx-auto pt-24">
    <div class="px-5 md:px-16 pt-6 md:pt-8">
      <RouterLink to="/projects" class="font-mono text-xs text-white/45 hover:text-white/70">&larr; Back to Projects</RouterLink>
    </div>

    <div
      class="relative px-5 md:px-16 pt-6 pb-12 border-b border-white/10 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[length:48px_48px]">
      <div class="font-mono text-xs tracking-[0.1em] mb-4" :style="{ color: headerColor }">
        PROJECT {{ paddedIndex }}<template v-if="tagline"> — {{ tagline }}</template>
      </div>
      <h1 class="text-[clamp(38px,6vw,60px)] leading-none font-bold tracking-tight m-0">{{ title }}</h1>
    </div>

    <div class="flex flex-wrap gap-14 px-5 md:px-16 pt-8 md:pt-14 pb-16">
      <div class="flex-1 min-w-[260px] max-w-[340px] flex flex-col gap-7">
        <div>
          <div class="font-mono text-[11px] mb-2.5" :style="{ color: descColor }">DESCRIPTION</div>
          <slot name="description"></slot>
        </div>
        <div v-if="tools && tools.length" class="border-t border-white/10 pt-5">
          <div class="font-mono text-[11px] mb-2.5" :style="{ color: toolsColor }">TOOLS USED</div>
          <div class="flex flex-wrap gap-2">
            <span v-for="tool in tools" :key="tool"
              class="font-mono text-[11.5px] text-white/70 border border-white/15 rounded px-2.5 py-1.5">{{ tool }}</span>
          </div>
        </div>
      </div>

      <div class="flex-[2] min-w-[320px] flex flex-col gap-4" @click="onImageAreaClick">
        <slot name="image"></slot>
      </div>
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
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { accentColors } from '@/data/projects';

const props = defineProps({
  title: String,
  index: { type: Number, default: 1 },
  tagline: { type: String, default: '' },
  tools: { type: Array, default: () => [] },
});

const paddedIndex = computed(() => String(props.index).padStart(2, '0'));
const headerColor = computed(() => accentColors[(props.index - 1) % accentColors.length]);
const descColor = computed(() => accentColors[props.index % accentColors.length]);
const toolsColor = computed(() => accentColors[(props.index + 1) % accentColors.length]);

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
.flex-\[2\] :deep(img) {
  cursor: zoom-in;
  transition: opacity 0.15s;
}

.flex-\[2\] :deep(img:hover) {
  opacity: 0.85;
}
</style>
