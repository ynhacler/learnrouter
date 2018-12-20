import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'

const UserProfile = { template: '<div>Profile</div>' }
const UserPosts = { template: '<div>Posts</div>' }

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/foo/:id',
      name: 'Foo',
      component: Foo,
      children:[
        {
          path:'profile',
          component:UserProfile
        },
        {
          path:'posts',
          component:UserPosts
        },
      ],
    },
    {
      path: '/bar',
      name: 'Bar',
      component: Bar
    }
  ]
})
