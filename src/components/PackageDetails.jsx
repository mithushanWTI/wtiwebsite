import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import packagesData from '../data/Packages.json'; // Import JSON directly
import Header from "./Header";
import Footer from '../components/Footer';
import SubscribeSection from '../components/Subscription';
import { MapPin } from "lucide-react";
import { MdSchedule } from "react-icons/md";
import { IoFootstepsSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsPersonWalking } from "react-icons/bs";
import ContactForm from "./Contactform";
import PopularInboundPackages from "./PopularInboundPackages";
import PackagesList from "./PackagesList";
import React from 'react';


// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PackageDetails = () => {
  const [query, setQuery] = useState('');
  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  const { id } = useParams();
  const [packageData, setPackageData] = useState(null);
  const [openIndex, setOpenIndex] = useState(null); // Track which accordion item is open

  useEffect(() => {
    const selectedPackage = packagesData.find(pkg => pkg.id.toString() === id);
    setPackageData(selectedPackage);
    window.scrollTo(0, 0); // Scroll to top when package changes
  }, [id]);
  
  if (!packageData) return <p className="text-center text-gray-600">Package not found!</p>;

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-6 pb-25">
        {/* Title & Location */}
        <div className="flex justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-950">{packageData.name}</h1>
          {/* Star Ratings */}
          <div className="flex items-center gap-1">
            {Array(packageData.rating).fill().map((_, i) => (
              <span key={i} className="text-red-500 text-3xl">★</span>
            ))}
          </div>
        </div>
        <p className="text-start text-gray-500 flex items-center">
          <MapPin size={14} className="text-red-500 mr-1" /> {packageData.destination}
        </p>

       {/* Image Slider */}
<div className="mt-6 overflow-hidden rounded-lg shadow-lg relative">
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={10}
    slidesPerView={1}
    navigation
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
    }}
    loop={true}
    className="w-full h-126 rounded-lg"
  >
    {packageData.images.map((img, index) => (
      <SwiperSlide key={index}>
        <img
          src={img}
          alt={`Slide ${index + 1}`}
          className="w-full h-126 object-cover rounded-lg"
        />
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Custom Navigation Colors */}
  <style>
    {`
      .swiper-button-next, .swiper-button-prev {
        color: white !important; 
       
      }
      .swiper-button-next:hover, .swiper-button-prev:hover {
        color: darkred !important; 
      }
    `}
  </style>
</div>


        {/* Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
          <div className="flex items-center">
            <MdSchedule className="text-red-500 w-10 h-10 md:w-12 md:h-12 mr-2" />
            <div className="text-start">
              <h4 className="text-lg font-semibold text-red-500">Duration</h4>
              <p className="text-blue-950">{packageData.duration}</p>
            </div>
          </div>

          <div className="flex items-center">
            <IoFootstepsSharp className="text-red-500 w-10 h-10 md:w-12 md:h-12 mr-2" />
            <div className="text-start">
              <h4 className="text-lg font-semibold text-red-500">Tour Type</h4>
              <p className="text-blue-950">{packageData.tourtype}</p>
            </div>
          </div>

          <div className="flex items-center">
            <FaPeopleGroup className="text-red-500 w-10 h-10 md:w-12 md:h-12 mr-2" />
            <div className="text-start">
              <h4 className="text-lg font-semibold text-red-500">Group Size</h4>
              <p className="text-blue-950">{packageData.people} Members</p>
            </div>
          </div>

          {packageData.type === "inbound" && (
  <div className="flex items-center">
    <BsPersonWalking className="text-red-500 w-10 h-10 md:w-12 md:h-12 mr-2" />
    <div className="text-start">
      <h4 className="text-lg font-semibold text-red-500">Guide</h4>
      <p className="text-blue-950">{packageData.guide}</p>
    </div>
  </div>
)}
        </div>

 {/* Description */}
 <div className="mt-10">
          <h3 className="text-xl font-semibold text-blue-950">Description</h3>
          <p className="text-gray-700 leading-relaxed text-justify">
  {packageData.description.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ))}
</p>
        </div>

        {/* Price Includes / Excludes */}
        <div className="grid md:grid-cols-2 gap-6 mt-15">
          <div className="bg-green-50 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-700">Price Includes</h3>
            <ul className="list-disc pl-5 text-gray-600">
              {packageData.priceIncludes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-red-700">Price Excludes</h3>
            <ul className="list-disc pl-5 text-gray-600">
              {packageData.priceExcludes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-red-700">Cancellation Policy</h3>
            <ul className="list-disc pl-5 text-gray-600">
              {packageData.CancellationPolicy.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

       {/* Itinerary Section with Accordion */}
<div className="mt-16">
  <h3 className="text-xl font-semibold">Itinerary</h3>
  <div className="mt-2 flex flex-col gap-2">
    {packageData.itinerary && packageData.itinerary.length > 0 ? (
      packageData.itinerary.map((day, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            className="w-full text-left px-4 py-3 flex justify-between items-center bg-blue-950 hover:bg-gray-200 transition text-white hover:text-black"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-semibold">Day {index + 1}: {day.title}</span>
            <span className="text-red-500">
              {openIndex === index ? "▲" : "▼"}
            </span>
          </button>
          <div
            className={`px-4 py-2 text-gray-700 transition-all duration-300 ${
              openIndex === index ? "block" : "hidden"
            }`}
          >
            {day.description.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      ))
    ) : (
      <p className="text-gray-500">No itinerary available for this package.</p>
    )}
  </div>
</div>


      </div>
      

      
      <ContactForm />
      <PackagesList searchQuery={query} type={packageData.type} limit={4} />
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default PackageDetails;
