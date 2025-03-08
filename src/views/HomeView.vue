<template>
  <div class="w-full scrollbar-hidden snap-mandatory snap-y overflow-auto h-[100vh] ">

    <header class="snap-start min-h-[35rem] top-0 left-0 right-0">
      <NameHeader></NameHeader>
    </header>

    <div class="relative">

      <div class="absolute w-full h-full bg-backgrund-900/80 -z-10"></div>

      <div class="relative z-0 px-32">

        <div class=" w-full h-[1px] mt-10 bg-white rounded-full"></div>

        <div class="snap-start flex h-[90vh] bg-backgrund-900 px-32 py-24">
          <div class="w-1/3 h-full flex flex-col">
            <h2 class="text-3xl mb-8" >About Me</h2>
            <p class="font-light leading-7 text-base">Hi, my name is Viktor Nielsen. I'm a 24 year old student currently
              studying Masters in IT-Product Development on Aarhus University </p>
              <br>
            <p class="font-light leading-7 text-base">I love creating. Whether its software or hardware or even music. I
              am always doing a project</p>
          </div>
          <img src="../assets/stars.png" alt="stars" class="w-2/3 ml-12  object-cover">


        </div>

        <div class=" w-full h-[1px] bg-white rounded-full"></div>

        <PortSection id="projects" class="snap-start bg-backgrund-900  text-white px-32" title="Projects" text-color="text-white"
          :isTextLeft="true">
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
          </template>
        </PortSection>
        <div class="h-[30vh] bg-backgrund-900 px-32">
          <p>måske en liste af projekter her. og så trykker man på feks robot og så
            kommer man ind på robot side, som feks det der sker her:</p>
          <a href="https://www.ronilevi.com/" class="text-primary">linkkkk</a>
          <br>
          <a href="https://www.adamshams.com/ " class="text-primary">eller her</a>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup>
import NameHeader from "../components/NameHeader5.vue";
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

  const geometry = new THREE.BoxGeometry(3, 3, 3);
  const material = new THREE.MeshStandardMaterial({ color: 0xfaf8ff }); // Replace MeshBasicMaterial with MeshStandardMaterial
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  const cube2 = new THREE.Mesh(geometry, material);
  scene.add(cube2);
  const cube3 = new THREE.Mesh(geometry, material);
  scene.add(cube3);

  cube2.position.set(7, 0, -5)
  cube3.position.set(-7, 0, -5)


  camera.position.z = 5;

  function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube2.rotation.x -= 0.01;
    cube2.rotation.y -= 0.01;
    cube3.rotation.x -= 0.01;
    cube3.rotation.y -= 0.01;
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
