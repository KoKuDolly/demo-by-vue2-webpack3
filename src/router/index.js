import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
const Layout = () => import('@/views/app/')
const HelloWorld = () => import('@/components/HelloWorld')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: 'helloWorld',
          name: 'HelloWorld',
          component: HelloWorld
        }
      ]
    }
  ]
})
