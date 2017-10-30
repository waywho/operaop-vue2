import Vue from 'vue'
import Router from 'vue-router'
import showCompany from '@/components/showCompany'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Company',
      component: showCompany
    }
  ]
})
