<template>
  <div class="w-full scrollbar-hidden snap-mandatory snap-y overflow-auto h-[100vh] ">

    <header class="snap-start min-h-[35rem] top-0 left-0 right-0">
      <NameHeader></NameHeader>
    </header>

    <div class="relative">

      <div class="absolute w-full h-full bg-backgrund-900 -z-10"></div>

      <div class="relative z-0 px-20">
        <div class="snap-start flex h-[100vh] bg-backgrund-900 py-24">
          <AboutSection></AboutSection>
          <ProjectOverview></ProjectOverview>
        </div>

      </div>
    </div>


  </div>
</template>

<script setup>
import ProjectOverview from "@/components/ProjectOverview.vue";
import NameHeader from "../components/NameHeader5.vue";
import AboutSection from "@/components/AboutSection.vue";


</script>
