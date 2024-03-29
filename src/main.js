import Vue from 'vue'
import App from './App.vue'
import router from './router'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

Vue.use(gsap)

import '@fortawesome/fontawesome-free/css/all.css'   
import '@fortawesome/fontawesome-free/js/all.js'    
//bootstrap install

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

//vue config
Vue.config.productionTip = false





new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
