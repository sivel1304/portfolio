<template>
    <ProjectSection title="Sketch-n-Sow" :index="1" tagline="MR BRAINSTORMING TOOL"
        :tools="['Unity 6.3', 'C#', 'Meta XR SDK', 'Unity Netcode', 'Meta Quest 3S', 'Logitech MX Ink Stylus', 'Wit.ai', 'Meta Voice SDK', 'Blender']">
        <template v-slot:description>
            <p class="text-[14.5px] leading-[1.75] text-white/75 font-light">
                Brainstorming is one of the most common approaches to collaborative idea generation, yet the tools
                teams rely on have limitations around organization, persistence, and participation. Most Extended
                Reality (XR) collaboration tools reproduce these same artifacts in virtual space rather than
                exploiting what the medium uniquely enables.
                <br><br>
                Sketch-n-Sow is a co-located Mixed Reality brainstorming system in which ideas are embodied as seeds
                and flowers that participants sketch, cultivate, and organize throughout a shared physical space. The
                system structures sessions into four gamified phases alternating between individual and collaborative
                work, combining stylus-based drawing, hand tracking, and speech-to-text input.
                <br><br>
                Evaluated in a qualitative user study with six dyads, using observation, focus group interviews, and
                questionnaires.
            </p>
        </template>

        <template v-slot:image>
            <div class="relative w-full pt-[56.25%] rounded-md border border-white/10 overflow-hidden">
                <iframe class="absolute inset-0 w-full h-full border-0"
                    src="https://www.youtube.com/embed/U7o4b0k55_o?si=febQY9rssYFoQUWo" title="Sketch-n-Sow video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img v-for="(image, index) in images" :key="index" :src="image" alt="Sketch-n-Sow"
                    class="w-full h-[260px] object-contain bg-surface rounded-md border border-white/10" />
            </div>
        </template>
    </ProjectSection>
</template>

<script setup>
import { ref } from 'vue';

import ProjectSection from "../ProjectSection.vue";

const images = ref(Object.values(import.meta.glob('../../assets/project-images/sketch-n-sow/*.{jpg,png}', { eager: true, import: 'default' })));
</script>
