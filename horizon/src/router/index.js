import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('@/views/Home.vue'),    
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () => import('@/views/AuthLogin.vue')
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: () => import('@/views/AuthRegister.vue')
  },
  {
    path: '/user',
    name: 'UserView',
    component: () => import('@/views/UserDashboard.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
