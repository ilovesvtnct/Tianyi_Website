import { createRouter, createWebHistory } from 'vue-router'
import Intro from '../views/Intro.vue'
import IntroBox from '../views/IntroBox.vue'
import Experience from '../components/Experience.vue'
import Activities from '../components/Activities.vue'
import Portfolio from '../components/Portfolio.vue'

const routes = [
  { path: '/', redirect: '/intro'},
  { path: "/intro", component: () => import("@/views/IntroBox.vue")},
  { path: '/home', component: () => import('@/views/Intro.vue')},
  { path: '/experience', component: Experience },
  { path: '/activities', component: Activities },
  { path: '/portfolio', component: Portfolio }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
