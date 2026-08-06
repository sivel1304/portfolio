<template>
  <ProjectSection title="Orbiton V1" :index="12" tagline="DIGITAL SYNTHESIZER">
    <template v-slot:description>
      <p class="text-[14.5px] leading-[1.75] text-white/75 font-light">
        A work in progress — full write-up, tools, and process notes coming soon.
      </p>
    </template>

    <template v-slot:image>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <img v-for="(image, index) in images" :key="index" :src="image" alt="Orbiton V1 Digital Synth"
          class="w-full h-[260px] object-contain bg-surface rounded-md border border-white/10" />
      </div>
    </template>
  </ProjectSection>
</template>

<script setup>
import { ref } from 'vue';
import ProjectSection from "../ProjectSection.vue";

const images = ref(Object.values(import.meta.glob('../../assets/project-images/synth/*.{jpg,png}', { eager: true, import: 'default' })));
</script>
