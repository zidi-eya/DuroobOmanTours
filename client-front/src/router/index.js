import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/index.vue'
import Contact from '../views/contact.vue'
import rentcar from '../views/rentcar.vue'
import Pack from '../views/Packs/pack.vue'
import comingsoon from '../components/comingsoon.vue'
import Packdetails from '../views/Packs/packDetails1.vue'

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
 {
    path: '/pack',
    name: 'pack',
    component: Pack,
  },
   {
    path: '/details1',
    name: 'packdetails',
    component: Packdetails,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
