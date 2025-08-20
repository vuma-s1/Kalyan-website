import React from 'react';
import { Eye, Target } from 'lucide-react';

const VisionMission = () => {
  return (
    <section id="vision" className="py-4 lg:py-16 relative overflow-hidden" style={{ backgroundColor: '#ffe5d4' }}>

      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-2 lg:mb-8 relative">
          {/* Left Corner Image */}
          <div className="absolute -left-4 top-8 w-40 h-40 lg:w-96 lg:h-96 lg:-top-8 z-10">
            <img 
              src="/images/5.png" 
              alt="Decorative corner" 
              className="w-full h-full object-contain"
            />
          </div>
          {/* Right Corner Image */}
          <div className="absolute -right-4 top-8 w-40 h-40 lg:w-96 lg:h-96 lg:-top-8 z-10">
            <img 
              src="/images/7.png" 
              alt="Decorative corner" 
              className="w-full h-full object-contain"
            />
          </div>
                      <h2 className="text-lg lg:text-5xl font-bold mb-2 lg:mb-6 drop-shadow-lg" style={{ fontFamily: 'Didot HTF L24 Light', letterSpacing: '0.05em', fontWeight: '700', color: '#9b3534' }}>
            A Clear Path Forward
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">
          {/* Vision */}
                      <div className="text-center animate-fade-in-up">
              <div className="relative mb-2 lg:mb-4">
              <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full flex items-center justify-center mx-auto">
                <img 
                  src="/images/vission.png" 
                  alt="Vision Icon"
                  className="w-20 h-20 lg:w-28 lg:h-28 object-contain"
                />
              </div>
            </div>
            <h3 className="text-lg lg:text-3xl font-bold mb-1 lg:mb-6" style={{ fontFamily: 'FocusGrotesk, sans-serif', color: '#9b3534' }}>Vision</h3>
            <div className="rounded-lg p-6 lg:p-8 border border-yellow-200 shadow-lg" style={{ backgroundColor: '#ce6f69' }}>
              <blockquote className="text-lg lg:text-2xl leading-relaxed italic" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal', color: '#ffe5d4' }}>
                "My vision is to make SSKL a household name across India and beyond, while preserving the cultural value of our textiles."
              </blockquote>
            </div>
          </div>
          
          {/* Mission */}
                      <div className="text-center animate-fade-in-up relative" style={{ animationDelay: '0.2s' }}>
            {/* Mobile-only Left Corner Image */}
            <div className="lg:hidden absolute -left-4 top-4 w-40 h-40 z-10">
              <img 
                src="/images/5.png" 
                alt="Decorative corner" 
                className="w-full h-full object-contain"
              />
            </div>
            {/* Mobile-only Right Corner Image */}
            <div className="lg:hidden absolute -right-4 top-4 w-40 h-40 z-10">
              <img 
                src="/images/7.png" 
                alt="Decorative corner" 
                className="w-full h-full object-contain"
              />
            </div>
              <div className="relative mb-2 lg:mb-4">
              <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full flex items-center justify-center mx-auto">
                <img 
                  src="/images/mission.png" 
                  alt="Mission Icon"
                  className="w-20 h-20 lg:w-28 lg:h-28 object-contain"
                />
              </div>
            </div>
            <h3 className="text-lg lg:text-3xl font-bold mb-1 lg:mb-6" style={{ fontFamily: 'FocusGrotesk, sans-serif', color: '#9b3534' }}>Mission</h3>
            <div className="rounded-lg p-6 lg:p-8 border border-yellow-200 shadow-lg" style={{ backgroundColor: '#ce6f69' }}>
              <blockquote className="text-lg lg:text-2xl leading-relaxed italic" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal', color: '#ffe5d4' }}>
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