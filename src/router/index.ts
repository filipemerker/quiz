import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/multipla-escolha/novo-testamento',
    name: 'NewTestamentChallenge',
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../pages/Challenges/NewTestamentChallenge.vue'
      ),
  },
  {
    path: '/sucesso/:id',
    name: 'Success',
    component: () =>
      import(/* webpackChunkName: "success" */ '../pages/Success/Success.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
