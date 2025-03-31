const overlayImage = "/assets/section.png";

export default function WhyWTI() {
  return (
    <div className="bg-gray-100 p-15 rounded-lg border border-gray-300 shadow-lg lg:pl-24 lg:pr-24  bg-center bg-no-repeat" style={{ backgroundImage: `url(${overlayImage})` }} >
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Why <span className="text-red-600">WTI</span>?
      </h2>
      <p className="text-gray-600 mb-6">
        Because more than 268 other customers have loved us too
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} title={feature.title} description={feature.description} />
        ))}
      </div>
    </div>
  );
}

const features = [
  {
    "title": "Comprehensive Travel Solutions",
    "description": "We provide air tickets for 275+ airlines, visa services, holiday packages, MICE travel support, Destination wedding tours, Charter flight services and corporate travel, all under one roof."
  },
  {
    "title": "Tech-Driven Innovation",
    "description": "WTI is at the forefront of travel technology, offering seamless booking experiences through digital solutions."
  },
  {
    "title": "Strong Global Network",
    "description": "We work with top airlines, hotels, and travel partners worldwide, securing the best deals for our customers."
  },
  {
    "title": "Exceptional Customer Service",
    "description": "Our dedicated team provides 24/7 support, ensuring a hassle-free travel experience."
  },
  {
    "title": "Exclusive Offers & Competitive Pricing",
    "description": "We offer special promotions, discounted fares, and customized travel solutions."
  },
  {
    "title": "Proven Industry Expertise",
    "description": "With 5+ years of experience in the travel industry, we are a trusted name in travel management."
  }
];

function FeatureCard({ title, description }) {
  return (
    <div className="p-5 border border-gray-300 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 " >
      <div className="flex items-center gap-2">
      <div className="w-12 h-12 bg-red-500 text-white flex items-center justify-center rounded-full mb-3">
        🎯
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      
      <p className="text-gray-600 text-sm mt-2">{description}</p>
      {/* <a href="#" className="text-red-500 text-sm font-semibold mt-3 inline-block">
        Learn More &rarr;
      </a> */}
    </div>
  );
}
