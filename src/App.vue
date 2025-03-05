<template>
  <div class="h-fit w-full scrollbar-hidden">
    <nav class="snap-none">
      <NavBar class="fixed z-10"></NavBar>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
</script>