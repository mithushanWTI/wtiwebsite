import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Article2 = () => {
  

  return (
    <div>
      <Header />
      {/* Hero Section */}
<section className="relative w-full h-[55vh] md:h-[45vh] flex items-center justify-center bg-cover bg-top text-white overflow-hidden">
        {/* Background Image with Zoom Animation */}
        <div
          className="absolute inset-0 bg-cover bg-top bg-blue-950"
          
        ></div>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative p-6 text-center rounded-lg">
    
    <h1 className="text-2xl md:text-4xl font-bold mt-2">The Best Shopping Destinations in UAE</h1>
  </div>
</section>

   {/* Article Content */}
   <section className="p-6 max-w-5xl mx-auto">
        <p className="text-lg mb-6">
          The UAE is a shopper’s paradise, offering everything from luxury brands to street markets. Whether you're looking for designer labels, electronics, or souvenirs, here are the best shopping destinations in the UAE.
        </p>

        {/* Destination 1 - Dubai Mall */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Dubai Mall – The Ultimate Shopping Experience</h2>
          <p className="mb-4">
            Dubai Mall is the largest shopping mall in the world, featuring over 1,200 stores, an aquarium, and an ice rink.
          </p>
          <p className="mb-4">
            <strong>Best for:</strong> Luxury brands, electronics, and dining.
          </p>
          <p className="mb-4">
            <strong>Must-visit stores:</strong> Gucci, Chanel, Apple, and Bloomingdale’s.
          </p>
        </div>

        {/* Destination 2 - Mall of the Emirates */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Mall of the Emirates – Luxury Meets Entertainment</h2>
          <p className="mb-4">
            Famous for Ski Dubai, this mall offers high-end brands and amazing entertainment options.
          </p>
          <p className="mb-4">
            <strong>Best for:</strong> Luxury shopping and family entertainment.
          </p>
        </div>

        {/* Destination 3 - Gold Souk */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Gold Souk – Best for Jewelry Lovers</h2>
          <p className="mb-4">
            Located in Old Dubai, the Gold Souk is a must-visit for those looking for gold and precious stones.
          </p>
          <p className="mb-4">
            <strong>Best for:</strong> Gold, diamonds, and gemstones.
          </p>
        </div>

        {/* Destination 4 - Global Village */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Global Village – A Cultural Shopping Experience</h2>
          <p className="mb-4">
            Global Village offers a unique shopping experience with items from 90+ countries.
          </p>
          <p className="mb-4">
            <strong>Best for:</strong> Souvenirs, carpets, and traditional handicrafts.
          </p>
        </div>

        {/* Destination 5 - Yas Mall */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. Yas Mall, Abu Dhabi – The Capital’s Shopping Gem</h2>
          <p className="mb-4">
            Yas Mall is Abu Dhabi’s top shopping destination, located near Ferrari World and Warner Bros.
          </p>
          <p className="mb-4">
            <strong>Best for:</strong> Family shopping and entertainment.
          </p>
        </div>

         {/* Destination 6 - The Outlet Village */}
         <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">6. The Outlet Village – Shop 'Til You Drop</h2>
          <p className="mb-4">
            Located in Dubai, The Outlet Village offers designer outlets at discounted prices, making it perfect for those looking for luxury goods at lower prices.
          </p>
          <p className="mb-4">
            <strong>Best for:</strong> Discounted designer brands.
          </p>
        </div>

        {/* Destination 7 - City Walk */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">7. City Walk – A Modern Shopping Experience</h2>
          <p className="mb-4">
            City Walk in Dubai is a beautiful blend of shopping, dining, and entertainment. It's a stylish urban area with trendy boutiques and modern designs.
          </p>
          <p className="mb-4">
            <strong>Best for:</strong> High-end fashion, food, and entertainment.
          </p>
        </div>

        {/* Destination 8 - Ibn Battuta Mall */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">8. Ibn Battuta Mall – A Journey Through the World</h2>
          <p className="mb-4">
            Inspired by the travels of the famous explorer Ibn Battuta, this mall is divided into six themed courts, offering a unique shopping experience.
          </p>
          <p className="mb-4">
            <strong>Best for:</strong> Themed shopping experience and diverse shopping options.
          </p>
        </div>

        {/* Destination 9 - Dubai Marina Mall */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">9. Dubai Marina Mall – A Seaside Shopping Experience</h2>
          <p className="mb-4">
            Situated near the iconic Dubai Marina, this mall offers a relaxing atmosphere, waterfront dining, and a variety of shopping outlets.
          </p>
          <p className="mb-4">
            <strong>Best for:</strong> Waterfront shopping and dining.
          </p>
        </div>

        {/* Destination 10 - Deira City Centre */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">10. Deira City Centre – The Classic Dubai Mall</h2>
          <p className="mb-4">
            Deira City Centre is one of Dubai's oldest malls, offering a wide range of shopping, dining, and entertainment options in the heart of Deira.
          </p>
          <p className="mb-4">
            <strong>Best for:</strong> Traditional mall experience with everything under one roof.
          </p>
        </div>
        {/* Conclusion */}
        <div className="text-center mt-12">
        <p className="mt-8 text-lg">
          The UAE offers an unbeatable shopping experience for all budgets. Whether you love luxury brands or budget-friendly shopping, there's something for everyone!
        </p>
        </div>
      </section>

<Footer/>
</div>
  );
};

export default Article2;
