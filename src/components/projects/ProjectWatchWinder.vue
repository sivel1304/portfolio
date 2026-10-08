<template>
  <ProjectSection title="Watch Winder" :index="8" tagline="HOMEMADE WATCH WINDER"
    :tools="['Fusion360', 'Arduino', 'C/C++', 'Creality 3D Printing']">
    <template v-slot:description>
      <p class="text-[14.5px] leading-[1.75] text-white/75 font-light">
        Designed and built from scratch: an automatic watch winder that keeps automatic watches wound and ready to
        wear — a functional, stylish device from concept to 3D-printed final build.
      </p>
    </template>

    <template v-slot:image>
      <div class="relative w-full pt-[56.25%] rounded-md border border-white/10 overflow-hidden">
        <iframe class="absolute inset-0 w-full h-full border-0"
          src="https://player.vimeo.com/video/1097335024?h=97bb90c885" title="Watch Winder video"
          allow="autoplay; fullscreen; picture-in-picture"></iframe>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <img v-for="(image, index) in images" :key="index" :src="image" alt="Watch Winder"
          class="w-full h-[260px] object-contain bg-surface rounded-md border border-white/10" />
      </div>
    </template>
  </ProjectSection>
</template>

<script setup>
import { ref } from 'vue';
import ProjectSection from "../ProjectSection.vue";

const images = ref(Object.values(import.meta.glob('../../assets/project-images/watch-winder/*.{jpg,png}', { eager: true, import: 'default' })));
</script>
