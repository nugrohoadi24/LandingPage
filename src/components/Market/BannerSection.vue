<template>
    <div>
    <!-- Banner Section -->
    <section class="hero-section jarak">
        <carousel class="hero-items" :autoplay="true" :items="1" :dots="true" :nav="true" :navText="['<','>']">
            <div class="single-hero-items set-bg">
                <div v-if="mobile" class="banner-item single-item">
                    <img src="img/banner-11.jpg">
                </div>
                <div v-else class="banner-item single-item">
                    <img src="img/banner-1.jpg">
                </div>     
            </div>
            <div class="single-hero-items set-bg">
                <div v-if="mobile" class="store-item single-item">
                    <img src="img/banner-22.jpg">
                </div>
                <div v-else class="store-item single-item">
                    <img src="img/banner-2.jpg">
                </div>
            </div>
            <div class="single-hero-items set-bg">
                <div v-if="mobile" class="store-item single-item">
                    <img src="img/banner-33.jpg">
                </div>
                <div v-else class="store-item single-item">
                    <img src="img/banner-3.jpg">
                </div>
            </div>
        </carousel>
    </section>
    <!-- Banner Section End -->
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import mobileImage from '../mobileImage'
export default {
    name: 'BannerSection',
    components: {
        carousel    
    },
    data() {
        return{
            mobile: false
        }
    },
    mounted() {
        this.mobile = mobileImage.isMobile()
    }
}

</script>

<style scoped>

</style>