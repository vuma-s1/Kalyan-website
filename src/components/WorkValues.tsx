import React from 'react';
import { BiHeart, BiTargetLock, BiTrendingUp } from 'react-icons/bi';

const WorkValues = () => {
  const values = [
    {
      icon: BiHeart,
      title: "Integrity",
      description: "Every decision is grounded in honesty, transparency and doing what is right for the business, its people and the community."
    },
    {
      icon: BiTargetLock,
      title: "People First",
      description: "Teams are the foundation of every achievement. Investing in their growth and well-being creates the environment where success can thrive."
    },
    {
      icon: BiTrendingUp,
      title: "Sustainable Growth",
      description: "True progress means building for the long term, balancing commercial success with responsibility to the next generation."
    }
  ];

  return (
    <section id="work-values" className="py-8 lg:py-24 relative overflow-hidden" style={{ backgroundColor: '#fbe9b7' }}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/30 to-orange-100/20"></div>
      <div className="absolute top-20 left-20 w-32 h-32 border border-yellow-400/40 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 border border-yellow-400/30 rounded-full opacity-25"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-4 lg:mb-8 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2 lg:mb-4 drop-shadow-sm" style={{ fontFamily: 'NautilusPompilius, serif' }}>
            Principles That Guide My Work
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-xl border border-yellow-200 p-6 lg:p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-up relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg" style={{ backgroundColor: '#1E2531' }}>
                  <IconComponent className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 lg:mb-4" style={{ fontFamily: 'FocusGrotesk, sans-serif' }}>
                  {value.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-700 leading-relaxed text-sm lg:text-base" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>
                  {value.description}
                </p>

                {/* Decorative Corner Element */}
                <div className="absolute top-0 right-0 w-8 h-8 opacity-20 rounded-bl-2xl" style={{ backgroundColor: '#1E2531' }}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkValues;
