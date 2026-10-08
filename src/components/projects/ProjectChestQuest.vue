<template>
    <ProjectSection title="Chest Quest" :index="9" tagline="AR TREASURE HUNT GAME"
        :tools="['Unity 6.3', 'C#', 'Google ARCore', 'Firebase Realtime DB']">
        <template v-slot:description>
            <p class="text-[14.5px] leading-[1.75] text-white/75 font-light">
                Hybrid meetings often struggle with unequal participation and difficulty bridging co-located and
                remote participants. This project explores how multimodal Augmented Reality can enhance hybrid
                icebreaker activities.
                <br><br>
                Chest Quest is a pirate-themed AR escape-room activity where participants use their smartphones to
                uncover clues, solve puzzles, and collaboratively progress. Each player receives unique information,
                making communication and cooperation essential.
                <br><br>
                Three prototype versions were built to study the effect of multimodal feedback; a controlled study
                with 18 participants measured workload, usability, engagement, and social presence.
            </p>
        </template>

        <template v-slot:image>
            <div class="relative w-full pt-[56.25%] rounded-md border border-white/10 overflow-hidden">
                <iframe class="absolute inset-0 w-full h-full border-0"
                    src="https://www.youtube.com/embed/f1FuONT2_u0?si=Y3HUl-74y9kcGqZ3" title="Chest Quest video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img v-for="(image, index) in images" :key="index" :src="image" alt="Chest Quest"
                    class="w-full h-[260px] object-contain bg-surface rounded-md border border-white/10" />
            </div>
        </template>
    </ProjectSection>
</template>

<script setup>
import { ref } from 'vue';

import ProjectSection from "../ProjectSection.vue";

const images = ref(Object.values(import.meta.glob('../../assets/project-images/chest-quest/*.{jpg,png}', { eager: true, import: 'default' })));
</script>
