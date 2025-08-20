import React from 'react';
import { BiTrendingUp, BiGroup, BiTargetLock } from 'react-icons/bi';

const LeadershipAchievements = () => {
  const achievements = [
    {
      icon: BiTrendingUp,
      title: "Driving Retail Growth",
      description: "Led Sai Silks (Kalamandir) Limited into new regions, scaling multiple brands while preserving quality, trust, and customer loyalty."
    },
    {
      icon: BiTargetLock,
      title: "Transforming Performance",
      description: "Revitalised underperforming business divisions through strategic restructuring, restoring profitability and operational efficiency."
    },
    {
      icon: BiGroup,
      title: "Building Leadership Teams",
      description: "Developed and mentored high-performance teams that take ownership, deliver results, and sustain long-term growth."
    }
  ];

  return (
    <section id="leadership-achievements" className="py-8 lg:py-24 relative overflow-hidden" style={{ 
      backgroundColor: '#ffe5d4'
    }}>

      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-16">
                      <h2 className="text-4xl lg:text-5xl font-bold mb-3 lg:mb-6 drop-shadow-lg" style={{ fontFamily: 'Didot HTF L24 Light', letterSpacing: '0.05em', fontWeight: '700', color: '#9b3534' }}>
            Turning Vision into Measurable Success
          </h2>
          <p className="text-xl max-w-3xl mx-auto drop-shadow-md" style={{ fontFamily: 'Poppins', fontWeight: '400', color: '#9b3534' }}>
            From expanding markets to transforming operations, every achievement reflects strategic thinking and a commitment to excellence.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
                             <div 
                 key={index}
                                 className="group rounded-2xl shadow-xl border border-yellow-200 p-6 lg:p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-up relative overflow-hidden"
                style={{ backgroundColor: '#ce6f69', animationDelay: `${index * 0.2}s` }}
               >
                 {/* Icon */}
                 <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg" style={{ backgroundColor: 'rgba(155, 53, 52, 0.85)' }}>
                   <IconComponent className="w-8 h-8 lg:w-10 lg:h-10" style={{ color: '#ffe5d4' }} />
                 </div>
                 
                 {/* Title */}
                 <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4" style={{ fontFamily: 'FocusGrotesk, sans-serif', color: '#ffe5d4' }}>
                   {achievement.title}
                 </h3>
                
                {/* Description */}
                <p className="leading-relaxed" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal', color: '#ffe5d4' }}>
                  {achievement.description}
                </p>

                {/* Decorative Corner Element */}
                <div className="absolute top-0 right-0 w-8 h-8 opacity-20 rounded-bl-2xl" style={{ backgroundColor: 'rgba(155, 53, 52, 0.85)' }}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LeadershipAchievements;
