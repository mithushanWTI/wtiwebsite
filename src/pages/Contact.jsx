import { FaPhoneAlt, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import heroImage from '/assets/dubai2.png';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import SubscribeSection from "../components/Subscription";
import ContactForm from "../components/Contactform";

const ContactPage = () => {
  return (
    <div>
      <Header />
      {/* Hero Section */}
      <section className="relative w-full h-[55vh] md:h-[85vh] flex items-center justify-center bg-cover bg-center text-white overflow-hidden">
  {/* Background Image with Zoom Effect */}
  <div
    className="absolute inset-0 bg-cover bg-center zoom-animation"
    style={{ backgroundImage: `url(${heroImage})` }}
  ></div>

  {/* Black Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative p-6 text-center rounded-lg">
    <h2 className="text-2xl md:text-3xl font-light font-montez">Your Journey Starts Here</h2>
    <h1 className="text-4xl md:text-8xl font-bold mt-2">CONTACT US</h1>
  </div>
</section>


      {/* Contact Info Section */}
<section className="bg-white py-22 px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
    
    {/* Our Location */}
    <div className="flex flex-col items-center text-center p-6 shadow-md rounded-lg border border-gray-200 transition duration-300 hover:shadow-xl hover:scale-105">
      <DotLottieReact
        src="https://lottie.host/97507c5c-68a9-4d82-baa3-2c3d23a0f550/XF4RTT8ePL.lottie"
        loop
        autoplay
        className="mb-[px] mt-[-15px] w-30"
      />
      <h3 className="text-lg font-bold text-red-500">OUR LOCATION</h3>
      <p className="text-gray-600 mt-2">128 1/1, Thimbirigasyaya Road, Colombo, Sri Lanka</p>
    </div>

    {/* Call Us */}
    <div className="flex flex-col items-center text-center p-6 shadow-md rounded-lg border border-gray-200 transition duration-300 hover:shadow-xl hover:scale-105">
      <DotLottieReact
        src="https://lottie.host/1ade6b90-0f56-42a4-be52-274b0d6efd36/ARmFl9qvM2.lottie"
        loop
        autoplay
        className="mb-[px] mt-[-15px] w-30"
      />
      <h3 className="text-lg font-bold text-red-500">CALL US</h3>
      <p className="text-gray-600 mt-2">+94 777 377 956</p>
    </div>

    {/* Email Us */}
    <div className="flex flex-col items-center text-center p-6 shadow-md rounded-lg border border-gray-200 transition duration-300 hover:shadow-xl hover:scale-105">
      <DotLottieReact
        src="https://lottie.host/4ddf4e6a-233e-443a-ba84-357c5b823209/JhGwFVjKkZ.lottie"
        loop
        autoplay
        className="w-40 h-30 md:w-40 md:h-24 lg:w-40 lg:h-28 mb-[-20px] mt-[-25px] md:mt-[-35]"
      />
      <h3 className="text-lg font-bold text-red-500 mb-[-10px]">EMAIL US</h3>
      <p className="text-gray-600 mt-2">hello@worldtravelisland.com</p>
    </div>

    {/* Available Hours */}
    <div className="flex flex-col items-center text-center p-6 shadow-md rounded-lg border border-gray-200 transition duration-300 hover:shadow-xl hover:scale-105">
      <DotLottieReact
        src="https://lottie.host/1667a50a-44eb-4c6b-a558-ef29c1ac1fd3/DPxOy0wLO5.lottie"
        loop
        autoplay
        className="mb-[px] mt-[-15px] w-30"
      />
      <h3 className="text-lg font-bold text-red-500">AVAILABLE HOURS</h3>
      <p className="text-gray-600 mt-2">Monday – Saturday<br />08:00 – 19:00</p>
    </div>

  </div>
</section>



      {/* Map Section */}
      <section className="w-full">
        <iframe
          className="w-full h-[400px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.295836218557!2d79.86004251537142!3d6.89189279501645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2592a52194f6b%3A0x6e118bfb61f639a1!2sThimbirigasyaya%20Rd%2C%20Colombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1646820516169"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      <ContactForm/>
      <SubscribeSection/>

      <Footer />
    </div>
  );
};

export default ContactPage;
