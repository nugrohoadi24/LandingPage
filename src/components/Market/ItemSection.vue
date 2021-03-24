<template>
    <div>
    <!-- Item-Store Section -->
    <section class="item-store">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 mt-5">
                    <div class="market-section">
                        <h2 class="section-heading text-capitalize">Produk Pilihan</h2>
                    </div>
                    <carousel class="store-slider" :autoplay="false" :items="3" :nav="false" :dots="false" :responsive="responsive" :stagePadding="50">
                        <div class="store-item single-item">
                            <div class="pi-pic">
                                <img src="img/store-travel.jpg" alt="" />
                                <ul>
                                    <li class="w-icon active">
                                        <a href="#"><i class="fas fa-store"></i></a>
                                    </li>
                                    <li class="quick-view"><a href="#">Kunjungi Toko</a></li>
                                </ul>
                            </div>
                            <div class="pi-text">
                                <div class="catagory-name">Jasa Travel</div>
                                <a href="#">
                                    <h5>Adi Travel</h5>
                                </a>
                                <div class="store-price">
                                    Bekasi
                                </div>
                            </div>
                        </div>
                        <div class="store-item">
                            <div class="pi-pic">
                                <img src="img/store-mask.jpg" alt="" />
                                <ul>
                                    <li class="w-icon active">
                                        <a href="#"><i class="fas fa-store"></i></a>
                                    </li>
                                    <li class="quick-view"><a href="#">Kunjungi Toko</a></li>
                                </ul>
                            </div>
                            <div class="pi-text">
                                <div class="catagory-name">Aksesoris</div>
                                <a href="#">
                                    <h5>Masker Kekinian</h5>
                                </a>
                                <div class="store-price">
                                    Tangerang
                                </div>
                            </div>
                        </div>
                        <div class="store-item">
                            <div class="pi-pic">
                                <img src="img/store-food.jpg" alt="" />
                                <ul>
                                    <li class="w-icon active">
                                        <a href="#"><i class="fas fa-store"></i></a>
                                    </li>
                                    <li class="quick-view"><a href="#">Kunjungi Toko</a></li>
                                </ul>
                            </div>
                            <div class="pi-text">
                                <div class="catagory-name">Makanan</div>
                                <a href="#">
                                    <h5>Danny's Food</h5>
                                </a>
                                <div class="store-price">
                                    Jakarta
                                </div>
                            </div>
                        </div>
                        <div class="store-item">
                            <div class="pi-pic">
                                <img src="img/store-hijab.jpg" alt="" />
                                <ul>
                                    <li class="w-icon active">
                                        <a href="#"><i class="fas fa-store"></i></a>
                                    </li>
                                    <li class="quick-view"><a href="#">Kunjungi Toko</a></li>
                                </ul>
                            </div>
                            <div class="pi-text">
                                <div class="catagory-name">Pakaian</div>
                                <a href="#">
                                    <h5>Laila Hijab</h5>
                                </a>
                                <div class="store-price">
                                    Bandung
                                </div>
                            </div>
                        </div>
                        <div class="store-item">
                            <div class="pi-pic">
                                <img src="img/store-outdoor.jpg" alt="" />
                                <ul>
                                    <li class="w-icon active">
                                        <a href="#"><i class="fas fa-store"></i></a>
                                    </li>
                                    <li class="quick-view"><a href="#">Kunjungi Toko</a></li>
                                </ul>
                            </div>
                            <div class="pi-text">
                                <div class="catagory-name">Outdoor</div>
                                <a href="#">
                                    <h5>Cordova Outdoor</h5>
                                </a>
                                <div class="store-price">
                                    Bekasi
                                </div>
                            </div>
                        </div>
                    </carousel>
                </div>
            </div>
        </div>
    </section>
    <!-- Item-Store Section End -->
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
    name: 'ItemSection',
    components: {
        carousel
    },
    data(){
        return {
            responsive:{
                0:{
                    items: 1,
                    nav: false,
                    dots: false,
                    stagePadding: 10,
                },
                1024:{
                    items: 3,
                    nav: false,
                    dots: false
                }
            }
        }
    }
}
</script>

<style scoped>
.store-item {
    margin-right: 25px;
}
</style>