import React from 'react';
import { Award, Film, Newspaper } from 'lucide-react';

const Media = () => {
  const recognitions = [
    { name: 'CBFC', icon: Film },
    { name: 'Handloom Board of India', icon: Award },
    { name: 'Business Today', icon: Newspaper },
    { name: 'Economic Times', icon: Newspaper },
    { name: 'Retail Industry Awards', icon: Award },
  ];

  return (
    <section id="recognition" className="py-20 bg-navy">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-cream mb-6 font-serif">
            Recognised for My Work
          </h2>
          <p className="text-xl text-cream/80">
            Proud to be appointed to national and state boards, and featured in media for contributions to retail and cultural preservation.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {recognitions.map((recognition, index) => {
            const IconComponent = recognition.icon;
            return (
              <div 
                key={index}
                className="group text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-navy-light/50 p-8 rounded-lg border border-gold/20 hover:border-gold/40 hover:bg-navy-light/70 transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors">
                    <IconComponent className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-cream font-semibold group-hover:text-gold transition-colors">
                    {recognition.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Media;