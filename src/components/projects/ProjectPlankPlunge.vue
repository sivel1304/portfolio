<template>
  <ProjectSection class="" title="Plank Plunge" :tools="['Unity 6', 'C# in Visual Studio', 'Audacity', 'Waveform 13']">
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
      <div class="flex justify-center">
        <div class="relative mx-auto w-[70vw] pb-[37.125%] h-0">
          <iframe class="absolute top-0 left-0 h-full w-[66vw]" title="vimeo-player"
            src="https://player.vimeo.com/video/1097334866?h=b51e7b7e6f"
            allow="autoplay; fullscreen; picture-in-picture"></iframe>
        </div>
      </div>
    </template>
  </ProjectSection>
</template>

<script setup>
import ProjectSection from "../ProjectSection.vue";
</script>
