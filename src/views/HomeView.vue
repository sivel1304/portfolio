<template>
  <div class="h-fit w-full snap-proximity snap-y scrollbar-hidden">
    <header class="fixed z-0 min-h-[35rem] top-0 left-0 right-0 snap-none">
      <NameHeader></NameHeader>
    </header>

    <main class="relative w-full z-20 top-[100vh] snap-start">
      <div class="flex flex-col w-full mx-auto snap-start">
        <PortSection class="bg-backgrund-900 snap-always snap-start" title="About Me" text-color="text-primary"
          :isTextLeft="false">
          <template v-slot:left>
          <div class="">
            <h4 class="opacity-30 mb-1">Degrees</h4>
            <h4 class="opacity-100 tracking-normal">Bachelor in IT-Product Development</h4>
            <h4 class="opacity-100 tracking-normal">Master in IT-Product Development</h4>
          </div>

          <div class="mt-4">
            <h4 class="opacity-30 mb-1">Skills</h4>
              <h4 class="opacity-100 tracking-normal">Java, Javascript, C/C++, ...</h4>
          </div>

<!--           <ButtonPrimary title="Contact Me" text-color="text-primary"></ButtonPrimary>
 -->
          </template>
          <template v-slot:right>
            <p class="opacity-90 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in nisi ut aliquip ex ea commodo
              consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in nisi ut aliquip ex ea commodo
              consequat. Lorem ipsum dolor sit amet, Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in nisi ut aliquip ex ea commodo
              consequat. Lorem ipsum dolor sit amet,
            </p>
            <a href="/about" class="mt-4 underline underline-offset-4 text-primary"><p class="">Learn More</p></a>

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
import NameHeader from '../components/NameHeader3.vue';
import PortSection from '../components/PortSection.vue';
import ButtonPrimary from '../components/ButtonPrimary.vue';

</script>