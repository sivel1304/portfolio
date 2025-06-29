<template>
    <ProjectSection title="Hungry Monkeys" text-color="text-xl" :tools="['Fusion360', 'C/C# in Arduino']">
        <template v-slot:description>
            <p class="opacity-90">
                Hungry Monkeys is an outdoor ball-catching
                game, designed for 6–8-year-old children with the
                purpose of helping the kids develop their gross motor
                skills. At the age of 6 children start to develop some of
                the important gross motor skills. One of them being the
                hand-eye coordination used when catching a ball,
                another being sport that involves good physical control
                which is developed around the age of 6. Hungry Monkeys
                consists of 3 parts. The first part is the shooter,
                and the other parts are two similar boxes shaped like
                monkeys. The game consists of catching the
                lightweight plastic balls, intended to be fruits, which the
                shooter shoots up in the air. When a ball is fired, one of the monkeys' eyes will light up. The player
                then
                has to catch the ball and put it down in the mouth of the
                monkey that lights up. After the two first rounds, it will
                be random which monkey lights up. When the ball is
                placed in the mouth of the right monkey, the next ball will
                be fired. The game will continue until a set number of
                balls are placed in the monkeys’ mouths. The display on
                the shooter will then show the total time spent catching
                and placing the balls. The goal is to complete the task in
                the least amount of time possible. To start a new game,
                the shooter has to be reloaded with balls and the next
                round can begin. Players can either compete against each
                other or work on improving their own personal best time.
            </p>
        </template>
        <template v-slot:image>
            <div class="w-3/4 grid grid-cols-2 gap-5 justify-center">
                <img v-for="(image, index) in images" :key="index" :src="image" alt="Watch Winder Image"
                    :class="getImageClass(index)" class="mx-auto" />

                <video controls class="col-span-2 mx-auto rounded-sm w-96">
                    <source src="../../assets/project-images/hungry-monkeys/video1.mp4" type="video/mp4" />
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
const images = ref(Object.values(import.meta.glob('../../assets/project-images/hungry-monkeys/*.{jpg,png}', { eager: true, import: 'default' })));
// Function to determine the class for each image
const getImageClass = (index) => {
    if (index % 3 === 1 || index % 3 === 2) return 'col-span-1'; // Two images in the second row
    return 'col-span-2'; // Single image in the next row
};
</script>
