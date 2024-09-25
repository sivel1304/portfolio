<template>
  <div class="flex flex-row w-full h-[90vh] mx-auto text-backgrund-800 pt-24 p-8 2xl:px-20">
    <div class="pr-8" :class="isTextLeft ? 'w-2/3':'w-1/3'">
      <h2 class="mb-10">{{ title }}</h2>
      <slot name="left"></slot>
    </div>
    <div class="flex flex-col pl-8" :class="isTextLeft ? 'w-1/3':'w-2/3'">
      <slot name="right"></slot>
      <button class="flex bg-backgrund-800 rounded-lg w-fit h-fit mx-auto mt-8 shadow-md hover:bg-backgrund-900">
        <p class="m-4 {{ textColor }}" :class="textColor">{{ title }}</p>
      </button>
    </div>

  </div>
</template>

<script setup>
defineProps({
  title: String,
  textColor: String,
  isTextLeft: Boolean,
})
</script>