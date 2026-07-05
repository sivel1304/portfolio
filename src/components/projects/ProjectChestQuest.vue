<template>
    <ProjectSection title="Chest Quest" :tools="['Unity 6.3', 'C#', 'Google ARCore', 'Firebase Realtime Database']">
        <template v-slot:description>
            <p class="opacity-90">
                Hybrid meetings often struggle with unequal participation, re
                duced engagement, and difficulties establishing collaboration
                between co-located and remote participants. This project
                explores how multimodal Augmented Reality (AR) can en
                hance hybrid icebreaker activities.
                We present Chest Quest, a pirate-themed AR escape-room activity in which participants use their
                smartphones to uncover clues, solve puzzles,
                and collaboratively progress through the icebreaker. Each player receives unique information, making
                communication and cooperation essential.
                To investigate the effects of multimodal feedback on the user experience, we developed three versions of
                the prototype.
                Through a controlled user study with 18 participants, we measured workload, usability, engagement, and
                social presence.
            </p>
        </template>


        <template v-slot:image>
            <div class="w-full grid grid-cols-2 gap-5 justify-center">
                <div class="relative col-span-2 w-full overflow-hidden rounded-md shadow-lg"
                    style="padding-top: 56.25%;">
                    <iframe class="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/f1FuONT2_u0?si=Y3HUl-74y9kcGqZ3" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <img v-for="(image, index) in images" :key="index" :src="image" alt="Chest Quest Image"
                    :class="getImageClass(index)" class="mx-auto" />

            </div>
        </template>
    </ProjectSection>
</template>

<script setup>
import { ref } from 'vue';

import ProjectSection from "../ProjectSection.vue";

// Dynamically import images
const images = ref(Object.values(import.meta.glob('../../assets/project-images/chest-quest/*.{jpg,png}', { eager: true, import: 'default' })));
// Function to determine the class for each image
const getImageClass = (index) => {
    if (index % 3 === 1 || index % 3 === 2) return 'col-span-1'; // Two images in the second row
    return 'col-span-2'; // Single image in the next row
};

</script>
