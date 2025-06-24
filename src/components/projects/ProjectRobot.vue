<template>
  <ProjectSection class="bg-backgrund-900" title="Tattoo Robot" :tools="['Vue, JS, Electron', 'GRBL', 'Python, OpenCV', 'Arduino, C/C++']">
    <template v-slot:description>
      <p class="opacity-90">
        My tattoo robot is a project, which is still in development. The goal is to create a robot that can
        tattoo a person with a design that is uploaded to the robot. It is basically a CNC machine but with an tatgun attached.
        Software created for it aswell. UI for choosing tattoos (<a class="text-primary" href="https://github.com/sivel1304/robot-desktop">Github</a>), GCODE generator to create the GCODE from the tattoo images (<a class="text-primary" href="https://github.com/sivel1304/python-opencv">Github</a>), and computer vision to detect the skin and adjust the tattoo position.
        Newly added a BTT SKR Mini E3 board to control the robot.
      </p>
  
    </template>


    <template v-slot:image>
      <div class="w-3/4 grid grid-cols-2 gap-5 justify-center">
        <img v-for="(image, index) in images" :key="index" :src="image" alt="Tattoo Robot Image"
          :class="getImageClass(index)" class="mx-auto" />
        <video controls class="col-span-2 rounded-sm">
          <source src="../../assets/project-images/robot/video4.mp4" type="video/mp4" />
          <!-- Fallback text if the video cannot be played -->
          Your browser does not support the video tag.
        </video>
        <video controls class="rounded-sm">
          <source src="../../assets/project-images/robot/video1.mp4" type="video/mp4" />
          <!-- Fallback text if the video cannot be played -->
          Your browser does not support the video tag.
        </video>
        <video controls class="rounded-sm">
          <source src="../../assets/project-images/robot/video2.mp4" type="video/mp4" />
          <!-- Fallback text if the video cannot be played -->
          Your browser does not support the video tag.
        </video>
        <video controls class="rounded-sm">
          <source src="../../assets/project-images/robot/video3.mp4" type="video/mp4" />
          <!-- Fallback text if the video cannot be played -->
          Your browser does not support the video tag.
        </video>
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
