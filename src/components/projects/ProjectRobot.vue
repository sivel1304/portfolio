<template>
  <ProjectSection
    class="bg-backgrund-900"
    title="Tattoo Robot"
    :tools="['...', '...', '...']"
  >
    <template v-slot:description>
      <p class="opacity-90">
      some explanation here...
      </p>
    </template>

    <template v-slot:image>
    <div class="ml-8 w-fit h-auto rounded-sm shadow-lg">
      <img class="w-full h-auto rounded-sm " src="../../assets/project-images/???.png" alt="Tattoo robot machine">
      </div>
    </template>
  </ProjectSection>
</template>

<script setup>
import ProjectSection from "../ProjectSection2.vue";
</script>
