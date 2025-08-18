import React from 'react';

const PersonalInsights = () => {
  const quotes = [
    "People are the foundation of every great business.",
    "Growth means nothing if it's not sustainable.",
    "Teams that trust each other can achieve the impossible.",
    "Success is measured not only in numbers, but in the lives we impact."
  ];

  return (
    <section id="personal-insights" className="py-8 lg:py-24 relative overflow-hidden" style={{ backgroundColor: '#465826' }}>
      {/* Background Image Overlay */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: 'url("/images/bg-2.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: '0.3'
      }}></div>
      {/* Background Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-4 lg:mb-8 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2 lg:mb-4 drop-shadow-lg" style={{ fontFamily: 'NautilusPompilius, serif' }}>
            In His Own Words
          </h2>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>
            Leadership is shaped by values, experiences, and lessons learned along the way. Here are thoughts that reflect the mindset behind every decision and milestone.
          </p>
        </div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {quotes.map((quote, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg border border-yellow-200 p-4 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote Icon */}
                              <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md" style={{ backgroundColor: '#1E2531' }}>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              {/* Quote Text */}
              <blockquote className="text-sm text-gray-800 leading-relaxed italic mb-3" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>
                "{quote}"
              </blockquote>
              
              {/* Decorative Element */}
                              <div className="absolute bottom-2 right-2 w-4 h-4 opacity-20 rounded-full" style={{ backgroundColor: '#1E2531' }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalInsights;
