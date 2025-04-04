import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import TopDestinations from '../components/TopDestinations'
import TopDestinations2 from '../components/TopDestinations2'
import PopularInboundPackages from '../components/PopularInboundPackages'
import PopularOutboundPackages from '../components/PopularOutboundPackages'
import TravelServices from '../components/TravelServices'
import FAQSection from '../components/FAQ'
import WhyWTI from '../components/WhyWTI'
import SubscribeSection from '../components/Subscription'
import Footer from '../components/Footer'
import PopularPrimePackages from '../components/PopularPrimePackages'
import PopularComboPackages from '../components/PopularComboPackages'

const Home = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      {/* <TopDestinations/> */}
      <TopDestinations2/>
      <PopularInboundPackages/>
      <img src="/assets/path.png" alt="path" />
      <PopularOutboundPackages/>
      <img src="/assets/path.png" alt="path" />
      <PopularPrimePackages/>
      <img src="/assets/path.png" alt="path" />
      <PopularComboPackages/>
      {/* <TravelServices/> */}
      <FAQSection/>
      <WhyWTI/>
      <SubscribeSection/>
      <Footer/>
    </div>
  )
}

export default Home
