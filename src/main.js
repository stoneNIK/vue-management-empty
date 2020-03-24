import Vue from 'vue'
import App from '@/App.vue'

import '@/plugins/date'

import '@/plugins/element'
import '@/components/common'

import router from '@/router'
import store from '@/store'

// 晶格化组件
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

Vue.config.productionTip = false

import '@/styles/index.scss'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
