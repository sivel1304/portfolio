<template>
  <ProjectSection title="Alarm Clock" :index="11" tagline="HOMEMADE ALARM CLOCK">
    <template v-slot:description>
      <p class="text-[14.5px] leading-[1.75] text-white/75 font-light">
        A homemade alarm clock build. Write-up coming soon — check back for tools, process, and details.
      </p>
    </template>

    <template v-slot:image>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <img v-for="(image, index) in images" :key="index" :src="image" alt="Alarm Clock"
          class="w-full h-[260px] object-contain bg-surface rounded-md border border-white/10" />
      </div>
    </template>
  </ProjectSection>
</template>

<script setup>
import { ref } from 'vue';
import ProjectSection from "../ProjectSection.vue";

const images = ref(Object.values(import.meta.glob('../../assets/project-images/alarm-clock/*.jpg', { eager: true, import: 'default' })));
</script>
