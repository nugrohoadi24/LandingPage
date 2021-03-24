<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" :class="{'navbar-shrink': !showNavbar }" id="mainNav">
        <div class="container h-100">
            <div class="d-flex h-100 w-100 f-center">
            <router-link class="navbar-brand js-scroll-trigger" :to="'/'"> <img src="../assets/shopia-logo.png" alt="shopia-logo"></router-link>
                <div class="ml-auto">
                    <b-button v-b-toggle.navbarResponsive class="navbar-toggler btn-secondary navbar-toggler-right" type="button">
                        <i class="fas fa-bars menu-size"></i>
                    </b-button>
                </div>  
            </div>
            <b-collapse id="navbarResponsive" class="collapse navbar-collapse">
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

<style scoped>

</style>