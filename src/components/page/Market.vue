<template>
  <div>
    <SearchSection />
    <BannerSection />
    <ItemSection />
    <Footer />
  </div>
</template>

<script>
import SearchSection from '../Market/SearchSection'
import BannerSection from '../Market/BannerSection'
import ItemSection from '../Market/ItemSection'
import Footer from '../Footer'

export default {
  components: {
    SearchSection,
    BannerSection,
    ItemSection,
    Footer
  }
}
</script>

<style scoped>

</style>>