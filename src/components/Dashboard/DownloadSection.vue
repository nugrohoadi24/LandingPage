<template>
    <div>
    <!--Download-->
    <section class="page-section bg-bottom-shape" id="download">
        <div class="particle-bg">
            <img img-alt="particle" src="img/spinner.png">
        </div>
        <div class="container">
            <div class="row text-left">
                <div class="col-md-8 my-3">
                    <div class="min-h100 d-flex flex-center">
                        <div  data-aos="fade-up" data-aos-duration="1000">
                            <h2 class="section-heading text-capitalize">Download Gratis</h2>
                            <h3 class="section-subheading-about text-description">Bagaimana menurut kamu, pastinya menarik.<br>Yuk Download Gratis sekarang, mulai usaha kamu dan tambah penghasilan mu! </h3>
                            <div class="">
                                <a href="https://play.google.com/store/apps">
                                    <img img-alt="Play Store" src='img/playstore.png'>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 my-3 text-center">
                    <img class="img-phone" src='img/phone.png' alt="" />
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
export default {
    name: 'DownloadSection',
    components: {
        
    }    
}
</script>

<style scoped>

.particle-bg {
    display: block;
    position: absolute;
    left: -5%;
    margin-top: 2rem;
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