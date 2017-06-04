// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//utility components
import VueHighlightJS from 'vue-highlightjs'

//vue good components
import VueGoodTable from 'vue-good-table'

Vue.config.productionTip = false

Vue.use(VueHighlightJS)
Vue.use(VueGoodTable);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
