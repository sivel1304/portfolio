<template>
    <ProjectSection title="Hungry Monkeys" :index="4" tagline="WIRELESS BALL-GAME FOR CHILDREN"
        :tools="['Fusion360', 'Arduino (C/C++)']">
        <template v-slot:description>
            <p class="text-[14.5px] leading-[1.75] text-white/75 font-light">
                An outdoor ball-catching game for 6-8 year olds, designed to develop gross motor skills like
                hand-eye coordination and physical control.
                <br><br>
                The game involves a shooter and two monkey-shaped boxes. Players catch lightweight plastic "fruits"
                shot from the shooter — one monkey's eye lights up to indicate where the ball should be placed,
                becoming random after two rounds. The shooter tracks total time, with the goal of the shortest run;
                players can compete or chase personal bests.
            </p>
        </template>
        <template v-slot:image>
            <div class="relative w-full pt-[56.25%] rounded-md border border-white/10 overflow-hidden">
                <iframe class="absolute inset-0 w-full h-full border-0"
                    src="https://player.vimeo.com/video/1097334954?h=2c4fe4bebc" title="Hungry Monkeys video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img v-for="(image, index) in images" :key="index" :src="image" alt="Hungry Monkeys"
                    class="w-full h-[260px] object-contain bg-surface rounded-md border border-white/10" />
            </div>
        </template>
    </ProjectSection>
</template>

<script setup>
import { ref } from 'vue';
import ProjectSection from "../ProjectSection.vue";

const images = ref(Object.values(import.meta.glob('../../assets/project-images/hungry-monkeys/*.{jpg,png}', { eager: true, import: 'default' })));
</script>
