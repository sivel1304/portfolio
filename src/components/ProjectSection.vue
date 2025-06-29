<template>
  <div class="flex-col w-screen md:px-20 px-4">
    <div class="flex md:flex-row flex-col w-full mx-auto pt-24">
      <div class="md:w-[calc((100vw-10rem)/3)] md:fixed">
        <h2 class="text-3xl mb-10" :class="textColor">{{ title }}</h2>
        <h4 class="opacity-30 mb-1">Description</h4>
        <slot name="description"> </slot>
        <h4 class="opacity-30 mb-1 mt-8">Tools Used</h4>
        <ul class="list-disc list-inside w-full *:opacity-90">
          <li v-for="(tool, index) in tools" :key="index">{{ tool }}</li>
        </ul>
      </div>
      <div class="flex flex-col md:w-[calc(((100vw-10rem)/3)*2)] md:ml-[calc((100vw-10rem)/3)]">
        <div class="flex md:ml-20 w-fit h-full justify-center">
          <slot name="image"> </slot>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
defineProps({
  title: String,
  textColor: String,
  tools: Array,
});
</script>
