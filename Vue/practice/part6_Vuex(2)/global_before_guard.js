// router/index.js

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloView from '@/views/HelloView.vue'
import LoginView from '@/views/LoginView.vue'

Vue.use(VueRouter)

const routes = [
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
    path: '/hello/:userName',
    name: 'hello',
    component: HelloView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router/index.js
// 모든 페이지에서 실행 됨 
// 로그인 여부에 따른 라우팅 처리 
router.beforeEach((to, from, next) => {
  // CODE HERE

  // 로그인 여부
  // const isLoggedIn = true // 로그인 됨 
  const isLoggedIn = false // 로그인 안 됨 

  // 1) 로그인이 필요한 페이지 지정
  // const authPages = ['hello', 'about', 'home']
  // 2) 로그인 안 해도 되는 페이지만 지정하는 것이 더 나음
  const allowAuthPages = ['login']

  // 1) 앞으로 이동할 페이지(to)가 로그인이 필요한 페이지인지 확인 
  // const isAuthRequired = authPages.includes(to.name)
  // 2) 로그인 안 해도 되는 페이지가 아니라면, 로그인 하도록 
  const isAuthRequired = !allowAuthPages.includes(to.name)

  // 로그인이 필요한 페이지인데 로그인이 안 되어 있다면, 로그인 페이지로 이동
  // 아니면 원래 가야할 곳으로 이동
  // next는 한 번만 실행해야 함 
  if (isAuthRequired && !isLoggedIn) {
    console.log('Login으로 이동');
    next({name: 'login'})
  } else {
    console.log('to로 이동!');
    next()
  }
})
export default router
