import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/index.vue'
import Contact from '../views/contact.vue'
import rentcar from '../views/rentcar.vue'
import Pack from '../views/Packs/pack.vue'
import comingsoon from '../components/comingsoon.vue'
import Packdetails from '../views/Packs/packDetails1.vue'
import Packdetails2 from '../views/Packs/packDetails2.vue'
import Packdetails3 from '../views/Packs/packDetails3.vue'
import Packdetails4 from '../views/Packs/packDetails4.vue'
import Packdetails5 from '../views/Packs/packDetails5.vue'

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
    path: '/Desert-OVERNIGHT-Details',
    name: 'packdetails',
    component: Packdetails,
  },
{
    path: '/Jbel-SAFARI-Details',
    name: 'packdetails3',
    component: Packdetails3,
  },
 {
    path: '/Desert-SAFARI-Details',
    name: 'Packdetails2',
    component: Packdetails2,
  },
   {
    path: '/Salalah-City-Tour-Details',
    name: 'packdetails4',
    component: Packdetails4,
  },
   



  
   {
    path: '/West-salalah-Details',
    name: 'packdetails5',
    component: Packdetails5,
  },






]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
