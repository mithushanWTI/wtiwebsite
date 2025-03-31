import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Link } from 'react-router-dom';

// Import Slider Images
const sldimg1 = '/assets/slider1.png';
const sldimg2 = '/assets/slider2.jpeg';
const sldimg3 = '/assets/slider3.webp';
const sldimg4 = '/assets/slider5.jpg';

const slides = [
  {
    image: sldimg1,
    title: 'FIND YOUR PARADISE',
    description: 'Unwind on the most picturesque beaches at your dream destination.',
    buttonText: 'Explore Now',
    link: '/outbound',
  },
  {
    image: sldimg2,
    title: 'CHASE THE THRILL',
    description: 'From mountain treks to the most exotic adventures, the best is just a trip away.',
    buttonText: 'Start Your Adventure',
    link: '/inbound',
  },
  {
    image: sldimg3,
    title: 'MEMORIES THAT LAST',
    description: 'Explore exotic locations, rich cultures & epic scenic moments.',
    buttonText: 'Find the Best Trips',
    link: '/outbound',
  },
  {
    image: sldimg4,
    title: 'TRAVEL IN STYLE',
    description: 'Indulge in luxury travel and enjoy unforgettable experiences.',
    buttonText: 'Discover Packages',
    link: '/outbound',
  }
];

const HeroSection = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      effect="fade"
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 7000, // Slide duration (4s)
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => (
          `<span class="${className}" style="background-color: red;"></span>`
        ),
      }}
      className="w-full h-screen"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          {/* Background Image with Zoom Animation */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center zoom-animation"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>

          {/* Slide Content */}
          <div className="relative pb-40 z-10 flex flex-col justify-center items-center text-center text-white p-6 h-full">
            <h1 className="text-5xl md:text-8xl font-bold">{slide.title}</h1>
            <p className="text-xl pt-5 mt-3 max-w-2xl">{slide.description}</p>
            <Link to={slide.link}>
            <button className="mt-5 px-6 py-3 bg-red-500 border-1 border-red-500 text-white rounded-lg hover:bg-black/30 hover:text-red-500 transition cursor-pointer">
              {slide.buttonText}
            </button>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSection;
