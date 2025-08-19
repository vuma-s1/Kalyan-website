import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24 relative overflow-hidden" style={{ 
      backgroundColor: '#465826'
    }}>

      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-yellow-400/40 rounded-full opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 border border-yellow-400/30 rounded-full opacity-25"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 border border-yellow-400/20 rounded-full opacity-20"></div>
      <div className="absolute top-1/3 right-20 w-20 h-20 border border-yellow-400/25 rounded-full opacity-25"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 animate-fade-in">
                      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg" style={{ fontFamily: 'Komrile Condensed, serif', letterSpacing: '0.05em' }}>
            From Vijayawada to
            <span className="block text-yellow-200">the Boardroom</span>
          </h2>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>
            A journey from traditional roots to modern retail leadership, combining academic excellence with strategic vision.
          </p>
        </div>

        {/* Portrait and Summary Section */}
        <div className="flex justify-center mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl">
            {/* Executive Summary */}
            <div className="animate-fade-in-up -ml-4 lg:-ml-4 text-center lg:text-left">
              <div className="max-w-3xl mx-auto lg:mx-0">
                <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-lg" style={{ fontFamily: 'FocusGrotesk, sans-serif' }}>Executive Summary</h3>
                <div className="prose prose-lg text-yellow-100 space-y-1" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>
                  <p className="text-lg leading-relaxed drop-shadow-md">
                    Annam Kalyan Srinivas was born in Vijayawada, Andhra Pradesh, on July 16, 1974, and completed his schooling at SDA High School.
                  </p>
                  <p className="text-lg leading-relaxed drop-shadow-md">
                    In 1995, he earned his Bachelor's degree in Commerce from Nagarjuna University, followed by a Postgraduate Diploma in Business Administration from the Institute of Marketing and Management, New Delhi. He later obtained a law degree, equipping him with a rare combination of strategic, operational, and legal expertise.
                  </p>
                  <p className="text-lg leading-relaxed drop-shadow-md">
                    With over 15 years of experience in the retail sector, he has played a pivotal role in leading Sai Silks (Kalamandir) Limited through sustained growth, multi-brand expansion, and operational excellence. His leadership focuses on building high performance teams, strengthening business systems, and creating opportunities that achieve commercial success while preserving the cultural heritage of Indian textiles.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Portrait */}
            <div className="animate-fade-in-up ml-0 lg:ml-16 mt-2 lg:mt-12 flex justify-center lg:justify-start" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-full max-w-md lg:max-w-none">
                <div className="w-full h-64 lg:h-96 bg-gradient-to-br from-yellow-200/20 to-yellow-300/20 rounded-2xl shadow-xl border-4 border-yellow-400/30 relative overflow-hidden">
                  {/* Traditional Pattern Overlay */}
                  <div className="absolute inset-0 bg-paisley-pattern opacity-10"></div>
                  
                  {/* Portrait Image */}
                  <div className="absolute inset-4 rounded-xl overflow-hidden">
                    <img 
                      src="/images/kalyan.png" 
                      alt="Annam Kalyan Srinivas - Whole-time Director"
                      className="w-full h-full object-cover object-top"
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

        {/* Milestones Timeline */}
        <div className="text-center mb-2 lg:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-yellow-200 hover:bg-white hover:shadow-xl transition-all duration-300 text-center">
              <div className="text-2xl font-bold text-yellow-600 mb-2" style={{ fontFamily: 'FocusGrotesk, sans-serif' }}>1995</div>
              <div className="text-gray-700 font-medium" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>Completed Commerce degree</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-yellow-200 hover:bg-white hover:shadow-xl transition-all duration-300 text-center">
              <div className="text-2xl font-bold text-yellow-600 mb-2" style={{ fontFamily: 'FocusGrotesk, sans-serif' }}>200X</div>
              <div className="text-gray-700 font-medium" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>Joined SSKL in leadership role</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-yellow-200 hover:bg-white hover:shadow-xl transition-all duration-300 text-center">
              <div className="text-2xl font-bold text-yellow-600 mb-2" style={{ fontFamily: 'FocusGrotesk, sans-serif' }}>2009</div>
              <div className="text-gray-700 font-medium" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>Appointed to CBFC</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-yellow-200 hover:bg-white hover:shadow-xl transition-all duration-300 text-center">
              <div className="text-2xl font-bold text-yellow-600 mb-2" style={{ fontFamily: 'FocusGrotesk, sans-serif' }}>2013</div>
              <div className="text-gray-700 font-medium" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>Appointed to Handloom Board of India</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-yellow-200 hover:bg-white hover:shadow-xl transition-all duration-300 text-center">
              <div className="text-2xl font-bold text-yellow-600 mb-2" style={{ fontFamily: 'FocusGrotesk, sans-serif' }}>Present</div>
              <div className="text-gray-700 font-medium" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>Leading multi-brand retail expansion</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;