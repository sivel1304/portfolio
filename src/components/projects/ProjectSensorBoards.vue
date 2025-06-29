<template>
  <ShortProjectSection title="Sensor Boards" :tools="['...', '...', '...']">
    <template v-slot:description>
      <p class="opacity-90">
      </p>
    </template>

    <template v-slot:image>
      <div class="w-full ml-10 grid grid-cols-2 gap-5 justify-center">
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/1097343918?h=5e19970d7e" width="640" height="360" frameborder="0"    allowfullscreen></iframe>
  
      </div>
    </template>
  </ShortProjectSection>
</template>

<script setup>

import ShortProjectSection from "../ShortProjectSection.vue";

// Dynamically import images

</script>
