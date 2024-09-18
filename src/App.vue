<template>
  <div class="p-4 h-screen w-screen">
    <header>
      <NameHeader></NameHeader>
    </header>
    
    <main class="flex flex-col w-11/12 mx-auto mt-10">
      <AboutMe></AboutMe>
      <Projects></Projects>
      <AboutMe></AboutMe>
    </main>
  </div>
</template>

<script setup>
import NameHeader from './components/NameHeader.vue';
import AboutMe from './components/AboutMe.vue';
import Projects from './components/Projects.vue';
</script>