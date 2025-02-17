import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// Import Slider Images
import sldimg1 from '../assets/slider1.png';
import sldimg2 from '../assets/slider2.jpeg';
import sldimg3 from '../assets/slider3.webp';
import sldimg4 from '../assets/slider4.png';

const slides = [
  {
    image: sldimg1,
    title: 'FIND YOUR PARADISE',
    description: 'Unwind on the most picturesque beaches at your dream destination.',
    buttonText: 'Explore Now',
  },
  {
    image: sldimg2,
    title: 'CHASE THE THRILL',
    description: 'From mountain treks to the most exotic adventures, the best is just a trip away.',
    buttonText: 'Start Your Adventure',
  },
  {
    image: sldimg3,
    title: 'MEMORIES THAT LAST',
    description: 'Explore exotic locations, rich cultures & epic scenic moments.',
    buttonText: 'Find the Best Trips',
  },
  {
    image: sldimg4,
    title: 'TRAVEL IN STYLE',
    description: 'Indulge in luxury travel and enjoy unforgettable experiences.',
    buttonText: 'Discover Packages',
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
        delay: 4000, // Slide duration (4s)
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
            <button className="mt-5 px-6 py-3 bg-red-500 border-1 border-red-500 text-white rounded-lg hover:bg-black/30 hover:text-red-500 transition">
              {slide.buttonText}
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSection;
