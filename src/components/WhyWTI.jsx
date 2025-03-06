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
    title: "Security Assurance",
    description:
      "Demonstrates commitment to user data security through encryption and secure payment practices.",
  },
  {
    title: "Customer Support",
    description:
      "Dedicated support to assist you with any travel inquiries and ensure smooth booking experiences.",
  },
  {
    title: "Transparent Policies",
    description: "Clear and concise policies to maintain trust and reliability for all our users.",
  },
  {
    title: "Reputable Affiliations",
    description:
      "Partnered with top-tier service providers to ensure quality and credibility in travel experiences.",
  },
  {
    title: "Flexible Cancellations",
    description: "Easy modification and cancellation policies for a hassle-free booking experience.",
  },
  {
    title: "Best Price Guarantee",
    description: "Ensuring you get the best deals and value for your money on all bookings.",
  },
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
      <a href="#" className="text-red-500 text-sm font-semibold mt-3 inline-block">
        Learn More &rarr;
      </a>
    </div>
  );
}
