import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import TopDestinations from '../components/TopDestinations'
import PopularInboundPackages from '../components/PopularInboundPackages'
import PopularOutboundPackages from '../components/PopularOutboundPackages'
import TravelServices from '../components/TravelServices'
import FAQSection from '../components/FAQ'
import WhyWTI from '../components/WhyWTI'
import SubscribeSection from '../components/Subscription'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <TopDestinations/>
      <PopularInboundPackages/>
      <PopularOutboundPackages/>
      <TravelServices/>
      <FAQSection/>
      <WhyWTI/>
      <SubscribeSection/>
      <Footer/>
    </div>
  )
}

export default Home
