import React from "react";
import packagesData from "../data/Packages.json";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function PopularOutboundPackages() {
  // Get only 4 outbound packages
  const outboundPackages = packagesData
    .filter(pkg => pkg.type === "outbound")
    .slice(0, 4);

  return (
    <section className="py-12 px-4 md:px-25 bg-gradient-to-b from-white via-red-100 to-white">
      {/* Title Section */}
      <div className="text-left mb-8">
        <h2 className="text-3xl font-bold">
          Popular <span className="text-red-500">Outbound</span> Packages
        </h2>
        <p className="text-gray-500 italic">
          "Explore Top Destinations Handpicked For You!"
        </p>
      </div>

      {/* Package Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {outboundPackages.map((pkg) => (
          <Link
            key={pkg.id}
            to={`/package/${pkg.id}`} // Navigate to PackageDetails page
            className="bg-white shadow-lg rounded-lg overflow-hidden transition hover:shadow-xl"
          >
            {/* Image Section */}
            <div className="relative overflow-hidden rounded-lg group">
              <img
                src={`${pkg.image}`} // Updated image path
                alt={pkg.name}
                className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                onError={(e) => (e.target.src = "/assets/default.jpg")} // Fallback image
              />
              {/* Duration Tag */}
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {pkg.duration}
              </span>
            </div>

            {/* Details Section */}
            <div className="p-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">{pkg.name}</h3>
                {/* Star Ratings */}
                <div className="flex items-center">
                  {Array(pkg.rating)
                    .fill()
                    .map((_, i) => (
                      <span key={i} className="text-red-500 text-m">★</span>
                    ))}
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500 text-sm flex items-center">
                  <MapPin size={14} className="text-red-500" /> {pkg.destination}
                </p>
                <p className="text-gray-500 text-xs">👤 {pkg.people} Person</p>
              </div>

              {/* Price & Button */}
              <div className="flex justify-between items-center mt-4">
                <button className="bg-red-500 text-white text-sm px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition">
                  BOOK NOW →
                </button>
                <div className="flex flex-col items-end">
                  <p className="text-gray-600 text-sm">Starting From</p>
                  <span className="text-red-500 font-bold">${pkg.price}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Packages Button */}
      <div className="flex justify-center mt-8">
        <Link to="/outbound">
          <button className="bg-black text-white text-sm px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition cursor-pointer">
            View All Packages →
          </button>
        </Link>
      </div>
    </section>
  );
}
