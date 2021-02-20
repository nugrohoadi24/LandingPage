<template>
    <div>
    <!-- Banner Section -->
    <section class="hero-section jarak">
        <carousel class="hero-items" :autoplay="true" :items="1" :nav="false" :dots="true">
            <div class="single-hero-items set-bg" style="background-image: url('img/banner-1.jpg')">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <span>Promo</span>
                            <h1>Discount All Items 20%</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            </p>
                            <a href="#" class="primary-btn">Kunjungi Toko</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="single-hero-items set-bg" style="background-image: url('img/banner-2.jpg')">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <span>Promo</span>
                            <h1>Discount All Items 20%</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            </p>
                            <a href="#" class="primary-btn">Kunjungi Toko</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="single-hero-items set-bg" style="background-image: url('img/banner-3.jpg')">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <span>Promo</span>
                            <h1>Discount All Items 20%</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            </p>
                            <a href="#" class="primary-btn">Kunjungi Toko</a>
                        </div>
                    </div>
                </div>
            </div>
        </carousel>
    </section>
    <!-- Banner Section End -->
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
    name: 'BannerSection',
    components: {
        carousel    
    }
}
</script>

<style scoped>
.jarak {
    margin-top: 4rem;
}
</style>