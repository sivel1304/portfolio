<template>
    <div v-if="isRight"
        class="group h-28 flex justify-between items-center border border-white border-b-0 border-x-0  hover:cursor-pointer overflow-hidden">
        <h2 class="text-lg tracking-normal m-6">{{ title }}</h2>
        <img src="../assets/project-images/alarm-clock/image1.jpg" class="w-40 invisible group-hover:visible">
        <img src="../assets/icons/arrow-right.png" class="h-14 opacity-50 group-hover:opacity-100 m-4">
    </div>
    <div v-else
        class="group h-28 flex justify-between items-center border border-white  border-b-0 border-x-0  hover:cursor-pointer overflow-hidden">
        <img src="../assets/icons/arrow-left.png" class="h-14 opacity-50 group-hover:opacity-100 m-4">
        <img src="../assets/project-images/alarm-clock/image1.jpg" class="w-40 invisible group-hover:visible">
        <h2 class="text-lg tracking-normal m-6">{{ title }}</h2>
    </div>

</template>

<script setup>
defineProps({
    title: String,
    isRight: Boolean,
});
</script>