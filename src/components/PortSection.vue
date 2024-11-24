<template>
  <div class="flex flex-row w-full h-[75vh] mx-auto pt-24 px-8 3xl:px-24">
    <div class="" :class="isTextLeft ? 'w-2/3':'w-1/3'">
      <h2 class="text-3xl mb-8" :class="textColor">{{ title }}</h2>
      <slot name="left"></slot>
    </div>
    <div class="flex flex-col" :class="isTextLeft ? 'w-1/3':'w-2/3'">
      <slot name="right"></slot>
<!--       <ButtonPrimary title="Learn More" :text-color="textColor"></ButtonPrimary>
 -->    </div>

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