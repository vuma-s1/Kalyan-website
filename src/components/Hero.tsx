import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200">
      {/* Traditional Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-paisley-pattern"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 border-2 border-yellow-400/40 rounded-full opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-yellow-400/30 rounded-full opacity-25 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 border border-yellow-400/20 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-10 w-20 h-20 border border-yellow-400/25 rounded-full opacity-25 animate-float" style={{ animationDelay: '0.5s' }}></div>

      {/* Temple Border Decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-40"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-40"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in pl-8 lg:pl-12">
              {/* Main heading */}
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 leading-tight font-serif">
                15+ Years of
                <span className="block text-gray-700">Transforming Retail</span>
                <span className="block text-3xl lg:text-4xl xl:text-5xl font-light text-gray-600 mt-4">
                  into a National Success Story
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-gray-700 font-light leading-relaxed max-w-2xl">
                Guiding Sai Silks from a single vision to a multi brand retail leader with consistent growth, trusted quality and deep respect for tradition.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="group px-8 py-4 bg-yellow-500 text-gray-900 hover:bg-yellow-600 transition-all duration-300 font-semibold tracking-wide rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <span className="flex items-center justify-center gap-3">
                    My Journey
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="group px-8 py-4 border-2 border-yellow-500 text-gray-700 hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 font-semibold tracking-wide rounded-lg">
                  <span className="flex items-center justify-center gap-3">
                    View Leadership Journey
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>

            {/* Right Content - Portrait */}
            <div className="relative animate-fade-in-up">
              {/* Portrait Container */}
              <div className="relative">
                {/* Portrait Background */}
                <div className="w-96 h-[28rem] mx-auto bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-2xl shadow-2xl border-4 border-yellow-400/40 relative overflow-hidden">
                  {/* Traditional Pattern Background */}
                  <div className="absolute inset-0 bg-temple-border opacity-10"></div>
                  
                  {/* Portrait Image */}
                  <div className="absolute inset-4 bg-gradient-to-br from-yellow-100/80 to-yellow-200/80 rounded-xl flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                      alt="Annam Kalyan Srinivas - Whole-time Director"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    {/* Overlay with name */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 rounded-b-lg">
                      <h3 className="text-lg font-bold text-white font-serif">ANNAM KALYAN SRINIVAS</h3>
                      <p className="text-sm text-yellow-200 font-medium">Whole-time Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>
    </section>
  );
};

export default Hero;