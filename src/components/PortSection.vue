<template>
    <div class="w-full h-[66vh] mx-auto border bg-backgrund-900">
        <h3 class="mt-10 m-10 2xl:mx-20">{{title}}</h3>
    </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>