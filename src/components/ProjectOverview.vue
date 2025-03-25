<template>
  <div class="w-2/3 h-full flex flex-col mt-3">
    <ProjectItem title="Tattoo Robot" :is-right="true" route="/projects/tatbot"></ProjectItem>
    <ProjectItem title="Hungry Monkeys" :is-right="false"></ProjectItem>
    <ProjectItem title="Alarm Clock" :is-right="true" image="alarm-clock/image1.jpg" route="/projects/alarm-clock"></ProjectItem>
    <ProjectItem title="Plank Plunge" :is-right="false" route="/projects/plank-plunge"></ProjectItem>
    <ProjectItem title="Watch Winder" :is-right="true" image="watch-winder/image1.jpg" route="/projects/watch-winder"></ProjectItem>
    <ProjectItem title="Other Projects" :is-right="false" route="/projects"></ProjectItem>
    <ProjectItem class="border-b" title="https://www.adamshams.com/" :is-right="true" ></ProjectItem>

  </div>
</template>

<script setup>
import ProjectItem from './ProjectItem.vue';


</script>
