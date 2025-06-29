<template>
  <div class="">

      <div class=" mx-auto pt-20 md:px-20 px-0 w-screen h-full flex flex-col mt-3">
        <ProjectItem title="Tattoo Robot" :is-right="true" image="robot/image2.png" route="/projects/tatbot">
        </ProjectItem>
        <ProjectItem title="Watch Winder" :is-right="false" image="watch-winder/image98.png"
          route="/projects/watch-winder"></ProjectItem>
        <ProjectItem title="Hungry Monkeys" :is-right="true" image="hungry-monkeys/image1.png"
          route="/projects/hungry-monkeys"></ProjectItem>
        <ProjectItem title="DoMo" :is-right="false" image="domo/image1.jpg" route="/projects/domo"></ProjectItem>
        <ProjectItem title="Alarm Clock" :is-right="true" image="alarm-clock/image1.jpg" route="/projects/alarm-clock">
        </ProjectItem>
        <ProjectItem title="Plank Plunge" :is-right="false" image="plank-plunge/image1.png"
          route="/projects/plank-plunge" class="border border-white border-b-[1px]"></ProjectItem>
      </div>


    <ProjectP2P></ProjectP2P>
    <ProjectFussball></ProjectFussball>
    <ProjectBachelor></ProjectBachelor>
    <ProjectSensorBoards></ProjectSensorBoards>
    <ProjectSitMan></ProjectSitMan>

  </div>
</template>

<script setup>
import ProjectItem from "@/components/ProjectItem.vue";

import ProjectP2P from "@/components/projects/ProjectP2P.vue";
import ProjectFussball from "@/components/projects/ProjectFussball.vue";
import ProjectBachelor from "@/components/projects/ProjectBachelor.vue";
import ProjectSitMan from "@/components/projects/ProjectSitMan.vue";
import ProjectSensorBoards from "@/components/projects/ProjectSensorBoards.vue";

</script>
