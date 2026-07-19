<template>
  <div class="flex flex-col items-center justify-center pt-24">
    <h1 class="text-center">
      About Me
    </h1>
  </div>

  <PortSection class="bg-backgrund-900 md:px-20 px-0" title="" text-color="text-white" :isTextLeft="false">
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
        <h4 class="opacity-30 mb-1">Programming Languages</h4>
        <h4 class="opacity-100 tracking-normal">Java, Javascript, C, C++, C#, Typescript, Javascript, Python</h4>
      </div>
      <div class="mt-4">
        <h4 class="opacity-30 mb-1">Web Technologies</h4>
        <h4 class="opacity-100 tracking-normal">Vue, Tailwind, React, Electron, React Native, REST, HTTP, MQTT</h4>
      </div>
      <div class="mt-4">
        <h4 class="opacity-30 mb-1">Databases</h4>
        <h4 class="opacity-100 tracking-normal">MySQL, MSSQL, PostgreSQL, SQLite, Firebase, Supabase</h4>
      </div>
      <div class="mt-4">
        <h4 class="opacity-30 mb-1">Tools</h4>
        <h4 class="opacity-100 tracking-normal">Unity, VSCode, Visual Studio, .NET, IntelliJ, Git, OpenCV, Docker</h4>
      </div>
    </template>
    <template v-slot:right>
      <p class="opacity-90 font-extralight">
        I'm Viktor, a passionate builder, developer, and problem solver. I'm 26, with a Master's degree in IT Product
        Development from Aarhus University, where I've developed a structured, independent approach to tackling complex
        technical challenges.
        <br>
        I love creating things, especially when electronics and programming come together. Whether it's designing smart
        home systems, building interactive web applications, developing games, or experimenting with embedded systems
        like ATmega and ESP32, I'm always looking for new ways to bring ideas to life. My primary passion, though, lies
        in XR application development, where I've gained hands-on experience with Unity and C# as part of my academic work.
        <br>
        My background spans software development, hardware integration, and user-centered design. Over the years I've
        worked on everything from practical IT solutions and IoT devices to game development, automation systems, and
        DIY hardware builds. I'm analytical, quick to learn, and take real ownership of my work. I enjoy pushing the
        limits of what technology can do and turning ideas into practical, user-focused solutions.
        <br>
        Outside of structured work and studies, I spend a lot of my time on personal projects: building custom tools,
        tinkering with electronics, and sharpening my skills in Python, Java, and C++. 
        <br>
        If you share an interest in creative tech solutions or have an exciting project idea, I'd love to connect!
      </p>

    </template>
  </PortSection>

  <div class="flex w-full justify-center items-center mb-4 md:mb-0">

    <a href="https://www.linkedin.com/in/viktor-s-aa-nielsen/" target="_blank" rel="noopener noreferrer"
      class="group flex w-fit h-10 hover:cursor-pointer items-center">
      <img src="../assets/icons/linkedin.png" alt="linkedin" class="h-5 opacity-40 group-hover:opacity-100 mr-2">
      <p class="opacity-40 group-hover:opacity-100">LinkedIn</p>
    </a>

    <div class="h-6 w-[1px] bg-white opacity-20 mx-6"></div>

    <a href="mailto:viktor00@live.dk" class="group flex w-fit h-10 hover:cursor-pointer items-center">
      <img src="../assets/icons/email.png" alt="email" class="h-5 opacity-40 group-hover:opacity-100 mr-2">
      <p class="opacity-40 group-hover:opacity-100">Email</p>
    </a>
  </div>
</template>

<script setup>
import PortSection from "../components/PortSection.vue";

</script>