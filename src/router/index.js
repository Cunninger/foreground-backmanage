import Vue from 'vue'
import Router from 'vue-router'

import Centre from '@/views/centre'

// 侧边栏
import Myblog from '@/views/myblog'
import Cnt from '@/views/cnt'
import Aidraw from '@/views/aidraw'
import Piclibrary from '@/views/piclibrary'
import Test3_4 from '@/views/test/test3_4'
import User from '@/views/user'
import Editor from '@/views/editor'
import Layout from '@/views/layout'
import Algoritms from '@/views/algoritms'
import Aichat from '@/views/aichat'
// 侧边栏
import Login from '@/views/login/index'//这个@表示根目录
import Pre from '@/views/pre/index'
import Register from '@/views/register/index'

import Personcentre from '@/views/profile/personcentre'
import Home from '@/frontend/views/Home.vue';
import Setting from '@/views/profile/setting'
import Groupchat from '@/frontend/views/header/groupchat'
import Aboutme from '@/frontend/views/aboutme/index'
import FLayout from '@/frontend/views/Layout'
import Singlechat from '@/frontend/views/header/singlechat.vue'
import Codeeditor from "@/views/codeeditor.vue";
import Noauth from '@/views/exception/noauth.vue'

import Privilegeallocation from '@/views/privilegeallocation.vue'
import Mypan from '@/views/mypan.vue'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
export default new Router({
    routes: [


        {
            path: '/home',
            name: 'FLayout',
            component: FLayout,
            children: [
                {
                    path: '/home',
                    name: 'Home',
                    component: Home
                },
                {
                    path: '/aboutme',
                    name: 'Aboutme',
                    component: Aboutme
                },
                {
                    path: '/singlechat',
                    name: 'Singlechat',
                    component: Singlechat
                }
                ,
                {
                    path: '/groupchat',
                    name: 'Groupchat',
                    component: Groupchat
                }
                ,
            ]
        }
        ,
        {
            path: '/',
            name: 'Pre',
            component: Pre
        },
        {
            path: '/noauth',
            name: 'Noauth',
            component: Noauth
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
                    path: '/myblog',
                    name: 'Myblog',
                    component: Myblog
                },
                {
                    path: '/editor',
                    name: 'Editor',
                    component: Editor
                },
                {
                    path: '/cnt',
                    name: 'Cnt',
                    component: Cnt
                },
                {
                    path: '/aidraw',
                    name: 'Aidraw',
                    component: Aidraw
                },
                {
                    path: '/piclibrary',
                    name: 'Piclibrary',
                    component: Piclibrary
                }, {
                    path: '/test3_4',
                    name: 'Test3_4',
                    component: Test3_4
                },
                {
                    path: '/user',
                    name: 'User',
                    component: User,
                    meta: {
                        access: "canAdmin",
                    },
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
                },
                {
                    path: '/algoritms',
                    name: 'Algoritms',
                    component: Algoritms
                },
                {
                    path: '/aichat',
                    name: 'Aichat',
                    component: Aichat
                },
                {
                    path: '/codeeditor',
                    name: 'Codeeditor',
                    component: Codeeditor
                },
                {
                    path: '/privilegeallocation',
                    name: 'Privilegeallocation',
                    component: Privilegeallocation
                },
                {
                    path: '/mypan',
                    name: 'Mypan',
                    component: Mypan
                },]
        },

    ]
})
