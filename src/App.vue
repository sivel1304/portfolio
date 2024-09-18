<template>
  <div class="p-4 h-screen w-screen">
    <nav>
      <NavBar></NavBar>
    </nav>
    <header>
      <NameHeader></NameHeader>
    </header>
    
    <main class="flex flex-col w-11/12 mx-auto mt-10">
      <PortSection title="About Me"></PortSection>
      <PortSection title="Projects"></PortSection>
      <PortSection title="Andet?"></PortSection>
    </main>
  </div>
</template>

<script setup>
import NameHeader from './components/NameHeader.vue';
import PortSection from './components/PortSection.vue';
import NavBar from './components/NavBar.vue';
</script>