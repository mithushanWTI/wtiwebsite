import React from 'react'
import Header from '../components/Header'
import ContactForm from '../components/Contactform';
import Footer from '../components/Footer';
const heroImage = '../assets/corporate.jpg';


const Corporate = () => {

  const wtiCorporateTravelBenefits = [
    {
      benefit: "Customized Travel Management",
      description: "We understand that every business has unique travel requirements. Our team offers fully customized corporate travel solutions to align with your company’s policies, budgets, and preferences.",
      icon: "🛠️" // Wrench, symbolizing customization
    },
    {
      benefit: "Dedicated Account Manager",
      description: "Each corporate client is assigned a dedicated travel expert to handle all bookings, manage itineraries, and provide 24/7 support for any travel emergencies.",
      icon: "👤" // Bust in silhouette, symbolizing a person
    },
    {
      benefit: "Exclusive Corporate Rates & Discounts",
      description: "Our partnerships with leading airlines, hotels, and transport providers allow us to secure the best corporate rates, discounts, and perks for our clients.",
      icon: "💰" // Money bag, symbolizing savings
    },
    {
      benefit: "Seamless Flight & Hotel Bookings",
      description: "We offer a one-stop solution for booking domestic and international flights, premium hotels, serviced apartments, and conference venues at competitive prices.",
      icon: "✈️🏨" // Airplane and hotel, combined icons
    },
    {
      benefit: "Visa Assistance & Documentation",
      description: "Need quick visa processing for business trips? Our experts handle visa applications, documentation, and embassy coordination for your team.",
      icon: "🛂" // Passport control, symbolizing visas
    },
    {
      benefit: "MICE & Corporate Events Management",
      description: "From international business conferences to incentive tours and product launches, we manage corporate meetings, incentives, conventions, and exhibitions (MICE) with precision.",
      icon: "🏢🎉" // Office building and party popper, combined icon
    },
    {
      benefit: "24/7 Travel Support",
      description: "Business travel comes with unexpected challenges. Our team is available 24/7 to handle lastminute changes, cancellations, or emergency travel needs.",
      icon: "⏱️" // Stopwatch, symbolizing time and speed
    },
    {
      benefit: "Comprehensive Travel Reports & Cost Analysis",
      description: "We provide detailed reports and analytics on corporate travel expenses, helping companies track budgets, optimize spending, and improve cost efficiency.",
      icon: "📊" // Bar chart, symbolizing reports
    },
  ];
  
  const wtiCorporateClients = [
    {
      industry: "FMCG",
      description: "Multinational brands and local distributors."
    },
    {
      industry: "Pharmaceutical & Healthcare",
      description: "Medical companies, research firms, and hospitals."
    },
    {
      industry: "IT & Tech Companies",
      description: "Software firms, startups, and telecom leaders."
    },
    {
      industry: "Manufacturing & Industrial Companies",
      description: "Paint, construction, and automotive sectors."
    },
    {
      industry: "Retail & E-Commerce",
      description: "Global retailers and logistics firms."
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
    
    <h1 className="text-3xl md:text-6xl font-bold mt-2">Corporate Travel Solutions by WTI</h1>
    <h2 className="text-2xl md:text-3xl font-light font-montez mt-2">Your Trusted Partner for Business Travel</h2> 
  </div>
</section>

<div className="py-12 px-4 md:px-25 ">
        
        <p className='text-justify md:text-justify pt-4 text-xl'>At WTI, we specialize in providing seamless, cost-effective, and personalized travel solutions
for corporate clients across diverse industries. Whether you're an FMCG brand, a
pharmaceutical company, a tech giant, or an industrial leader, our dedicated corporate travel
services ensure hassle-free business travel, cost optimization, and VIP treatment for your
employees.</p>
        <p className='text-justify md:text-justify pt-4 text-xl'>With 20+ corporate partners and growing, we understand the unique travel needs of businesses
        and provide tailor-made solutions to enhance productivity while reducing travel-related stress.</p>
      </div>


      <ContactForm/>

      <section className="py-12 bg-gray-100">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">
    Why Choose WTI for<span className="text-red-500"> Corporate Travel?</span>
    </h2>

    {/* Flexbox for better alignment and responsiveness */}
    <div className="flex flex-wrap justify-center gap-6">
      {wtiCorporateTravelBenefits .map((feature, index) => (
        <div 
          key={index} 
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full sm:w-[80%] md:w-[45%] lg:w-[30%] 
                     transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <span className="text-4xl mr-4 mb-4">{feature.icon}</span>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-red-500">{feature.benefit}</h3>
            <p className="text-gray-600 text-justify">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="py-16 bg-black">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-white mb-6">
    Popular <span className="text-red-500">Outbound MICE </span>Destinations & Services: 
    </h2>

    {/* Flexbox for better alignment and responsiveness */}
    <div className="flex flex-wrap justify-center gap-6">
      {wtiCorporateClients .map((feature, index) => (
        <div 
          key={index} 
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full sm:w-[80%] md:w-[45%] lg:w-[30%] 
                     transition-transform duration-300 ease-in-out hover:scale-105"
        >
          {/* <span className="text-4xl mr-4">{feature.icon}</span> */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-red-500">{feature.industry}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


<Footer/>
    </div>
  )
}

export default Corporate
