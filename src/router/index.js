import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path:'/nologin',
            component: resolve => require(['../components/page/noLogin.vue'],resolve)
        },
        {
            path: '/user',
            component: resolve => require(['../components/common/userHome.vue'], resolve),
            children:[
                {
                    path: '/user/change-nick',
                    component: resolve => require(['../components/page/changeNick.vue'],resolve)
                },
                {
                    path: '/user/change-password',
                    component: resolve => require(['../components/page/changePassword.vue'],resolve)
                },
                {
                    path: '/user/news-list',
                    component: resolve => require(['../components/page/NewsList.vue'],resolve)
                },
                {
                    path: '/user/news',
                    component: resolve => require(['../components/page/News.vue'],resolve)
                },
                {
                    path: '/user/product-list',
                    component: resolve => require(['../components/page/ProductList.vue'],resolve)
                },
                {
                    path: '/user/product-compare',
                    component: resolve => require(['../components/page/ProductCompare.vue'],resolve)
                },
                {
                    path: '/user/ivr',
                    component: resolve => require(['../components/page/ivr.vue'],resolve)
                },
                {
                    path: '/user/svr',
                    component: resolve => require(['../components/page/svr.vue'],resolve)
                },
                {
                    path: '/user/evr',
                    component: resolve => require(['../components/page/evr.vue'],resolve)
                }

            ]
        },
        {
            // 管理员入口
            path: '/admin',
            component: resolve => require(['../components/common/adminHome.vue'], resolve),
            children: [
                {
                    path: '/admin/administrator',
                    component: resolve => require(['../components/page/Administrator.vue'], resolve)
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
