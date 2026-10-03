<template>
    <ProjectSection title="DoMo" :index="5" tagline="SUSTAINABLE DEVELOPMENT PROJECT"
        :tools="['Raspberry Pi Zero W', 'Python', 'Heltec ESP32 (LoRa)', 'C++', 'React', 'Supabase', 'Vercel']">
        <template v-slot:description>
            <p class="text-[14.5px] leading-[1.75] text-white/75 font-light">
                A low-cost, DIY monitoring system built to help the Danish Red Cross track donations of surplus
                building materials from construction sites — field research showed reusable materials are often
                discarded as waste for lack of a practical donation pipeline.
                <br><br>
                A sustainability-focused system: a camera box uses a PIR sensor to protect tradespeople's privacy,
                then wirelessly sends the images over LoRa — a long-range, low-power protocol for wireless
                communication between distributed devices, chosen over WiFi and cellular for sites with no network
                access and near-zero running cost. It's implemented on a Raspberry Pi in Python, handling on-site
                sensor data collection and chunked wireless transmission for long-term, unattended operation.
                <br><br>
                Volunteers monitor donations remotely through a React and Supabase web dashboard. Real-world field
                testing surfaced technical challenges around lighting, LoRa coverage, and battery life, but confirmed
                the system's overall feasibility and value in supporting circular practices and donation logistics.
            </p>
        </template>
        <template v-slot:image>
            <div class="relative w-full pt-[56.25%] rounded-md border border-white/10 overflow-hidden">
                <iframe class="absolute inset-0 w-full h-full border-0"
                    src="https://player.vimeo.com/video/1097322908?h=0d5e54bb20" title="DoMo video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="relative w-full pt-[56.25%] rounded-md border border-white/10 overflow-hidden">
                <iframe class="absolute inset-0 w-full h-full border-0"
                    src="https://player.vimeo.com/video/1097322946?h=559f19fb01" title="DoMo video 2"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img v-for="(image, index) in images" :key="index" :src="image" alt="DoMo"
                    class="w-full h-[260px] object-contain bg-surface rounded-md border border-white/10" />
            </div>
        </template>
    </ProjectSection>
</template>

<script setup>
import { ref } from 'vue';
import ProjectSection from "../ProjectSection.vue";

const images = ref(Object.values(import.meta.glob('../../assets/project-images/domo/*.{jpg,png}', { eager: true, import: 'default' })));
</script>
