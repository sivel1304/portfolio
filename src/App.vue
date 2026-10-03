<template>
  <div class="min-h-screen w-screen scrollbar-hidden bg-backgrund-900 text-[#f2f0f5]">
    <NavBar class="fixed top-0 inset-x-0 z-20"></NavBar>
    <router-view></router-view>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
</script>