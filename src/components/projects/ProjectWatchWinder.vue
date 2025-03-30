<template>
  <ProjectSection title="Watch Winder" :tools="['...', '...', '...']">
    <template v-slot:description>
      <p class="opacity-90">
        some explanation here...
      </p>
    </template>

    <template v-slot:image>
      <div class="w-3/4 grid grid-cols-2 gap-5 justify-center">
        <img v-for="(image, index) in images" :key="index" :src="image" alt="Watch Winder Image"
        :class="getImageClass(index)" class="mx-auto"/>
        <video controls class="col-span-2 h-auto rounded-sm">
        <source src="../../assets/project-images/watch-winder/video1.mp4" type="video/mp4" />
        <!-- Fallback text if the video cannot be played -->
        Your browser does not support the video tag.
      </video>
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