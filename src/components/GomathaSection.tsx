import React from 'react';
import { BiHeart, BiLeaf } from 'react-icons/bi';
import { AiFillInstagram } from 'react-icons/ai';

const GomathaSection = () => {
  const gomathaImages = [
    {
      src: '/images/gomatha-1.jpg',
      alt: 'Feeding Gomatha with care and devotion'
    },
    {
      src: '/images/gomatha-2.jpg',
      alt: 'Peaceful moment with Gomatha at home'
    },
    {
      src: '/images/gomatha-3.jpg',
      alt: 'Daily Gau Seva activities'
    },
    {
      src: '/images/gomatha-4.jpg',
      alt: 'Gomatha roaming freely in natural environment'
    }
  ];

  return (
    <section id="gomatha-section" className="py-8 lg:py-24 relative overflow-hidden" style={{ backgroundColor: '#f8f9fa' }}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-yellow-50/30"></div>
      <div className="absolute top-20 left-20 w-32 h-32 border border-green-400/30 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 border border-yellow-400/30 rounded-full opacity-25"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 drop-shadow-sm" style={{ fontFamily: 'Komrile Condensed, serif', letterSpacing: '0.05em' }}>
            A Sacred Bond: My Devotion to Gomatha
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed drop-shadow-md" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>
            Beyond the boardroom and balance sheets, my deepest sense of purpose is found in the service of Gomatha. For me, the cow is not just an animal; she is a sacred symbol of life, purity, and selfless giving.
          </p>
        </div>

        {/* Visual Gallery */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12 max-w-6xl mx-auto">
          {gomathaImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square bg-gradient-to-br from-green-100 to-yellow-100 flex items-center justify-center">
                <div className="text-center p-4">
                  <BiHeart className="w-12 h-12 text-green-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 font-medium" style={{ fontFamily: 'FocusGrotesk, sans-serif' }}>
                    {image.alt}
                  </p>
                </div>
              </div>
              {/* Placeholder for actual images */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Core Narrative */}
        <div className="max-w-4xl mx-auto mb-8 lg:mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 border border-green-200">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>
              At my home and office, we are blessed with the presence of over fifteen cows who are not just sheltered, but are a cherished part of our daily lives. They roam freely, spreading an aura of peace and positivity that touches everyone who visits.
            </p>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>
              This journey of 'Gau Seva' (service to cows) began from a deep-rooted belief in our cultural heritage, where the cow is revered as a mother. Caring for them is a spiritual practice that grounds me, reminding me of the importance of compassion, sustainability, and living in harmony with nature. It is this connection that fuels my vision as a leader—to build businesses that are not only profitable but also principled and compassionate.
            </p>
          </div>
        </div>

        {/* Project Kamadhenu */}
        <div className="max-w-6xl mx-auto mb-8 lg:mb-12">
          <div className="bg-gradient-to-r from-green-600 to-yellow-600 rounded-2xl shadow-xl p-6 lg:p-8 text-white">
            <div className="text-center mb-6">
              <BiLeaf className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl lg:text-3xl font-bold mb-2" style={{ fontFamily: 'Komrile Condensed, serif', letterSpacing: '0.05em' }}>
                Project Kamadhenu
              </h3>
              <p className="text-lg opacity-90" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>
                Educating and inspiring the community to rediscover the sacred and practical benefits of caring for cows, promoting ethical treatment and sustainable living for a better future.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="text-lg font-bold mb-2" style={{ fontFamily: 'FocusGrotesk, sans-serif' }}>EDUCATE</h4>
                                 <p className="text-sm opacity-90" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>
                   "Gau Gyan" workshops and school outreach programs to foster understanding and compassion from a young age
                 </p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-bold mb-2" style={{ fontFamily: 'FocusGrotesk, sans-serif' }}>EMPOWER</h4>
                                 <p className="text-sm opacity-90" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>
                   Urban Goshala initiatives and "Feed a Gomatha" events to create direct emotional connections
                 </p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-bold mb-2" style={{ fontFamily: 'FocusGrotesk, sans-serif' }}>SUSTAIN</h4>
                                 <p className="text-sm opacity-90" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>
                   Promoting ethical dairy practices and creating "Kalyan-Certified" ethical dairy suppliers
                 </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-yellow-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <AiFillInstagram className="w-5 h-5" />
            <span>Follow My Journey with Gomatha on Instagram</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GomathaSection;
