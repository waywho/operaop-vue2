import Vue from 'vue'
import Router from 'vue-router'
import companyAccount from '@/components/companyAccount'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Company Account',
      component: companyAccount
    }
  ]
})
