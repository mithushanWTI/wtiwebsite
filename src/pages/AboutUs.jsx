import React from 'react'
import Header from '../components/Header'
import heroImage from '../assets/thailand.jpg';
import overlay from '../assets/vector.png';
import about1 from '../assets/about-img-1.jpg';
import about2 from '../assets/about-image-2.jpg';
import TravelServices from '../components/TravelServices';
import WhyWTI from '../components/WhyWTI';
import SubscribeSection from '../components/Subscription';
import Footer from '../components/Footer';
import ContactForm from '../components/Contactform';

const AboutUs = () => {
  return (
    <div>
      <Header />
      {/* Hero Section */}
      <section className="relative w-full h-[55vh] md:h-[85vh] flex items-center justify-center bg-cover bg-top text-white overflow-hidden">
        {/* Background Image with Zoom Animation */}
        <div
          className="absolute inset-0 bg-cover bg-top zoom-animation"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative p-6 text-center rounded-lg">
          <h2 className="text-2xl md:text-3xl font-light font-montez">Your Journey Starts Here</h2>
          <h1 className="text-4xl md:text-8xl font-bold mt-2">ABOUT US</h1>
        </div>
      </section>

      <section className="relative py-12 px-4 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center gap-12 bg-[#fdf6f0]">
      {/* Background Overlay Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url(${overlay})`  }}></div>
      
      {/* Images Section */}
      <div className="relative w-full lg:w-1/2 flex justify-center ">
        <img
          src={about1}
          alt="Hot Air Balloons"
          className="relative w-60 md:w-76 rounded-lg shadow-lg left-[-50px] sm:left-[-100px] transition-transform duration-300 hover:scale-105"
        />
        <img
          src={about2}
          alt="Aerial View"
          className="absolute bottom-[-20px] right-[20px] md:right-[-20px] w-52 md:w-72 rounded-lg shadow-md border-4 border-white transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      {/* Text Content */}
      <div className="relative w-full lg:w-1/2 text-center lg:text-left ">
        <h3 className="text-sm text-gray-600 italic">Let's Go</h3>
        <h2 className="text-3xl md:text-4xl font-bold mt-1">
          Travel With <span className="text-red-600">WTI</span>
        </h2>
        <h4 className="text-lg text-red-600 font-semibold mt-2">About Our Company</h4>
        <p className="text-gray-700 mt-4 leading-relaxed text-sm md:text-base text-justify">
          World Travel Island stands as a prominent player in the travel industry, excelling as a worldwide airline
          ticketing agency with B2B & B2C customer services. We are an inbound and outbound travel operator in Sri Lanka
          with a dedicated focus on arranging visas, tickets, hotel packages, and tour packages. We seamlessly connect
          travelers to their dream destinations, democratizing travel services by reducing costs and barriers to entry.
          By leveraging technology, we ensure secure and responsible travel solutions, providing hassle-free experiences
          for our clients.
        </p>
      </div>
    </section>

    <section className="relative py-12 px-4 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center gap-12 bg-[#fdf6f0] ">
      {/* Background Overlay Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url(${overlay})` }}></div>
      
      {/* Text Content */}
      <div className="relative w-full lg:w-1/2 text-center lg:text-left pt-0 lg:pt-20">
        <h3 className="text-xl font-bold text-red-600">Our Vision</h3>
        <p className="text-gray-700 mt-2 leading-relaxed text-sm md:text-base text-justify">
          At World Travel Island, our vision is to lead the travel industry in Sri Lanka by embracing technology and 
          offering a one-stop solution for all travel needs. We are committed to leveraging cutting-edge innovations 
          to enhance the travel experience, providing seamless and personalized services. Our goal is to simplify 
          the travel journey, making it convenient, efficient, and unforgettable for our clients.
        </p>

        <h3 className="text-xl font-bold text-red-600 mt-6">Our Mission</h3>
        <p className="text-gray-700 mt-2 leading-relaxed text-sm md:text-base text-justify">
          At World Travel Island, we are on a mission to provide superior travel services with a commitment to excellence. 
          Our focus is delivering a high standard of service to ensure customer satisfaction. Through passion and dedication, 
          we aim to exceed expectations, creating memorable travel experiences for our clients.
        </p>
      </div>

      {/* Images Section */}
      <div className="relative w-full lg:w-1/2 justify-center hidden lg:flex pt-20 pb-20">
        <img
          src={about1}
          alt="Hot Air Balloons"
          className="relative w-50 md:w-76 rounded-lg shadow-lg left-[-50px] sm:left-[-100px] transition-transform duration-300 hover:scale-105"
        />
        <img
          src={about2}
          alt="Aerial View"
          className="absolute bottom-[-20px] right-[20px] md:right-[-20px] w-52 md:w-72 rounded-lg shadow-md border-4 border-white transition-transform duration-300 hover:scale-105"
        />
      </div>
    </section>

    <TravelServices/>
    <WhyWTI/>
    <ContactForm/>
    <SubscribeSection/>
    <Footer/>
    
    </div>
  )
}

export default AboutUs
