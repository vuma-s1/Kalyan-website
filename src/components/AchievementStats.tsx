import React from 'react';
import { AiFillTrophy, AiFillStar } from 'react-icons/ai';
import { BiTrendingUp, BiGroup } from 'react-icons/bi';

const AchievementStats = () => {
  const achievements = [
    {
      icon: AiFillTrophy,
      label: "15+ Years",
      description: "Leadership Excellence"
    },
    {
      icon: BiTrendingUp,
      label: "100+ Stores",
      description: "National Presence"
    },
    {
      icon: BiGroup,
      label: "500+ Team",
      description: "Building Legacy"
    },
    {
      icon: AiFillStar,
      label: "4+ Brands",
      description: "Heritage Portfolio"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-yellow-100 to-yellow-200 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-paisley-pattern opacity-5"></div>
      <div className="absolute top-10 left-10 w-24 h-24 border border-yellow-400/30 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border border-yellow-400/25 rounded-full opacity-15 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center space-x-4 mb-4">
              <div className="w-12 h-px bg-yellow-500"></div>
              <span className="text-yellow-600 text-sm font-medium tracking-wider uppercase font-traditional">Key Achievements</span>
              <div className="w-12 h-px bg-yellow-500"></div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-serif">
              Proven Track Record
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Transforming vision into measurable success across multiple dimensions of retail leadership.
            </p>
          </div>

          {/* Achievement Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-yellow-300/50 hover:bg-white hover:shadow-xl transition-all duration-300 animate-fade-in-up text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-gray-900" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-2">{achievement.label}</div>
                  <div className="text-sm text-gray-700 font-medium">{achievement.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementStats;
