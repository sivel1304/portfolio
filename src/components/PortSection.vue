<template>
  <div class="snap-start flex flex-row w-full h-[70vh] mx-auto py-20">
    <div class="" :class="isTextLeft ? 'w-2/3' : 'w-1/3'">
      <h2 class="text-3xl " :class="textColor">{{ title }}</h2>
      <slot name="left"></slot>
    </div>
    <div class="flex flex-col" :class="isTextLeft ? 'w-1/3' : 'w-2/3'">
      <slot name="right"></slot>
    </div>

  </div>

</template>

<script setup>
/* import ButtonPrimary from './ButtonPrimary.vue';
 */
defineProps({
  title: String,
  textColor: String,
  isTextLeft: Boolean,
})

</script>