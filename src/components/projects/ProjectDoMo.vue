<template>
    <ProjectSection title="DoMo" :tools="['Python', 'React', 'Supabase', 'C++', 'Vercel', 'TTN']">
        <template v-slot:description>
            <p class="opacity-90">
                DoMo is a low-cost, DIY monitoring system developed to help the Danish Red Cross track donations of
                surplus building materials from construction sites. Field research showed that reusable materials are
                often discarded as waste due to a lack of practical donation solutions.

                Instead of adding tasks for tradespeople, DoMo uses a simple camera box to take periodic photos of
                donation areas and uploads them to a website. This allows Red Cross volunteers to remotely assess
                donation volume and plan pickups efficiently.

                Built with scalability and sustainability in mind, DoMo is easy to replicate and deploy. Real-world
                testing highlighted some technical challenges but confirmed its value in supporting circular practices
                and improving donation logistics.
            </p>
        </template>
        <template v-slot:image>
            <div class="w-full grid grid-cols-2 gap-5 justify-center">
                <img v-for="(image, index) in images" :key="index" :src="image" alt="DoMo Image"
                    :class="getImageClass(index)" class="mx-auto" />

                <div class="relative col-span-2 w-full overflow-hidden rounded-md shadow-lg"
                    style="padding-top: 56.25%;">
                    <iframe class="absolute top-0 left-0 w-full h-full"
                        src="https://player.vimeo.com/video/1097322908?h=0d5e54bb20" title="vimeo player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div class="relative col-span-2 w-full overflow-hidden rounded-md shadow-lg"
                    style="padding-top: 56.25%;">
                    <iframe class="absolute top-0 left-0 w-full h-full"
                        src="https://player.vimeo.com/video/1097322946?h=559f19fb01" title="vimeo player"
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
const images = ref(Object.values(import.meta.glob('../../assets/project-images/domo/*.{jpg,png}', { eager: true, import: 'default' })));
// Function to determine the class for each image
const getImageClass = (index) => {
    if (index % 3 === 1 || index % 3 === 2) return 'col-span-1'; // Two images in the second row
    return 'col-span-2'; // Single image in the next row
};
</script>
