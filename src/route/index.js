import Vue from "vue"
import VueRouter from "vue-router"
import Dashboard from "../components/page/Dashboard"
import Market from "../components/page/Market"
import SearchResult from "../components/Market/SearchResult"
import Cek from "../components/Dashboard/Cek"

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
    },
    {
        path: "/search-result",
        name: "SearchResult",
        component: SearchResult
    },
    {
        path: "/cek",
        name: "Cek",
        component: Cek
    }
]
const router = new VueRouter({
    routes
})

export default router