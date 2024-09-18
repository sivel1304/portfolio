<template>
  <div class="h-screen w-full">
    <nav>
      <NavBar></NavBar>
    </nav>
    <header>
      <NameHeader></NameHeader>
    </header>

    <main class="flex flex-col w-full mx-auto mt-10">
      <PortSection class="text-primary" title="About Me"></PortSection>
      <PortSection class="text-secondary" title="Projects"></PortSection>
      <PortSection class="text-third" title="Andet?"></PortSection>
    </main>
  </div>
</template>

<script setup>
import NameHeader from './components/NameHeader.vue';
import PortSection from './components/PortSection.vue';
import NavBar from './components/NavBar.vue';
</script>