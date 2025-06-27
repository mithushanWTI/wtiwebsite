import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const testimonials = [
  {
    image: '/assets/airport.jpg',
    quote: "WTI made our trip unforgettable! Highly recommended.",
    name: "John & Sarah",
  },
  {
    image: '/assets/beach.jpg',
    quote: "Professional and seamless from start to end.",
    name: "Anushka W.",
  },
  {
    image: '/assets/elephant.jpg',
    quote: "Excellent customer service and luxury travel!",
    name: "Mr. Fernando",
  },
];

const TestimonialSection = () => {
  return (
    <section className="relative py-20 px-4 md:px-24 w-full overflow-hidden text-white mb-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">What Our <span className="text-red-500">Customers Say</span></h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Hear directly from our happy travelers who have experienced the world with WTI. 
          Their stories are our proudest achievements.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        loop
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        className="w-full h-[300px] md:h-[500px] rounded-lg"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full flex items-center justify-center relative bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 z-0" />

              {/* Content */}
              <div className="relative z-10 text-center px-4 md:px-12">
                <p className="text-lg md:text-2xl italic max-w-2xl mx-auto">"{item.quote}"</p>
                <h4 className="mt-4 font-semibold text-md md:text-lg">- {item.name}</h4>
              </div>
            </div>
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
    </section>
  );
};

export default TestimonialSection;
