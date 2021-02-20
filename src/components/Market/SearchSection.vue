<template>
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-white" id="mainNav">
        <div class="container h-100">
            <div class="d-flex justify-content-center h-100">
                <div class="searchbar">
                    <input class="search_input" type="text" name="" placeholder="Search...">
                    <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
                </div>
             </div>
            <router-link class="navbar-brand js-scroll-trigger" :to="'/'"> <img src="assets/img/navbar-logo.svg" alt="" /></router-link>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                <i class="fas fa-bars ml-1"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ml-auto">
                    <li class="nav-item"><router-link class="nav-link js-scroll-trigger" :to="'/'">Home</router-link></li>
                    <li class="nav-item"><router-link class="nav-link js-scroll-trigger" :to="'/market'">Market</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
</template>

<script>
export default {
    name: 'SearchSection',
    components: {

    }
}
</script>

<style scoped>
    .bg-white {
        color: white;
        width: 100%;
        padding: 4rem;
    }

    .searchbar{
    margin-bottom: auto;
    margin-top: auto;
    height: 50px;
    background-color: #e2e2e2;
    border-radius: 30px;
    padding: 10px;
    }

    .search_input{
    color: #1d519e;
    border: 0;
    outline: 0;
    background: none;
    width: 0;
    caret-color:transparent;
    line-height: 30px;
    transition: width 0.4s linear;
    }

    .searchbar:hover > .search_input{
    padding: 0 10px;
    width: 450px;
    caret-color:#1d519e;
    transition: width 0.4s linear;
    }

    .searchbar:hover > .search_icon{
    background: white;
    color: #1d519e;
    }

    .search_icon{
    height: 30px;
    width: 30px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color:#808080;
    text-decoration:none;
    }
</style>