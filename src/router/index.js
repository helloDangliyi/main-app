import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index.vue'
Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    meta: { title: '布局' },
    component: Layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: '/sub-vue/*',
        meta: { title: '子应用' },
        component: () => import('@/views/qiankun/index.vue')
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
