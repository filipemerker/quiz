import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/multipla-escolha',
    name: 'MultipleAnswerChallenge',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/MultipleAnswerChallenge.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router