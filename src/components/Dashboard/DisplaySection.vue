<template>
    <div>
    <!--Display-->
    <section class="page-section" id="portfolio">
        <div class="background-shape position-absolute">
            <img src="img/bg-effect.png" alt="">
        </div>
        <div class="container fluid">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Tampilan Aplikasi</h2>
                <h3 class="section-subheading text-muted">Catalog memiliki tampilan menarik dan mudah dilihat</h3>
            </div>
            <div class="row" data-aos="zoom-in-up" data-aos-duration="1000">
                <div class="col-lg-12">
                    <carousel class="display-slider" :autoplay="false" :loop="true" :items="3" :center="true" 
                    :nav="true" :navText="['<','>']" :dots="true" :responsive="responsive" :lazyLoad="true">
                        <div class="store-item">
                            <div class="pi-pic">
                                <img src="img/display/display0.jpg" alt="" />                              
                            </div>
                        </div>
                        <div class="store-item">
                            <div class="pi-pic">
                                <img src="img/display/display1.jpg" alt="" />                              
                            </div>
                        </div>
                        <div class="store-item">
                            <div class="pi-pic">
                                <img src="img/display/display2.jpg" alt="" />                              
                            </div>
                        </div>
                        <div class="store-item">
                            <div class="pi-pic">
                                <img src="img/display/display3.jpg" alt="" />                              
                            </div>
                        </div>
                        <div class="store-item">
                            <div class="pi-pic">
                                <img src="img/display/display4.jpg" alt="" />                              
                            </div>
                        </div>
                        <div class="store-item">
                            <div class="pi-pic">
                                <img src="img/display/display5.jpg" alt="" />                              
                            </div>
                        </div>
                        <div class="store-item">
                            <div class="pi-pic">
                                <img src="img/display/display6.jpg" alt="" />                              
                            </div>
                        </div>
                        <div class="store-item">
                            <div class="pi-pic">
                                <img src="img/display/display7.jpg" alt="" />                              
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
    },
    data(){
        return {
            responsive:{
                0:{
                    items: 1,
                    nav: false,
                    dots: true
                },
                1024:{
                    items: 3,
                    nav: true,
                    dots: true
                }
            }
        }
    }


}
</script>

<style scoped>
.page-section h3.section-subheading{
    margin-bottom: 0.1rem;
}
.store-item {
    margin-right: 40px;
    margin-left: 40px;
}

.display-slider .owl-carousel .owl-stage-outer {
    margin-left: -23rem !important;
}
.store-item .pi-pic img {
    min-height: 100%;
    max-height: 100%;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 20px;
    vertical-align: middle;
}
.display-slider .owl-item.active.center .store-item {
    background-image: url("../../../public/img/phone1.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
}

.display-slider .owl-item.active.center .store-item img {
    min-height: 100%;
    max-height: 100%;
    border: none;
    border-top-right-radius: 1;
    border-top-left-radius: 1;
}
.position-absolute {
    position: absolute !important;
}
.background-shape {
    margin-top: 6rem;
    -webkit-animation-name: flying;
    animation-name: flying;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-play-state: running;
    animation-play-state: running;
}
.page-section .background-shape img {
    max-width: 100%;
}

@keyframes flying {
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
</style>