<template>
  <div class="snap-mandatory snap-y overflow-auto h-[100vh] px-8 3xl:px-24">

    <ShortProjectAlarm></ShortProjectAlarm>
    <div class="w-full h-[1px] mt-10 bg-white rounded-full"></div>

    <ProjectSection title="SitMan" textColor=""></ProjectSection>
    <div class="w-full h-[1px] mt-10 bg-white rounded-full"></div>

    <ProjectSection class="bg-primary" title="Other??" textColor="" :tools="['Hungry Monkey', 'Lamp', 'EKSYS', 'MIDI Controller', 'Fussball', 'P2P', 'Bachelor AR']"></ProjectSection>
  </div>
</template>

<script setup>
import ProjectSection from "../components/ProjectSection.vue";

import ShortProjectAlarm from"../components/projects/ShortProjectAlarm.vue";


</script>
