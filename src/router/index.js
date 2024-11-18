import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppleJob from  '../views/AppleJob'
import membersView from '../views/membersView.vue'
import ThreadView from   '../views/ThreadView.vue'
import profileView from   '../views/profileView.vue'
import ParticipantsView from    '../views/ParticipantsView.vue'
import loginPage from  '../views/loginPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, {
    path: '/ThreadView',
    name: ThreadView,
    component:  () => import(  '../views/ThreadView.vue')
  },
  {
    path: '/Participants',
    name: ParticipantsView,
    component:  () => import(  '../views/ParticipantsView.vue')
  },
  {
    path: '/profile',
    name: profileView,
    component:  () => import(  '../views/profileView.vue')
  },
  {
    path: '/apple/:id', 
    name: 'apple',
    component: AppleJob,
  },
  {
    path: '/members',
    name: membersView,
    component: () => import(  '../views/membersView.vue')
  },
  
  {
    path: '/loginPage',
    name: loginPage,
    component: () => import(  '../views/loginPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
