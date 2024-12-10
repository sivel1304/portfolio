<template>
  <div class="snap-mandatory snap-y overflow-auto h-[100vh]">
    <ProjectRobot></ProjectRobot>
    <ProjectAlarm></ProjectAlarm>
    <ProjectPlankPlunge></ProjectPlankPlunge>
    <ProjectSection class="bg-primary" title="SitMan" textColor=""></ProjectSection>
    <ProjectPortfolio></ProjectPortfolio>
    <ProjectSection class="bg-primary" title="Other??" textColor="" :tools="['Hungry Monkey', 'Lamp', 'EKSYS', 'MIDI Controller', 'Fussball', 'P2P']"></ProjectSection>
  </div>
</template>

<script setup>
import ProjectSection from "../components/ProjectSection.vue";
import ProjectPlankPlunge from "../components/projects/ProjectPlankPlunge.vue";
import ProjectPortfolio from "../components/projects/ProjectPortfolio.vue";
import ProjectRobot from "../components/projects/ProjectRobot.vue";
import ProjectAlarm from"../components/projects/ProjectAlarm.vue";

</script>
