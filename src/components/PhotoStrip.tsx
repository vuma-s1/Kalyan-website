import React, { useEffect, useState } from 'react';

const PhotoStrip = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const photos = [
    { 
      src: "/images/Kalamandir 11th anniversary (52).JPG", 
      caption: "Kalamandir 11th Anniversary Celebration" 
    },
    { 
      src: "/images/image3.png", 
      caption: "Kalamandir Foundation Event - Public Address" 
    },
    { 
      src: "/images/teambanner-img.jpg", 
      caption: "SSKL Leadership Team - A Brand of Sai Silks (Kalamandir) Limited" 
    },
    { 
      src: "/images/WhatsApp Image 2025-08-28 at 13.58.12_4dc2a8e5.jpg", 
      caption: "SFA Social Media Awards - 7th Edition Recognition" 
    },
    { 
      src: "/images/20240905_213252_0000.jpg", 
      caption: "Traditional Indian Textile Showroom - Cultural Heritage Celebration" 
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
      backgroundColor: '#ffe5d4'
    }}>

      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-2 lg:mb-16 animate-fade-in">
                      <h2 className="text-4xl lg:text-5xl font-bold mb-2 lg:mb-6 drop-shadow-lg" style={{ fontFamily: 'Didot HTF L24 Light', letterSpacing: '0.05em', fontWeight: '700', color: '#9b3534' }}>
            In Action
          </h2>
          <p className="text-xl drop-shadow-md" style={{ fontFamily: 'Poppins', fontWeight: '400', color: '#9b3534' }}>
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
                  className="w-full h-full object-cover object-center"
                  style={{ 
                    objectPosition: index === 0 ? 'center 25%' : index === 1 ? 'center 20%' : index === 2 ? 'center 35%' : index === 3 ? 'center 25%' : index === 4 ? 'center 30%' : 'center center' 
                  }}
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