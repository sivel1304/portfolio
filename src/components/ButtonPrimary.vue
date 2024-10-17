<template>
    <button
        class="flex bg-backgrund-primary border border-backgrund-800 rounded-full w-fit h-fit mx-auto mt-8 px-8 py-4 shadow-lg hover:bg-backgrund-900 ">
        <p class=" {{ textColor }}" :class="textColor">{{ title }}</p>
    </button>
</template>

<script setup>
defineProps({
  title: String,
  textColor: String,
})
</script>