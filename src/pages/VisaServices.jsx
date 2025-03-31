import React from 'react'
import Header from '../components/Header'
const heroImage = '../assets/visa.jfif';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactForm from '../components/Contactform';
import Footer from '../components/Footer';

const VisaServices = () => {


  const visaTypes = [
    { title: "Tourist Visas", text: "For leisure and short-term travel.", icon: "🏖️" },
    { title: "Business Visas", text: "For corporate travelers and conferences.", icon: "💼" },
    { title: "Student Visas", text: "For study and academic purposes.", icon: "🎓" },
    { title: "Work Visas", text: "For employment abroad.", icon: "🏢" },
    { title: "Transit Visas", text: "For stopovers between flights.", icon: "✈️" },
  ];

  const airlines = [
    "/assets/country/qatar.svg",
    "/assets/country/aus.webp",
    "/assets/country/canada.svg",
    "/assets/country/india.webp",
    "/assets/country/iran.png",
    "/assets/country/kuwait.png",
    "/assets/country/oman.png",
    "/assets/country/saudi.webp",
    "/assets/country/Singapore.png",
    "/assets/country/turkey.webp",
    "/assets/country/uk.webp",
    "/assets/country/uae.png",
    "/assets/country/usa.webp",
   
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

  const visaProcessSteps = [
    "Choose your destination and visa type by filling the form.",
    "Submit the required documents to us.",
    "We handle the application and processing.",
    "Receive your approved visa hassle-free.",
  ];

  const documents = [
    "Passport (valid for at least 6 months)",
    "Visa application form",
    "Passport-sized photographs",
    "Flight itinerary",
    "Hotel reservation",
    "Bank statements",
  ];



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
    
    <h1 className="text-4xl md:text-8xl font-bold mt-2">VISA SERVICES</h1>
  </div>
</section>

<div className="py-12 px-4 md:px-25 ">
                <h2 className="text-3xl text-center font-bold">Hassle-Free Visa Services with<span className="text-red-500"> WTI</span> </h2>
                <p className='text-justify md:text-center pt-4 text-xl'>Traveling abroad? WTI simplifies the visa application process, ensuring a smooth experience
from start to finish. We provide expert assistance for visa applications across multiple countries,
guiding you through every step.</p>
            </div>

            <section className="py-12 bg-gray-100">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">
    Types of  <span className="text-red-500">Visas </span>We Offer 
    </h2>

    {/* Flexbox for better alignment and responsiveness */}
    <div className="flex flex-wrap justify-center gap-6">
      {visaTypes.map((feature, index) => (
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
        <h2 className="text-3xl font-bold text-gray-800 mb-6"><span className="text-red-500">Countries</span> We Assist With</h2>
        <p className='text-justify md:text-center'>WTI provides visa support for major travel destinations, including:</p>
        <h3 className="text-xl font-bold text-gray-800 mb-6 mt-8">Key Airlines our Customers Booking this month</h3>
        <Slider {...settings} className="overflow-hidden ">
          {airlines.map((logo, index) => (
            <div key={index} className="px-4 mt-4">
              <img src={logo} alt="Airline" className="h-16 mx-auto" />
            </div>
          ))}
        </Slider>
      </div>
    </section>


    

    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">How to <span className="text-red-500">Book?</span></h2>
        
        <div className="flex flex-wrap justify-center gap-3">
  {visaProcessSteps.map((step, index) => (
    <div 
      key={index} 
      className="bg-gray-100 p-6 items-center rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 flex-shrink-0 w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-12px)] lg:w-[calc(25%-12px)]"
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

<section className='py-12'>
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 border py-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Required Documents <span className="text-sm text-gray-500">(Varies by country)</span>
      </h2>
      <ul className="space-y-3 text-gray-700">
        {documents.map((doc, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="text-blue-500">📄</span>
            <span>{doc}</span>
          </li>
        ))}
      </ul>
    </div>
    </section>
    <ContactForm/>
    <Footer/>

    </div>
  )
}

export default VisaServices
