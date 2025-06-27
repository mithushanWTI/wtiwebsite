import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Article4 = () => {
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
          <h1 className="text-2xl md:text-4xl font-bold mt-2">10 Hidden Beaches in Sri Lanka You Probably Haven’t Heard Of – A WTI Holidays Guide 🏖️</h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="p-6 max-w-5xl mx-auto">
        <div>
          <p className="text-justify">
            When you think of Sri Lanka’s beaches, places like Unawatuna, Mirissa, and Arugam Bay likely come to mind. But beyond these famous stretches of sand lies a collection of untouched, lesser-known beaches that offer peace, natural beauty, and authentic island charm, all waiting to be discovered. 🌊
          </p><br/>
          <p className="text-justify">
            At WTI Holidays, we specialize in showing you the side of Sri Lanka the guidebooks don’t. If you're dreaming of secluded shores, unspoiled waters, and genuine local experiences, here are 10 hidden beaches in Sri Lanka you probably haven’t heard of - but absolutely should visit. 🏝️
          </p><br/>
        </div>

        {/* Kudawa Beach */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Kudawa Beach – Kalpitiya 🌴</h2>
          <p className="mb-4 text-justify">
            Tucked away in the northwestern coast, Kudawa is a quiet beach near Kalpitiya known for <b>dolphin watching and kite surfing.</b> With fewer tourists and open coastal stretches, it’s perfect for a peaceful morning walk or sunset escape. 🐬
          </p>
          <img src="/assets/beaches/kudawa.jpg" alt="Kudawa Beach" className="w-full max-w-3xl h-64 md:h-80 object-cover object-center rounded-lg shadow-md mb-4 mx-auto block transition-transform duration-300 hover:scale-105" />
          <hr className="my-4 text-red-500" />
        </div>

        {/* Kalkudah Beach */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Kalkudah Beach – East Coast 🏖️</h2>
          <p className="mb-4 text-justify">
            While Passikudah gets the attention, its quieter neighbor Kalkudah offers the same crystal-clear waters and shallow bays with far fewer crowds. Ideal for families, couples, or solo travelers looking for stillness. 🌊
          </p>
          <img src="/assets/beaches/kalkudah.webp" alt="Kalkudah Beach" className="w-full max-w-3xl h-64 md:h-80 object-cover object-center rounded-lg shadow-md mb-4 mx-auto block transition-transform duration-300 hover:scale-105" />
          <hr className="my-4 text-red-500" />
        </div>

        {/* Silent Beach */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Silent Beach – Near Tangalle 🌴</h2>
          <p className="mb-4 text-justify">
            As the name suggests, this hidden paradise just outside Tangalle is tranquil, remote, and completely untouched. Framed by palms and rock pools, Silent Beach is ideal for those looking to disconnect completely. 🧘
          </p>
          <img src="/assets/beaches/silent.webp" alt="Silent Beach" className="w-full max-w-3xl h-64 md:h-80 object-cover object-center rounded-lg shadow-md mb-4 mx-auto block transition-transform duration-300 hover:scale-105" />
          <hr className="my-4 text-red-500" />
        </div>

        {/* Okanda Beach */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Okanda Beach – Ampara 🏝️</h2>
          <p className="mb-4 text-justify">
            Located near the Kumana National Park, this remote beach is both sacred and scenic. While it's known among Hindu pilgrims, few tourists make the journey. It offers wild, rugged beauty and a sense of spiritual calm. 🙏
          </p>
          <img src="/assets/beaches/okanda.jpg" alt="Okanda Beach" className="w-full max-w-3xl h-64 md:h-80 object-cover object-center rounded-lg shadow-md mb-4 mx-auto block transition-transform duration-300 hover:scale-105" />
          <hr className="my-4 text-red-500" />
        </div>

        {/* Bathigama Beach */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. Bathigama Beach – Dikwella 🌊</h2>
          <p className="mb-4 text-justify">
            Close to the surfing town of Hiriketiya, Bathigama is still under the radar. It’s the perfect spot for early morning yoga, fishing boat photography, or simply enjoying a local tea with your toes in the sand. 📸
          </p>
          <img src="/assets/beaches/batheegama.jpg" alt="Bathigama Beach" className="w-full max-w-3xl h-64 md:h-80 object-cover object-center rounded-lg shadow-md mb-4 mx-auto block transition-transform duration-300 hover:scale-105" />
          <hr className="my-4 text-red-500" />
        </div>

        {/* Alankuda Beach */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">6. Alankuda Beach – Kalpitiya Peninsula 🏖️</h2>
          <p className="mb-4 text-justify">
            An emerging eco-tourism hotspot, Alankuda is a golden-sand beach with a peaceful atmosphere and boutique eco-resorts. Great for kayaking, snorkeling, or spotting dolphins during certain seasons. 🛶
          </p>
          <img src="/assets/beaches/alankuda.jpg" alt="Alankuda Beach" className="w-full max-w-3xl h-64 md:h-80 object-cover object-center rounded-lg shadow-md mb-4 mx-auto block transition-transform duration-300 hover:scale-105" />
          <hr className="my-4 text-red-500" />
        </div>

        {/* Kumana Beach */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">7. Kumana Beach – Near Arugam Bay 🌴</h2>
          <p className="mb-4 text-justify">
            If you’re an adventurer at heart, Kumana Beach is for you. Reachable through dirt roads past jungle and lagoons, it’s ideal for wildlife lovers who want a beach day after a morning safari. 🦒
          </p>
          <img src="/assets/beaches/kumana.jpg" alt="Kumana Beach" className="w-full max-w-3xl h-64 md:h-80 object-cover object-center rounded-lg shadow-md mb-4 mx-auto block transition-transform duration-300 hover:scale-105" />
          <hr className="my-4 text-red-500" />
        </div>

        {/* Nilwella Beach */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">8. Nilwella Beach – Southern Province 🏝️</h2>
          <p className="mb-4 text-justify">
            A tiny beach village nestled between Matara and Tangalle, Nilwella is where you’ll find fishing boats, swaying palms, and zero tourist noise. A great stop if you’re road-tripping the southern coast. 🚤
          </p>
          <img src="/assets/beaches/nilwella.avif" alt="Nilwella Beach" className="w-full max-w-3xl h-64 md:h-80 object-cover object-center rounded-lg shadow-md mb-4 mx-auto block transition-transform duration-300 hover:scale-105" />
          <hr className="my-4 text-red-500" />
        </div>

        {/* Casuarina Beach */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">9. Casuarina Beach – Jaffna 🌊</h2>
          <p className="mb-4 text-justify">
            Northern Sri Lanka’s cleanest and most swimmable beach, Casuarina is a calm, white-sand stretch with shallow waters — perfect for a day trip from Jaffna town. It’s a different vibe from the south — quiet, spiritual, and serene. 🕊️
          </p>
          <img src="/assets/beaches/casuarina.jpg" alt="Casuarina Beach" className="w-full max-w-3xl h-64 md:h-80 object-cover object-center rounded-lg shadow-md mb-4 mx-auto block transition-transform duration-300 hover:scale-105" />
          <hr className="my-4 text-red-500" />
        </div>

        {/* Mawella Beach */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">10. Mawella Beach – Near Tangalle 🏖️</h2>
          <p className="mb-4 text-justify">
            Just a few kilometers from the famous Tangalle Beach lies Mawella, a long crescent-shaped beach with only a handful of guesthouses. You’ll find fishermen at dawn, calm waves, and an overwhelming sense of peace. 🎣
          </p>
          <img src="/assets/beaches/mawella.jpg" alt="Mawella Beach" className="w-full max-w-3xl h-64 md:h-80 object-cover object-center rounded-lg shadow-md mb-4 mx-auto block transition-transform duration-300 hover:scale-105" />
          <hr className="my-4 text-red-500" />
        </div>

        {/* Conclusion */}
        <div className="text-center mt-12">
          <div className="mt-6">
            <p className="text-lg font-semibold mb-4">✨ Experience These Hidden Beaches with WTI Holidays 🏝️</p>
            <p className="mb-4 text-justify">
              At WTI Holidays, we go beyond the ordinary. Whether you’re a beach lover, nature enthusiast, or simply craving silence by the sea, we’ll craft a tailor-made itinerary that includes these hidden gems — along with hand-picked hotels, guided experiences, private transfers, and 24/7 local support. 🌴
            </p>
            <p className="mb-4">
              Want to discover the side of Sri Lanka few get to see? 🌊
            </p>
            <p className="font-semibold">📞 Talk to our team today and let WTI Holidays take you off the beaten path — straight into paradise! 🏖️</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Article4;