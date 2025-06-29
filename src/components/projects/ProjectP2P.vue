<template>
  <ShortProjectSection title="Sports Tracking" :tools="['...', '...', '...']">
    <template v-slot:description>
      <p class="opacity-90">
      </p>
    </template>

    <template v-slot:image>
      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-5 justify-center">
        <div class="relative w-full overflow-hidden rounded-md shadow-lg" style="padding-top: 56.25%;">
          <iframe class="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/yYARx7luGWI?si=r8yyMpYQrRKzjm2g" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <img v-for="(image, index) in images" :key="index" :src="image" alt="Tattoo Robot Image"
          class="mx-auto w-2/3" />

      </div>
    </template>
  </ShortProjectSection>
</template>

<script setup>
import { ref } from 'vue';

import ShortProjectSection from "../ShortProjectSection.vue";

// Dynamically import images
const images = ref(Object.values(import.meta.glob('../../assets/project-images/p2p/*.{jpg,png}', { eager: true, import: 'default' })));

</script>
