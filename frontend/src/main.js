import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import Routes from "./routes"

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { faLeftLong, faMars, faUserPen, faUserPlus, faUserXmark, faVenus } from '@fortawesome/free-solid-svg-icons'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faMars, faVenus, faUserPlus, faUserPen, faUserXmark, faLeftLong)

const router = new VueRouter({
  routes: Routes,
  mode: "history"
})

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
