<template>
    <div class="h-screen flex flex-col items-center justify-center">
        <h1 class="">
            About Me
        </h1>
        <p>(Under Construction)</p>

        
    </div>

    <PortSection class="bg-backgrund-900" title="About Me" text-color="text-white"
          :isTextLeft="false">
          <template v-slot:left>
            <div class="">
              <h4 class="opacity-30 mb-1">Degrees</h4>
              <h4 class="opacity-100 tracking-normal">
                Bachelor in IT-Product Development
              </h4>
              <h4 class="opacity-100 tracking-normal">
                Master in IT-Product Development
              </h4>
            </div>

            <div class="mt-4">
              <h4 class="opacity-30 mb-1">Skills</h4>
              <h4 class="opacity-100 tracking-normal">Java, Javascript, C/C++, ...</h4>
            </div>
          </template>
          <template v-slot:right>
            <p class="opacity-90 font-extralight">
              I’m Viktor, a passionate builder, developer, and problem solver. I'm 24 years old, and are currently
              studied masters in IT-Product Development in Aarhus University. I love creating things—especially when
              electronics and programming come into play. Whether it’s designing smart home systems, developing
              interactive web applications, game development or experimenting with embedded systems like ATmega or ESP32, I’m always
              exploring new ways to bring ideas to life.
              <br>
              My background in IT Product Development has given me experience in software development, hardware
              integration, and user-centered design. Over the years, I’ve worked on a variety of projects, from
              practical IT soltions and IoT devices to game development and automation systems. I enjoy pushing the
              limits of what technology can do, exploring solutions for Extended Reality, crafting DIY
              hardware solutions, or coding efficient and scalable software.
              <br>
              Outside of structured work and studies, I spend a lot of time on personal projects—building custom tools,
              tinkering with electronics, and refining my skills in programming languages like Python, Java, and C++. If
              you share an interest in creative tech solutions or have an exciting project idea, I’d love to connect!
            </p>
            <a href="/about" class="mt-4 underline underline-offset-4 text-primary">
              <p class="">Learn More</p>
            </a>
          </template>
        </PortSection>
</template>

<script setup>
import PortSection from "../components/PortSection.vue";

</script>