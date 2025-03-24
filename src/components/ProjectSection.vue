<template>
  <div class="w-1/2 h-full flex flex-col">
    <ProjectItem title="Tattoo Robot" :is-right="true" ></ProjectItem>
    <ProjectItem title="Hungry Monkeys" :is-right="false"></ProjectItem>
    <ProjectItem title="Alarm Clock" :is-right="true" image="alarm-clock/image1.jpg"></ProjectItem>
    <ProjectItem title="Pirate Plunge" :is-right="false" ></ProjectItem>
    <ProjectItem title="Watch Winder" :is-right="true" image="watch-winder/image1.jpg"></ProjectItem>
    <ProjectItem title="Other Projects" :is-right="false"></ProjectItem>
    <ProjectItem title="https://www.adamshams.com/" :is-right="true"></ProjectItem>

  </div>
</template>

<script setup>
import ProjectItem from './ProjectItem.vue';


</script>
