<template>
    <div class="w-full h-[50vh] mx-auto border bg-backgrund-900">
        <h3 class="mt-10 m-4 2xl:mx-20">{{title}}</h3>
    </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>