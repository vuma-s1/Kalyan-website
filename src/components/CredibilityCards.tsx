import React from 'react';
import { BiTrendingUp, BiGroup, BiTargetLock } from 'react-icons/bi';
import { AiFillTrophy, AiFillStar } from 'react-icons/ai';
import { HiOfficeBuilding } from 'react-icons/hi';

const CredibilityCards = () => {
  const credibilityCards = [
    {
      icon: AiFillTrophy,
      title: "15+ Years in Retail Leadership",
      description: "Guiding Sai Silks (Kalamandir) Limited through sustained growth and industry recognition.",
      highlight: "15+ Years",
      gradient: "from-yellow-500 to-yellow-600"
    },
    {
      icon: HiOfficeBuilding,
      title: "Portfolio of Leading Brands",
      description: "From heritage silk showrooms to contemporary fashion retail, building trust across diverse markets.",
      highlight: "Multi-Brand",
      gradient: "from-yellow-500 to-yellow-600"
    },
    {
      icon: BiTrendingUp,
      title: "Track Record of Growth",
      description: "Consistently turning challenges into profitable ventures through strategic planning and execution.",
      highlight: "Proven Growth",
      gradient: "from-yellow-500 to-yellow-600"
    },
    {
      icon: BiGroup,
      title: "Builder of Strong Teams",
      description: "Creating high performance leadership teams that drive operational excellence.",
      highlight: "Team Builder",
      gradient: "from-yellow-500 to-yellow-600"
    }
  ];

  return (
    <section id="credibility" className="py-24 bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-paisley-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-32 h-32 border border-yellow-400/30 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 border border-yellow-400/25 rounded-full opacity-15 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="w-16 h-px bg-yellow-500"></div>
            <span className="text-yellow-600 text-lg font-medium tracking-wider uppercase font-traditional">Leadership Credentials</span>
            <div className="w-16 h-px bg-yellow-500"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-serif">
            Proven Leadership.
            <span className="block text-yellow-600">Measurable Impact.</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A track record of transforming vision into reality, building sustainable growth, and creating lasting value for stakeholders.
          </p>
        </div>
        
        {/* Credibility Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-7xl mx-auto">
          {credibilityCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-xl border border-yellow-200 p-6 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-up relative overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Gradient Background Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon with Enhanced Styling */}
                <div className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                {/* Highlight Badge */}
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${card.gradient} text-white text-sm font-bold rounded-full mb-4 shadow-md group-hover:shadow-lg transition-shadow duration-300`}>
                  {card.highlight}
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-3 font-serif leading-tight group-hover:text-gray-700 transition-colors duration-300">
                  {card.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-700 leading-relaxed text-sm">
                  {card.description}
                </p>

                {/* Decorative Corner Element */}
                <div className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-br ${card.gradient} opacity-20 rounded-bl-2xl`}></div>
              </div>
            );
          })}
        </div>

        {/* Impact Metrics */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="w-12 h-px bg-yellow-500"></div>
            <span className="text-yellow-600 text-sm font-medium tracking-wider uppercase">Impact Metrics</span>
            <div className="w-12 h-px bg-yellow-500"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-yellow-200 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-yellow-600 mb-2">15+</div>
              <div className="text-gray-700 font-medium">Years Leadership</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-yellow-200 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-yellow-600 mb-2">100+</div>
              <div className="text-gray-700 font-medium">Stores Nationwide</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-yellow-200 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-yellow-600 mb-2">500+</div>
              <div className="text-gray-700 font-medium">Team Members</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-yellow-200 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-yellow-600 mb-2">4+</div>
              <div className="text-gray-700 font-medium">Brand Portfolio</div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl p-12 border border-yellow-200 relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-paisley-pattern opacity-5"></div>
          <div className="absolute top-6 right-6 w-16 h-16 border border-yellow-400/30 rounded-full opacity-20"></div>
          <div className="absolute bottom-6 left-6 w-12 h-12 border border-yellow-400/25 rounded-full opacity-15"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-4 mb-4">
                <div className="w-12 h-px bg-yellow-500"></div>
                <span className="text-yellow-600 text-sm font-medium tracking-wider uppercase">Trust Indicators</span>
                <div className="w-12 h-px bg-yellow-500"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif">Building Trust Through Excellence</h3>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Consistent delivery of results and commitment to quality have established a reputation for reliability and excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-yellow-300/50 hover:bg-white hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <AiFillStar className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2 font-serif">Quality Assurance</h4>
                <p className="text-gray-700 text-sm leading-relaxed">Uncompromising standards across all operations and customer touchpoints</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-yellow-300/50 hover:bg-white hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <BiTargetLock className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2 font-serif">Strategic Focus</h4>
                <p className="text-gray-700 text-sm leading-relaxed">Long-term vision with clear execution plans and measurable outcomes</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-yellow-300/50 hover:bg-white hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <BiGroup className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2 font-serif">Team Excellence</h4>
                <p className="text-gray-700 text-sm leading-relaxed">High-performance teams that consistently deliver exceptional results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilityCards;