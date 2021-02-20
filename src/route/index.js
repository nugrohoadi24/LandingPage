import Vue from "vue"
import VueRouter from "vue-router"
import Dashboard from "../components/page/Dashboard"
import Market from "../components/page/Market"

Vue.use(VueRouter)
const routes = [{
        path: "/",
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: "/market",
        name: "Market",
        component: Market
    }
]
const router = new VueRouter({
    routes
})

export default router