<template>
  <ProjectSection
    class="bg-backgrund-900"
    title="This Website"
    :tools="['Vue 3', 'Tailwind CSS', 'Javascript', 'Three.js']"
  >
    <template v-slot:description>
      <p class="opacity-90">
      some explanation here...
      </p>
    </template>

    <template v-slot:image>
      <img class="w-full h-auto rounded-sm" src="../../assets/project-images/portfolio.png" alt="Frontpage of this website">
    </template>
  </ProjectSection>
</template>

<script setup>
import ProjectSection from "../ProjectSection.vue";
</script>
