<template>
    <div>
    <!-- Masthead-->
    <header class="masthead">
        <div class="particle-bg">
            <img img-alt="particle" src="img/spinner.png">
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 bg-phone p-4">
                </div>
                <div class="fadein col-lg-6 p-4">                           
                    <div class="masthead-heading">Mau punya toko online tapi gak pake ribet?</div>
                    <div class="masthead-subheading">Cobain pake Shopia, gak pake lama bisa langsung jualan, promosi juga bisa sambil rebahan, plus bisa berbagi ke semua sosial media kamu.<br>Mau coba jualan sekarang ? GRATIS!</div>
                    <div class="middle">
                        <a class="btn btn-primary btn-xl js-scroll-trigger btnheader mr-3 btn-width" href="#download">Coba Sekarang</a>
                        <router-link to="/market"><a class="btn btn-secondary btn-xl js-scroll-trigger btnheader btn-width">Lihat Toko</a></router-link>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </div>
</template>

<script>
export default {
    name: 'Masthead',
    components: {
    }
}
</script>

<style scoped>

.particle-bg {
    display: block;
    position: absolute;
    top: 49%;
    right: 27%;
}
.particle-bg img {
    -webkit-animation: spin 20s linear infinite;
    -moz-animation: spin 20s linear infinite;
    animation: spin 20s linear infinite;
}

@-webkit-keyframes spin {
    100% {
        -webkit-transform: rotate(360deg);
    }
}
@-moz-keyframes spin {
    100% {
        -webkit-transform: rotate(360deg);
    }
}
@keyframes spin {
    100% {
        -webkit-transform: rotate(360deg);
    }
}
</style>