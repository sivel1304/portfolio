<template>
  <ProjectSection
    title="Alarm Clock"
    :tools="['...', '...', '...']"
  >
    <template v-slot:description>
      <p class="opacity-90">
      some explanation here...
      </p>
    </template>

    <template v-slot:image>
      <div class="w-3/4 h-full mx-auto flex justify-center ">
        <button @click="previousImage" class="h-1/2 my-auto px-4 bg-backgrund-800">←</button>
        <img :src="images[currentImage]" alt="Alarm Clock Image" class=" py-10 rounded-md" />
        <button @click="nextImage" class="h-1/2 my-auto px-4 bg-backgrund-800">→</button>
      </div>
    </template>
  </ProjectSection>
</template>

<script setup>
import { ref } from 'vue';
import ProjectSection from "../ProjectSection2.vue";

// Dynamically import images
const images = ref(Object.values(import.meta.glob('../../assets/project-images/alarm-clock/*.jpg', { eager: true, import: 'default' })));

const currentImage = ref(0);

const nextImage = () => {
  currentImage.value = (currentImage.value + 1) % images.value.length;
};

const previousImage = () => {
  currentImage.value = (currentImage.value - 1 + images.value.length) % images.value.length;
};
</script>
