<template>
    <ProjectSection title="DoMo" :index="5" tagline="SUSTAINABLE DEVELOPMENT PROJECT"
        :tools="['Python', 'React', 'Supabase', 'C++', 'Vercel', 'TTN']">
        <template v-slot:description>
            <p class="text-[14.5px] leading-[1.75] text-white/75 font-light">
                A low-cost, DIY monitoring system built to help the Danish Red Cross track donations of surplus
                building materials from construction sites — field research showed reusable materials are often
                discarded as waste for lack of a practical donation pipeline.
                <br><br>
                Instead of adding tasks for tradespeople, DoMo uses a simple camera box to take periodic photos of
                donation areas and upload them to a website, letting volunteers remotely assess donation volume and
                plan pickups.
                <br><br>
                Built with scalability and sustainability in mind — easy to replicate and deploy. Real-world testing
                surfaced technical challenges but confirmed its value in supporting circular practices and donation
                logistics.
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
