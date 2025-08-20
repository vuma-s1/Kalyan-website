import React from 'react';
import { BiHeart, BiLeaf } from 'react-icons/bi';
import { AiFillInstagram } from 'react-icons/ai';

const GomathaSection = () => {
  const gomathaImages = [
    {
      src: '/images/Screenshot 2025-08-20 163834.png',
      alt: 'Sacred bond with Gomatha'
    },
    {
      src: '/images/470647850_18476728975021325_2391542998617134917_n.jpg',
      alt: 'Devotion to Gomatha'
    },
    {
      src: '/images/Screenshot 2025-08-20 163857.png',
      alt: 'Gomatha care and love'
    },
    {
      src: '/images/Screenshot 2025-08-20 182425.png',
      alt: 'Sacred connection with Gomatha'
    }
  ];

  return (
    <section id="gomatha-section" className="py-8 lg:py-24 relative overflow-hidden" style={{ backgroundColor: '#ffe5d4' }}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-yellow-50/30"></div>
      <div className="absolute top-20 left-20 w-32 h-32 border border-green-400/30 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 border border-yellow-400/30 rounded-full opacity-25"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-16 animate-fade-in relative">
          {/* Left Corner Image */}
          <div className="absolute -left-8 -top-8 w-20 h-20 lg:w-64 lg:h-64 z-10">
            <img 
              src="/images/13.png" 
              alt="Decorative corner" 
              className="w-full h-full object-contain"
            />
          </div>
          {/* Right Corner Image */}
          <div className="absolute -right-8 -top-8 w-20 h-20 lg:w-64 lg:h-64 z-10">
            <img 
              src="/images/13.png" 
              alt="Decorative corner" 
              className="w-full h-full object-contain"
            />
          </div>
                     <h2 className="text-3xl lg:text-5xl font-bold mb-4 drop-shadow-sm" style={{ fontFamily: 'Didot HTF L24 Light', letterSpacing: '0.05em', fontWeight: '700', color: '#9b3534' }}>
            A Sacred Bond: My Devotion to Gomatha
          </h2>
          <p className="text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed drop-shadow-md" style={{ fontFamily: 'Poppins', fontWeight: '400', color: '#9b3534' }}>
            Beyond the boardroom and balance sheets, my deepest sense of purpose is found in the service of Gomatha. For me, the cow is not just an animal; she is a sacred symbol of life, purity, and selfless giving.
          </p>
        </div>

        {/* Visual Gallery */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mb-6 lg:mb-12 max-w-6xl mx-auto relative z-0">
          {gomathaImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover aspect-square"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Core Narrative */}
        <div className="max-w-4xl mx-auto mb-12 lg:mb-16 relative z-10">
          <p className="text-lg lg:text-xl leading-relaxed mb-6" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal', color: '#9b3534' }}>
            At my home and office, we are blessed with the presence of over fifteen cows who are not just sheltered, but are a cherished part of our daily lives. They roam freely, spreading an aura of peace and positivity that touches everyone who visits.
          </p>
          <p className="text-lg lg:text-xl leading-relaxed mb-4" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal', color: '#9b3534' }}>
            This journey of 'Gau Seva' (service to cows) began from a deep-rooted belief in our cultural heritage, where the cow is revered as a mother. Caring for them is a spiritual practice that grounds me, reminding me of the importance of compassion, sustainability, and living in harmony with nature. It is this connection that fuels my vision as a leader—to build businesses that are not only profitable but also principled and compassionate.
          </p>
        </div>

        {/* Project Kamadhenu */}
        <div className="max-w-6xl mx-auto mb-8 lg:mb-12 relative">
          {/* Left Corner Image */}
          <div className="absolute -right-8 -top-24 lg:-right-64 lg:-top-96 w-40 h-56 z-10 lg:w-96 lg:h-96">
            <img 
              src="/images/14.png" 
              alt="Decorative corner" 
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Right Corner Image */}
          <div className="absolute -left-8 -top-24 lg:-left-64 lg:-top-96 w-40 h-56 z-10 lg:w-96 lg:h-96">
            <img 
              src="/images/16.png" 
              alt="Decorative corner" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="text-center mb-8 pt-8 lg:pt-0">
            <h3 className="text-lg lg:text-3xl font-bold mb-4" style={{ fontFamily: 'serif', letterSpacing: '0.05em', color: '#9b3534' }}>
              Project Kamadhenu
            </h3>
            <p className="text-lg mb-6" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal', color: '#9b3534' }}>
              Educating and inspiring the community to rediscover the sacred and practical benefits of caring for cows, promoting ethical treatment and sustainable living for a better future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="text-lg lg:text-lg font-bold mb-2" style={{ fontFamily: 'FocusGrotesk, sans-serif', color: '#9b3534' }}>EDUCATE</h4>
              <p className="text-lg lg:text-sm" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal', color: '#9b3534' }}>
                "Gau Gyan" workshops and school outreach programs to foster understanding and compassion from a young age
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg lg:text-lg font-bold mb-2" style={{ fontFamily: 'FocusGrotesk, sans-serif', color: '#9b3534' }}>EMPOWER</h4>
              <p className="text-lg lg:text-sm" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal', color: '#9b3534' }}>
                Urban Goshala initiatives and "Feed a Gomatha" events to create direct emotional connections
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg lg:text-lg font-bold mb-2" style={{ fontFamily: 'FocusGrotesk, sans-serif', color: '#9b3534' }}>SUSTAIN</h4>
              <p className="text-lg lg:text-sm" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal', color: '#9b3534' }}>
                Promoting ethical dairy practices and creating "Kalyan-Certified" ethical dairy suppliers
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a 
            href="https://www.instagram.com/kalamandirkalyan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer" 
            style={{ backgroundColor: '#9b3534' }}
          >
            <AiFillInstagram className="w-7 h-7" />
            <span className="text-sm">Follow My Journey with Gomatha on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GomathaSection;
