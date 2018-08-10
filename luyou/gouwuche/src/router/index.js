import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Order from '@/components/Order'
import Evaluate from '@/components/Evaluate'
import Merchant from '@/components/Merchant'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
        children: [{
            path: '/order',
            name: 'Order',
            component: Order,
        }, {
            path: '/evaluate',
            name: 'Evaluate',
            component: Evaluate,
        }, {
            path: '/merchant',
            name: 'Merchant',
            component: Merchant,
        }]
    }]
})