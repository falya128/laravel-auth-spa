import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: () => import('../views/Mypage.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/Signup.vue')
    }
  ]
})

export default router
