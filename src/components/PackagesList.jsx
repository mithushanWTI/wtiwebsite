import React, { useState, useEffect } from 'react';
import packagesData from '../data/Packages.json';
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const PackagesList = ({ searchQuery, type, limit }) => {
  // Filter packages based on type (inbound or outbound)
  const filteredPackages = packagesData.filter(pkg => pkg.type === type);

  // Handle search functionality
  const [displayPackages, setDisplayPackages] = useState(filteredPackages);

  useEffect(() => {
    const result = filteredPackages.filter(pkg =>
      pkg.destination.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setDisplayPackages(result);
  }, [searchQuery, type]);

  // Slice the packages to limit the number displayed
  const limitedPackages = limit ? displayPackages.slice(0, limit) : displayPackages;

  return (
    <section className="py-12 px-4 md:px-25">
      {/* Title Section */}
      <div className="text-left mb-8">
        <h2 className="text-3xl font-bold">
          Popular <span className="text-red-500 capitalize">{type}</span> Packages
        </h2>
        <p className="text-gray-500 italic">
          "Explore Top Destinations Handpicked For You!"
        </p>
      </div>

      {/* Package Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {limitedPackages.map((pkg) => (
          <Link key={pkg.id} to={`/package/${pkg.id}`} className="bg-white shadow-lg rounded-lg overflow-hidden transition hover:shadow-xl">
            {/* Image Section */}
            <div className="relative overflow-hidden rounded-lg group">
              <img
                src={`${pkg.image}`} // Updated image path
                alt={pkg.name}
                className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
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
                      <span key={i} className="text-red-500 text-sm">★</span>
                    ))}
                </div>
              </div>

              {/* Location & Group Size */}
              <div className="flex justify-between">
                <p className="text-gray-500 text-sm flex items-center">
                  <MapPin size={14} className="text-red-500 mr-1" />
                  {pkg.destination}
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
    </section>
  );
};

export default PackagesList;
