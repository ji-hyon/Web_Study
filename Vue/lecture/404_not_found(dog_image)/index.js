import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoun404 from '@/views/NotFound404.vue'

import DogView from '../views/DogView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/404',
    name: 'NotFoun404',
    component: NotFoun404,
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/dog/:breed',
    name: 'dog',
    component: DogView
  },

  // 위에 해당하지 않는 모든 것 
  // 설정하지 않은 url은 모두 404페이지로 이동시키기 
  // 404는 항상 맨 아래에 위치해야 함 
  {
    path: '*',
    redirect : '/404'
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
