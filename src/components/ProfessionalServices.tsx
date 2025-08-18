import React from 'react';
import { BiGroup, BiTargetLock, BiTrendingUp } from 'react-icons/bi';
import { AiFillTrophy } from 'react-icons/ai';

const ProfessionalServices = () => {
  const services = [
    {
      icon: BiGroup,
      title: "Strategic Consulting",
      description: "Expert guidance for retail transformation and market expansion strategies"
    },
    {
      icon: BiTargetLock,
      title: "Leadership Speaking",
      description: "Inspirational talks on retail leadership, heritage preservation, and business growth"
    },
    {
      icon: AiFillTrophy,
      title: "Board Advisory",
      description: "Strategic board-level advisory for retail and fashion industry organizations"
    },
    {
      icon: BiTrendingUp,
      title: "Team Development",
      description: "Building high-performance teams and fostering leadership culture"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-yellow-100 to-yellow-200 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-paisley-pattern opacity-5"></div>
      <div className="absolute top-10 left-10 w-24 h-24 border border-yellow-400/30 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border border-yellow-400/25 rounded-full opacity-15 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-4 mb-4">
            <div className="w-12 h-px bg-yellow-500"></div>
            <span className="text-yellow-600 text-sm font-medium tracking-wider uppercase font-traditional">Expertise Areas</span>
            <div className="w-12 h-px bg-yellow-500"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-serif">
            Professional Services
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Leveraging 15+ years of retail leadership experience to provide strategic guidance and transformative solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-yellow-300/50 hover:bg-white hover:shadow-xl transition-all duration-300 animate-fade-in-up text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 font-serif">{service.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalServices;
