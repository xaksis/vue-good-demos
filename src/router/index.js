import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

//demos
import SimpleTable from '@/components/Simple-table'
import TableStyles from '@/components/Table-styles'
import TableFilters from '@/components/Table-filters'
import SimpleWizard from '@/components/Simple-wizard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        //vue good table
        {
          path: 'simple-table',
          name: 'simple-table',
          component: SimpleTable,
        },
        {
          path: 'table-styles',
          name: 'table-styles',
          component: TableStyles,
        },
        {
          path: 'table-filters',
          name: 'table-filters',
          component: TableFilters,
        },
        //vue good wizard
        {
          path: 'simple-wizard',
          name: 'simple-wizard',
          component: SimpleWizard,
        }
      ]
    }
  ]
})
