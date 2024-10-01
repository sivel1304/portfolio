<template>
  <div class="h-screen w-full overflow-auto snap-proximity snap-y">
    <header class="fixed min-h-[35rem] top-0 left-0 right-0 snap-always snap-start">
    <nav>
      <NavBar class="absolute"></NavBar>
    </nav>
      <NameHeader></NameHeader>
    </header>

    <main class="relative z-10 pt-[100vh] snap-start">
    <div class="flex flex-col w-full mx-auto snap-start">
      <PortSection class="bg-primary snap-always snap-start" title="About Me" text-color="text-primary" :isTextLeft="false">
      <template v-slot:left>
    <p class="opacity-70">link til insta her</p>
  </template>
  <template v-slot:right>
    <p class="opacity-70">tekst her tekst her tekst her tekst her tekst her tekst her tekst her tekst her tekst her tekst her tekst her tekst her tekst her tekst her tekst her tekst her tekst her tekst her tekst her tekst her tekst her tekst her tekst her tekst her</p>
  </template>
      </PortSection>

      <PortSection class="bg-secondary snap-always snap-start" title="Projects" text-color="text-secondary" :isTextLeft="true">
      <template v-slot:left>
    <p class="opacity-70">blablablablabal</p>
  </template>
  <template v-slot:right>
   <p class="opacity-70">3d model eller billede her</p>
  </template>
      </PortSection>

      <PortSection class="bg-third snap-start" title="Andet?" text-color="text-third" :isTextLeft="false">

      </PortSection>
    </div>
    </main>
  </div>
</template>

<script setup>
import NameHeader from './components/NameHeader3.vue';
import PortSection from './components/PortSection.vue';
import NavBar from './components/NavBar.vue';
</script>