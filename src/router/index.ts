import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home/Home.vue'

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
      import(
        /* webpackChunkName: "about" */ '../pages/MultipleAnswerChallenge/MultipleAnswerChallenge.vue'
      ),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
