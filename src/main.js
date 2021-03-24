import Vue from 'vue'
import App from './App.vue'
import Router from './route/index'
import AOS from 'aos'
import { BootstrapVue } from 'bootstrap-vue'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
    created() {
        AOS.init()
    },
    router: Router,
    render: h => h(App),
}).$mount('#app')