<template>
    <ShortProjectSection title="Sketch-n-Sow"
        :tools="['Unity 6.3', 'C#', 'Meta XR SDK', 'Unity Netcode', 'Meta Quest 3S', 'Logitech MX Ink Stylus', 'Wit.ai', 'Meta Voice SDK', 'Blender']">
        <template v-slot:description>
            <p class="opacity-90">
                We present Sketch-n-Sow, a co-located Mixed Reality (MR) brainstorming system in which ideas are embodied as seeds and flowers that participants sketch, 
                cultivate, and organize throughout a shared physical space. The system structures sessions into four gamified phases alternating between individual and collaborative work, 
                combining stylus-based drawing, hand tracking, and speech-to-text input.
            </p>
        </template>

        <template v-slot:image>
            <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-5 justify-center">
                <div class="relative w-full overflow-hidden rounded-md shadow-lg" style="padding-top: 56.25%;">

                    <iframe class="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/U7o4b0k55_o?si=febQY9rssYFoQUWo" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <img v-for="(image, index) in images" :key="index" :src="image" alt="" class="mx-auto w-2/3" />

            </div>
        </template>
    </ShortProjectSection>
</template>

<script setup>
import { ref } from 'vue';

import ShortProjectSection from "../ShortProjectSection.vue";

// Dynamically import images
const images = ref(Object.values(import.meta.glob('../../assets/project-images/sketch-n-sow/*.{jpg,png}', { eager: true, import: 'default' })));

</script>
