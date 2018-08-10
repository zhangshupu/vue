import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import vueLazyload from 'vue-lazyload'
Vue.use(ElementUI);

Vue.use(vueLazyload, {
    preLoad: 1.3,
    loading: './assets/nn.jpg',
    attempt: 1
})
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})