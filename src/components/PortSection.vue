<template>
  <div class="flex flex-row w-full h-[90vh] mx-auto text-backgrund-800 pt-24 p-8 2xl:px-24">
    <div class="pr-8" :class="isTextLeft ? 'w-2/3':'w-1/3'">
      <h2 class="mb-10">{{ title }}</h2>
      <slot name="left"></slot>
    </div>
    <div class="flex flex-col pl-8" :class="isTextLeft ? 'w-1/3':'w-2/3'">
      <slot name="right"></slot>
      <ButtonPrimary :title="title" :text-color="textColor"></ButtonPrimary>
    </div>

  </div>
</template>

<script setup>
import ButtonPrimary from './ButtonPrimary.vue';

defineProps({
  title: String,
  textColor: String,
  isTextLeft: Boolean,
})
</script>