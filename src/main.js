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

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/projects', component: ProjectsView },
  { path: '/projects/tatbot', component: ProjectRobot },
  { path: '/projects/alarm-clock', component: ProjectAlarm },
  { path: '/projects/plank-plunge', component: ProjectPlankPlunge },
  { path: '/projects/watch-winder', component: ProjectWatchWinder },





]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
  .use(router)
  .mount('#app')
