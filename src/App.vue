<template>
  <div class="h-screen w-full snap-mandatory snap-y">
    <header class="fixed min-h-[35rem] top-0 left-0 right-0">
    <nav>
      <NavBar></NavBar>
    </nav>
      <NameHeader></NameHeader>
    </header>

    <main class="relative z-10 mt-[calc(100vh-74px)] snap-y">
    <div class="flex flex-col w-full mx-auto snap-always snap-center">
      <PortSection class="bg-primary snap-always snap-center" title="About Me" text-color="text-primary" :isTextLeft="false"></PortSection>
      <PortSection class="bg-secondary snap-center" title="Projects" text-color="text-secondary" :isTextLeft="true"></PortSection>
      <PortSection class="bg-third snap-center" title="Andet?" text-color="text-third" :isTextLeft="false"></PortSection>
    </div>
    </main>
  </div>
</template>

<script setup>
import NameHeader from './components/NameHeader.vue';
import PortSection from './components/PortSection.vue';
import NavBar from './components/NavBar.vue';
</script>