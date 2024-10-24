<template>
  <div class="h-fit w-full snap-proximity snap-y">
    <nav class="snap-none">
      <NavBar class="fixed z-10"></NavBar>
    </nav>
    <header class="fixed z-0 min-h-[35rem] top-0 left-0 right-0 snap-none">
      <NameHeader></NameHeader>
    </header>

    <main class="relative w-full z-20 top-[100vh] snap-start">
      <div class="flex flex-col w-full mx-auto snap-start">
        <PortSection class="bg-backgrund-900 snap-always snap-start" title="About Me" text-color="text-primary"
          :isTextLeft="false">
          <template v-slot:left>
            <p class="opacity-70">link til insta her</p>
          </template>
          <template v-slot:right>
            <p class="opacity-90">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in
            </p>
          </template>
        </PortSection>

        <PortSection class="bg-primary snap-always snap-start text-backgrund-800" title="Projects"
          text-color="text-backgrund-800" :isTextLeft="true">
          <template v-slot:left>
            <p class="opacity-70">blablablablabal</p>
          </template>
          <template v-slot:right>
            <p class="opacity-90">3d model eller billede her</p>
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