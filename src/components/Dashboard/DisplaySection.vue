<template>
    <div>
    <!--Display-->
    <section class="page-section" id="portfolio">
        <div class="container fluid">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Tampilan Aplikasi</h2>
                <h3 class="section-subheading text-muted">Catalog memiliki tampilan menarik dan mudah dilihat</h3>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <carousel class="store-slider" :autoplay="true" :items="3" :nav="false" :dots="true"  >
                        <div class="store-item">
                            <div class="pi-pic">
                                <img src="img/display/ss1.jpg" alt="" />
                              
                            </div>
                        </div>
                        <div class="store-item">
                            <div class="pi-pic">
                                <img src="img/display/ss2.jpg" alt="" />
                              
                            </div>
                        </div>
                        <div class="store-item">
                            <div class="pi-pic">
                                <img src="img/display/ss3.jpg" alt="" />
                              
                            </div>
                        </div>
                        <div class="store-item">
                            <div class="pi-pic">
                                <img src="img/display/ss4.jpg" alt="" />
                              
                            </div>
                        </div>
                        <div class="store-item">
                            <div class="pi-pic">
                                <img src="img/display/ss5.jpg" alt="" />
                              
                            </div>
                        </div>
                        <div class="store-item">
                            <div class="pi-pic">
                                <img src="img/display/ss6.jpg" alt="" />
                              
                            </div>
                        </div>
                        <div class="store-item">
                            <div class="pi-pic">
                                <img src="img/display/ss7.jpg" alt="" />
                              
                            </div>
                        </div>
                        <div class="store-item">
                            <div class="pi-pic">
                                <img src="img/display/ss8.jpg" alt="" />
                              
                            </div>
                        </div>
                        <div class="store-item">
                            <div class="pi-pic">
                                <img src="img/display/ss9.jpg" alt="" />
                              
                            </div>
                        </div>
                        <div class="store-item">
                            <div class="pi-pic">
                                <img src="img/display/ss10.jpg" alt="" />
                              
                            </div>
                        </div>                       
                    </carousel>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>

import carousel from 'vue-owl-carousel'
export default {
    name: 'DisplaySection',
    components: {
        carousel
    }
}
</script>

<style scoped>
.page-section h3.section-subheading{
    margin-bottom: 2rem;
}
.store-item {
    margin-right: 40px;
    margin-left: 40px;
    align-items: left;
}
.store-slider {

    transform: scale(.8)
}

.store-item .pi-pic img {
    max-width: 100%;
    max-height: 650px;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 20px;
    vertical-align: middle;


    /* transform: scale(.6); */
    /* background-image: url(../img/mobile-bg.1ab6e2d0.png);
    background-repeat: no-repeat;
    background-size: inherit;
    background-position: 50%;
    padding: 5px 0;
    transform: scale(1); */
}
</style>