import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/index.vue'


//import HomeView from '../components/header.vue'
//import HomeView from '../components/banner.vue'


//import ToursListView from '../views/ToursListView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
 
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
