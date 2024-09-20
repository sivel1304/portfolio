<template>
  <div class="h-screen w-full">
    <header class="fixed min-h-[35rem] top-0 left-0 right-0">
    <nav>
      <NavBar></NavBar>
    </nav>
      <NameHeader></NameHeader>
    </header>

    <main class="relative z-10 mt-[calc(100vh-74px)]">
<div class="flex flex-col w-full mx-auto">
      <PortSection class="bg-secondary" title="About Me"></PortSection>
      <PortSection class="bg-third" title="Projects"></PortSection>
      <PortSection class="bg-primary" title="Andet?"></PortSection>
</div>
    </main>
  </div>
</template>

<script setup>
import NameHeader from './components/NameHeader.vue';
import PortSection from './components/PortSection.vue';
import NavBar from './components/NavBar.vue';
</script>