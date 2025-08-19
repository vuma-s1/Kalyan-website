import React, { useEffect, useState } from 'react';

const PhotoStrip = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const photos = [
    { 
      src: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800", 
      caption: "Reviewing store designs" 
    },
    { 
      src: "https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&w=800", 
      caption: "Speaking at retail events" 
    },
    { 
      src: "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=800", 
      caption: "CSR work with Kalamandir Foundation" 
    },
    { 
      src: "https://images.pexels.com/photos/3184355/pexels-photo-3184355.jpeg?auto=compress&cs=tinysrgb&w=800", 
      caption: "Early career study moments" 
    },
    { 
      src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800", 
      caption: "Meeting teams on the shop floor" 
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [photos.length]);

  return (
    <section className="py-6 lg:py-20 relative overflow-hidden" style={{ 
      backgroundImage: 'url("/images/herobg.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Background Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-2 lg:mb-16 animate-fade-in">
                      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2 lg:mb-6 drop-shadow-lg" style={{ fontFamily: 'Komrile Condensed, serif', letterSpacing: '0.05em' }}>
            In Action
          </h2>
          <p className="text-xl text-yellow-100 drop-shadow-md" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal' }}>
            Leadership moments that define a journey
          </p>
        </div>
        
        <div className="relative h-96 rounded-lg overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {photos.map((photo, index) => (
              <div key={index} className="flex-shrink-0 w-full h-full relative">
                <img 
                  src={photo.src} 
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-cream font-serif">
                    {photo.caption}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-gold scale-125' : 'bg-cream/50 hover:bg-cream/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoStrip;