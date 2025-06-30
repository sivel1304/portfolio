<template>
  <ProjectSection class="bg-backgrund-900" title="Tattoo Robot"
    :tools="['Vue, JS, Electron', 'GRBL', 'Python, OpenCV', 'Arduino, C/C++']">
    <template v-slot:description>
      <p class="opacity-90 ">
        My tattoo robot is a project, which is still in development. The goal is to create a robot that can
        tattoo a person with a design that is uploaded to the robot. It is basically a CNC machine but with an tatgun
        attached.
        Software created for it aswell. UI for choosing tattoos (<a class="text-primary"
          href="https://github.com/sivel1304/robot-desktop">Github</a>), GCODE generator to create the GCODE from the
        tattoo images (<a class="text-primary" href="https://github.com/sivel1304/python-opencv">Github</a>), and
        computer vision to detect the skin and adjust the tattoo position.
        Newly added a BTT SKR Mini E3 board to control the robot.
      </p>

    </template>


    <template v-slot:image>
      <div class="w-full grid grid-cols-2 gap-5 justify-center">
        <img v-for="(image, index) in images" :key="index" :src="image" alt="Tattoo Robot Image"
          :class="getImageClass(index)" class="mx-auto" />
        <div class="relative col-span-2 w-full h-full overflow-hidden rounded-md" style="padding-top: 56.25%;">
          <iframe class="absolute top-0 left-0 w-full h-full"
            src="https://player.vimeo.com/video/1097334984?h=d08eeff3c0" title="YouTube video player" frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"></iframe>
        </div>
        <div class="relative col-span-1 w-full h-[66vh] overflow-hidden rounded-md" style="padding-top: 56.25%;">
          <iframe class="absolute top-0 left-0 w-full h-[66vh] " title="vimeo-player"
            src="https://player.vimeo.com/video/1097335014?h=8237891505"
            allow="autoplay; fullscreen; picture-in-picture"></iframe>
        </div>
        <div class="relative col-span-1 w-full h-[66vh] overflow-hidden rounded-md" style="padding-top: 56.25%;">
          <iframe class="absolute top-0 left-0 w-full h-[66vh] " title="vimeo-player"
            src="https://player.vimeo.com/video/1097335003?h=acf2443236"
            allow="autoplay; fullscreen; picture-in-picture"></iframe>
        </div>
        <div class="relative col-span-2 w-full h-[66vh] overflow-hidden rounded-md" style="padding-top: 56.25%;">
          <iframe class="absolute top-0 left-0 w-full h-[66vh] " title="vimeo-player"
            src="https://player.vimeo.com/video/1097334991?h=485e78c31b"
            allow="autoplay; fullscreen; picture-in-picture"></iframe>
        </div>



      </div>
    </template>
  </ProjectSection>
</template>

<script setup>
import { ref } from 'vue';
import ProjectSection from "../ProjectSection.vue";

// Dynamically import images
const images = ref(Object.values(import.meta.glob('../../assets/project-images/robot/*.{jpg,png}', { eager: true, import: 'default' })));

// Function to determine the class for each image
const getImageClass = (index) => {
  if (index % 3 === 1 || index % 3 === 2) return 'col-span-1'; // Two images in the second row
  return 'col-span-2'; // Single image in the next row
};
</script>
