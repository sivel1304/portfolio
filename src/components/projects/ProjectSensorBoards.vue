<template>
  <ShortProjectSection title="Sensor Boards" :tools="['...', '...', '...']">
    <template v-slot:description>
      <p class="opacity-90">
      </p>
    </template>

    <template v-slot:image>
      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-5 justify-center">
        <div class="relative w-full overflow-hidden rounded-md shadow-lg" style="padding-top: 56.25%;">
          <iframe class="absolute top-0 left-0 w-full h-full" title="vimeo-player"
            src="https://player.vimeo.com/video/1097343918?h=5e19970d7e" allowfullscreen></iframe>
        </div>
      </div>
    </template>
  </ShortProjectSection>
</template>

<script setup>

import ShortProjectSection from "../ShortProjectSection.vue";

// Dynamically import images

</script>
