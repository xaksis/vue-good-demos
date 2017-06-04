import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

//demos
import SimpleTable from '@/components/Simple-table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'simple-table',
          name: 'simple-table',
          component: SimpleTable,
        }
      ]
    }
  ]
})
