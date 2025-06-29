<template>
  <div class="flex-col w-screen px-20">
    <div class="flex flex-row w-full mx-auto pt-16">
      <div class="w-[calc((100vw-10rem)/3)]">
        <h2 class="text-3xl mb-1" :class="textColor">{{ title }}</h2>
        <h4 class="opacity-30 mb-1">Description</h4>
        <slot name="description"> </slot>
        <h4 class="opacity-30 mb-1 mt-8">Tools Used</h4>
        <ul class="list-disc list-inside w-full *:opacity-90">
          <li v-for="(tool, index) in tools" :key="index">{{ tool }}</li>
        </ul>
      </div>
      <div class="flex flex-col w-[calc(((100vw-10rem)/3)*2)] ml-[calc((100vw-10rem)/3)]">
        <div class="flex ml-20 w-fit h-full justify-center">
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
