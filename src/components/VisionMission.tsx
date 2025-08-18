import React from 'react';
import { Eye, Target, Compass, Star } from 'lucide-react';

const VisionMission = () => {
  const coreValues = [
    { icon: Star, title: "Excellence", description: "Unwavering commitment to quality and performance" },
    { icon: Compass, title: "Integrity", description: "Ethical leadership and transparent business practices" },
    { icon: Target, title: "Innovation", description: "Continuous improvement and strategic adaptation" },
    { icon: Eye, title: "Heritage", description: "Preserving cultural values in modern business" }
  ];

  return (
    <section id="vision" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Traditional ornamental pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.15'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zM20 40c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="w-16 h-px bg-gold"></div>
            <span className="text-gold text-lg font-medium tracking-wider uppercase">Strategic Direction</span>
            <div className="w-16 h-px bg-gold"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-cream mb-6 font-serif">
            A Clear Path Forward
          </h2>
          <p className="text-xl text-cream/85 max-w-3xl mx-auto leading-relaxed">
            Clear strategic direction that drives every decision and action, ensuring 
            sustainable growth while preserving our core values and cultural heritage.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto mb-20">
          {/* Vision */}
          <div className="text-center animate-fade-in-up">
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center mx-auto hover:bg-gold/30 transition-colors duration-300 border border-gold/30">
                <Eye className="w-12 h-12 text-gold" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-slate-900" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gold mb-6 font-serif">Vision</h3>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-gold/20">
              <blockquote className="text-xl lg:text-2xl text-cream font-light leading-relaxed italic">
                "My vision is to make SSKL a household name across India and beyond, while preserving the cultural value of our textiles."
              </blockquote>
            </div>
          </div>
          
          {/* Mission */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center mx-auto hover:bg-gold/30 transition-colors duration-300 border border-gold/30">
                <Target className="w-12 h-12 text-gold" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <Compass className="w-4 h-4 text-slate-900" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gold mb-6 font-serif">Mission</h3>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-gold/20">
              <blockquote className="text-xl lg:text-2xl text-cream font-light leading-relaxed italic">
                "Our mission is simple: grow with integrity, empower people, and create lasting value for customers and communities."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-cream font-serif mb-4">Core Values</h3>
            <p className="text-lg text-cream/80">The principles that guide every decision and action</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-gold/20 hover:bg-white/10 transition-all duration-300 animate-fade-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-gold" />
                  </div>
                  <h4 className="text-xl font-bold text-gold font-serif mb-3">{value.title}</h4>
                  <p className="text-cream/80 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Strategic Focus Areas */}
        <div className="mt-20 bg-gradient-to-r from-gold/10 to-gold/5 rounded-lg p-12 border border-gold/20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-cream font-serif mb-8">Strategic Focus Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-6 h-6 text-slate-900" />
                </div>
                <h4 className="text-lg font-semibold text-gold">Market Expansion</h4>
                <p className="text-cream/80 text-sm">Strategic growth into new markets and segments</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-6 h-6 text-slate-900" />
                </div>
                <h4 className="text-lg font-semibold text-gold">Operational Excellence</h4>
                <p className="text-cream/80 text-sm">Continuous improvement and efficiency optimization</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto">
                  <Compass className="w-6 h-6 text-slate-900" />
                </div>
                <h4 className="text-lg font-semibold text-gold">Cultural Preservation</h4>
                <p className="text-cream/80 text-sm">Maintaining traditional values in modern business</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;