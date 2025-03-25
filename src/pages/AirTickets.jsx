import React from 'react'
import Header from '../components/Header'
const heroImage = '../assets/airport.jpg';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactForm from '../components/Contactform';
import Footer from '../components/Footer';

const AirTickets = () => {

    const features = [
        { title: "Global Network", text: "Flights to hundreds of destinations.", icon: "🌍" },
        { title: "Best Fare Guarantee", text: "Exclusive deals & competitive pricing.", icon: "💰" },
        { title: "24/7 Customer Support", text: "Assistance anytime.", icon: "📞" },
        { title: "Seamless Online Booking", text: "Easy search, compare, & book.", icon: "💻" },
        { title: "Flexible Travel Options", text: "Economy, business & first-class.", icon: "🛫" },
      ];

      const airlines = [
        "/assets/WTI-LogoWEBBB.webp",
        "/assets/WTI-LogoWEBBB.webp",
        "/assets/WTI-LogoWEBBB.webp",
        "/assets/WTI-LogoWEBBB.webp",
        "/assets/WTI-LogoWEBBB.webp",
        "/assets/WTI-LogoWEBBB.webp",
        "/assets/WTI-LogoWEBBB.webp",
       
      ];
    
      const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 8, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
          {
            breakpoint: 1024, // For tablets and smaller
            settings: {
              slidesToShow: 6,
            },
          },
          {
            breakpoint: 768, // For mobile devices
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 480, // For very small screens
            settings: {
              slidesToShow: 3,
            },
          },
        ],
      };

      const destinations = [
        { city: "Dubai", image: "/assets/dubai.jpg" },
        { city: "London", image: "/assets/dubai.jpg" },
        { city: "New York", image: "/assets/dubai.jpg" },
        { city: "Paris", image: "/assets/dubai.jpg" },
        { city: "Singapore", image: "/assets/dubai.jpg" },
        { city: "Sydney", image: "/assets/dubai.jpg" },
      ];

      const steps = [
        "Fill the form with required details.",
        "Our travel expert team will contact you.",
        "Check the details and select your option.",
        "Enter traveler details and make a secure payment.",
        "Receive ticket confirmation.",
      ];



    return (
        <div className=' bg-white'>
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
                    <h1 className="text-4xl md:text-8xl font-bold mt-2">AirTickets</h1>
                </div>
            </section>


            <div className="py-12 px-4 md:px-25 ">
                <h2 className="text-3xl text-center font-bold">Book Flights with <span className="text-red-500">WTI</span>  – Your Gateway to the World</h2>
                <p className='text-justify md:text-center pt-4 text-xl'>Planning your next trip? WTI makes booking air tickets easy, affordable, and hassle-free.
                    Whether you're flying for business, leisure, or a special occasion, we provide the best flight
                    options with top airlines worldwide.</p>
            </div>

            <section className="py-12 bg-gray-100">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">
      Why Book with <span className="text-red-500">WTI?</span>
    </h2>

    {/* Flexbox for better alignment and responsiveness */}
    <div className="flex flex-wrap justify-center gap-6">
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="bg-white p-6 rounded-lg shadow-md flex items-center w-full sm:w-[80%] md:w-[45%] lg:w-[30%] 
                     transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <span className="text-4xl mr-4">{feature.icon}</span>
          <div className="text-left">
            <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-gray-600">{feature.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


{/* AIRLINES */}
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Airlines We Work With</h2>
        <p className='text-justify md:text-center'>We are partnered with the world’s leading airlines and with our technology you can book 275
        Airlines with WTI.</p>
        <h3 className="text-xl font-bold text-left text-gray-800 mb-6 mt-8">Key Airlines our Customers Booking this month</h3>
        <Slider {...settings} className="overflow-hidden ">
          {airlines.map((logo, index) => (
            <div key={index} className="px-4 mt-4">
              <img src={logo} alt="Airline" className="h-16 mx-auto" />
            </div>
          ))}
        </Slider>
      </div>
    </section>


    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Top Destinations</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <div key={index} className="relative">
              <img src={dest.image} alt={dest.city} className="rounded-lg shadow-md h-40 w-full object-cover" />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white text-lg font-bold w-full p-2">
                {dest.city}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">How to <span className="text-red-500">Book?</span></h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 "
            >
              <h3 className="text-red-500 text-2xl font-bold mb-2 transition-all duration-300 ease-in-out">
                {index + 1}
              </h3>
              <p className="text-gray-700 transition-all duration-300 ease-in-out">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ContactForm/>
    <Footer/>

        </div>
    )
}

export default AirTickets
