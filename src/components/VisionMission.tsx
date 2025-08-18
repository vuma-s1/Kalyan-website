import React from 'react';
import { Eye, Target } from 'lucide-react';

const VisionMission = () => {
  return (
    <section id="vision" className="py-8 lg:py-24 relative overflow-hidden" style={{ backgroundColor: '#fbe9b7' }}>
      {/* Background Image Overlay */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: 'url("/images/bg-3.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: '0.3'
      }}></div>
      {/* Background Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-4 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 lg:mb-6 drop-shadow-lg" style={{ fontFamily: 'NautilusPompilius, serif' }}>
            A Clear Path Forward
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">
          {/* Vision */}
          <div className="text-center animate-fade-in-up">
            <div className="relative mb-3 lg:mb-8">
              <div className="w-16 h-16 lg:w-24 lg:h-24 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto hover:bg-yellow-500/30 transition-colors duration-300 border border-yellow-500/30">
                <Eye className="w-8 h-8 lg:w-12 lg:h-12 text-yellow-600" />
              </div>
            </div>
            <h3 className="text-xl lg:text-3xl font-bold text-yellow-600 mb-1 lg:mb-6" style={{ fontFamily: 'FocusGrotesk, sans-serif' }}>Vision</h3>
            <div className="bg-white rounded-lg p-6 lg:p-8 border border-yellow-200 shadow-lg">
              <blockquote className="text-lg lg:text-2xl text-gray-800 leading-relaxed italic" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>
                "My vision is to make SSKL a household name across India and beyond, while preserving the cultural value of our textiles."
              </blockquote>
            </div>
          </div>
          
          {/* Mission */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative mb-3 lg:mb-8">
              <div className="w-16 h-16 lg:w-24 lg:h-24 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto hover:bg-yellow-500/30 transition-colors duration-300 border border-yellow-500/30">
                <Target className="w-8 h-8 lg:w-12 lg:h-12 text-yellow-600" />
              </div>
            </div>
            <h3 className="text-xl lg:text-3xl font-bold text-yellow-600 mb-1 lg:mb-6" style={{ fontFamily: 'FocusGrotesk, sans-serif' }}>Mission</h3>
            <div className="bg-white rounded-lg p-6 lg:p-8 border border-yellow-200 shadow-lg">
              <blockquote className="text-lg lg:text-2xl text-gray-800 leading-relaxed italic" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>
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