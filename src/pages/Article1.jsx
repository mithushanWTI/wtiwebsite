import { useParams } from "react-router-dom";
import Header from "../components/Header";
import heroImage from '/assets/thailand.jpg';
import Footer from "../components/Footer";

const Article1 = () => {
  

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
    
    <h1 className="text-2xl md:text-4xl font-bold mt-2">Top 10 Must-Visit Destinations from Sri Lanka This Year</h1>
  </div>
</section>

 {/* Article Content */}
 <section className="p-6 max-w-5xl mx-auto ">

{/* Intro Text */}
<p className="text-lg mb-6">
  Sri Lankan travelers are known for their love of exploring new places, from bustling
  metropolises to serene getaways. Whether you're looking for adventure, culture, shopping, or
  relaxation, there are plenty of exciting destinations to explore in 2025. Here are the top 10
  must-visit destinations from Sri Lanka this year!
</p>

{/* Destination 1 - Dubai */}
<div className="mb-8">
  <h2 className="text-xl font-semibold mb-4">1. Dubai, UAE – The Ultimate City of Luxury & Adventure</h2>
  <p className="mb-4">
    Dubai remains one of the most popular destinations for Sri Lankan travelers due to its visa-on-arrival
    facility, world-class attractions, and duty-free shopping.
  </p>
  <p className="mb-4">
    <strong>Top attractions:</strong>
  </p>
  <ul className="list-disc pl-6 mb-4">
    <li>✔ Burj Khalifa – The tallest building in the world with breathtaking views.</li>
    <li>✔ Dubai Mall – Shop, dine, and visit the Dubai Aquarium.</li>
    <li>✔ Desert Safari – Experience thrilling dune bashing and camel rides.</li>
    <li>✔ Dubai Frame – Stunning architecture offering views of old and new Dubai.</li>
  </ul>
  <p className="mb-4"><strong>✈ Best time to visit:</strong> November to March (cooler weather).</p>
  <hr className="my-4 text-red-500" />
</div>

{/* Destination 2 - Kuala Lumpur */}
<div className="mb-8">
  <h2 className="text-xl font-semibold mb-4">2. Kuala Lumpur, Malaysia – A Blend of Modern & Cultural Wonders</h2>
  <p className="mb-4">
    Malaysia is a favorite for Sri Lankan travelers because of its affordable flights and easy visa process. Kuala Lumpur is a vibrant mix of modern skyscrapers, cultural landmarks, and delicious food.
  </p>
  <p className="mb-4">
    <strong>Top attractions:</strong>
  </p>
  <ul className="list-disc pl-6 mb-4">
    <li>✔ Petronas Towers – Iconic twin towers with an observation deck.</li>
    <li>✔ Batu Caves – A beautiful Hindu temple inside a limestone cave.</li>
    <li>✔ Bukit Bintang – KL’s top shopping and entertainment district.</li>
    <li>✔ Genting Highlands – A cool-weather escape with theme parks and casinos.</li>
  </ul>
  <p className="mb-4"><strong>✈ Best time to visit:</strong> May to September (dry season).</p>
  <hr className="my-4 text-red-500" />
</div>

{/* Destination 3 - Bangkok & Pattaya */}
<div className="mb-8">
  <h2 className="text-xl font-semibold mb-4">3. Bangkok & Pattaya, Thailand – A Perfect Shopping & Party Destination</h2>
  <p className="mb-4">
    Thailand is known for budget-friendly holidays, fantastic food, and exciting nightlife. A Bangkok-Pattaya combo trip is ideal for those looking to shop, explore temples, and relax on beaches.
  </p>
  <p className="mb-4">
    <strong>Top attractions:</strong>
  </p>
  <ul className="list-disc pl-6 mb-4">
    <li>✔ Floating Markets – Shop for local products while riding a boat.</li>
    <li>✔ Grand Palace – A must-visit cultural landmark.</li>
    <li>✔ Pattaya Beach – Enjoy water sports and nightlife.</li>
    <li>✔ Sanctuary of Truth – An amazing wooden temple.</li>
  </ul>
  <p className="mb-4"><strong>✈ Best time to visit:</strong> November to February (cooler and dry).</p>
  <hr className="my-4 text-red-500" />
</div>

{/* Destination 4 - Singapore */}
<div className="mb-8">
  <h2 className="text-xl font-semibold mb-4">4. Singapore – The Ultimate Family-Friendly Destination</h2>
  <p className="mb-4">
    Singapore is famous for its cleanliness, futuristic attractions, and vibrant culture. A perfect holiday destination for families, honeymooners, and even solo travelers.
  </p>
  <p className="mb-4">
    <strong>Top attractions:</strong>
  </p>
  <ul className="list-disc pl-6 mb-4">
    <li>✔ Marina Bay Sands – Iconic skyline and infinity pool.</li>
    <li>✔ Sentosa Island – Resorts, theme parks, and the S.E.A Aquarium.</li>
    <li>✔ Universal Studios – A must-visit theme park with thrilling rides.</li>
    <li>✔ Gardens by the Bay – Spectacular man-made gardens.</li>
  </ul>
  <p className="mb-4"><strong>✈ Best time to visit:</strong> Anytime! Singapore has a year-round tropical climate.</p>
  <hr className="my-4 text-red-500" />
</div>

{/* Destination 5 - London */}
<div className="mb-8">
  <h2 className="text-xl font-semibold mb-4">5. London, UK – A Timeless European Escape</h2>
  <p className="mb-4">
    If you’re looking for a long-haul getaway, London offers a mix of history, culture, shopping, and food. It’s a dream destination for many Sri Lankans.
  </p>
  <p className="mb-4">
    <strong>Top attractions:</strong>
  </p>
  <ul className="list-disc pl-6 mb-4">
    <li>✔ Buckingham Palace – Watch the Changing of the Guard ceremony.</li>
    <li>✔ London Eye – Get the best views of the city.</li>
    <li>✔ Oxford Street – A shopping paradise.</li>
    <li>✔ Tower of London – Discover British history.</li>
  </ul>
  <p className="mb-4"><strong>✈ Best time to visit:</strong> April to June or September to November.</p>
  <hr className="my-4 text-red-500" />
</div>

{/* Destination 6 - Maldives */}
<div className="mb-8">
  <h2 className="text-xl font-semibold mb-4">6. Maldives – The Ultimate Luxury Getaway</h2>
  <p className="mb-4">
    Just a one-hour flight from Sri Lanka, the Maldives is perfect for a quick beach escape. Whether you’re on a honeymoon or looking for relaxation, Maldives offers stunning resorts and crystal-clear waters.
  </p>
  <p className="mb-4">
    <strong>Top attractions:</strong>
  </p>
  <ul className="list-disc pl-6 mb-4">
    <li>✔ Overwater villas – Stay in a private villa with direct access to the sea.</li>
    <li>✔ Snorkeling & Diving – Explore rich marine life.</li>
    <li>✔ Local Islands – Experience Maldivian culture.</li>
  </ul>
  <p className="mb-4"><strong>✈ Best time to visit:</strong> November to April.</p>
  <hr className="my-4 text-red-500" />
</div>

{/* Destination 7 - India */}
<div className="mb-8">
  <h2 className="text-xl font-semibold mb-4">7. India – Explore Culture, Spirituality & Shopping</h2>
  <p className="mb-4">
    India is one of the top destinations for Sri Lankan travelers, whether for religious pilgrimages, shopping, or sightseeing.
  </p>
  <p className="mb-4">
    <strong>Top cities to visit:</strong>
  </p>
  <ul className="list-disc pl-6 mb-4">
    <li>✔ Chennai – Temple visits and shopping.</li>
    <li>✔ Delhi & Agra – Taj Mahal and historical forts.</li>
    <li>✔ Goa – Beautiful beaches and nightlife.</li>
  </ul>
  <p className="mb-4"><strong>✈ Best time to visit:</strong> October to March.</p>
  <hr className="my-4 text-red-500" />
</div>
        {/* Destination 8 - Paris */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">8. Paris, France – The City of Love & Fashion</h2>
          <p className="mb-4">
            For those looking to explore Europe, Paris is an unbeatable destination. Whether you're a honeymooner or a fashion lover, Paris is a dream destination.
          </p>
          <p className="mb-4">
            <strong>Top attractions:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>✔ Eiffel Tower – The most iconic landmark in the world.</li>
            <li>✔ Louvre Museum – Home to the Mona Lisa.</li>
            <li>✔ Champs-Élysées – The best shopping street in the world.</li>
          </ul>
          <p className="mb-4"><strong>✈ Best time to visit:</strong> April to June, September to November.</p>
          <hr className="my-4 text-red-500" />
        </div>

        {/* Destination 9 - Istanbul */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">9. Istanbul, Turkey – A Unique Blend of East & West</h2>
          <p className="mb-4">
            Turkey is rising in popularity due to its mix of culture, food, and stunning landscapes. Istanbul is an ideal city for history lovers and foodies.
          </p>
          <p className="mb-4">
            <strong>Top attractions:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>✔ Hagia Sophia – A historical masterpiece.</li>
            <li>✔ Grand Bazaar – One of the oldest markets in the world.</li>
            <li>✔ Bosphorus Cruise – Enjoy the beautiful skyline of Istanbul.</li>
          </ul>
          <p className="mb-4"><strong>✈ Best time to visit:</strong> April to May, September to October.</p>
          <hr className="my-4 text-red-500" />
        </div>

        {/* Destination 10 - Japan */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">10. Japan – A Futuristic & Cultural Adventure</h2>
          <p className="mb-4">
            Japan is a bucket-list destination for Sri Lankans who want to experience a mix of tradition and modern technology.
          </p>
          <p className="mb-4">
            <strong>Top attractions:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>✔ Tokyo – The capital with amazing tech and food.</li>
            <li>✔ Kyoto – Traditional temples and cherry blossoms.</li>
            <li>✔ Mount Fuji – Japan’s iconic mountain.</li>
          </ul>
          <p className="mb-4"><strong>✈ Best time to visit:</strong> March to May (Cherry Blossom season) or October to November.</p>
          <hr className="my-4 text-red-500" />
        </div>


{/* Conclusion */}
<div className="text-center mt-12">
<p className="mt-8 text-lg">
  Whether you’re looking for shopping, culture, adventure, or relaxation, these destinations have something for everyone. Ready to plan your next trip? WTI is here to make your journey seamless and stress-free!
</p>
</div>
</section>

<Footer/>
</div>
  );
};

export default Article1;
