<template>
    <div class="w-full h-12 my-4">
        <div class="flex w-1/4 h-full mx-auto justify-between">
            <RouterLink to="/" class="flex w-1/3 hover:bg-backgrund-700 rounded-full justify-center items-center"><p :class="['text-sm', isActive('/') ? 'opacity-100' : 'opacity-40']">Home</p></RouterLink>
            <RouterLink to="/about" class="flex w-1/3 hover:bg-backgrund-700 rounded-full justify-center items-center"><p :class="['text-sm', isActive('/about') ? 'opacity-100' : 'opacity-40']">About Me</p></RouterLink>
            <RouterLink to="/projects" class="flex w-1/3 hover:bg-backgrund-700 rounded-full justify-center items-center"><p :class="['text-sm', isActive('/projects') ? 'opacity-100' : 'opacity-40']">Projects</p></RouterLink>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

// Get the current route
const route = useRoute();

// Function to check if a path is active
const isActive = (path) => route.path === path;
</script>