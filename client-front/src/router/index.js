import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/index.vue'
import Contact from '../views/contact.vue'
import rentcar from '../views/rentcar.vue'


import comingsoon from '../components/comingsoon.vue'


//import ToursListView from '../views/ToursListView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,

  },

   {
    path: '/comingsoon',
    name: 'comingsoon',
    component: comingsoon,
  },

   {
    path: '/rentcar',
    name: 'rentcar',
    component: rentcar,
  },
    {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
 
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
