import '../js/flexible'
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Particulars from '@/components/Particulars'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/', //接口
        name: 'HelloWorld', //名字
        component: HelloWorld //组件
    }, {
        path: '/Particulars', //接口
        name: 'Particulars', //名字
        component: Particulars //组件
    }]
})