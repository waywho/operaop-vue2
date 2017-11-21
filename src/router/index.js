import Vue from 'vue'
import Router from 'vue-router'
import showProfile from '@/components/showProfile'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    { path: '/', name: 'index', component: showProfile },
    { path: '/profile/:id', name: 'profile', component: showProfile }
  ]
})
