import React from 'react';
import { BiStore, BiBuilding, BiShoppingBag, BiTrendingUp } from 'react-icons/bi';

const Brands = () => {
  const brands = [
    {
      name: 'Kalamandir',
      logo: '/images/logo-1.png'
    },
    {
      name: 'Varamahalakshmi Silks',
      logo: '/images/logo-2.png'
    },
    {
      name: 'Mandir',
      logo: '/images/logo-3.png'
    }
  ];

  return (
    <section id="brands" className="py-20 relative overflow-hidden" style={{ 
      backgroundImage: 'url("/images/bg-1.png"), url("/images/bg-1.png")',
      backgroundSize: 'contain, contain',
      backgroundPosition: 'left top, right top',
      backgroundRepeat: 'no-repeat, no-repeat'
    }}>
      {/* Background Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-3 drop-shadow-lg" style={{ fontFamily: 'FocusGrotesk, sans-serif' }}>
            The Brands I Lead
          </h2>
          <p className="text-xl text-yellow-100 max-w-2xl mx-auto drop-shadow-md" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>
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
                className="text-center flex-shrink-0 mx-8 min-w-[300px]"
              >
                {/* Brand Logo */}
                <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                  
                  {/* Brand Name */}
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md" style={{ fontFamily: 'FocusGrotesk, sans-serif' }}>
                    {brand.name}
                  </h3>
                </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {brands.map((brand, index) => (
              <div 
                key={`second-${index}`}
                className="text-center flex-shrink-0 mx-8 min-w-[300px]"
              >
                {/* Brand Logo */}
                <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                  
                  {/* Brand Name */}
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md" style={{ fontFamily: 'FocusGrotesk, sans-serif' }}>
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