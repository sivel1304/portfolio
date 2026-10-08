<template>
  <ProjectSection title="IoT Home" :index="13" tagline="HOME IOT DASHBOARD — WORK IN PROGRESS"
    :tools="['ESP8266', 'DHT11', 'C/C++', 'PlatformIO', 'MQTT', 'ASP.NET Core', 'SQLite', 'React', 'TypeScript']"
    :links="[{ label: 'IoT Home on GitHub', href: 'https://github.com/sivel1304/iothome' }]">
    <template v-slot:description>
      <p class="text-[14.5px] leading-[1.75] text-white/75 font-light">
        <span class="font-mono text-[10.5px] text-white/40 border border-white/15 rounded px-1.5 py-0.5 mr-1.5">WIP</span>
        Still a work in progress — not finished yet.
        <br><br>
        A home IoT monitoring system: an ESP8266 sensor node with a DHT11 reads temperature and humidity and publishes
        it over MQTT. A .NET API stores the readings in SQLite, and a React dashboard charts them.
        <br><br>
        Read more in the GitHub repository.
      </p>
    </template>

    <template v-slot:image>
      <img :src="image" alt="IoT Home dashboard"
        class="w-full object-contain bg-surface rounded-md border border-white/10" />
    </template>
  </ProjectSection>
</template>

<script setup>
import ProjectSection from "../ProjectSection.vue";
import image from '../../assets/project-images/iothome/iothome.png';
</script>
