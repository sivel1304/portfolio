<template>
  <ProjectSection title="Plank Plunge" :index="6" tagline="PIRATE GAME"
    :tools="['Unity 6', 'C# / Visual Studio', 'Audacity', 'Waveform 13']">
    <template v-slot:description>
      <p class="text-[14.5px] leading-[1.75] text-white/75 font-light">
        A game built for K-Jam 2024, inspired by the classic Learn to Fly. Take the leap off a plank and aim to soar
        as far as possible, upgrading abilities like jump power or deploying explosive parrots for extra distance —
        all strategy, timing, and chasing the longest plunge.
        <br><br>
        All assets, sounds (except the melody), and code were made entirely by me and my teammates, in 2 days.
        <br><br>
        Try it on <a href="https://sivel8k.itch.io/plank-plunge" target="_blank" rel="noopener noreferrer" class="text-primary">itch.io</a>.
      </p>
    </template>

    <template v-slot:image>
      <div class="relative w-full pt-[56.25%] rounded-md border border-white/10 overflow-hidden">
        <iframe class="absolute inset-0 w-full h-full border-0"
          src="https://player.vimeo.com/video/1097334866?h=b51e7b7e6f" title="Plank Plunge video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <img v-for="(image, index) in images" :key="index" :src="image" alt="Plank Plunge"
        class="w-full h-[320px] object-contain bg-surface rounded-md border border-white/10" />
    </template>
  </ProjectSection>
</template>

<script setup>
import { ref } from 'vue';
import ProjectSection from "../ProjectSection.vue";

const images = ref(Object.values(import.meta.glob('../../assets/project-images/plank-plunge/*.{jpg,png}', { eager: true, import: 'default' })));
</script>
