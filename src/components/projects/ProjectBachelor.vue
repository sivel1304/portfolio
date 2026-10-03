<template>
    <ProjectSection title="AR Text Entry" :index="8" tagline="AR TEXT INPUT RESEARCH"
        :tools="['Unity 2022.3', 'MRTK3', 'C#', 'HoloLens 2']">
        <template v-slot:description>
            <p class="text-[14.5px] leading-[1.75] text-white/75 font-light">
                Mid-air text entry in AR/VR is one of the bottlenecks to making headsets pleasant and efficient to
                use. Building on the GAZE&amp;PINCH selection technique (gaze toward a UI element, then pinch thumb
                and index finger to select), this bachelor's project developed two novel mid-air text entry
                techniques: BIMANUAL GAZE&amp;PINCH and GAZE&amp;PINCH W.SWIPE.
                <br><br>
                A user study with twelve participants assessed the novel techniques against GAZE&amp;PINCH as the
                benchmark.
            </p>
        </template>

        <template v-slot:image>
            <div class="relative w-full pt-[56.25%] rounded-md border border-white/10 overflow-hidden">
                <iframe class="absolute inset-0 w-full h-full border-0"
                    src="https://www.youtube.com/embed/orQQWn1l5jY?si=u0dMAjT5BPtI96NI" title="AR Text Entry video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img v-for="(image, index) in images" :key="index" :src="image" alt="AR Text Entry"
                    class="w-full h-[260px] object-contain bg-surface rounded-md border border-white/10" />
            </div>
        </template>
    </ProjectSection>
</template>

<script setup>
import { ref } from 'vue';
import ProjectSection from "../ProjectSection.vue";

const images = ref(Object.values(import.meta.glob('../../assets/project-images/bachelor/*.{jpg,png}', { eager: true, import: 'default' })));
</script>
