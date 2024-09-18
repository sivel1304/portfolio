<template>
    <div class="w-full h-96 mx-auto mb-4 bg-primary">
        <h1 class="text-center text-backgrund m-10">{{title}}</h1>
    </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>