import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import TestPlayer from '@/pages/TestPlayer'
import Page404 from '@/pages/Page404'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/TestPlayer',
            name: 'TestPlayer',
            component: TestPlayer
        },
        {
            path: '/*',
            name: 'Page404',
            component: Page404
        }
    ]
})