<template>
  <ProjectSection title="ProtoBoxes" :index="7" tagline="SENSOR & ACTUATOR DEMO BOXES"
    :tools="['ESP32-C3', 'KiCad', 'C/C++', 'Laser-Cut Enclosures']">
    <template v-slot:description>
      <p class="text-[14.5px] leading-[1.75] text-white/75 font-light">
        A set of eight interactive sensor &amp; actuator demonstration boxes, each translating a different physical
        phenomenon into real-time digital feedback — built for hands-on learning around motion tracking, color
        detection, sound visualization, biometric monitoring, access control, and force sensing.
        <br><br>
        Every box is its own self-contained build: an ESP32-C3 on a hand-soldered protoboard, wired to a sensor, an
        actuator, and an OLED (or TFT) display, all housed in a laser-cut enclosure. Circuits were designed in KiCad
        before assembly.
        <br><br>
        Built with Miklas Balling Kislo at Aarhus University, Department of Computer Science.
      </p>
    </template>

    <template v-slot:image>
      <div class="grid grid-cols-1 gap-4">
        <div v-for="(box, i) in boxes" :key="box.title" class="border border-white/10 rounded-md p-4 flex flex-col gap-3">
          <div>
            <div class="font-mono text-[11px] mb-1" :style="{ color: accentColors[i % accentColors.length] }">
              {{ String(i + 1).padStart(2, '0') }} — {{ box.title.toUpperCase() }}
            </div>
            <div class="text-[13px] text-white/70 leading-relaxed">{{ box.description }}</div>
            <div class="font-mono text-[11px] text-white/40 mt-1.5">{{ box.hardware }}</div>
          </div>
          <div class="grid gap-2" :class="box.main ? 'grid-cols-2' : 'grid-cols-1'">
            <img v-if="box.main" :src="box.main" :alt="`${box.title} photo`"
              class="w-full h-[250px] object-fill bg-surface rounded-md border border-white/10" />
            <img :src="box.schematic" :alt="`${box.title} schematic`"
              class="w-full h-[250px] object-contain bg-white rounded-md border border-white/10" />
          </div>
        </div>
      </div>
    </template>
  </ProjectSection>
</template>

<script setup>
import ProjectSection from "../ProjectSection.vue";
import { accentColors } from '@/data/projects';

import potMain from '../../assets/project-images/protoboxes/potbox/2-pot-main.jpg';
import potSchematic from '../../assets/project-images/protoboxes/potbox/potbox-schematic.png';
import ultraMain from '../../assets/project-images/protoboxes/ultrabox/2-ultra-main.jpg';
import ultraSchematic from '../../assets/project-images/protoboxes/ultrabox/ultrabox-schematic.png';
import accelMain from '../../assets/project-images/protoboxes/accelbox/2-gyro-main.jpg';
import accelSchematic from '../../assets/project-images/protoboxes/accelbox/accelbox-schematic.png';
import colorMain from '../../assets/project-images/protoboxes/colorbox/2-color-main.jpg';
import colorSchematic from '../../assets/project-images/protoboxes/colorbox/colorbox-schematic.png';
import micMain from '../../assets/project-images/protoboxes/micbox/2-mic-main.jpg';
import micSchematic from '../../assets/project-images/protoboxes/micbox/micbox-schematic.png';
import pulseMain from '../../assets/project-images/protoboxes/pulsebox/2-pulse-main.jpg';
import pulseSchematic from '../../assets/project-images/protoboxes/pulsebox/pulsebox-schematic.png';
import rfidSchematic from '../../assets/project-images/protoboxes/rfidbox/rfidbox-schematic.png';
import fsrSchematic from '../../assets/project-images/protoboxes/fsrbox/fsrbox-schematic.png';

const boxes = [
  {
    title: 'Pot + Servo',
    hardware: 'Potentiometer · MG90S Servo · OLED',
    description: 'Translate movement into digital data with a rotary knob controlling a servo.',
    main: potMain,
    schematic: potSchematic,
  },
  {
    title: 'Ultrasonic + Servo',
    hardware: 'HC-SR04 · MG90S Servo · OLED',
    description: 'Measure distance with sound waves and control a servo based on proximity.',
    main: ultraMain,
    schematic: ultraSchematic,
  },
  {
    title: 'Gyro/Accel + Servo',
    hardware: 'GY-521 / MPU6050 · MG90S Servo · OLED',
    description: 'Tilt the box to control a servo and visualize motion on a coordinate graph. Requires calibration.',
    main: accelMain,
    schematic: accelSchematic,
  },
  {
    title: 'Color + TFT LCD',
    hardware: 'TCS34725 · TFT LCD · OLED',
    description: 'A digital eye that identifies colors and displays them with their RGB values.',
    main: colorMain,
    schematic: colorSchematic,
  },
  {
    title: 'Mic + LED Ring',
    hardware: 'MAX4466 Mic · WS2812 LED Ring · OLED',
    description: 'Visualize sound levels with a live graph, dB readout, and colorful LED ring.',
    main: micMain,
    schematic: micSchematic,
  },
  {
    title: 'Pulse + Speaker',
    hardware: 'PulseSensor · Speaker · PAM8403 Amp',
    description: 'Monitors your heart rate, with live visualization and audible heartbeat. Requires calibration.',
    main: pulseMain,
    schematic: pulseSchematic,
  },
  {
    title: 'RFID + Motors',
    hardware: 'RC522 RFID Reader · DC Motor · MG90S Servo',
    description: 'Use RFID tags to unlock and control three different types of motors.',
    main: null,
    schematic: rfidSchematic,
  },
  {
    title: 'FSR + DC Motor',
    hardware: 'Force Sensitive Resistor · DC Motor · OLED',
    description: 'Control motor speed by squeezing — the harder you press, the faster it spins.',
    main: null,
    schematic: fsrSchematic,
  },
];
</script>
