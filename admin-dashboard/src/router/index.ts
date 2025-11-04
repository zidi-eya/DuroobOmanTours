import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Dashboard from '@/views/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/cc',
        name: 'Dashboard',
        component: Dashboard,
        meta: { title: 'Dashboard' },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Optional: dynamically set the page title
router.afterEach((to) => {
  document.title = (to.meta.title as string) || 'Admin Dashboard'
})

export default router
