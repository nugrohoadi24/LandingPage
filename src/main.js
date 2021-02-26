import Vue from 'vue'
import App from './App.vue'
import Router from './route/index'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

new Vue({
    created() {
        AOS.init()
    },
    router: Router,
    render: h => h(App),
}).$mount('#app')