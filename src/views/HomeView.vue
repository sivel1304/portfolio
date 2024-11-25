<template>
  <div class="h-fit w-full snap-proximity snap-y scrollbar-hidden">
    <header class="fixed z-0 min-h-[35rem] top-0 left-0 right-0 snap-none">
      <NameHeader></NameHeader>
    </header>

    <main class="relative w-full z-20 top-[100vh] snap-start">
      <div class="flex flex-col w-full mx-auto snap-start">
        <PortSection
          class="bg-backgrund-900 snap-always snap-start"
          title="About Me"
          text-color="text-primary"
          :isTextLeft="false"
        >
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
            <p class="opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in nisi ut aliquip ex ea commodo consequat. Lorem
              ipsum dolor sit amet, Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in nisi ut aliquip ex ea commodo consequat.
              Lorem ipsum dolor sit amet,
            </p>
            <a href="/about" class="mt-4 underline underline-offset-4 text-primary"
              ><p class="">Learn More</p></a>
          </template>
        </PortSection>

        <PortSection
          id="projects"
          class="bg-primary snap-always snap-start text-backgrund-900"
          title="Projects"
          text-color="text-backgrund-800"
          :isTextLeft="true"
        >
          <template v-slot:left>
            <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in nisi ut aliquip .</p>
              <a href="/projects" class="mt-4 underline underline-offset-4 text-white"><p class="">See All Projects</p></a>
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

  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const material = new THREE.MeshBasicMaterial({ color: 0x111111 });
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
