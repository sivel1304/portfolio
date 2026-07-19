<template>
    <ProjectSection title="Sports Tracking" text-color="text-xl" :tools="['MQTT', 'SQLite3', 'ESP32 UWB DW3000', 'C', 'Arduino IDE', 'HTML', 'CSS', 'Javascript', 'Python', 'Flask']">
        <template v-slot:description>
            <p class="opacity-90">
                We have created an Internet of Things system which tracks players
                live positions on a football field, but could easily be implemented in
                most other sports. The system consists of statically placed anchors in
                two corners of the pitch, and tags attached to players moving around
                the pitch. Tags and anchors communicate using Ultra Wide Band radio
                signals in a peer-to-peer manner and using bilateration they are able
                to calculate the position of the tags on the pitch. In other words, the
                system is environment-independent and can be set up in any context
                indoors or outdoors. Based on this data, we generate both a live feed
                of the players positions, a replay feature enabling you to re-watch the
                live feed of any previous match, and lastly a heat map which is a
                way of displaying players’ positions throughout an entire match. All
                of these analytical tools are implemented and displayed using a web
                application.
            </p>
        </template>

        <template v-slot:image>
            <div class="w-full grid grid-cols-2 gap-5 justify-center">
                <div class="relative col-span-2 w-full overflow-hidden rounded-md shadow-lg"
                    style="padding-top: 56.25%;">
                    <iframe class="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/yYARx7luGWI?si=r8yyMpYQrRKzjm2g" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <img v-for="(image, index) in images" :key="index" :src="image" alt="Sketch-n-Sow Image"
                    :class="getImageClass(index)" class="mx-auto" />

            </div>
        </template>


    </ProjectSection>
</template>

<script setup>
import { ref } from 'vue';
import ProjectSection from "../ProjectSection.vue";

// Dynamically import images
const images = ref(Object.values(import.meta.glob('../../assets/project-images/p2p/*.{jpg,png}', { eager: true, import: 'default' })));
// Function to determine the class for each image
const getImageClass = (index) => {
    if (index % 3 === 1 || index % 3 === 2) return 'col-span-1'; // Two images in the second row
    return 'col-span-2'; // Single image in the next row
};
</script>
