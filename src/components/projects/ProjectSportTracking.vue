<template>
    <ProjectSection title="Sports Tracking" :index="12" tagline="IOT AND P2P SPORTS TRACKING"
        :tools="['MQTT', 'SQLite3', 'ESP32 UWB DW3000', 'C', 'Arduino IDE', 'HTML', 'CSS', 'Javascript', 'Python', 'Flask']">
        <template v-slot:description>
            <p class="text-[14.5px] leading-[1.75] text-white/75 font-light">
                An Internet of Things system which tracks players' live positions on a football field, but could
                easily be implemented in most other sports. The system consists of statically placed anchors in two
                corners of the pitch, and tags attached to players moving around the pitch. Tags and anchors
                communicate using Ultra Wide Band radio signals in a peer-to-peer manner and, using bilateration,
                calculate the position of the tags on the pitch — environment-independent and settable up in any
                context, indoors or outdoors.
                <br><br>
                Based on this data, the system generates a live feed of player positions, a replay feature to
                re-watch any previous match, and a heat map displaying players' positions throughout an entire match
                — all implemented and displayed through a web application.
            </p>
        </template>

        <template v-slot:image>
            <div class="relative w-full pt-[56.25%] rounded-md border border-white/10 overflow-hidden">
                <iframe class="absolute inset-0 w-full h-full border-0"
                    src="https://www.youtube.com/embed/yYARx7luGWI?si=r8yyMpYQrRKzjm2g" title="Sports Tracking video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img v-for="(image, index) in images" :key="index" :src="image" alt="Sports Tracking"
                    class="w-full h-[260px] object-contain bg-surface rounded-md border border-white/10" />
            </div>
        </template>
    </ProjectSection>
</template>

<script setup>
import { ref } from 'vue';
import ProjectSection from "../ProjectSection.vue";

const images = ref(Object.values(import.meta.glob('../../assets/project-images/p2p/*.{jpg,png}', { eager: true, import: 'default' })));
</script>
