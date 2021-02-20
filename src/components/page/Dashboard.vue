<template>
  <div>
    <Header />
    <Masthead />
    <AboutSection />
    <ServicesSection />
    <DisplaySection />
    <StepSection />
    <DownloadSection />
    <FaqSection />
    <Footer />
  </div>
</template>

<script>
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import Header from '../Header'
import Footer from '../Footer'
import Masthead from '../Dashboard/Masthead'
import AboutSection from '../Dashboard/AboutSection'
import ServicesSection from '../Dashboard/ServicesSection'
import DisplaySection from '../Dashboard/DisplaySection'
import StepSection from '../Dashboard/StepSection'
import DownloadSection from '../Dashboard/DownloadSection'
import FaqSection from '../Dashboard/FaqSection'

export default {
    name: 'Dashboard',
    components: {
        Header,
        Masthead,
        AboutSection,
        ServicesSection,
        DisplaySection,
        StepSection,
        DownloadSection,
        FaqSection,
        Footer
    }
}
</script>

<style>
/* @import url('../../assets/style.css'); */
</style>