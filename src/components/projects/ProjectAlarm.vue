<template>
  <ProjectSection title="Alarm Clock" :tools="['...', '...', '...']">
    <template v-slot:description>
      <p class="opacity-90">
      </p>
    </template>

    <template v-slot:image>
      <div class="w-3/4 flex flex-col justify-center">
        <img v-for="(image, index) in images" :key="index" :src="image" alt="Alarm Clock Image"
          class=" py-10 rounded-md" />
      </div>
    </template>
  </ProjectSection>
</template>

<script setup>
import { ref } from 'vue';
import ProjectSection from "../ProjectSection.vue";

// Dynamically import images
const images = ref(Object.values(import.meta.glob('../../assets/project-images/alarm-clock/*.jpg', { eager: true, import: 'default' })));


</script>
