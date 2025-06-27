import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Article3 = () => {
  

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
    
    <h1 className="text-2xl md:text-4xl font-bold mt-2">Top 10 Romantic Places to Visit in Sri Lanka as a Couple</h1>
  </div>
</section>

  {/* Article Content */}
  <section className="p-6 max-w-5xl mx-auto">
        {/* Ella */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Ella – The Misty Mountain Escape</h2>
          <p className="mb-4">
            Ella is a dream destination for couples who love nature and adventure. Surrounded by misty mountains, tea plantations, and stunning waterfalls, it’s the perfect getaway for romance and relaxation.
          </p>
          <h3 className="font-semibold mb-2">Romantic Things to Do in Ella:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Take a scenic train ride from Kandy to Ella – one of the most beautiful train journeys in the world.</li>
            <li>Hike up Little Adam’s Peak for breathtaking sunrise or sunset views.</li>
            <li>Visit Nine Arches Bridge and watch the train pass over it.</li>
            <li>Enjoy a cozy stay in a private luxury villa with mountain views.</li>
          </ul>
          <p><strong>Best time to visit:</strong> December to March (cooler weather).</p>
        </div>

        {/* Nuwara Eliya */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Nuwara Eliya – The Little England of Sri Lanka</h2>
          <p className="mb-4">
            With its cool climate, lush tea plantations, and colonial charm, Nuwara Eliya is one of the most romantic destinations in Sri Lanka.
          </p>
          <h3 className="font-semibold mb-2">Romantic Things to Do in Nuwara Eliya:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Take a boat ride on Gregory Lake and enjoy the picturesque scenery.</li>
            <li>Visit Lover’s Leap Waterfall for a romantic walk.</li>
            <li>Tour a tea estate and enjoy a tea-tasting session together.</li>
            <li>Stay at a charming colonial-style hotel for a fairy-tale experience.</li>
          </ul>
          <p><strong>Best time to visit:</strong> February to April (flower season).</p>
        </div>

        {/* Mirissa */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Mirissa – The Perfect Beachside Retreat</h2>
          <p className="mb-4">
            Mirissa is a top beach destination for couples, offering golden sandy beaches, crystal-clear waters, and a laid-back atmosphere.
          </p>
          <h3 className="font-semibold mb-2">Romantic Things to Do in Mirissa:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Watch the sunset from Coconut Tree Hill, a dreamy Instagram-worthy spot.</li>
            <li>Take a private catamaran cruise and enjoy the ocean breeze.</li>
            <li>Go on a whale watching tour together.</li>
            <li>Stay at a beachfront resort and wake up to the sound of the waves.</li>
          </ul>
          <p><strong>Best time to visit:</strong> November to April (best beach weather).</p>
        </div>

        {/* Sigiriya */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Sigiriya – The Ultimate Cultural & Nature Escape</h2>
          <p className="mb-4">
            If you and your partner love history and adventure, Sigiriya is a must-visit romantic destination in Sri Lanka.
          </p>
          <h3 className="font-semibold mb-2">Romantic Things to Do in Sigiriya:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Climb Sigiriya Rock Fortress, one of Sri Lanka’s most famous UNESCO sites.</li>
            <li>Visit Pidurangala Rock for stunning panoramic views.</li>
            <li>Explore ancient cave temples and immerse in history.</li>
            <li>Stay at a luxury eco-resort surrounded by nature.</li>
          </ul>
          <p><strong>Best time to visit:</strong> January to March (less crowded and dry season).</p>
        </div>

        {/* Bentota */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. Bentota – The Luxury Beach Honeymoon Spot</h2>
          <p className="mb-4">
            Bentota is one of the best places for honeymooners in Sri Lanka, offering luxury resorts, golden beaches, and peaceful river cruises.
          </p>
          <h3 className="font-semibold mb-2">Romantic Things to Do in Bentota:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Take a romantic boat safari on the Madu River.</li>
            <li>Relax at a private beach resort with world-class spa treatments.</li>
            <li>Enjoy water sports like jet skiing or parasailing together.</li>
            <li>Visit Brief Garden, a secret tropical paradise.</li>
          </ul>
          <p><strong>Best time to visit:</strong> November to April.</p>
        </div>

        {/* Galle */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">6. Galle – The Timeless Colonial Love Story</h2>
          <p className="mb-4">
            Galle is a charming and romantic city, perfect for couples who love history, culture, and seaside walks.
          </p>
          <h3 className="font-semibold mb-2">Romantic Things to Do in Galle:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Walk hand-in-hand along Galle Fort, a UNESCO Heritage Site.</li>
            <li>Watch the sunset from Galle Lighthouse.</li>
            <li>Dine at a cozy candlelit restaurant with ocean views.</li>
            <li>Stay at a boutique hotel inside the historic fort.</li>
          </ul>
          <p><strong>Best time to visit:</strong> December to April.</p>
        </div>

       {/* Trincomalee */}
       <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">7. Trincomalee – The Hidden Romantic Gem</h2>
          <p className="mb-4">
            For couples who love secluded beaches and crystal-clear waters, Trincomalee is the perfect romantic escape.
          </p>
          <h3 className="font-semibold mb-2">Romantic Things to Do in Trincomalee:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Visit Nilaveli Beach for a peaceful and private sunbathing experience.</li>
            <li>Take a boat trip to Pigeon Island for snorkeling together.</li>
            <li>Explore Koneswaram Temple, a romantic clifftop temple with stunning views.</li>
            <li>Enjoy fresh seafood at a beachfront restaurant.</li>
          </ul>
          <p><strong>Best time to visit:</strong> May to September (east coast beach season).</p>
        </div>

        {/* Kandy */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">8. Kandy – The Romantic Cultural Heart of Sri Lanka</h2>
          <p className="mb-4">
            Kandy is a romantic city filled with history, culture, and beautiful landscapes.
          </p>
          <h3 className="font-semibold mb-2">Romantic Things to Do in Kandy:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Take a stroll around Kandy Lake at sunset.</li>
            <li>Visit the Temple of the Tooth and experience Sri Lankan heritage.</li>
            <li>Enjoy a scenic drive through the Knuckles Mountain Range.</li>
            <li>Stay at a luxury resort with breathtaking mountain views.</li>
          </ul>
          <p><strong>Best time to visit:</strong> December to April.</p>
        </div>

        {/* Arugam Bay */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">9. Arugam Bay – For the Adventurous Couple</h2>
          <p className="mb-4">
            If you and your partner love surfing, adventure, and an off-the-beaten-path experience, Arugam Bay is a fantastic destination.
          </p>
          <h3 className="font-semibold mb-2">Romantic Things to Do in Arugam Bay:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Try surfing together or watch surfers ride the waves.</li>
            <li>Have a beachfront candlelight dinner under the stars.</li>
            <li>Visit Elephant Rock for a scenic climb and a romantic picnic.</li>
            <li>Explore nearby nature reserves like Kumana National Park.</li>
          </ul>
          <p><strong>Best time to visit:</strong> May to September.</p>
        </div>

        {/* Yala National Park */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">10. Yala National Park – A Romantic Safari Adventure</h2>
          <p className="mb-4">
            For couples who love wildlife and nature, Yala National Park offers an unforgettable safari experience.
          </p>
          <h3 className="font-semibold mb-2">Romantic Things to Do in Yala:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Go on a private safari tour to spot leopards and elephants.</li>
            <li>Stay at a luxury jungle resort with a private plunge pool.</li>
            <li>Enjoy a romantic dinner under the stars in the wild.</li>
            <li>Take breathtaking photos together with the park’s wildlife.</li>
          </ul>
          <p><strong>Best time to visit:</strong> February to July (best for wildlife sightings).</p>
        </div>

        {/* Conclusion */}
        <div className="text-center mt-12">
          <p className="text-lg font-semibold mb-4">Final Thoughts</p>
          <p className="mb-4">
            Whether you’re planning a honeymoon, anniversary trip, or just a romantic getaway, Sri Lanka has something for every couple. From serene beaches to misty mountains and cultural wonders, your romantic adventure awaits.
          </p>
          <p className="font-semibold">💙 Ready to plan your dream trip? Let WTI make it unforgettable!</p>
        </div>
        
      </section>

<Footer/>
</div>
  );
};

export default Article3;
