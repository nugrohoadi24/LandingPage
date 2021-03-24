<template>
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container h-100">
            <div class="d-flex h-100 w-100 f-center">
                <div v-if="mobile" class="navbar-brand js-scroll-trigger">
                    <img src="../../assets/shopia-logo-mobile.png" alt="shopia-logo">
                </div>
                <div v-else class="navbar-brand js-scroll-trigger">
                    <img src="../../assets/shopia-logo.png" alt="shopia-logo">
                </div>     
                    <form class="searchbar">
                        <input class="search_input" type="text" name="" placeholder="Cari Sesuatu...">
                        <router-link class="search_icon" :to="'/search-result'"><i class="fas fa-search"></i></router-link>
                    </form>                    
                <div class="ml-auto">
                    <b-button v-b-toggle.navbarResponsive class="navbar-toggler btn-secondary" type="button">
                        <i class="fas fa-bars menu-size"></i>
                    </b-button>
                </div>  
            </div>
            <b-collapse id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ml-auto">
                    <li class="nav-item"><router-link class="nav-link js-scroll-trigger" :to="'/'">Home</router-link></li>
                    <li class="nav-item"><router-link class="nav-link js-scroll-trigger" :to="'/market'">Market</router-link></li>
                </ul>
            </b-collapse>
        </div>
    </nav>
    </div>
</template>

<script>
import mobileImage from '../mobileImage'

export default {
    name: 'SearchSection',
    components: {

    },
    data() {
        return{
            mobile: false
        }
    },
    mounted() {
        this.mobile = mobileImage.isMobile()
    }
}
</script>

<style scoped>
    #mainNav{
        background-color: #fff !important;
        box-shadow: 0 0 9px 3px rgb(50 29 154 / 20%);
    }

    .searchbar{
    margin-left: 4rem;
    margin-bottom: auto;
    margin-top: auto;
    height: 50px;
    background-color: #e2e2e2;
    border-radius: 30px;
    padding: 10px;
    }

    .search_input{
    color: #421873;
    border: 0;
    outline: 0;
    background: none;
    width: 0;
    caret-color:transparent;
    line-height: 30px;
    transition: width 0.4s linear;
    }

    .searchbar > .search_input{
    padding: 0 10px;
    width: 450px;
    caret-color:#a66fe5;
    transition: width 0.4s linear;
    }

    .searchbar > .search_icon{
    background: white;
    color: #a66fe5;
    }

    .search_icon{
    height: 30px;
    width: 30px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color:#1d519e;
    text-decoration:none;
    }

@media (min-width: 992px) {
    #navbarResponsive {
        display: block !important;
    }
}
</style>