import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from './layouts/Default.vue'
import Hosts from './views/hosts/Hosts.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/hosts',
          name: 'hosts',
          component: Hosts
        }
      ]
    }
  ]
})
