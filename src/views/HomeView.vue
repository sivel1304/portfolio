<template>
  <div class="h-fit w-full snap-proximity snap-y scrollbar-hidden">
    <header class="fixed z-0 min-h-[35rem] top-0 left-0 right-0 snap-none">
      <NameHeader></NameHeader>
    </header>

    <main class="relative w-full z-20 top-[100vh] snap-start">
      <div class="flex flex-col w-full mx-auto snap-start">
        <PortSection class="bg-backgrund-900 snap-always snap-start" title="About Me" text-color="text-primary"
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

            <!--           <ButtonPrimary title="Contact Me" text-color="text-primary"></ButtonPrimary>
 -->
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

        <PortSection id="projects" class="bg-primary snap-always snap-start text-backgrund-900" title="Projects"
          text-color="text-backgrund-800" :isTextLeft="true">
          <template v-slot:left>
            <p class="">
              Here, you'll find a collection of programming and DIY projects I've created,
              showcasing my passion for innovation and problem-solving. From games and
              robotics to smart home solutions and creative experiments, each project
              reflects my curiosity and dedication to learning. Dive in and explore!
            </p>
            <a href="/projects" class="mt-4 underline underline-offset-4 text-white">
              <p class="">See All Projects</p>
            </a>
          </template>
          <template v-slot:right>
            <p class="opacity-90">3d model eller billede her</p>
          </template>
        </PortSection>
      </div>
    </main>
  </div>
</template>

<script setup>
import NameHeader from "../components/NameHeader3.vue";
import PortSection from "../components/PortSection.vue";
import { onMounted } from "vue"; // Import onMounted lifecycle hook
import WebGL from "three/addons/capabilities/WebGL.js";
import * as THREE from "three";
//import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

onMounted(() => {
  const projectDiv = document.getElementById("projects");
  if (!projectDiv) {
    console.error("Div with id 'project' not found.");
    return;
  }
  // Create a scene, camera, and renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    projectDiv.clientWidth / projectDiv.clientHeight, // Use the div's dimensions
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(projectDiv.clientWidth / 2, projectDiv.clientHeight / 2); // Match the div's size
  renderer.domElement.style.zIndex = "10";
  projectDiv.appendChild(renderer.domElement); // Append to the specific div

  /*  // Add a light source
  const light = new THREE.AmbientLight(0xffffff); // Soft white light
  scene.add(light);

  const loader = new GLTFLoader();
  loader.load(
    "/assets/models/scene.gltf",
    function (gltf) {
      scene.add(gltf.scene);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  ); */
  const al = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(al);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(-2, 1, 2);
  scene.add(directionalLight);

  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff }); // Replace MeshBasicMaterial with MeshStandardMaterial
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  if (WebGL.isWebGL2Available()) {
    // Initiate function or other initializations here
    renderer.setAnimationLoop(animate);
  } else {
    const warning = WebGL.getWebGL2ErrorMessage();
    document.getElementById("container").appendChild(warning);
  }
});
</script>
