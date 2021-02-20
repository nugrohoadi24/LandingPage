<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" :class="{'navbar-shrink': !showNavbar }" id="mainNav">
        <div class="container">
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
    data () {
        return {
        showNavbar: true,
        lastScrollPosition: 0
        }
    },
    mounted () {
    window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
        onScroll () {
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
            if (currentScrollPosition < 30) {
                this.showNavbar = true
            } else {
                this.showNavbar = false
            }
        }
    }
}
</script>

<style>
.show{
    background: #fff;
}
</style>