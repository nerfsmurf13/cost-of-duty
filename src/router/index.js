import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import TestPlayer from '@/pages/TestPlayer'
import Page404 from '@/pages/Page404'
// import Killstreaks from '@/components/Killstreaks'

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
            path: '/mw2019/stats/:platform/:username',
            name: 'Player',
            component: TestPlayer,
            // props(route) {
            //     return route.query || {}
            // }
        },
        {
            path: '/*',
            name: 'Page404',
            component: Page404
        }
    ]
})