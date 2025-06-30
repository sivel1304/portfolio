<template>
    <ProjectSection title="Hungry Monkeys" text-color="text-xl" :tools="['Fusion360', 'C/C# in Arduino']">
        <template v-slot:description>
            <p class="opacity-90">
                Hungry Monkeys is an outdoor ball-catching game for 6-8 year olds, designed to develop gross motor
                skills like hand-eye coordination and physical control. The game involves a shooter and two
                monkey-shaped boxes. Players catch lightweight plastic balls ("fruits") shot from the shooter. One
                monkey's eye lights up, indicating where the ball should be placed. After two rounds, the monkey
                light-up becomes random. The game continues until a set number of balls are placed. The shooter displays
                the total time, with the goal being the shortest time. Players can compete or improve personal bests.
            </p>
        </template>
        <template v-slot:image>
            <div class="w-3/4 grid grid-cols-2 gap-5 justify-center">
                <img v-for="(image, index) in images" :key="index" :src="image" alt="Watch Winder Image"
                    :class="getImageClass(index)" class="mx-auto" />
                <div class="relative col-span-2 w-full h-[66vh] overflow-hidden rounded-md shadow-lg mb-4"
                    style="padding-top: 56.25%;">
                    <iframe class="absolute top-0 left-0 w-full h-full"
                        src="https://player.vimeo.com/video/1097334954?h=2c4fe4bebc" title="vimeo player"
                        frameborder="0"
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
const images = ref(Object.values(import.meta.glob('../../assets/project-images/hungry-monkeys/*.{jpg,png}', { eager: true, import: 'default' })));
// Function to determine the class for each image
const getImageClass = (index) => {
    if (index % 3 === 1 || index % 3 === 2) return 'col-span-1'; // Two images in the second row
    return 'col-span-2'; // Single image in the next row
};
</script>
