import Vue from 'vue'
import App from './App'
window.EventHub = new Vue();
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})