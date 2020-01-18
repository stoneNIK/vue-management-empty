import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'admin',
    redirect: '/home',
    component: () => import('../layout/AdminLayout.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          menuName: '首页',
          menuIcon: 'el-icon-s-home'
        },
        component: () => import('../views/Home.vue')
      }
    ]
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: () => import('../views/Forgot.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
