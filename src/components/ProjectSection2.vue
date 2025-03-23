<template>
  <div class="flex-col">
    <div class=" snap-start flex flex-row w-full h-[90vh] mx-auto pt-24">
      <div class="w-1/3">
        <h2 class="text-2xl mb-8" :class="textColor">{{ title }}</h2>
        <h4 class="opacity-30 mb-1">Description</h4>
        <slot name="description"> </slot>
        <h4 class="opacity-30 mb-1 mt-8">Tools Used</h4>
        <ul class="list-disc list-inside w-full *:opacity-90">
          <li v-for="(tool, index) in tools" :key="index">{{ tool }}</li>
        </ul>
      </div>
      <div class="flex flex-col w-2/3">
        <div class="ml-8 w-fit h-full ">
          <slot name="image"> </slot>
        </div>
      </div>
    </div>
    <div class="w-full h-[1px] mt-10 bg-white rounded-full"></div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  textColor: String,
  tools: Array,
});
</script>
