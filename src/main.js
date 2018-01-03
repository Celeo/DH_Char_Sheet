import Vue from 'vue'
import App from './App'

import Vuetify from 'vuetify'
Vue.use(Vuetify)
import('vuetify/dist/vuetify.min.css')


if (location.protocol === 'https:' && navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js')
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
