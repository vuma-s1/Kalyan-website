import React from 'react';
import { BiTrendingUp, BiGroup, BiTargetLock } from 'react-icons/bi';
import { AiFillTrophy, AiFillStar } from 'react-icons/ai';
import { HiOfficeBuilding } from 'react-icons/hi';

const LeadershipCredentials = () => {
  const credibilityCards = [
    {
      icon: AiFillTrophy,
      title: "15+ Years in Retail Leadership",
      description: "Guiding Sai Silks (Kalamandir) Limited through sustained growth and industry recognition.",
      highlight: "15+ Years",
      gradient: "from-blue-800 to-blue-900"
    },
    {
      icon: HiOfficeBuilding,
      title: "Portfolio of Leading Brands",
      description: "From heritage silk showrooms to contemporary fashion retail, building trust across diverse markets.",
      highlight: "Multi-Brand",
      gradient: "from-blue-800 to-blue-900"
    },
    {
      icon: BiTrendingUp,
      title: "Track Record of Growth",
      description: "Consistently turning challenges into profitable ventures through strategic planning and execution.",
      highlight: "Proven Growth",
      gradient: "from-blue-800 to-blue-900"
    },
    {
      icon: BiGroup,
      title: "Builder of Strong Teams",
      description: "Creating high performance leadership teams that drive operational excellence.",
      highlight: "Team Builder",
      gradient: "from-blue-800 to-blue-900"
    }
  ];

  return (
         <section id="leadership-credentials" className="py-12 lg:py-16 relative overflow-hidden" style={{ backgroundColor: '#fbe9b7' }}>

      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 drop-shadow-lg" style={{ fontFamily: 'NautilusPompilius, serif' }}>
            <span style={{ color: '#1e2531' }}>Proven Leadership.</span>
            <span className="block" style={{ color: '#9b3534' }}>Measurable Impact.</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed drop-shadow-md" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>
            A track record of transforming vision into reality, building sustainable growth, and creating lasting value for stakeholders.
          </p>
        </div>
        
        {/* Credibility Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-7xl mx-auto">
          {credibilityCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-up relative overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon with Enhanced Styling */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-all duration-500 shadow-lg" style={{ backgroundColor: '#1E2531' }}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                {/* Highlight Badge */}
                <div className="inline-block px-4 py-2 text-white text-sm font-bold rounded-full mb-4 shadow-md group-hover:shadow-lg transition-shadow duration-300" style={{ backgroundColor: '#1E2531' }}>
                  {card.highlight}
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight group-hover:text-gray-700 transition-colors duration-300" style={{ fontFamily: 'FocusGrotesk, sans-serif' }}>
                  {card.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-700 leading-relaxed text-sm" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>
                  {card.description}
                </p>


              </div>
            );
          })}
        </div>

        {/* Impact Metrics */}
        <div className="text-center mb-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2" style={{ fontFamily: 'FocusGrotesk, sans-serif' }}>15+</div>
              <div className="text-gray-700 font-medium" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>Years Leadership</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2" style={{ fontFamily: 'FocusGrotesk, sans-serif' }}>100+</div>
              <div className="text-gray-700 font-medium" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>Stores Nationwide</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2" style={{ fontFamily: 'FocusGrotesk, sans-serif' }}>500+</div>
              <div className="text-gray-700 font-medium" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2" style={{ fontFamily: 'FocusGrotesk, sans-serif' }}>4+</div>
              <div className="text-gray-700 font-medium" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>Brand Portfolio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipCredentials;
