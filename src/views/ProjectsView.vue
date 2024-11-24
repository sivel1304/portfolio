<template>
<div class="snap-mandatory snap-y overflow-auto h-[100vh]">
    <ProjectSection class="" title="Tattoo Robot"></ProjectSection>
    <ProjectSection class="bg-primary" title="Alarm Clock" textColor=""></ProjectSection>
    <ProjectSection class="" title="Plank Plunge">
    <template v-slot:description>
    <p class="opacity-90">Plank Plunge is a thrilling game developed for K-Jam 2024, inspired by the classic Learn to Fly. In this game, you take the leap off a plank, aiming to soar as far as possible. Along the way, you can upgrade key abilities, such as increasing jump power or deploying explosive parrots to propel you even further. It's all about strategy, timing, and achieving the longest plunge! All assets, sounds (except melody), and coding were created entirely by my teammates and I, in 2 days.</p>

    <div class="flex mt-4">
        <p class="opacity-90">You can try out the game on</p>
        <a href="https://sivel8k.itch.io/plank-plunge" class="ml-1 underline underline-offset-2 text-primary"><p class="">itch.io</p></a>
    </div>

    </template>
    <template v-slot:image>
    <video controls class="pl-8 w-fit h-auto">
          <source src="../assets/project-images/plank-plunge.mp4" type="video/mp4" />
          <!-- Fallback text if the video cannot be played -->
          Your browser does not support the video tag.
        </video>
        </template>
    </ProjectSection>
    <ProjectSection class="bg-primary" title="Alarm Clock" textColor="text-backgrund-800"></ProjectSection>
</div>


</template>

<script setup>
import ProjectSection from '../components/ProjectSection.vue';
</script>