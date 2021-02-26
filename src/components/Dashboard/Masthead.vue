<template>
    <div>
    <!-- Masthead-->
    <header class="masthead">
        <div class="particle-bg">
            <img img-alt="particle" src="img/spinner.png">
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-7 bg-phone p-4">
                </div>
                <div class="fadein col-lg-5 p-4">                           
                    <div class="masthead-heading">Buka Toko Online Hanya Butuh 30 Detik</div>
                    <div class="masthead-subheading">Buka toko online kamu, jualan dan promosi bisa sambil rebahan, sampai kelola pesanan. Mau coba jualan sekarang ? GRATIS!</div>
                    <div>
                        <a class="btn btn-primary btn-xl js-scroll-trigger btnheader" href="#download">Coba Sekarang</a>
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