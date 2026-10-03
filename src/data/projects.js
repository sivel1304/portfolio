const resolve = (path) => new URL(`../assets/project-images/${path}`, import.meta.url).href;

export const accentColors = ['#8083ff', '#cc62f2', '#ff3c52'];

export const accentFor = (n) => accentColors[(n - 1) % accentColors.length];

export const projects = [
  { n: 1, route: '/projects/sketch-n-sow', title: 'Sketch-n-Sow', subtitle: 'MR Brainstorming Tool', image: resolve('sketch-n-sow/4-idea-in-packet.jpg') },
  { n: 2, route: '/projects/tatbot', title: 'Tattoo Robot', subtitle: 'Homemade Tattoo Robot', image: resolve('robot/image2.png') },
  { n: 3, route: '/projects/watch-winder', title: 'Watch Winder', subtitle: 'Homemade Watch Winder', image: resolve('watch-winder/image98.png') },
  { n: 4, route: '/projects/hungry-monkeys', title: 'Hungry Monkeys', subtitle: 'Wireless Ball-Game for Children', image: resolve('hungry-monkeys/image1.png') },
  { n: 5, route: '/projects/domo', title: 'DoMo', subtitle: 'Sustainable Development Project', image: resolve('domo/image1.jpg') },
  { n: 6, route: '/projects/plank-plunge', title: 'Plank Plunge', subtitle: 'Pirate Game', image: resolve('plank-plunge/image1.png') },
  { n: 7, route: '/projects/chest-quest', title: 'Chest Quest', subtitle: 'AR Treasure Hunt Game', image: resolve('chest-quest/chest-quest1.png') },
  { n: 8, route: '/projects/bachelor', title: 'AR Text Entry', subtitle: 'AR Text Input Research', image: resolve('bachelor/4bachelor2.png') },
  { n: 9, route: '/projects/alarm-clock', title: 'Alarm Clock', subtitle: 'Homemade Alarm Clock', image: resolve('alarm-clock/image1.jpg') },
  { n: 10, route: '/projects/sports-tracking', title: 'Sports Tracking', subtitle: 'IoT and P2P Sports Tracking', image: resolve('p2p/circuit1.png') },
  { n: 11, route: '/projects/protoboxes', title: 'ProtoBoxes', subtitle: 'Sensor & Actuator Demo Boxes', image: resolve('protoboxes/potbox/2-pot-main.jpg') },
  { n: 12, route: '/projects/synth', title: 'Orbiton V1', subtitle: 'Digital Synthesizer', image: resolve('synth/20260806_133517.jpg') },
];
