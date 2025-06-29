<template>
  <ShortProjectSection title="FrenzyBall" :tools="['...', '...', '...']">
    <template v-slot:description>
      <p class="opacity-90">
      </p>
    </template>

    <template v-slot:image>
      <div class="w-full flex flex-col justify-center">
        <iframe width="640" height="360" src="https://www.youtube.com/embed/-CA5lNNW0Yc?si=yWrYfXFsNhyWfY5B"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </template>
  </ShortProjectSection>
</template>

<script setup>
import ShortProjectSection from "../ShortProjectSection.vue";

</script>
