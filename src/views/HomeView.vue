<template>
  <div class="w-full scrollbar-hidden snap-mandatory snap-y overflow-auto h-[100vh] ">

    <header class="snap-start min-h-[35rem] top-0 left-0 right-0">
      <NameHeader></NameHeader>
    </header>

    <div class="relative">

      <div class="absolute w-full h-full bg-backgrund-900 -z-10"></div>

      <div class="relative z-0 px-10">
        <div class="snap-start flex h-[100vh] bg-backgrund-900 px-10 py-24">
          <div class="w-1/2 h-full flex flex-col pr-56">
            <h2 class="text-3xl mb-8">About Me</h2>
            <p class="font-light leading-7 text-base">Hi, my name is Viktor Nielsen. I'm a 24 year old student currently
              studying Masters in IT-Product Development on Aarhus University </p>
            <br>
            <p class="font-light leading-7 text-base">I love creating. Whether its software or hardware or even music. I
              am always doing a project</p>
            <img src="../assets/stars.png" alt="stars" class="w-1/2 mx-auto object-cover">
            <p>contact info here i guess</p>
          </div>
          <ProjectSection></ProjectSection>
        </div>

      </div>
    </div>


  </div>
</template>

<script setup>
import ProjectSection from "@/components/ProjectSection.vue";
import NameHeader from "../components/NameHeader5.vue";

</script>
