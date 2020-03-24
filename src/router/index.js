import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const businessRoutes = []

const routes = [
  {
    path: '/',
    name: 'admin',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      menuName: '欢迎页',
      menuIcon: 'el-icon-s-home',
      layout: 'main'
    },
    component: () => import('../views/Home.vue')
  },
  ...businessRoutes,
  {
    path: '/login',
    name: 'login',
    meta: {
      menuName: '登陆'
    },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: () => import('../views/Forgot.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue'),
    meta: {
      layout: 'empty'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
