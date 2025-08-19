import React from 'react';
import { BiBookOpen, BiPalette, BiHeart, BiTrendingUp } from 'react-icons/bi';

const CSRImpact = () => {
  const impactStats = [
    {
      icon: BiBookOpen,
      number: "10,000+",
      label: "Students",
      description: "Given access to education and learning resources",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: BiPalette,
      number: "500+",
      label: "Artisans",
      description: "Trained and supported to sustain their livelihoods",
      color: "from-green-500 to-green-600"
    },
    {
      icon: BiHeart,
      number: "50+",
      label: "Programs",
      description: "Community development programs successfully completed",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="csr-impact" className="py-8 lg:py-24 relative overflow-hidden" style={{ 
      backgroundImage: 'url(/images/herobg.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-yellow-400/40 rounded-full opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-yellow-400/30 rounded-full opacity-25"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-4 lg:mb-16">
                      <h2 className="text-2xl lg:text-5xl font-bold text-white mb-2 lg:mb-8 drop-shadow-lg" style={{ fontFamily: 'Komrile Condensed, serif', letterSpacing: '0.05em' }}>
            <span className="block">Creating Lasting Change Through</span>
            <span className="block">Kalamandir Foundation</span>
          </h2>
          <p className="text-xl text-yellow-100 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>
            Through the Kalamandir Foundation, Annam Kalyan Srinivas champions initiatives that go beyond business, focusing on education, women's empowerment and the revival of India's artisan traditions. The foundation works closely with communities to create opportunities, preserve cultural heritage and build a stronger, more inclusive future.
          </p>
        </div>



        {/* Impact Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {impactStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-yellow-200 p-3 lg:p-6 hover:bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mb-2 lg:mb-4 mx-auto group-hover:scale-110 transition-all duration-500 shadow-lg" style={{ backgroundColor: '#1E2531' }}>
                  <IconComponent className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                
                {/* Number */}
                <div className="text-center mb-1 lg:mb-3">
                  <div className="text-xl lg:text-4xl font-bold text-gray-800 mb-0 lg:mb-1" style={{ fontFamily: 'FocusGrotesk, sans-serif' }}>
                    {stat.number}
                  </div>
                  <div className="text-sm lg:text-lg font-semibold text-yellow-700 mb-1 lg:mb-2" style={{ fontFamily: 'FocusGrotesk, sans-serif' }}>
                    {stat.label}
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-700 text-center leading-relaxed" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>
                  {stat.description}
                </p>

                {/* Decorative Corner Element */}
                <div className="absolute top-0 right-0 w-8 h-8 opacity-20 rounded-bl-2xl" style={{ backgroundColor: '#1E2531' }}></div>
              </div>
            );
          })}
        </div>

        {/* Foundation Mission Statement */}
        <div className="mt-6 lg:mt-12 text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-3 lg:p-6 border border-yellow-200 shadow-lg max-w-4xl mx-auto">
                          <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center mx-auto mb-2 lg:mb-4" style={{ backgroundColor: '#1E2531' }}>
              <BiTrendingUp className="w-5 h-5 lg:w-7 lg:h-7 text-white" />
            </div>
            <h3 className="text-base lg:text-xl font-bold text-gray-800 mb-1 lg:mb-3" style={{ fontFamily: 'FocusGrotesk, sans-serif' }}>
              Building a Stronger, More Inclusive Future
            </h3>
            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>
              The Kalamandir Foundation continues to expand its reach, creating sustainable impact through education, empowerment, and cultural preservation initiatives that benefit communities across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CSRImpact;
