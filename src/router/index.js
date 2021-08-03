import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Explorar from '../views/Explorar.vue'
import Suscripciones from '../views/Suscripciones.vue'
import Biblioteca from '../views/Biblioteca.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/explorar',
    name: 'Explorar',
    component: Explorar
  },
  {
    path: '/suscripciones',
    name: 'Suscripciones',
    component: Suscripciones
  },
  {
    path: '/biblioteca',
    name: 'Biblioteca',
    component: Biblioteca
  },
]

const router = new VueRouter({
  routes
})

export default router
