<template>
  <div class="snap-mandatory snap-y overflow-auto h-[100vh] px-8 3xl:px-24">
    <ProjectRobot></ProjectRobot>

    <ProjectAlarm></ProjectAlarm>
    
    <ProjectPlankPlunge></ProjectPlankPlunge>
    <ProjectSection title="SitMan" textColor=""></ProjectSection>
    <ProjectPortfolio></ProjectPortfolio>
    <ProjectWatchWinder></ProjectWatchWinder>
    <ProjectSection class="bg-primary" title="Other??" textColor="" :tools="['Hungry Monkey', 'Lamp', 'EKSYS', 'MIDI Controller', 'Fussball', 'P2P', 'Bachelor AR']"></ProjectSection>
  </div>
</template>

<script setup>
import ProjectSection from "../components/ProjectSection2.vue";
import ProjectPlankPlunge from "../components/projects/ProjectPlankPlunge.vue";
import ProjectPortfolio from "../components/projects/ProjectPortfolio.vue";
import ProjectRobot from "../components/projects/ProjectRobot.vue";
import ProjectAlarm from"../components/projects/ProjectAlarm.vue";
import ProjectWatchWinder from "@/components/projects/ProjectWatchWinder.vue";

</script>
