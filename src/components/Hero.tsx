import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#ffe5d4' }}>
      


      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="min-h-screen flex items-center pt-32 pb-8 lg:pt-20 lg:pb-0">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            {/* Left Content */}
            <div className="space-y-10 animate-fade-in text-center lg:text-left lg:pl-16 pt-8 lg:pt-0">
              {/* Main heading */}
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight drop-shadow-lg" style={{ letterSpacing: '0.05em', fontWeight: '700' }}>
                <span className="block mb-12" style={{ color: '#9b3534', fontFamily: 'Adoreline' }}>15+ Years of</span>
                <span className="block" style={{ color: '#9b3534', fontFamily: 'Didot HTF L24 Light' }}>Transforming Retail</span>
                <span className="block" style={{ color: '#9b3534', fontFamily: 'Didot HTF L24 Light' }}>
                  into a National Success Story
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl lg:text-2xl leading-relaxed max-w-3xl drop-shadow-md" style={{ fontFamily: 'Poppins', fontWeight: '400', color: '#9b3534' }}>
                Guiding Sai Silks from a single vision to a multi brand retail leader with consistent growth, trusted quality and deep respect for tradition.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
                <button className="group px-8 py-4 text-white hover:bg-blue-700 transition-all duration-300 font-semibold tracking-wide rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 backdrop-blur-sm" style={{ backgroundColor: 'rgba(155, 53, 52, 0.85)' }}>
                  <span className="flex items-center justify-center gap-3">
                    My Journey
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="group px-8 py-4 text-white hover:bg-blue-700 transition-all duration-300 font-semibold tracking-wide rounded-lg backdrop-blur-sm shadow-lg" style={{ backgroundColor: 'rgba(155, 53, 52, 0.85)' }}>
                  <span className="flex items-center justify-center gap-3">
                    View Leadership Journey
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>

            {/* Right Content - Portrait */}
            <div className="relative animate-fade-in-up flex justify-center lg:justify-center">
              <img 
                src="/images/kalyan.png" 
                alt="Annam Kalyan Srinivas - Whole-time Director"
                className="w-[36rem] lg:w-[36rem] xl:w-[40rem] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;