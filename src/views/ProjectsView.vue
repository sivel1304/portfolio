<template>
  <div class="">


    <div class=" mx-auto pt-20 md:px-20 px-0 w-screen h-full flex flex-col">
      <ProjectItem title="Sketch-n-Sow" :is-right="true" image="sketch-n-sow/4-idea-in-packet.jpg"
        route="/projects/sketch-n-sow"></ProjectItem>
      <ProjectItem title="Tattoo Robot" :is-right="false" image="robot/image2.png" route="/projects/tatbot">
      </ProjectItem>
      <ProjectItem title="Watch Winder" :is-right="true" image="watch-winder/image98.png"
        route="/projects/watch-winder"></ProjectItem>
      <ProjectItem title="Hungry Monkeys" :is-right="false" image="hungry-monkeys/image1.png"
        route="/projects/hungry-monkeys"></ProjectItem>
      <ProjectItem title="DoMo" :is-right="true" image="domo/image1.jpg" route="/projects/domo"></ProjectItem>
      <ProjectItem title="Plank Plunge" :is-right="false" image="plank-plunge/image1.png"
        route="/projects/plank-plunge"></ProjectItem>
      <ProjectItem title="Chest Quest" :is-right="true" image="chest-quest/chest-quest1.png"
        route="/projects/chest-quest"></ProjectItem>
        <ProjectItem title="AR Text Entry" :is-right="false" image="bachelor/4bachelor2.png"
        route="/projects/bachelor"></ProjectItem>
      <ProjectItem title="Alarm Clock" :is-right="true" image="alarm-clock/image1.jpg" route="/projects/alarm-clock">
      </ProjectItem>

    </div>

    <ProjectP2P></ProjectP2P>
    <ProjectFussball></ProjectFussball>
    <ProjectSensorBoards></ProjectSensorBoards>
    <ProjectDiscoHug></ProjectDiscoHug>
    <ProjectFalafelFather></ProjectFalafelFather>
    <!-- synthhhhhhh -->
    <!-- eksys?? -->


  </div>
</template>

<script setup>
import ProjectItem from "@/components/ProjectItem.vue";
import ProjectP2P from "@/components/projects/ProjectP2P.vue";
import ProjectFussball from "@/components/projects/ProjectFussball.vue";
import ProjectSensorBoards from "@/components/projects/ProjectSensorBoards.vue";
import ProjectDiscoHug from "@/components/projects/ProjectDiscoHug.vue";
import ProjectFalafelFather from "@/components/projects/ProjectFalafelFather.vue";

</script>
