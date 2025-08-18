import React from 'react';
import { BiAward, BiTrophy, BiMedal } from 'react-icons/bi';

const MediaRecognition = () => {
  const recognitions = [
    {
      icon: BiAward,
      title: "Central Board of Film Certification",
      year: "2009",
      description: "Appointed as Member, contributing to India's film certification and cultural preservation."
    },
    {
      icon: BiTrophy,
      title: "Handloom Board of India",
      year: "2013",
      description: "Serving as Member to support and promote India's traditional handloom industry."
    },
    {
      icon: BiMedal,
      title: "Media Recognition",
      year: "Ongoing",
      description: "Featured in various media outlets for contributions to retail and cultural preservation."
    }
  ];

  return (
    <section id="media-recognition" className="py-8 lg:py-24 relative overflow-hidden" style={{ 
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
        <div className="text-center mb-4 lg:mb-8 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2 lg:mb-4 drop-shadow-lg" style={{ fontFamily: 'NautilusPompilius, serif' }}>
            Recognised for My Work
          </h2>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>
            Proud to be appointed to national and state boards, and featured in media for contributions to retail and cultural preservation.
          </p>
        </div>

        {/* Recognition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {recognitions.map((recognition, index) => {
            const IconComponent = recognition.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-xl border border-yellow-200 p-4 lg:p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-up relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg" style={{ backgroundColor: '#1E2531' }}>
                  <IconComponent className="w-7 h-7 lg:w-10 lg:h-10 text-white" />
                </div>
                
                {/* Year Badge */}
                <div className="inline-block px-2 py-1 lg:px-4 lg:py-2 text-white text-xs lg:text-sm font-bold rounded-full mb-2 lg:mb-4 shadow-md" style={{ backgroundColor: '#1E2531' }}>
                  {recognition.year}
                </div>
                
                {/* Title */}
                <h3 className="text-base lg:text-xl font-bold text-gray-800 mb-2 lg:mb-4" style={{ fontFamily: 'FocusGrotesk, sans-serif' }}>
                  {recognition.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-700 leading-relaxed text-xs lg:text-base" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>
                  {recognition.description}
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

export default MediaRecognition;
