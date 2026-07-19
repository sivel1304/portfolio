<template>
  <div class="">
    <div class="flex flex-col items-center justify-center pt-24">
        <h1 class="text-center">
            My Projects
        </h1>
        <p class="text-center text-gray-600 mt-4">
            Here are some of the projects I've worked on.
        </p>
    </div>

    <div class=" mx-auto pt-10 mb-20 md:px-20 px-0 w-screen h-full flex flex-col">
      <ProjectItem title="Sketch-n-Sow" description="MR Brainstorming Tool" :is-right="true" image="sketch-n-sow/4-idea-in-packet.jpg"
        route="/projects/sketch-n-sow"></ProjectItem>
      <ProjectItem title="Tattoo Robot" description="Homemade Tattoo Robot" :is-right="false" image="robot/image2.png" route="/projects/tatbot">
      </ProjectItem>
      <ProjectItem title="Watch Winder" description="Homemade watch winder" :is-right="true" image="watch-winder/image98.png"
        route="/projects/watch-winder"></ProjectItem>
      <ProjectItem title="Hungry Monkeys" description="Wireless ball-game for children" :is-right="false" image="hungry-monkeys/image1.png"
        route="/projects/hungry-monkeys"></ProjectItem>
      <ProjectItem title="DoMo" description="Sustainable Development Project" :is-right="true" image="domo/image1.jpg" route="/projects/domo"></ProjectItem>
      <ProjectItem title="Plank Plunge" description="Pirate Game" :is-right="false" image="plank-plunge/image1.png"
        route="/projects/plank-plunge"></ProjectItem>
      <ProjectItem title="Chest Quest" description="AR Treasure Hunt Game" :is-right="true" image="chest-quest/chest-quest1.png"
        route="/projects/chest-quest"></ProjectItem>
        <ProjectItem title="AR Text Entry" description="AR Text Input" :is-right="false" image="bachelor/4bachelor2.png"
        route="/projects/bachelor"></ProjectItem>
      <ProjectItem title="Alarm Clock" description="Homemade Alarm Clock" :is-right="true" image="alarm-clock/image1.jpg" route="/projects/alarm-clock">
        </ProjectItem>
      <ProjectItem title="Sports Tracking" description="IoT and P2P Sports Tracking" :is-right="false" image="p2p/circuit1.png" route="/projects/sports-tracking">
      </ProjectItem>

    </div>

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
import ProjectFussball from "@/components/projects/ProjectFussball.vue";
import ProjectSensorBoards from "@/components/projects/ProjectSensorBoards.vue";
import ProjectDiscoHug from "@/components/projects/ProjectDiscoHug.vue";
import ProjectFalafelFather from "@/components/projects/ProjectFalafelFather.vue";

</script>
