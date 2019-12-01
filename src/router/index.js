import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/basicinfo',
    name: 'basicinfo',
    component: () => import('../views/BasicInfo.vue'),
    alias: '/GetAQuote'
  },
  {
    path: '/basicinfo',
    name: 'basicinfo',
    component: () => import('../views/BasicInfo.vue'),
    alias: '/Purchase'
  },
  {
    path: '/basicinfo',
    name: 'basicinfo',
    component: () => import('../views/BasicInfo.vue'),
    alias: '/Refinance'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
