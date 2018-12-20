import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'

const UserProfile = { template: '<div>Profile<br/>{{this.$route.params.hong}}</div>' }
const UserPosts = { template: '<div>Posts</div>' }

Vue.use(Router)

export default new Router({
  mode: 'history',
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
          path:'profile/:hong',
          component:UserProfile
        },
        {
          path:'posts',
          component:UserPosts
        },
      ],
    },
    {
      path: '/bar/:userId',
      name: 'Bar',
      component: Bar
    }
  ]
})
