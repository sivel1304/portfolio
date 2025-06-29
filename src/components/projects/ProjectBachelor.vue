<template>
    <ShortProjectSection title="AR Text Entry" :tools="['...', '...', '...']">
        <template v-slot:description>
            <p class="opacity-90">
            </p>
        </template>

        <template v-slot:image>
            <div class="w-full grid grid-cols-2 gap-5 justify-center">
                <iframe width="640" height="360" src="https://www.youtube.com/embed/orQQWn1l5jY?si=u0dMAjT5BPtI96NI"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>
        </template>
    </ShortProjectSection>
</template>

<script setup>

import ShortProjectSection from "../ShortProjectSection.vue";

// Dynamically import images

</script>
