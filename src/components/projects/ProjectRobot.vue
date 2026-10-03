<template>
  <ProjectSection title="Tattoo Robot" :index="2" tagline="HOMEMADE TATTOO ROBOT"
    :tools="['Vue', 'JS', 'Electron', 'GRBL', 'Python', 'OpenCV', 'Arduino', 'C/C++']"
    :links="[
      { label: 'Desktop UI (robot-desktop)', href: 'https://github.com/sivel1304/robot-desktop' },
      { label: 'GCODE generator (python-opencv)', href: 'https://github.com/sivel1304/python-opencv' },
    ]">
    <template v-slot:description>
      <p class="text-[14.5px] leading-[1.75] text-white/75 font-light">
        A project still in development: a CNC-style machine with a tattoo gun attached, aiming to tattoo a design
        uploaded to the robot.
        <br><br>
        Custom software built alongside it — a
        <a class="text-primary" href="https://github.com/sivel1304/robot-desktop" target="_blank" rel="noopener noreferrer">UI for choosing tattoos</a>,
        a <a class="text-primary" href="https://github.com/sivel1304/python-opencv" target="_blank" rel="noopener noreferrer">GCODE generator</a>
        that turns tattoo images into machine paths, and computer vision to detect skin and adjust tattoo position.
        Recently upgraded with a BTT SKR Mini E3 control board.
      </p>
    </template>

    <template v-slot:image>
      <div class="relative w-full pt-[56.25%] rounded-md border border-white/10 overflow-hidden">
        <iframe class="absolute inset-0 w-full h-full border-0"
          src="https://player.vimeo.com/video/1097334984?h=d08eeff3c0" title="Tattoo Robot video"
          allow="autoplay; fullscreen; picture-in-picture"></iframe>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <img v-for="(image, index) in images" :key="index" :src="image" alt="Tattoo Robot"
          class="w-full h-[260px] object-contain bg-surface rounded-md border border-white/10" />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="relative w-full pt-[56.25%] rounded-md border border-white/10 overflow-hidden">
          <iframe class="absolute inset-0 w-full h-full border-0" title="vimeo-player"
            src="https://player.vimeo.com/video/1097335014?h=8237891505"
            allow="autoplay; fullscreen; picture-in-picture"></iframe>
        </div>
        <div class="relative w-full pt-[56.25%] rounded-md border border-white/10 overflow-hidden">
          <iframe class="absolute inset-0 w-full h-full border-0" title="vimeo-player"
            src="https://player.vimeo.com/video/1097335003?h=acf2443236"
            allow="autoplay; fullscreen; picture-in-picture"></iframe>
        </div>
      </div>
      <div class="relative w-full pt-[56.25%] rounded-md border border-white/10 overflow-hidden">
        <iframe class="absolute inset-0 w-full h-full border-0" title="vimeo-player"
          src="https://player.vimeo.com/video/1097334991?h=485e78c31b"
          allow="autoplay; fullscreen; picture-in-picture"></iframe>
      </div>
    </template>
  </ProjectSection>
</template>

<script setup>
import { ref } from 'vue';
import ProjectSection from "../ProjectSection.vue";

const images = ref(Object.values(import.meta.glob('../../assets/project-images/robot/*.{jpg,png}', { eager: true, import: 'default' })));
</script>
