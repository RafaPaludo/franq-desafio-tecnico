import { createRouter, createWebHistory} from 'vue-router'
import Hello from '@/views/Home'
import Login from '@/views/Login'

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello,
    meta: { requiresAtuh: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAtuh) {
    const isAuthenticated = localStorage.getItem('user')

    if(!isAuthenticated) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router