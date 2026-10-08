import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ProjectRobot from './components/projects/ProjectRobot.vue'
import ProjectAlarm from './components/projects/ProjectAlarm.vue'
import ProjectPlankPlunge from './components/projects/ProjectPlankPlunge.vue'
import ProjectWatchWinder from './components/projects/ProjectWatchWinder.vue'
import ProjectHungryMonkeys from './components/projects/ProjectHungryMonkey.vue'
import ProjectDoMo from './components/projects/ProjectDoMo.vue'
import ProjectSketchNSow from './components/projects/ProjectSketchNSow.vue'
import ProjectChestQuest from './components/projects/ProjectChestQuest.vue'
import ProjectBachelor from './components/projects/ProjectBachelor.vue'
import ProjectSportTracking from './components/projects/ProjectSportTracking.vue'
import ProjectProtoboxes from './components/projects/ProjectProtoboxes.vue'
import ProjectSynth from './components/projects/ProjectSynth.vue'
import ProjectIotHome from './components/projects/ProjectIotHome.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/projects', component: ProjectsView },
  { path: '/projects/tatbot', component: ProjectRobot },
  { path: '/projects/alarm-clock', component: ProjectAlarm },
  { path: '/projects/plank-plunge', component: ProjectPlankPlunge },
  { path: '/projects/watch-winder', component: ProjectWatchWinder },
  { path: '/projects/hungry-monkeys', component: ProjectHungryMonkeys },
  { path: '/projects/domo', component: ProjectDoMo },
  { path: '/projects/sketch-n-sow', component: ProjectSketchNSow },
  { path: '/projects/chest-quest', component: ProjectChestQuest },
  { path: '/projects/bachelor', component: ProjectBachelor },
  { path: '/projects/sports-tracking', component: ProjectSportTracking },
  { path: '/projects/protoboxes', component: ProjectProtoboxes },
  { path: '/projects/synth', component: ProjectSynth },
  { path: '/projects/iothome', component: ProjectIotHome },










]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash }
    return { top: 0 }
  },
})

createApp(App)
  .use(router)
  .mount('#app')
