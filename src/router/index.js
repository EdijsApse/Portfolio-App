import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: function(to) {
    if (to.hash) {
        return {
          selector: to.hash
        }
    } else {
        return {
          x: 0,
          y: 0
        }
    }
},
  routes
})

export default router
