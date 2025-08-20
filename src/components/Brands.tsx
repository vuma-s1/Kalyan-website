import React from 'react';
import { BiStore, BiBuilding, BiShoppingBag, BiTrendingUp } from 'react-icons/bi';

const Brands = () => {
  const brands = [
    {
      name: 'Kalamandir',
      logo: '/images/logo-1.png'
    },
    {
      name: 'Mandir',
      logo: '/images/logo-2.png'
    },
    {
      name: 'KLM Fashion Mall',
      logo: '/images/logo-3.png'
    },
    {
      name: 'Vara Mahalakshmi',
      logo: '/images/logo-4.png'
    }
  ];

  return (
    <section id="brands" className="py-6 relative overflow-hidden" style={{ 
      backgroundColor: '#ffe5d4'
    }}>

      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3 drop-shadow-lg" style={{ fontFamily: 'Didot HTF L24 Light', fontWeight: '700', color: '#9b3534' }}>
            The Brands I Lead
          </h2>
          <p className="text-xl max-w-2xl mx-auto drop-shadow-md" style={{ fontFamily: 'Poppins', fontWeight: '400', color: '#9b3534' }}>
            From traditional silk showrooms to modern fashion retail, each brand under SSKL reflects a commitment to quality, authenticity, and customer trust.
          </p>
        </div>
        
        {/* Brands Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {/* First set of brands */}
            {brands.map((brand, index) => (
              <div 
                key={`first-${index}`}
                className="text-center flex-shrink-0 mx-4 lg:mx-8 min-w-[200px] sm:min-w-[250px] lg:min-w-[300px] group hover:scale-105 transition-all duration-300"
              >
                {/* Brand Logo */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto mb-3 flex items-center justify-center">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                  
                {/* Brand Name */}
                <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 drop-shadow-md" style={{ fontFamily: 'FocusGrotesk, sans-serif', color: '#9b3534' }}>
                  {brand.name}
                </h3>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {brands.map((brand, index) => (
              <div 
                key={`second-${index}`}
                className="text-center flex-shrink-0 mx-4 lg:mx-8 min-w-[200px] sm:min-w-[250px] lg:min-w-[300px] group hover:scale-105 transition-all duration-300"
              >
                {/* Brand Logo */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto mb-3 flex items-center justify-center">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                  
                {/* Brand Name */}
                <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 drop-shadow-md" style={{ fontFamily: 'FocusGrotesk, sans-serif', color: '#9b3534' }}>
                  {brand.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;