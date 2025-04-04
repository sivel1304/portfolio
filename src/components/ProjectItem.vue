<template>
    <RouterLink :to="route" v-if="isRight"
        class="group h-28 flex justify-between items-center border border-white border-b-0 border-x-0  hover:cursor-pointer overflow-hidden">
        <h2 class="text-lg tracking-normal m-6">{{ title }}</h2>
        <img :src="resolvedImage" class="h-full w-40 object-cover invisible group-hover:visible border border-y-0">
        <img src="../assets/icons/arrow-right.png" class="h-14 opacity-50 group-hover:opacity-100 m-4">
    </RouterLink>
    <RouterLink :to="route" v-else
        class="group h-28 flex justify-between items-center border border-white  border-b-0 border-x-0  hover:cursor-pointer overflow-hidden">
        <img src="../assets/icons/arrow-left.png" class="h-14 opacity-50 group-hover:opacity-100 m-4">
        <img :src="resolvedImage" class="h-full w-40 object-cover invisible group-hover:visible border border-y-0">
        <h2 class="text-lg tracking-normal m-6">{{ title }}</h2>
    </RouterLink>

</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    title: String,
    isRight: Boolean,
    image: String,
    route: String
});

const resolvedImage = computed(() => new URL(`../assets/project-images/${props.image}`, import.meta.url).href);
</script>