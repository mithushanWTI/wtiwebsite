import dubai from '../assets/dubai.jpg';
import srilanka from '../assets/sigiriya.webp';
import seychelles from '../assets/seychelles.jpg';
import bangkok from '../assets/bangkok.webp';
import thailand from '../assets/thailand.jpg';
import dubai2 from '../assets/dubai2.png';

export default function TopDestinations() {
    const destinations = [
        { name: "DUBAI", image: dubai2, places: "5 Places" },
        { name: "SRILANKA", image: srilanka, places: "5 Places" },
        { name: "THAILAND", image: bangkok, places: "5 Places" },
        { name: "SEYCHELLES", image: seychelles, places: "5 Places" },
        { name: "BANGKOK", image: thailand, places: "5 Places" },
        { name: "DUBAI", image: dubai, places: "5 Places" },
    ];

    return (
        <section className="py-12 px-4 md:px-20">
            {/* Title */}
            <div className="text-left mb-8">
                <h2 className="text-3xl font-bold">
                    Explore <span className="text-red-500">Top</span> Destination
                </h2>
                <p className="text-gray-500 italic">
                    "Explore Top Destinations Handpicked For You!"
                </p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {destinations.map((destination, index) => (
                    <div
                        key={index}
                        className={`relative group h-60 w-full transition duration-300 rounded-lg
                            ${index % 3 === 0 ? "xl:col-span-2 xl:row-span-1" : "xl:col-span-1"}
                        `}
                    >
                        {/* Background Image */}
                        <img
                            src={destination.image}
                            alt={destination.name}
                            className="w-full h-full object-cover rounded-lg"
                        />

                        {/* Overlay (hidden by default, appears on hover) */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg"></div>

                        {/* Text Content */}
                        <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                            {destination.name}
                            <p className="text-sm opacity-0 group-hover:opacity-100 transition duration-300">
                                {destination.places}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
