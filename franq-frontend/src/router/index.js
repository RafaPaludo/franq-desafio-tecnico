import { createRouter, createWebHistory} from 'vue-router'
import Hello from '@/views/Home'
import Login from '@/views/Login'

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
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

router.beforeEach((to, from) => {
  const isAuthenticated = localStorage.getItem('user')

  if (!isAuthenticated && to.name !== 'Login') {
    return { name: 'Login' }
  }
})

export default router