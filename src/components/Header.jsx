import { useState } from "react";
import { FaPhone, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/WTI-LogoWEBBB.webp';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white shadow-md w-full top-0 z-50 sticky">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="WTI Logo" className="h-16 md:h-20" />
        </div>

        {/* Mobile Menu Button (Visible on Tablets & Mobile) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links for Desktop & Tablet */}
        <nav className="hidden lg:flex space-x-6 font-medium">
          <a href="#" className="hover:text-red-500">HOME</a>
          <a href="#" className="hover:text-red-500">OUR SERVICES</a>

          {/* Holiday Tours Dropdown */}
          <div className="relative">
            <button
              className="flex items-center space-x-1 hover:text-red-500"
              onClick={toggleDropdown}
            >
              <span>HOLIDAY-TOURS</span>
              <FaChevronDown />
            </button>

            {isDropdownOpen && (
              <div
              className="absolute left-0 mt-2 w-45 bg-white shadow-md rounded-md"
              onMouseLeave={() => setIsDropdownOpen(false)} // Close when mouse leaves
            >
                <a href="/inbound" className="block px-3 py-2 hover:bg-red-400" onClick={toggleDropdown}>Inbound Packages</a>
                <a href="/outbound" className="block px-3 py-2 hover:bg-gray-200" onClick={toggleDropdown}>Outbound Packages</a>
              </div>
            )}
          </div>

          
          <a href="#" className="hover:text-red-500">CORPORATE</a>
          <a href="#" className="hover:text-red-500">BLOG</a>
          <a href="#" className="hover:text-red-500">CONTACT US</a>
        </nav>

        {/* Phone Button - Show on tablets and larger */}
        <a href="tel:+94777377956" className="hidden md:flex bg-red-500 text-white px-4 py-2 rounded-lg flex items-center hover:text-red-500 hover:bg-white border border-transparent hover:border-red-500">
          <FaPhone className="mr-2" />
          +94 777377956
        </a>
      </div>

      {/* Mobile & Tablet Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md pl-10 p-4 absolute left-0 right-0 top-full">
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">HOME</a>
          <a href="/inbound" className="block px-4 py-2 hover:bg-gray-200">INBOUND PACKAGES</a>
          <a href="/outbound" className="block px-4 py-2 hover:bg-gray-200">OUTBOUND PACKAGES</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">OUR SERVICES</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">BUILD TRIP</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">ABOUT US</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">CONTACT US</a>
        </div>
      )}
    </header>
  );
};

export default Header;
