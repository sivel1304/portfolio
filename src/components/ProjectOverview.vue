<template>
  <div class="w-2/3 h-full flex flex-col mt-3">
    <ProjectItem title="Tattoo Robot" :is-right="true" image="robot/image2.png" route="/projects/tatbot"></ProjectItem>
    <ProjectItem title="Watch Winder" :is-right="false" image="watch-winder/image98.png" route="/projects/watch-winder"></ProjectItem>
    <ProjectItem title="Hungry Monkeys" :is-right="true" image="hungry-monkeys/image1.png" route="/projects/hungry-monkeys"></ProjectItem>
    <ProjectItem title="DoMo" :is-right="false" image="domo/image1.jpg" route="/projects/domo"></ProjectItem>
    <ProjectItem title="Alarm Clock" :is-right="true" image="alarm-clock/image1.jpg" route="/projects/alarm-clock"></ProjectItem>
    <ProjectItem title="Plank Plunge" :is-right="false" image="plank-plunge/image1.png" route="/projects/plank-plunge"></ProjectItem>
    <ProjectItem class="border-b" title="Other Projects" image="discohug.jpg" :is-right="true" route="/projects"></ProjectItem>

  </div>
</template>

<script setup>
import ProjectItem from './ProjectItem.vue';


</script>
