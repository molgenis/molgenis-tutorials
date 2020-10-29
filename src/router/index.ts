import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import EmxTutorial from '@/slideshows/EmxTutorial.vue'
import ImportTutorial from '@/slideshows/ImportTutorial.vue'
import FaqTutorial from '@/slideshows/FaqTutorial.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/emx',
    name: 'Emx',
    component: EmxTutorial
  },
  {
    path: '/import',
    name: 'Import',
    component: ImportTutorial
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FaqTutorial
  }
]

const router = new VueRouter({
  routes
})

export default router
