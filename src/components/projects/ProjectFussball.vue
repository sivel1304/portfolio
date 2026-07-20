<template>
  <ShortProjectSection title="FrenzyBall">
    <template v-slot:image>
      <div class="relative w-full pt-[56.25%] rounded-md border border-white/10 overflow-hidden">
        <iframe class="absolute inset-0 w-full h-full border-0"
          src="https://www.youtube.com/embed/-CA5lNNW0Yc?si=yWrYfXFsNhyWfY5B" title="FrenzyBall video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </template>
  </ShortProjectSection>
</template>

<script setup>
import ShortProjectSection from "../ShortProjectSection.vue";
</script>
