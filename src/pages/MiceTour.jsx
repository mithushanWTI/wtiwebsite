import React, { useState } from 'react'
import Header from '../components/Header'
import ContactForm from '../components/Contactform';
const heroImage = '../assets/conference.jpg';


import { FaPlus, FaTimes } from "react-icons/fa";
import Footer from '../components/Footer';


const wtiMICEBenefits = [
  {
    "benefit": "Expert Local & Global Network",
    "description": "Strong partnerships with venues, hotels, and service providers worldwide."
  },
  {
    "benefit": "Customized & Flexible Packages",
    "description": "Tailor-made solutions based on your business goals and budget."
  },
  {
    "benefit": "Seamless Logistics & Event Execution",
    "description": "From travel to on-site coordination, we manage it all."
  },
  {
    "benefit": "End-to-End Support",
    "description": "Dedicated event managers to ensure a hassle-free experience."
  },
];

const MiceTour = () => {

   const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

  const sriLankaMICEServices = [
    {
      service: "Corporate Meetings & Executive Retreats",
      description: "Organize board meetings, leadership summits, and exclusive retreats in luxury hotels or eco-friendly resorts.",
      icon: "🏢" // Office building for meetings
    },
    {
      service: "Incentive Travel Programs",
      description: "Reward top-performing employees with customized incentive trips, adventure tourism, or wellness retreats.",
      icon: "🏆" // Trophy for incentives
    },
    {
      service: "Conferences & Conventions",
      description: "Full-scale management, from venue selection to speaker coordination, for international conferences and seminars.",
      icon: "🗣️" // Speaking head for conferences
    },
    {
      service: "Exhibitions & Trade Shows",
      description: "Design, logistics, and exhibitor support for large-scale expos and networking events.",
      icon: "🎪" // Circus tent for exhibitions
    },
    {
      service: "Team-Building & Outdoor Activities",
      description: "Curate unique experiences such as safari retreats, cultural tours, and adventure sports for corporate teams.",
      icon: "🏞️" // National park for outdoor activities
    },
  ];

  const outboundMICE = [
    {
      destination: "Dubai, UAE",
      description: "Luxury conference venues, networking events, and incentive shopping tours.",
      icon: "🇦🇪" // UAE flag
    },
    {
      destination: "Singapore",
      description: "World-class event facilities with business networking and leisure experiences.",
      icon: "🇸🇬" // Singapore flag
    },
    {
      destination: "Thailand & Malaysia",
      description: "Incentive group tours with beachside meetings and adventure excursions.",
      icon: "🇹🇭🇲🇾" // Thailand and Malaysia flags (combined)
    },
    {
      destination: "Europe (UK, Germany, France)",
      description: "High-profile exhibitions, industry summits, and business expos.",
      icon: "🇬🇧🇩🇪🇫🇷" // UK, Germany, and France flags (combined)
    },
    {
      destination: "India",
      description: "Affordable conference venues, trade shows, and medical conventions.",
      icon: "🇮🇳" // India flag
    },
    {
      destination: "Seychelles",
      description: "The most romantic destination in the world offers great venues.",
      icon: "🇸🇨" // Seychelles flag
    },
  ];

  const topMICEVenues = [
    {
      location: "Colombo",
      description: "State-of-the-art convention centers, 5-star hotels, and premium business facilities.",
    },
    {
      location: "Bentota & Galle",
      description: "Ideal for beachfront retreats, wellness events, and incentive travel.",
    },
    {
      location: "Kandy & Nuwara Eliya",
      description: "Serene mountain landscapes for executive retreats and teambuilding programs.",
    },
    {
      location: "Sigiriya & Cultural Triangle",
      description: "Unique heritage sites for cultural immersion and special events.",
    },
  ];

  const internationalMICEServices = [
    {
      service: "Venue Selection & Event Planning",
      description: "From boardrooms to exhibition halls, we secure premium spaces suited to your needs.",
    },
    {
      service: "Travel & Accommodation Management",
      description: "Flights, hotels, airport transfers, and visa processing for your entire team.",
    },
    {
      service: "Networking & Business Events",
      description: "Arrange B2B meetings, industry networking sessions, and cultural immersion programs.",
    },
    {
      service: "Corporate Leisure & Incentive Tours",
      description: "Combine work with leisure, offering cultural tours, shopping experiences, and adventure activities.",
    },
  ];


  return (
    <div>
      <Header />
      {/* Hero Section */}
      <section className="relative w-full h-[55vh] md:h-[85vh] flex items-center justify-center bg-cover bg-top text-white overflow-hidden">
        {/* Background Image with Zoom Animation */}
        <div
          className="absolute inset-0 bg-cover bg-center zoom-animation"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative p-6 text-center rounded-lg">

          <h1 className="text-4xl md:text-8xl font-bold mt-2">MICE</h1>
          <h2 className="text-2xl md:text-3xl font-light font-montez">Meetings, Incentives, Conferences & Exhibitions (MICE) Tailored for You</h2>
        </div>
      </section>

      <div className="py-12 px-4 md:px-25 ">
        <h2 className="text-3xl text-center font-bold"><span className="text-red-500">MICE Tours with WTI </span>– Elevate Your Business Events..</h2>
        <p className='text-justify md:text-center pt-4 text-xl'>WTI delivers world-class MICE (Meetings, Incentives, Conferences, and Exhibitions) solutions,
          ensuring seamless execution, exceptional experiences, and strategic business impact. Whether
          you're planning a corporate retreat, a large-scale industry conference, or an incentive trip, our
          team ensures a perfect blend of professionalism, innovation, and cultural immersion.</p>
      </div>
      <div className="py-12 px-4 md:px-25 ">
        <h2 className="text-2xl text-center font-bold"><span className="text-red-500">MICE in Sri Lanka </span>  – A Tropical Business Haven (Inbound MICE for International Clients)</h2>
        <p className='text-justify md:text-center pt-4 text-lg'>Sri Lanka is an emerging MICE hub, offering a blend of modern venues, stunning landscapes,
and rich cultural experiences. Whether it's a beachfront corporate retreat, a conference in a
five-star resort, or a team-building adventure in the lush highlands, WTI provides end-to-end
solutions to make your event seamless and unforgettable.</p>
      </div>


      <section className="py-12 bg-gray-100">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">
    Our Sri Lanka <span className="text-red-500">MICE </span>Services:
    </h2>

    {/* Flexbox for better alignment and responsiveness */}
    <div className="flex flex-wrap justify-center gap-6">
      {sriLankaMICEServices.map((feature, index) => (
        <div 
          key={index} 
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full sm:w-[80%] md:w-[45%] lg:w-[30%] 
                     transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <span className="text-4xl mr-4">{feature.icon}</span>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-red-500">{feature.service}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Top MICE Venues in <span className="text-red-500">Sri Lanka</span></h2>
        
        <div className="flex flex-wrap justify-center gap-3">
  {topMICEVenues.map((micevenue, index) => (
    <div 
      key={index} 
      className="bg-gray-100 p-6 items-center rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 flex-shrink-0 w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-12px)] lg:w-[calc(25%-12px)]"
    >
      <h3 className="text-red-500 text-2xl font-bold mb-2 transition-all duration-300 ease-in-out">
        {micevenue.location}
      </h3>
      <p className="text-gray-700 transition-all duration-300 ease-in-out">
        {micevenue.description}
      </p>
    </div>
  ))}
</div>
      </div>
    </section>

    <ContactForm/>

    <hr className=' bg-black h-1 mx-10 my-8 text-center'/>

    <div className="py-12 px-4 md:px-25 ">
        <h2 className="text-2xl text-center font-bold"><span className="text-red-500">MICE in International Destinations </span>  – Taking Your Business Global (Outbound MICE for Sri
          Lankan Clients)</h2>
        <p className='text-justify md:text-center pt-4 text-lg'>For Sri Lankan businesses looking to host events abroad, WTI offers customized outbound MICE
packages with premium venues, seamless logistics, and exclusive access to international
business hubs.</p>
      </div>

      <section className="py-12 bg-gray-100">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">
    Popular <span className="text-red-500">Outbound MICE </span>Destinations & Services: 
    </h2>

    {/* Flexbox for better alignment and responsiveness */}
    <div className="flex flex-wrap justify-center gap-6">
      {outboundMICE .map((feature, index) => (
        <div 
          key={index} 
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full sm:w-[80%] md:w-[45%] lg:w-[30%] 
                     transition-transform duration-300 ease-in-out hover:scale-105"
        >
          {/* <span className="text-4xl mr-4">{feature.icon}</span> */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-red-500">{feature.destination}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


<ContactForm/>


<section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our International <span className="text-red-500">MICE Services: </span></h2>
        
        <div className="flex flex-wrap justify-center gap-3">
  {internationalMICEServices .map((micevenue, index) => (
    <div 
      key={index} 
      className="bg-gray-100 p-6 items-center rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-103 flex-shrink-0 w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-12px)] lg:w-[calc(25%-12px)]"
    >
      <h3 className="text-red-500 text-xl font-bold mb-2 transition-all duration-300 ease-in-out">
        {micevenue.service}
      </h3>
      <p className="text-gray-700 transition-all duration-300 ease-in-out">
        {micevenue.description}
      </p>
    </div>
  ))}
</div>
      </div>
    </section>

    <div className="w-full md:w-full lg:w-full lg:flex-1 text-center sm:text-left px-8 md:px-32 py-4">
  <h2 className="text-3xl font-bold">
    <span className="text-red-500">Why Choose WTI</span> for Your MICE Events?
  </h2>

  <div className="mt-6 bg-gray-900 text-white rounded-lg p-4 px-8 md:px-24 ">
    {wtiMICEBenefits.map((faq, index) => (
      <div key={index} className="border-b border-gray-700 mb-4"> {/* Added mb-4 for gap */}
        <button
          className="w-full flex justify-between items-center py-4 text-left"
          onClick={() => toggleFAQ(index)}
        >
          <span className="text-lg font-semibold">
            {(index + 1).toString().padStart(2, '0')} {faq.benefit}
          </span>
          {activeIndex === index ? <FaTimes /> : <FaPlus />}
        </button>
        {activeIndex === index && (
          <p className="text-gray-400 p-3">{faq.description}</p>
        )}
      </div>
    ))}
  </div>
</div>

<Footer/>
    </div>
  )
}

export default MiceTour
