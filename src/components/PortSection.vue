<template>
    <div class="w-full h-96 mx-auto mb-4 border">
        <h1 class="text-center m-10">{{title}}</h1>
    </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>