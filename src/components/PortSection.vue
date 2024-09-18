<template>
    <div class="w-full h-96 mx-auto border bg-backgrund-900">
        <h3 class="m-10">{{title}}</h3>
    </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>