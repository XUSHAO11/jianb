import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/label',
      name: 'label',
      component: () => import('../views/label.vue')
    },
    {
      path: '/pigeonhole',
      name: 'pigeonhole',
      component: () => import('../views/pigeonhole.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/search.vue')
    },
    {
      path: '/silder',
      name: 'silder',
      component: () => import('../components/Silder.vue')
    }
  ]
})

export default router
