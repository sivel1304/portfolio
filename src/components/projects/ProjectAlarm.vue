<template>
  <ProjectSection
    class="bg-primary"
    title="Alarm Clock"
    :tools="['...', '...', '...']"
  >
    <template v-slot:description>
      <p class="opacity-90">
      some explanation here...
      </p>
    </template>

    <template v-slot:image>
    <div class="ml-8 w-auto h-fit rounded-sm shadow-lg">
      <img class="w-auto h-40 rounded-sm " src="../../assets/project-images/alarm-clock.jpg" alt="Alarm Clock">
      </div>
    </template>
  </ProjectSection>
</template>

<script setup>
import ProjectSection from "../ProjectSection.vue";
</script>
