<template>
    <div>
    <!--Step-->
    <section class="page-section" id="step">
        <div class="background-shape-y position-absolute">
            <img src="img/ornament1.png" alt="">
        </div>
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Buat Toko Online</h2>
                <h3 class="section-subheading text-muted">Sangat mudah untuk membuat toko online di Catalog</h3>
            </div>
            <div class="row text-left">
                <div class="col-lg-6 my-3" data-aos="fade-left" data-aos-duration="1000">
                    <div class="text-center">
                        <img class="img-phone" src='img/phone.png' alt="" />
                    </div>
                </div>
                <div class="col-lg-6 my-3" data-aos="fade-right" data-aos-duration="1000">
                    <div class="min-h100 d-flex flex-center">
                        <div>
                            <h4 class="section-heading-step">Langkah 1</h4>
                            <h4 class="section-subheading-step">Membuat Toko Online Kamu</h4>
                            <div class="my-3">
                                <p class="text-muted">Buat Toko Online kamu dengan mengisi nama toko, kategori toko, deskripsi toko, alamat dan nomor WhatsApp.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row text-left">
                <div class="col-lg-6 my-3" data-aos="fade-left" data-aos-duration="1000">
                    <div class="min-h100 d-flex flex-center">
                        <div>
                            <h4 class="section-heading-step">Langkah 2</h4>
                            <h4 class="section-subheading-step">Tambahkan Produk Kamu</h4>
                            <div class="my-3">
                                <p class="text-muted">Buat katalog jualan kamu, atur harga dan pengiriman yang semuanya dilakukan dengan mudah.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 my-3" data-aos="fade-right" data-aos-duration="1000">
                    <div class="text-center">
                        <img class="img-phone" src='img/phone.png' alt="" />
                    </div>
                </div>
            </div>
            <div class="row text-left">
                <div class="col-lg-6 my-3" data-aos="fade-left" data-aos-duration="1000">
                    <div class="text-center">
                        <img class="img-phone" src='img/phone.png' alt="" />
                    </div>
                </div>
                <div class="col-lg-6 my-3" data-aos="fade-right" data-aos-duration="1000">
                    <div class="min-h100 d-flex flex-center">
                        <div>
                            <h4 class="section-heading-step">Langkah 3</h4>
                            <h4 class="section-subheading-step">Berjualan di Sosial Media</h4>
                            <div class="my-3">
                                <p class="text-muted">Bagikan link toko atau produk kamu ke sosial media, kamu bisa berjualan sambil rebahan dan dapatkan penghasilan usahamu.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="background-shape-x position-absolute">
            <img src="img/ornament2.png" alt="">
        </div>
    </section>
    </div>
</template>

<script>
export default {
    name: 'StepSection',
    components: {
        
    }
}
</script>

<style scoped>
.position-absolute {
    position: absolute !important;
}
.background-shape-x {
    right: 2%;
    margin-top: -35rem;
    -webkit-animation-name: flyingX;
    animation-name: flyingX;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-play-state: running;
    animation-play-state: running;
}
.page-section .background-shape-x img {
    max-width: 100%;
}

.background-shape-y {
    left: 2%;
    margin-top: 35rem;
    -webkit-animation-name: flyingY;
    animation-name: flyingY;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-play-state: running;
    animation-play-state: running;
}
.page-section .background-shape-y img {
    max-width: 100%;
}

@keyframes flyingY {
    0% {
        transform: translate(0);
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
    }
    50% {
        transform: translateY(14px);
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
    }
    100% {
        transform: translate(0);
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
    }
}

@keyframes flyingX {
    0% {
        transform: translate(0);
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
    }
    50% {
        transform: translateX(14px);
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
    }
    100% {
        transform: translate(0);
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
    }
}
</style>