import { createRouter, createWebHistory} from 'vue-router'
import Hello from '@/views/Home'
import Register from '@/views/Register'

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router