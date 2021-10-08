import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import Contact from '../views/Contact.vue'
import Portfolio from '../views/Portfolio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/portfolio/:prj',
    name: 'Portfolio',
    component: Portfolio
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '',
  routes
})

export default router
