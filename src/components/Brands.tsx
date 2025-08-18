import React from 'react';
import { BiStore, BiBuilding, BiShoppingBag, BiTrendingUp } from 'react-icons/bi';

const Brands = () => {
  const brands = [
    {
      name: 'Kalamandir',
      description: 'Heritage silk showroom',
      category: 'Traditional',
      icon: BiStore
    },
    {
      name: 'Varamahalakshmi Silks',
      description: 'Premium silk collections',
      category: 'Heritage',
      icon: BiBuilding
    },
    {
      name: 'Mandir',
      description: 'Traditional wear',
      category: 'Cultural',
      icon: BiShoppingBag
    },
    {
      name: 'KLM Fashion Mall',
      description: 'Modern fashion retail',
      category: 'Contemporary',
      icon: BiTrendingUp
    }
  ];

  return (
    <section id="brands" className="py-20 bg-gradient-to-b from-yellow-50 to-yellow-100">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 font-serif">
            The Brands I Lead
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            From traditional silk showrooms to modern fashion retail, each brand under SSKL reflects a commitment to quality, authenticity, and customer trust.
          </p>
        </div>
        
        {/* Brands Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {/* First set of brands */}
            {brands.map((brand, index) => {
              const IconComponent = brand.icon;
              return (
                <div 
                  key={`first-${index}`}
                  className="text-center flex-shrink-0 mx-8 min-w-[300px]"
                >
                  {/* Brand Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <IconComponent className="w-8 h-8 text-gray-900" />
                  </div>
                  
                  {/* Brand Name */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 font-serif">
                    {brand.name}
                  </h3>
                  
                  {/* Brand Description */}
                  <p className="text-gray-700 text-lg mb-3">
                    {brand.description}
                  </p>
                  
                  {/* Category Badge */}
                  <span className="inline-block px-4 py-2 bg-yellow-100 text-gray-700 text-sm font-medium rounded-full border border-yellow-200">
                    {brand.category}
                  </span>
                </div>
              );
            })}
            
            {/* Duplicate set for seamless loop */}
            {brands.map((brand, index) => {
              const IconComponent = brand.icon;
              return (
                <div 
                  key={`second-${index}`}
                  className="text-center flex-shrink-0 mx-8 min-w-[300px]"
                >
                  {/* Brand Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <IconComponent className="w-8 h-8 text-gray-900" />
                  </div>
                  
                  {/* Brand Name */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 font-serif">
                    {brand.name}
                  </h3>
                  
                  {/* Brand Description */}
                  <p className="text-gray-700 text-lg mb-3">
                    {brand.description}
                  </p>
                  
                  {/* Category Badge */}
                  <span className="inline-block px-4 py-2 bg-yellow-100 text-gray-700 text-sm font-medium rounded-full border border-yellow-200">
                    {brand.category}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;