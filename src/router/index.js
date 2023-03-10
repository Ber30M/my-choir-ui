import Vue from 'vue'
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import attendances from '../views/AttendancesRepport.vue'
import events from '../views/eventspage.vue'

const routes = [
  { path: '/', name: 'Home', component: Home},
  { path: '/home', name: 'Home', component: Home},
  { path: '/attendances', name: 'attendances', component: attendances},
  { path: '/events', name: 'events', component: events},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router