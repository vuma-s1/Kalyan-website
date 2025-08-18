import React from 'react';
import { BiTrendingUp, BiTargetLock, BiGroup } from 'react-icons/bi';
import { AiFillTrophy, AiFillStar } from 'react-icons/ai';
import { HiOfficeBuilding } from 'react-icons/hi';

const Leadership = () => {
  const achievements = [
    {
      icon: BiTrendingUp,
      title: "Driving Retail Growth",
      subtitle: "Market Expansion & Brand Scaling",
      description: "Led Sai Silks (Kalamandir) Limited into new regions, scaling multiple brands while preserving quality, trust, and customer loyalty.",
      metrics: "100+ stores across India",
      image: "https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: BiTargetLock,
      title: "Transforming Performance",
      subtitle: "Operational Excellence",
      description: "Revitalised underperforming business divisions through strategic restructuring, restoring profitability and operational efficiency.",
      metrics: "40% efficiency improvement",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: BiGroup,
      title: "Building Leadership Teams",
      subtitle: "High-Performance Culture",
      description: "Developed and mentored high-performance teams that take ownership, deliver results, and sustain long-term growth.",
      metrics: "500+ team members mentored",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const philosophy = [
    {
      icon: AiFillStar,
      title: "Heritage Preservation",
      description: "Maintaining traditional values and cultural authenticity in modern retail operations"
    },
    {
      icon: HiOfficeBuilding,
      title: "Strategic Vision",
      description: "Long-term planning with focus on sustainable growth and market leadership"
    },
    {
      icon: AiFillTrophy,
      title: "Excellence Standards",
      description: "Uncompromising commitment to quality, service, and operational excellence"
    }
  ];

  return (
    <section id="leadership" className="py-24 bg-gradient-to-b from-yellow-50 to-yellow-100 relative overflow-hidden">
      {/* Traditional Pattern Background */}
      <div className="absolute inset-0 bg-paisley-pattern opacity-5"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-yellow-400/20 rounded-full opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 border border-yellow-400/15 rounded-full opacity-25"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 border border-yellow-400/10 rounded-full opacity-20"></div>
      <div className="absolute top-1/3 right-20 w-20 h-20 border border-yellow-400/15 rounded-full opacity-25"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="w-16 h-px bg-yellow-500"></div>
            <span className="text-yellow-600 text-lg font-medium tracking-wider uppercase font-traditional">Strategic Achievements</span>
            <div className="w-16 h-px bg-yellow-500"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-serif">
            Turning Vision into
            <span className="block text-yellow-600">Measurable Success</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            From expanding markets to transforming operations, every achievement reflects
            strategic thinking and a commitment to excellence.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20"></div>
                  <div className="absolute inset-0 bg-paisley-pattern opacity-10"></div>
                  <div className="absolute top-3 right-3 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                    <IconComponent className="w-5 h-5 text-gray-900" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 font-serif">{achievement.title}</h3>
                    <p className="text-yellow-600 font-medium text-sm mb-3">{achievement.subtitle}</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">{achievement.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-yellow-600">{achievement.metrics}</span>
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-yellow-600" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Leadership Philosophy */}
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl p-12 border border-yellow-200 relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-paisley-pattern opacity-5"></div>
          <div className="absolute top-6 right-6 w-16 h-16 border border-yellow-400/30 rounded-full opacity-20"></div>
          <div className="absolute bottom-6 left-6 w-12 h-12 border border-yellow-400/25 rounded-full opacity-15"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-4 mb-4">
                <div className="w-12 h-px bg-yellow-500"></div>
                <span className="text-yellow-600 text-sm font-medium tracking-wider uppercase">Leadership Philosophy</span>
                <div className="w-12 h-px bg-yellow-500"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif">Guiding Principles for Success</h3>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Core values that drive every decision and action in building sustainable, growth-oriented organizations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {philosophy.map((principle, index) => {
                const IconComponent = principle.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-yellow-300/50 hover:bg-white hover:shadow-xl transition-all duration-300 text-center group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-5 h-5 text-gray-900" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2 font-serif">{principle.title}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{principle.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mt-20">
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
      </div>
    </section>
  );
};

export default Leadership;