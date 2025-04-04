import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const destinations = [
  { name: "DUBAI", image: "/assets/dubai3.jpg", link: "/outbound"},
  { name: "SRILANKA", image: "/assets/sigiriya.webp", link: "/inbound" },
  { name: "THAILAND", image: "/assets/bangkok.webp",link: "/outbound" },
  { name: "SEYCHELLES", image: "/assets/seychelles.jpg", link: "/outbound" },
  { name: "BANGKOK", image: "/assets/thailand.jpg", link: "/outbound" },
  { name: "SINGAPORE", image: "/assets/singapore.jpg", link: "/outbound" },
  { name: "MALAYSIA", image: "/assets/malaysia.jpg", link: "/outbound" },
  { name: "AZERBAIJAN", image: "/assets/azerbaijan.jpg", link: "/outbound" },
 

];

const NextArrow = ({ onClick }) => (
  <button
    className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-blue-950 p-3 rounded-full shadow-md cursor-pointer"
    onClick={onClick}
  >
    <FaArrowRight className="text-white" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-blue-950 p-3 rounded-full shadow-md cursor-pointer"
    onClick={onClick}
  >
    <FaArrowLeft className="text-white" />
  </button>
);

const PopularDestinations2 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow />,
    responsive: [
        { breakpoint: 1280, settings: { slidesToShow: 6, slidesToScroll: 1 } }, // Large screens
        { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 1 } }, // Tablets/Laptops
        { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },  // Small tablets
        { breakpoint: 640, settings: { slidesToShow: 2, slidesToScroll: 1 } },  // Large phones
        { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },  // Small phones
    ],
  };

  return (
    <div className="py-20 px-8 md:px-24">
      <h2 className="text-3xl font-bold text-center md:text-left">Explore <span className="text-red-500">Top</span> Destination</h2>
      <p className="text-gray-500 text-center md:text-left mb-6 italic">
      "Explore Top Destinations Handpicked For You!"
      </p>

      <div className="relative ">
        <Slider {...settings}>
          {destinations.map((dest, index) => (
            
            <Link to={dest.link} className="block text-center"> {/* Wrap in Link */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-40 overflow-hidden rounded-full">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="mt-2 font-semibold">{dest.name}</h3>
            </div>
          </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PopularDestinations2;
