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
      <Header />
      <HeroSection />
      {/* <TopDestinations/> */}
      <div className="pt-20 pb-8 px-8 md:px-24">
        <h1 className="text-3xl font-bold text-center md:text-center">Start Your Journey with<span className="text-red-500"> WTI</span></h1>
        <h2 className="text-gray-500 text-center md:text-center mb-6 italic">
        Escape the ordinary and dive into unforgettable adventures. Whether you crave tranquil beaches, breathtaking mountain escapes, or vibrant city explorations, we craft experiences that match your dreams. Travel isn’t just about the destination—it’s about the memories you create along the way. With our carefully curated packages, seamless itineraries, and expert guidance, you can embrace new cultures, discover hidden gems, and travel with complete peace of mind. Let us handle the details while you focus on making moments that last a lifetime.
        </h2>
      </div>
      <TopDestinations2 />
      <PopularInboundPackages />
      <img src="/assets/path.png" alt="path" />
      
      <PopularOutboundPackages />
      <img src="/assets/path.png" alt="path" />
      <PopularPrimePackages />
      <img src="/assets/path.png" alt="path" />
      <PopularComboPackages />
      {/* <TravelServices/> */}
      <FAQSection />
      <WhyWTI />
      <SubscribeSection />
      <Footer />
    </div>
  )
}

export default Home
