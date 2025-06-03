import { useState, useEffect, useRef } from "react";
import { FaPhone, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const logo = "/assets/WTI-LogoWEBBB.webp";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const dropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);

  const location = useLocation(); // For detecting route changes

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const closeAllDropdowns = () => {
    setIsDropdownOpen(false);
    setIsServicesDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target)
      ) {
        setIsServicesDropdownOpen(false);
      }
    };

    const handleScroll = () => {
      closeAllDropdowns();
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    closeAllDropdowns();
  }, [location]);

  return (
    <header className="bg-white shadow-md w-full top-0 z-50 sticky">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="WTI Logo" className="h-16 md:h-20" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex space-x-6 font-medium">
          <Link to="/" className="hover:text-red-500">HOME</Link>

          <div className="relative" ref={servicesDropdownRef}>
            <button
              className="flex items-center space-x-1 hover:text-red-500"
              onClick={toggleServicesDropdown}
            >
              <span>OUR SERVICES</span>
              <FaChevronDown />
            </button>

            {isServicesDropdownOpen && (
              <div
                className="absolute left-0 mt-2 w-45 bg-white shadow-md rounded-md"
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <Link to="/AirTickets" className="block px-3 py-2 hover:bg-red-400">AIR TICKETS</Link>
                <Link to="/VisaServices" className="block px-3 py-2 hover:bg-red-400">VISA SERVICES</Link>
                <Link to="/inbound" className="block px-3 py-2 hover:bg-red-400">EXPERIENCE SRILANKA</Link>
                <Link to="/outbound" className="block px-3 py-2 hover:bg-red-400">GLOBAL TOUR HOLIDAYS</Link>
                <Link to="/micetours" className="block px-3 py-2 hover:bg-red-400">MICE TOURS</Link>
                       <Link to="/ancillary" className="block px-4 py-2 hover:bg-red-400">ANCILLARIES</Link>
              </div>
            )}
          </div>

          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center space-x-1 hover:text-red-500"
              onClick={toggleDropdown}
            >
              <span>HOLIDAY-TOURS</span>
              <FaChevronDown />
            </button>

            {isDropdownOpen && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md"
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Link to="/inbound" className="block px-3 py-2 hover:bg-red-400">Inbound Packages</Link>
                <Link to="/outbound" className="block px-3 py-2 hover:bg-gray-200">Outbound Packages</Link>
              </div>
            )}
          </div>

          <Link to="/corporate" className="hover:text-red-500">CORPORATE</Link>
          <Link to="/blog" className="hover:text-red-500">BLOG & MEDIA</Link>
          <Link to="/contactus" className="hover:text-red-500">CONTACT US</Link>
        </nav>

        {/* Phone Button */}
        <a
          href="tel:+94777377956"
          className="hidden md:flex bg-red-500 text-white px-4 py-2 rounded-lg flex items-center hover:text-red-500 hover:bg-white border border-transparent hover:border-red-500"
        >
          <FaPhone className="mr-2" />
          +94 777377956
        </a>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white shadow-md pl-10 p-4 absolute left-0 right-0 top-full">
          <Link to="/" className="block px-4 py-2 hover:bg-gray-200">HOME</Link>

          <div>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full text-left block px-4 py-2 hover:bg-gray-200 flex justify-between items-center"
            >
              OUR SERVICES
              <span>{isServicesOpen ? "▲" : "▼"}</span>
            </button>
            {isServicesOpen && (
              <div className="pl-4">
                <Link to="/AirTickets" className="block px-4 py-2 hover:bg-gray-200">AIR TICKETS</Link>
                <Link to="/VisaServices" className="block px-4 py-2 hover:bg-gray-200">VISA SERVICES</Link>
                <Link to="/inbound" className="block px-4 py-2 hover:bg-gray-200">EXPERIENCE SRILANKA</Link>
                <Link to="/outbound" className="block px-4 py-2 hover:bg-gray-200">GLOBAL TOUR HOLIDAYS</Link>
                <Link to="/micetours" className="block px-4 py-2 hover:bg-gray-200">MICE TOURS</Link>
                <Link to="/ancillary" className="block px-4 py-2 hover:bg-gray-200">ANCILLARIES</Link>
              </div>
            )}
          </div>

          <Link to="/inbound" className="block px-4 py-2 hover:bg-gray-200">INBOUND PACKAGES</Link>
          <Link to="/outbound" className="block px-4 py-2 hover:bg-gray-200">OUTBOUND PACKAGES</Link>
          <Link to="/corporate" className="block px-4 py-2 hover:bg-gray-200">CORPORATE</Link>
          <Link to="/blog" className="block px-4 py-2 hover:bg-gray-200">BLOG</Link>
          <Link to="/contactus" className="block px-4 py-2 hover:bg-gray-200">CONTACT US</Link>

          <div className="mt-4 border-t pt-4">
            <div className="flex items-center space-x-2">
              <span>📞</span>
              <a href="tel:+94777377956" className="text-gray-700 hover:bg-gray-200">+94 777 377 956</a>
            </div>
            <div className="flex items-center space-x-2 mt-2 pb-5">
              <span>✉️</span>
              <a href="mailto:Hello@Worldtravelisland.Com" className="text-gray-700 hover:bg-gray-200">Hello@Worldtravelisland.Com</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
