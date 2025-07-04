import React from 'react';
const logo = '/assets/WTI-White.webp';
const overlayImage = '/assets/wtiworld.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-[#0A0A2A] text-white py-10 overflow-hidden">
      {/* Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${overlayImage})` }}
      ></div>

      {/* Footer Content */}
      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:flex md:flex-col md:items-center md:text-center gap-12">

        {/* Logo & Description */}
        <div className="flex flex-col items-center text-center md:w-full">
          <img src={logo} alt="World Travel Island" className="w-40" />
          <p className="text-sm mt-2">
            We believe brand interaction is key in communication. Real innovations and a positive.
          </p>
          <div className="flex space-x-4 mt-3">
            <a href="https://www.facebook.com/worldtravelisland/" target="_blank" className="p-2 border border-gray-300 rounded-full text-gray-300 hover:text-blue-500 hover:border-blue-500">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.instagram.com/wti_srilanka/" target="_blank" className="p-2 border border-gray-300 rounded-full text-gray-300 hover:text-pink-500 hover:border-pink-500">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.linkedin.com/company/world-travel-island/" target="_blank" className="p-2 border border-gray-300 rounded-full text-gray-300 hover:text-blue-700 hover:border-blue-700">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://www.tiktok.com/@worldtravelisland" target="_blank" className="p-2 border border-gray-300 rounded-full text-gray-300 hover:text-black hover:border-black">
              <FaTiktok size={20} />
            </a>
            <a href="https://www.youtube.com/@WTIGlobal_Travel" target="_blank" className="p-2 border border-gray-300 rounded-full text-gray-300 hover:text-red-500 hover:border-red-500">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row md:justify-center md:w-full gap-16">

          {/* Quick Links */}
          <div className="flex flex-col items-center text-center md:text-left md:items-start">
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2 text-sm ">
              <li><a href="#" className='text-white hover:text-red-600'>Inbound Packages</a></li>
              <li><a href="#" className='text-white hover:text-red-600'>Outbound Packages</a></li>
              <li><a href="/aboutus" className='text-white hover:text-red-600'>AboutUs</a></li>
              <li><a href="/career" className='text-white hover:text-red-600'>Career</a></li>
              <li><a href="#" className='text-white hover:text-red-600'>Privacy Policy</a></li>
              {/* <li><a href="/ancillary" className='text-white hover:text-red-600'>Ancillaries</a></li> */}
            </ul>
          </div>

          {/* Tour Type */}
          <div className="flex flex-col items-center text-center md:text-left md:items-start">
            <h4 className="font-bold mb-2">Destinations</h4>
            <ul className="space-y-1 text-m">
              <li><a href="/inbound" className='text-white hover:text-red-600'>Sri Lanka</a></li>
              <li><a href="/outbound" className='text-white hover:text-red-600'>Dubai</a></li>
              <li><a href="/outbound" className='text-white hover:text-red-600'>Malaysia</a></li>
              <li><a href="/outbound" className='text-white hover:text-red-600'>Singapore</a></li>
              <li><a href="/outbound" className='text-white hover:text-red-600'>Thailand</a></li>
              <li><a href="/outbound" className='text-white hover:text-red-600'>Seychelles</a></li>
              <li><a href="/outbound" className='text-white hover:text-red-600'>Azerbaijan</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center text-center md:text-left md:items-start">
            <h4 className="font-semibold mb-2">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <p className="text-sm">📞 +94777377956</p>
              <p className="text-sm">✉ hello@worldtravelisland.com</p>
              <p className="text-sm">📍 321-4/1, 4th Floor Galle road,<br />Colombo 03</p>
            </ul>
          </div>

          {/* logos */}
          <div className='flex justify-center md:flex-col'>
            <img src='/assets/iata.png' alt="World Travel Island" className="w-20 h-16" />
            <img src='/assets/civil.png' alt="World Travel Island" className="w-20 h-16" />
           
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative text-center text-xs border-t border-gray-600 mt-6 pt-4">
        <p>World Travel Island © 2025 All Rights Reserved</p>

      </div>
    </footer>
  );
};

export default Footer;
