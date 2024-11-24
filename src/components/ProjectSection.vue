<template>
  <div class="snap-start flex flex-row w-full h-[95vh] mx-auto pt-24 px-8 3xl:px-24">
    <div class="w-1/3">
      <h2 class="text-2xl mb-8" :class="textColor">{{ title }}</h2>
      <h4 class="opacity-30 mb-1">Description</h4>
      <slot name="description"> </slot>

      <h4 class="opacity-30 mb-1 mt-8">Tools Used</h4>
      <ul class="list-disc list-inside w-full">
        <li class="opacity-90">Game Engine: Unity 6</li>
        <li class="opacity-90">Programming: C# in Visual Studio</li>
        <li class="opacity-90">Sounds: Audacity, Waveform 13</li>
        <li class="opacity-90">Sprites: ??</li>
      </ul>
    </div>
    <div class="flex flex-col w-2/3">
    <slot name="image"> </slot>

  </div>

  </div>
</template>

<script setup>

defineProps({
  title: String,
  textColor: String,
})
</script>