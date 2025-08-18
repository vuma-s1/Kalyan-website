import React from 'react';
import { Eye, Target } from 'lucide-react';

const VisionMission = () => {
  return (
    <section id="vision" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#fbe9b7' }}>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'NautilusPompilius, serif' }}>
            A Clear Path Forward
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Vision */}
          <div className="text-center animate-fade-in-up">
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto hover:bg-yellow-500/30 transition-colors duration-300 border border-yellow-500/30">
                <Eye className="w-12 h-12 text-yellow-600" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-yellow-600 mb-6" style={{ fontFamily: 'FocusGrotesk, sans-serif' }}>Vision</h3>
            <div className="bg-white rounded-lg p-8 border border-yellow-200 shadow-lg">
              <blockquote className="text-xl lg:text-2xl text-gray-800 leading-relaxed italic" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>
                "My vision is to make SSKL a household name across India and beyond, while preserving the cultural value of our textiles."
              </blockquote>
            </div>
          </div>
          
          {/* Mission */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto hover:bg-yellow-500/30 transition-colors duration-300 border border-yellow-500/30">
                <Target className="w-12 h-12 text-yellow-600" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-yellow-600 mb-6" style={{ fontFamily: 'FocusGrotesk, sans-serif' }}>Mission</h3>
            <div className="bg-white rounded-lg p-8 border border-yellow-200 shadow-lg">
              <blockquote className="text-xl lg:text-2xl text-gray-800 leading-relaxed italic" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>
                "Our mission is simple: grow with integrity, empower people, and create lasting value for customers and communities."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;