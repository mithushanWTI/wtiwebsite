import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import bag from '../assets/bag.png';
import background from '../assets/background.png';

const services = [
  { id: 1, title: "1Curated Travel Packages Just For You", description: "Start Your Journey By Selecting A Destination Of Choice And We'll Tailor An Itinerary To Your Preferences.", image: bag },
  { id: 2, title: "2Curated Travel Packages Just For You", description: "Start Your Journey By Selecting A Destination Of Choice And We'll Tailor An Itinerary To Your Preferences.", image: bag },
  { id: 3, title: "3Curated Travel Packages Just For You", description: "Start Your Journey By Selecting A Destination Of Choice And We'll Tailor An Itinerary To Your Preferences.", image: bag },
  { id: 4, title: "4Curated Travel Packages Just For You", description: "Start Your Journey By Selecting A Destination Of Choice And We'll Tailor An Itinerary To Your Preferences.", image: bag },
  { id: 5, title: "5Curated Travel Packages Just For You", description: "Start Your Journey By Selecting A Destination Of Choice And We'll Tailor An Itinerary To Your Preferences.", image: bag },
  { id: 6, title: "6Curated Travel Packages Just For You", description: "Start Your Journey By Selecting A Destination Of Choice And We'll Tailor An Itinerary To Your Preferences.", image: bag },
  { id: 7, title: "7Curated Travel Packages Just For You", description: "Start Your Journey By Selecting A Destination Of Choice And We'll Tailor An Itinerary To Your Preferences.", image: bag },
];

export default function TravelServices() {
  return (
    <div className="relative bg-black bg-opacity-80 py-10 pb-30 pt-30" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="text-center text-white mb-8">
        <h2 className="text-3xl font-bold">Travel<span className="text-red-500"> Services</span></h2>
        <p className="italic text-gray-300">“Seamless Travel, Unforgettable Experiences, And Stress-Free Planning - All In One Place!”</p>
      </div>
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 15 },
          1024: { slidesPerView: 4, spaceBetween: 18 },
          1280: { slidesPerView: 6, spaceBetween: 18 },
        }}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="w-11/12 mx-auto"
      >
        {services.map((service) => (
          <SwiperSlide key={service.id} className="p-4 bg-opacity-50 border border-red-500 rounded-lg text-center text-white">
            <img src={service.image} alt="Service" className="mx-auto w-36 h-36 object-cover" />
            <h3 className="text-lg font-semibold text-red-400">{service.title}</h3>
            <p className="text-sm text-gray-300">{service.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
