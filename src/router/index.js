import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'
import Centre from '@/views/centre'
import Order from '@/views/order'
import User from '@/views/user'
import Login from '@/views/login/index'//这个@表示根目录
import Pre from '@/views/pre/index'
import Register from '@/views/register/index'
import Test3_1 from '@/views/test/test3_1'
import Test3_2 from '@/views/test/test3_2'
import Test3_3 from '@/views/test/test3_3'
import Test3_4 from '@/views/test/test3_4'
import Personcentre from '@/views/profile/personcentre'
import Editor from '@/views/editor'
import Setting from '@/views/profile/setting'
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pre',
      component: Pre
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout,
      children: [{
        path: '/layout',
        name: 'Centre',
        component: Centre
      },
      {
        path: '/order',
        name: 'Order',
        component: Order
      },
      {
        path: '/editor',
        name: 'Editor',
        component: Editor
      },
      {
        path: '/test3_1',
        name: 'Test3_1',
        component: Test3_1
      },
      {
        path: '/test3_2',
        name: 'Test3_2',
        component: Test3_2
      },
      {
        path: '/test3_3',
        name: 'Test3_3',
        component: Test3_3
      },{
      path: '/test3_4',
      name: 'Test3_4',
      component: Test3_4
    },
      {
        path: '/user',
        name: 'User',
        component: User
      },
      {
        path: '/personcentre',
        name: 'Personcentre',
        component: Personcentre
      },
      {
        path: '/setting',
        name: 'Setting',
        component: Setting
      },]
    },

  ]
})