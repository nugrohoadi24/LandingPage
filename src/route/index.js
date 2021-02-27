import Vue from "vue"
import VueRouter from "vue-router"
import Dashboard from "../components/page/Dashboard"
import Market from "../components/page/Market"
import SearchResult from "../components/Market/SearchResult"

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
    },
    {
        path: "/search-result",
        name: "SearchResult",
        component: SearchResult
    }
]
const router = new VueRouter({
    routes
})

export default router