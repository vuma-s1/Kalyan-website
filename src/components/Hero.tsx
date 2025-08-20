import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden hero-background">
      {/* Background Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      


      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="min-h-screen flex items-center pt-32 pb-16 lg:pt-20 lg:pb-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in text-center lg:text-left lg:pl-12 pt-8 lg:pt-0">
              {/* Main heading */}
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight drop-shadow-lg" style={{ fontFamily: 'Komrile Condensed, serif', letterSpacing: '0.05em' }}>
                <span className="block text-yellow-200">15+ Years of</span>
                <span className="block text-yellow-200">Transforming Retail</span>
                <span className="block text-yellow-200">
                  into a National Success Story
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-yellow-100 leading-relaxed max-w-2xl drop-shadow-md" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>
                Guiding Sai Silks from a single vision to a multi brand retail leader with consistent growth, trusted quality and deep respect for tradition.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
                <button className="group px-8 py-4 text-white hover:bg-blue-700 transition-all duration-300 font-semibold tracking-wide rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 backdrop-blur-sm" style={{ backgroundColor: '#1e2531' }}>
                  <span className="flex items-center justify-center gap-3">
                    My Journey
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="group px-8 py-4 text-white hover:bg-blue-700 transition-all duration-300 font-semibold tracking-wide rounded-lg backdrop-blur-sm shadow-lg" style={{ backgroundColor: '#1e2531' }}>
                  <span className="flex items-center justify-center gap-3">
                    View Leadership Journey
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>

            {/* Right Content - Portrait */}
            <div className="relative animate-fade-in-up flex justify-center lg:justify-start">
              {/* Portrait Container */}
              <div className="relative lg:ml-24">
                {/* Portrait Background */}
                <div className="w-80 lg:w-96 h-72 lg:h-[28rem] mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-2xl border-4 border-yellow-600 relative overflow-hidden">
                  {/* Portrait Image */}
                  <img 
                    src="/images/kalyan.png" 
                    alt="Annam Kalyan Srinivas - Whole-time Director"
                    className="w-full h-full object-cover border-0"
                  />
                  {/* Overlay with name */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4">
                    <h3 className="text-lg font-bold text-white font-serif">ANNAM KALYAN SRINIVAS</h3>
                    <p className="text-sm text-yellow-200 font-medium">Whole-time Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;