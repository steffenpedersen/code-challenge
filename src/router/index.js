import Vue from 'vue'
import VueRouter from 'vue-router'
import PriceCalculation from '../views/PriceCalculation.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'PriceCalculation',
    component: PriceCalculation
  },
  {
    path: '/rendered-font',
    name: 'RenderedFont',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RenderedFont.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
