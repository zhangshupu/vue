import Vue from 'vue'
import Router from 'vue-router'
import Music from '@/components/Music'
import Recommend from '@/components/Recommend'
import Ranking from '@/components/Ranking'
import Search from '@/components/Search'
import Particulars from '@/components/Particulars'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Music',
        component: Music,
        children: [{
            path: '/music/recommend',
            name: 'Recommend',
            component: Recommend
        }, {
            path: '/music/ranking',
            name: 'Ranking',
            component: Ranking
        }, {
            path: '/music/search',
            name: 'Search',
            component: Search
        }]
    }, {
        path: '/particulars',
        name: 'Particulars',
        component: Particulars,
    }]
})