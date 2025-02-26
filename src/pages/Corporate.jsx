import React from 'react'
import Header from '../components/Header'
import heroImage from '../assets/bangkok.webp';


const Corporate = () => {
  return (
    <div>
          <Header />
      {/* Hero Section */}
<section className="relative w-full h-[55vh] md:h-[85vh] flex items-center justify-center bg-cover bg-top text-white overflow-hidden">
        {/* Background Image with Zoom Animation */}
        <div
          className="absolute inset-0 bg-cover bg-center zoom-animation"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative p-6 text-center rounded-lg">
    <h2 className="text-2xl md:text-3xl font-light font-montez">Your Journey Starts Here</h2>
    <h1 className="text-4xl md:text-8xl font-bold mt-2">CORPORATE</h1>
  </div>
</section>

    </div>
  )
}

export default Corporate
