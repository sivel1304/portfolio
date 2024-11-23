<template>
  <div class="flex flex-row w-full h-[90vh] mx-auto pt-24 px-8 2xl:px-24">
    <div class="w-1/3">
      <h2 class="text-2xl mb-8" :class="textColor">{{ title }}</h2>
      <h4 class="opacity-30 mb-1">Description</h4>
      <p class="opacity-90 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. </p>

      <h4 class="opacity-30 mb-1 mt-8">Tools Used</h4>
      <ul>
        <li>this</li>
        <li>that</li>
      </ul>
    </div>
    <div class="flex flex-col w-2/3">
      <video controls class="w-full h-auto">
      <source src="../assets/project-images/plank-plunge.mp4" type="video/mp4" />
      <!-- Fallback text if the video cannot be played -->
      Your browser does not support the video tag.
    </video>
  </div>

  </div>
</template>

<script setup>

defineProps({
  title: String,
  textColor: String,
})
</script>