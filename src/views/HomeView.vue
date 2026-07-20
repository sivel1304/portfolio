<template>
  <div class="w-full max-w-[1280px] mx-auto pt-24">

    <!-- hero -->
    <div
      class="relative px-5 md:px-16 pt-10 md:pt-[70px] pb-8 md:pb-14 border-b border-white/10 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[length:48px_48px]">
      <div class="flex flex-wrap justify-center md:justify-between items-center gap-8">
        <div class="flex-1 min-w-[280px]">
          <div class="font-mono text-xs text-secondary tracking-[0.1em] mb-4">SOFTWARE · HARDWARE · XR</div>
          <h1 class="text-[clamp(38px,6vw,64px)] leading-none font-bold tracking-tight m-0">Viktor Nielsen</h1>
          <p class="mt-6 max-w-[480px] text-[16px] leading-relaxed text-white/60 font-light">
            Master's in IT Product Development, Aarhus University. Building at the intersection of software, hardware
            and XR. Check out the projects below, or get in touch.
          </p>
          <div class="flex gap-4 mt-8">
            <a href="mailto:viktor00@live.dk"
              class="border border-primary bg-primary text-backgrund-900 px-[26px] py-3 rounded-md text-[13px] font-semibold">
              Get in touch
            </a>
            <a href="https://www.linkedin.com/in/viktor-s-aa-nielsen/" target="_blank" rel="noopener noreferrer"
              class="border border-white/20 text-white/80 px-[26px] py-3 rounded-md text-[13px] font-medium">
              LinkedIn ↗
            </a>
          </div>
        </div>
        <BracketPhoto size="clamp(160px,45vw,220px)" />
      </div>
    </div>

    <!-- stat strip -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border-b border-white/10">
      <div class="bg-backgrund-900 px-8 py-6">
        <div class="font-mono text-[11px] text-primary mb-2">01 — LANGUAGES</div>
        <div class="text-[13px] text-white/70 leading-relaxed">Java, JS/TS, C, C++, C#, Python</div>
      </div>
      <div class="bg-backgrund-900 px-8 py-6">
        <div class="font-mono text-[11px] text-secondary mb-2">02 — STACK</div>
        <div class="text-[13px] text-white/70 leading-relaxed">Vue, React, Unity, Electron, Firebase</div>
      </div>
      <div class="bg-backgrund-900 px-8 py-6">
        <div class="font-mono text-[11px] text-third mb-2">03 — FOCUS</div>
        <div class="text-[13px] text-white/70 leading-relaxed">XR, IoT, Embedded Systems &amp; Hardware</div>
      </div>
    </div>

    <!-- projects -->
    <div class="px-5 md:px-16 pt-10 md:pt-14 pb-16">
      <div class="flex justify-between items-baseline gap-2 flex-wrap mb-7">
        <h2 class="text-[22px] font-semibold m-0">Projects</h2>
        <span class="font-mono text-xs text-white/40">6 OF 10 SHOWN</span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <ProjectCard v-for="project in featuredProjects" :key="project.route" :project="project" />
      </div>
      <div class="flex justify-center mt-9">
        <RouterLink to="/projects" class="border border-white/20 text-white/80 px-7 py-3 rounded-md text-[13px] font-medium">
          View All Projects →
        </RouterLink>
      </div>
    </div>

  </div>
</template>

<script setup>
import BracketPhoto from '@/components/BracketPhoto.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import { projects } from '@/data/projects';

const featuredProjects = projects.slice(0, 6);
</script>
