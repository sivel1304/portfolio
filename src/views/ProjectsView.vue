<template>
  <div class="w-full max-w-[1280px] mx-auto pt-24">

    <!-- hero -->
    <div
      class="relative px-5 md:px-16 pt-10 md:pt-[70px] pb-12 border-b border-white/10 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[length:48px_48px]">
      <div class="font-mono text-xs text-secondary tracking-[0.1em] mb-4">SELECTED WORK</div>
      <h1 class="text-[clamp(38px,6vw,64px)] leading-none font-bold tracking-tight m-0">Projects</h1>
      <p class="mt-6 max-w-[480px] text-[16px] leading-relaxed text-white/60 font-light">
        Software, hardware, and everything in between — ten builds spanning XR, robotics, games, and IoT.
      </p>
    </div>

    <div class="px-5 md:px-16 pt-10 md:pt-14 pb-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <ProjectCard v-for="project in projects" :key="project.route" :project="project" />
      </div>
    </div>

    <!-- work in progress -->
    <div class="border-t border-white/10 px-5 md:px-16 pt-10 md:pt-14 pb-20">
      <div class="font-mono text-xs text-white/40 tracking-[0.1em] mb-8">MORE — WORK IN PROGRESS</div>
      <div class="flex flex-col gap-16">
        <ProjectFussball></ProjectFussball>
        <ProjectSensorBoards></ProjectSensorBoards>
        <ProjectDiscoHug></ProjectDiscoHug>
        <ProjectFalafelFather></ProjectFalafelFather>
        <ProjectSynth></ProjectSynth>
      </div>
    </div>

  </div>
</template>

<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
import { projects } from '@/data/projects';
import ProjectFussball from "@/components/projects/ProjectFussball.vue";
import ProjectSensorBoards from "@/components/projects/ProjectSensorBoards.vue";
import ProjectDiscoHug from "@/components/projects/ProjectDiscoHug.vue";
import ProjectFalafelFather from "@/components/projects/ProjectFalafelFather.vue";
import ProjectSynth from "@/components/projects/ProjectSynth.vue";
</script>
