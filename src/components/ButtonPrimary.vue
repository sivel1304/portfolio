<template>
    <button
        class="flex bg-backgrund-primary border-2 border-primary rounded-full w-fit h-fit mx-auto mt-8 px-8 py-4 shadow-lg hover:bg-backgrund-900 ">
        <p class=" {{ textColor }} text-base text-center mx-auto" :class="textColor">{{ title }}</p>
    </button>
</template>

<script setup>
defineProps({
  title: String,
  textColor: String,
})
</script>