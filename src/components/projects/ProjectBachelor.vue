<template>
    <ProjectSection title="AR Text Entry" :tools="['Unity 2022.3.19f1', 'MRTK3', 'C#', 'Microsoft HoloLens 2']">
        <template v-slot:description>
            <p class="opacity-90">
                Mid-air text entry in AR/VR stands as one of the bottlenecks in making the use of
                HMDs more pleasant and efficient. Taking departure in the selection technique dubbed
                GAZE&PINCH (which works by the user gazing towards a UI-component and then finalizing the selection by pinching his thumb and index finger together) 
                we have developed two novel mid-air text entry techniques; BIMANUAL
                GAZE&PINCH and GAZE&PINCH W.SWIPE. We have conducted a user study with twelve
                participants to assess the novel techniques compared to GAZE&PINCH as the benchmark.
            </p>
        </template>

        <template v-slot:image>
            <div class="w-full grid grid-cols-2 gap-5 justify-center">
                <div class="relative col-span-2 w-full overflow-hidden rounded-md shadow-lg"
                    style="padding-top: 56.25%;">
                    <iframe class="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/orQQWn1l5jY?si=u0dMAjT5BPtI96NI" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <img v-for="(image, index) in images" :key="index" :src="image" alt="AR Text Entry Image"
                    :class="getImageClass(index)" class="mx-auto" />

            </div>
        </template>
    </ProjectSection>
</template>

<script setup>
import { ref } from 'vue';
import ProjectSection from "../ProjectSection.vue";

// Dynamically import images
// Dynamically import images
const images = ref(Object.values(import.meta.glob('../../assets/project-images/bachelor/*.{jpg,png}', { eager: true, import: 'default' })));
// Function to determine the class for each image
const getImageClass = (index) => {
    if (index % 3 === 1 || index % 3 === 2) return 'col-span-1'; // Two images in the second row
    return 'col-span-2'; // Single image in the next row
};

</script>
