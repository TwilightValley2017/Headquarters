import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MachineGun from '@/components/machine-gun'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/machine-gun',
      name: 'MachineGun',
      component: MachineGun
    }
  ]
})
