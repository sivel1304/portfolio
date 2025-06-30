<template>
  <ProjectSection title="Plank Plunge" :tools="['Unity 6', 'C# in Visual Studio', 'Audacity', 'Waveform 13']">
    <template v-slot:description>
      <p class="opacity-90">
        Plank Plunge is a thrilling game developed for K-Jam 2024, inspired by the classic
        Learn to Fly. In this game, you take the leap off a plank, aiming to soar as far
        as possible. Along the way, you can upgrade key abilities, such as increasing jump
        power or deploying explosive parrots to propel you even further. It's all about
        strategy, timing, and achieving the longest plunge! All assets, sounds (except
        melody), and coding were created entirely by my teammates and I, in 2 days.
      </p>

      <div class="flex mt-4">
        <p class="opacity-90">You can try out the game on</p>
        <a href="https://sivel8k.itch.io/plank-plunge" class="ml-1 underline underline-offset-2 text-primary">
          <p class="">itch.io</p>
        </a>
      </div>

    </template>

    <template v-slot:image>
      <div class="w-full grid grid-cols-2 gap-5 justify-center">
        <img v-for="(image, index) in images" :key="index" :src="image" alt="DoMo Image" :class="getImageClass(index)"
          class="mx-auto" />

        <div class="relative col-span-2 w-full overflow-hidden rounded-md shadow-lg" style="padding-top: 56.25%;">
          <iframe class="absolute top-0 left-0 w-full h-full"
            src="https://player.vimeo.com/video/1097334866?h=b51e7b7e6f" title="vimeo player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

      </div>
    </template>
  </ProjectSection>
</template>

<script setup>
import { ref } from 'vue';
import ProjectSection from "../ProjectSection.vue";

// Dynamically import images
const images = ref(Object.values(import.meta.glob('../../assets/project-images/plank-plunge/*.{jpg,png}', { eager: true, import: 'default' })));
// Function to determine the class for each image
const getImageClass = (index) => {
  if (index % 3 === 1 || index % 3 === 2) return 'col-span-1'; // Two images in the second row
  return 'col-span-2'; // Single image in the next row
};
</script>
