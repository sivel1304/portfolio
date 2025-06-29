<template>
  <div class="">

      <div class=" mx-auto pt-20 px-20 w-screen h-full flex flex-col mt-3">
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
    <ProjectSection class="" title="Other??" textColor=""
      :tools="['SitMan', 'Lamp', 'EKSYS', 'DiscoHug', 'Sensor-boards', 'Bachelor AR']">
    </ProjectSection>
  </div>
</template>

<script setup>
import ProjectItem from "@/components/ProjectItem.vue";

import ProjectSection from "../components/ProjectSection.vue";
import ProjectP2P from "@/components/projects/ProjectP2P.vue";
import ProjectFussball from "@/components/projects/ProjectFussball.vue";

</script>
