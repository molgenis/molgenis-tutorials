import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'
import router from '@/router'

import Eagle from 'eagle.js'
import { MolgenisSlideShow } from '@/types/types'
import 'animate.css'

import tutorials from '@/slideshows/tutorials.ts'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDownload, faChevronLeft, faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* eslint-disable no-new */

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './style/molgenis_blue.css'

// Add icons
library.add(faDownload, faChevronLeft, faChevronRight, faHome)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.use(BootstrapVue)

Vue.use(Eagle)
Vue.use(Router)
Vue.config.productionTip = false

const routes = []

tutorials.list.forEach(function (tutorial: MolgenisSlideShow) {
  routes.push({
    path: '/' + tutorial.infos.path,
    component: tutorial
  })
})

new Vue({
  el: '#app',
  router,
  render: h => h('App'),
  components: { App }
})
