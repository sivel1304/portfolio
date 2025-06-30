<template>
  <ProjectSection title="Watch Winder" :tools="['Fusion360', 'Arduino', 'C/C++', 'Creality 3D Printing']">
    <template v-slot:description>
      <p class="opacity-90">
        I designed and built this automatic watch winder from scratch. The result is a functional and stylish device
        that keeps automatic watches wound and ready to wear.
      </p>
    </template>

    <template v-slot:image>
      <div class="w-full grid grid-cols-2 gap-5 justify-center">
        <img v-for="(image, index) in images" :key="index" :src="image" alt="Watch Winder Image"
          :class="getImageClass(index)" class="mx-auto" />
        <div class="relative col-span-2 w-screen h-full rounded-md" style="padding-top: 56.25%;">
          <iframe class="absolute top-0 left-0 w-screen h-full"
            src="https://player.vimeo.com/video/1097335024?h=97bb90c885" title="vimeo-player" frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"></iframe>
        </div>

      </div>
    </template>
  </ProjectSection>
</template>

<script setup>
import { ref } from 'vue';
import ProjectSection from "../ProjectSection.vue";

// Dynamically import images
const images = ref(Object.values(import.meta.glob('../../assets/project-images/watch-winder/*.{jpg,png}', { eager: true, import: 'default' })));

// Function to determine the class for each image
const getImageClass = (index) => {
  if (index % 3 === 1 || index % 3 === 2) return 'col-span-1'; // Two images in the second row
  return 'col-span-2'; // Single image in the next row
};

</script>