import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/echarts',
    name: 'echarts',
    component: () => import(/* webpackChunkName: "table" */ '../views/Echarts.vue')
  },
  {
    path: '/bar',
    name: 'bar',
    component: () => import(/* webpackChunkName: "table" */ '../views/Bar.vue')
  },
  {
    path: '/foo',
    name: 'foo',
    component: () => import(/* webpackChunkName: "table" */ '../views/Foo.vue')
  },
  {
    path: '/user',
    name: 'user',
    // 路由独享的守卫
    component: () => import(/* webpackChunkName: "table" */ '../views/User.vue')
  },
  {
    path: '/git',
    name: 'git',
    // 路由独享的守卫
    component: () => import(/* webpackChunkName: "table" */ '../views/Git.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
