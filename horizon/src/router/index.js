import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebase'

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

router.beforeEach((to, from, next) => {
  if (to.path ==='/login' && auth.currentUser) {
    next('/user')
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
  }

  next();
})

export default router
