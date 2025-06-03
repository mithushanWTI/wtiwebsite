import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUtensils,FaPhoneAlt, FaSuitcase, FaWheelchair, FaWifi, FaHotel, FaCar, FaGlobe, FaRegSmileBeam, FaCalendarCheck, FaPlaneDeparture, FaConciergeBell } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollFadeIn from '../components/ScrollFadeIn';
import ContactForm from '../components/Contactform';

const Ancillary = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  const iconMap = {
    Meal: <FaUtensils className="inline-block mr-2 text-white" />,
    Baggage: <FaSuitcase className="inline-block mr-2 text-white" />,
    Wheelchair: <FaWheelchair className="inline-block mr-2 text-white" />,
    WiFi: <FaWifi className="inline-block mr-2 text-white" />,
    Hotel: <FaHotel className="inline-block mr-2 text-white" />,
    Car: <FaCar className="inline-block mr-2 text-white" />,
    Visa: <FaGlobe className="inline-block mr-2 text-white" />,
    Tour: <FaRegSmileBeam className="inline-block mr-2 text-white" />,
    Date: <FaCalendarCheck className="inline-block mr-2 text-white" />,
    Airport: <FaPlaneDeparture className="inline-block mr-2 text-white" />,
    Service: <FaConciergeBell className="inline-block mr-2 text-white" />,
  };

  const getIcon = (text) => {
    const key = Object.keys(iconMap).find((k) => text.toLowerCase().includes(k.toLowerCase()));
    return key ? iconMap[key] : <FaConciergeBell className="inline-block mr-2 text-white" />;
  };

  const services = {
    PreFlight: {
      Commercial: [
        'Meal Allocation',
        'Pre-paid Baggage',
        'Lounge Access',
        'Airport Drop',
        'Loyalty Upgrade at Airport',
        'Seat Allocation',
        'Insurance for Baggage',
        'Travel Insurance',
        'Wheelchair Access & Baggage',
        'Buy Now Pay Later',
        'City Check-in',
        'Travel Companion',
      ],
      'Non-commercial': [
        'Basinet Seat',
        'Money Exchange',
        'Early Check-in',
        'Carbon footprint offsetting',
        'Validity of passport info',
        'Recommending printout of visa',
      ],
    },
    InFlight: {
      Commercial: ['On Board Cake', 'On Board WiFi', 'Meal/Snack', 'Inflight Photo Services'],
      'Non-commercial': [],
    },
    PostFlight: {
      Commercial: [
        'Airport to Accommodation Transfer Service',
        'Hotel Booking',
        'Meet and Greet & Porter Services',
        'Arrival Cards or ETA',
        'Visas',
        'E-Sim',
        'Fast Track Immigration',
        'Limo and Car Rentals',
        'Date Changes',
        'Vouchers for Attractions',
        'Tickets for Popular Events',
        'Walk in Tours',
        'Culinary Experiences',
      ],
      'Non-commercial': [
        'Special Assistance for Elderly or Disabled Travelers',
        'Disruption Services',
      ],
    },
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[55vh] md:h-[65vh] flex items-center justify-center bg-cover bg-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center zoom-animation" style={{ backgroundImage: 'url(/assets/postflightancillary.jpg)' }}></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative p-6 text-center rounded-lg">
          <h1 className="text-4xl md:text-8xl font-bold mt-2">ANCILLARIES</h1>
        </div>
      </section>

      <div className="bg-gray-100 ">
          {/* Introduction Section */}
          <ScrollFadeIn>
        <section className="px-6 lg:px-24 py-6 flex flex-col lg:flex-row items-center justify-center  gap-6">
          
            <div className="w-full">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Enhance Your<span className="text-red-500"> Journey</span> </h2>
              <p className="text-gray-700 text-lg mb-4 text-justify">
                Discover a range of ancillary services designed to elevate your.travel experience. From pre-flight conveniences to in-flight comforts and post-flight support, we offer personalized options to make your journey seamless and enjoyable. Whether you need a meal allocation, airport transfers, or a relaxing hotel stay, we've got you covered.
              </p>
              <p className="text-gray-700 text-lg mb-4 text-justify">
                Tailor your trip with our commercial and non-commercial services, ensuring every moment of your travel is as comfortable and stress-free as possible.
              </p>
              <div className="flex items-center text-red-500">
                <FaPhoneAlt className="mr-2 text-gray-700" />
                <span className="font-semibold">Contact Us: </span>
                <span className="ml-2 font-semibold">+94 777377956</span>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-4 justify-center items-center ">
              <img
                src="/assets/inflightancillary.jpg"
                alt="In-flight dining experience"
                className="w-80 lg:w-60 h-96 object-cover rounded-lg shadow-md mt-6 hover:scale-105 transition  duration-300"
              />
              <img
                src="/assets/postflightancillary.jpg"
                alt="Luxury hotel room"
                className="w-80 lg:w-60 h-96 object-cover rounded-lg shadow-md mt-10 hover:scale-105 transition  duration-300"
              />
            </div>
          
        </section>
        </ScrollFadeIn>
        
        {/* Navigation */}
        <nav className="bg-gray-900 p-4 fixed top-24 z-10 w-full shadow-md">
          <div className="container mx-auto flex justify-center space-x-6">
            <Link to="#PreFlight" className="text-white hover:text-white transition-colors">PreFlight</Link>
            <Link to="#InFlight" className="text-white hover:text-white transition-colors">InFlight</Link>
            <Link to="#PostFlight" className="text-white hover:text-white transition-colors">PostFlight</Link>
          </div>
        </nav>

        {/* Sections */}
        <div className="pt-20 ">
          {Object.entries(services).map(([phaseKey, categories]) => (
            <section
              id={phaseKey}
              key={phaseKey}
              className="min-h-screen flex items-center justify-center bg-cover bg-bottom relative"
              style={{ backgroundImage: `url(/assets/${phaseKey.toLowerCase()}ancillary.jpg)` }}
            >
              <div className="absolute inset-0 bg-black/50 "></div>
              <div className="container mx-auto p-6 relative z-1 px-6 lg:px-24 py-6">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">{phaseKey} Services</h2>
                <ScrollFadeIn>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(categories).map(([type, items]) => (
                      <div
                        key={type}
                        className="bg-black/40 rounded-lg shadow-lg p-6 hover:shadow-xl hover:scale-105 transition duration-300"
                      >
                        <h3 className="text-xl font-semibold text-gray-100 mb-4 border-b-2 border-blue-200 pb-2">
                          {type}
                        </h3>
                        {items.length > 0 ? (
                          <ul className="space-y-1">
                            {items.map((item, index) => (
                              <li key={index} className="text-gray-100 flex items-center">
                                {getIcon(item)}
                                {item}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-300 italic">No services available.</p>
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollFadeIn>
              </div>
              <hr />
            </section>
          ))}
        </div>

        {/* Booking Form */}
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default Ancillary;