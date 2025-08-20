import React from 'react';
import { BiBriefcase, BiHeart, BiAward, BiTrophy } from 'react-icons/bi';

const RolesInitiatives = () => {
  const roles = [
    {
      icon: BiBriefcase,
      title: "Whole-Time Director",
      organization: "Sai Silks (Kalamandir) Limited",
      description: "Leading strategy, growth, and operations.",
      year: "Present"
    },
    {
      icon: BiHeart,
      title: "Trustee",
      organization: "Kalamandir Foundation",
      description: "Driving education, culture, and community development projects.",
      year: "Present"
    },
    {
      icon: BiAward,
      title: "Member",
      organization: "Central Board of Film Certification",
      description: "Contributing to India's film certification and cultural preservation.",
      year: "2009"
    },
    {
      icon: BiTrophy,
      title: "Member",
      organization: "Handloom Board of India",
      description: "Supporting and promoting India's traditional handloom industry.",
      year: "2013"
    }
  ];

  return (
    <section id="roles-initiatives" className="py-8 lg:py-24 relative overflow-hidden" style={{ backgroundColor: '#ffe5d4' }}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-paisley-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-32 h-32 border border-yellow-400/30 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 border border-yellow-400/25 rounded-full opacity-15 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-4 lg:mb-16">
                      <h2 className="text-4xl lg:text-5xl font-bold mb-2 lg:mb-6 drop-shadow-lg" style={{ fontFamily: 'Didot HTF L24 Light', letterSpacing: '0.05em', fontWeight: '700', color: '#9b3534' }}>
            Commitment Beyond Business
          </h2>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {roles.map((role, index) => {
            const IconComponent = role.icon;
            return (
              <div 
                key={index}
                className="group backdrop-blur-sm rounded-2xl shadow-xl border border-yellow-200 p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-up relative overflow-hidden"
                style={{ backgroundColor: '#ce6f69', animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mb-3 lg:mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg" style={{ backgroundColor: 'rgba(155, 53, 52, 0.85)' }}>
                  <IconComponent className="w-6 h-6 lg:w-8 lg:h-8" style={{ color: '#ffe5d4' }} />
                </div>
                
                {/* Year Badge */}
                <div className="inline-block px-3 py-1 text-white text-sm font-bold rounded-full mb-2 lg:mb-4 shadow-md" style={{ backgroundColor: 'rgba(155, 53, 52, 0.85)' }}>
                  {role.year}
                </div>
                
                {/* Title */}
                <h3 className="text-lg lg:text-2xl font-bold mb-1 lg:mb-2" style={{ fontFamily: 'FocusGrotesk, sans-serif', color: '#ffe5d4' }}>
                  {role.title}
                </h3>
                
                {/* Organization */}
                <h4 className="text-sm lg:text-lg font-semibold mb-1 lg:mb-3" style={{ fontFamily: 'FocusGrotesk, sans-serif', color: '#ffe5d4' }}>
                  {role.organization}
                </h4>
                
                {/* Description */}
                <p className="leading-relaxed" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal', color: '#ffe5d4' }}>
                  {role.description}
                </p>

                {/* Decorative Corner Element */}
                <div className="absolute top-0 right-0 w-8 h-8 opacity-20 rounded-bl-2xl" style={{ backgroundColor: 'rgba(155, 53, 52, 0.85)' }}></div>
              </div>
            );
          })}
        </div>

        {/* Visual Section - CSR Activities */}
        <div className="text-center mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="backdrop-blur-sm rounded-xl p-6 border border-yellow-200 hover:shadow-xl transition-all duration-300" style={{ backgroundColor: '#ce6f69' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(155, 53, 52, 0.85)' }}>
                <BiHeart className="w-6 h-6" style={{ color: '#ffe5d4' }} />
              </div>
              <h4 className="text-lg font-bold mb-2" style={{ fontFamily: 'FocusGrotesk, sans-serif', color: '#ffe5d4' }}>CSR Activities</h4>
              <p className="text-sm" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal', color: '#ffe5d4' }}>Community development and social impact initiatives</p>
            </div>
            <div className="backdrop-blur-sm rounded-xl p-6 border border-yellow-200 hover:shadow-xl transition-all duration-300" style={{ backgroundColor: '#ce6f69' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(155, 53, 52, 0.85)' }}>
                <BiBriefcase className="w-6 h-6" style={{ color: '#ffe5d4' }} />
              </div>
              <h4 className="text-lg font-bold mb-2" style={{ fontFamily: 'FocusGrotesk, sans-serif', color: '#ffe5d4' }}>Board Meetings</h4>
              <p className="text-sm" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal', color: '#ffe5d4' }}>Strategic leadership and governance</p>
            </div>
            <div className="backdrop-blur-sm rounded-xl p-6 border border-yellow-200 hover:shadow-xl transition-all duration-300" style={{ backgroundColor: '#ce6f69' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(155, 53, 52, 0.85)' }}>
                <BiAward className="w-6 h-6" style={{ color: '#ffe5d4' }} />
              </div>
              <h4 className="text-lg font-bold mb-2" style={{ fontFamily: 'FocusGrotesk, sans-serif', color: '#ffe5d4' }}>Cultural Events</h4>
              <p className="text-sm" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal', color: '#ffe5d4' }}>Preserving and promoting cultural heritage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RolesInitiatives;
