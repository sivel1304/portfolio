<template>
  <div class="h-screen w-full overflow-auto snap-proximity snap-y">
    <header class="fixed min-h-[35rem] top-0 left-0 right-0 snap-always snap-start">
    <nav>
      <NavBar></NavBar>
    </nav>
      <NameHeader></NameHeader>
    </header>

    <main class="relative z-10 pt-[calc(100vh-74px)] snap-start">
    <div class="flex flex-col w-full mx-auto snap-start">
      <PortSection class="bg-primary snap-always snap-start" title="About Me" text-color="text-primary" :isTextLeft="false"></PortSection>
      <PortSection class="bg-secondary snap-always snap-start" title="Projects" text-color="text-secondary" :isTextLeft="true"></PortSection>
      <PortSection class="bg-third snap-start" title="Andet?" text-color="text-third" :isTextLeft="false"></PortSection>
    </div>
    </main>
  </div>
</template>

<script setup>
import NameHeader from './components/NameHeader.vue';
import PortSection from './components/PortSection.vue';
import NavBar from './components/NavBar.vue';
</script>