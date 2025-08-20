import React from 'react';
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Kalyan's leadership blends sharp business discipline with genuine care for people and culture. He is as focused on building relationships as he is on delivering results.",
      author: "[Name]",
      position: "[Position]"
    },
    {
      quote: "His vision for retail goes far beyond sales. He thinks about long term growth, sustainable practices and the people who make it all possible.",
      author: "[Name]",
      position: "[Position]"
    },
    {
      quote: "Kalyan has an ability to see the big picture while paying attention to the smallest detail. That balance is rare and invaluable in today's competitive market.",
      author: "[Name]",
      position: "[Position]"
    },
    {
      quote: "He builds trust instantly, and once you work with him, you realise that his word is as strong as his strategy.",
      author: "[Name]",
      position: "[Position]"
    }
  ];

  return (
    <section id="testimonials" className="py-8 lg:py-24 relative overflow-hidden" style={{ 
      backgroundColor: '#ffe5d4'
    }}>

      <div className="absolute top-20 left-20 w-32 h-32 border border-yellow-400/30 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 border border-yellow-400/25 rounded-full opacity-15 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-4 lg:mb-16">
                      <h2 className="text-4xl lg:text-5xl font-bold mb-2 lg:mb-6 drop-shadow-lg" style={{ fontFamily: 'Didot HTF L24 Light', letterSpacing: '0.05em', fontWeight: '700', color: '#9b3534' }}>
            What Others Say
          </h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Poppins', fontWeight: '400', color: '#9b3534' }}>
            The impact of leadership is best reflected in the voices of those who have worked alongside it. Colleagues, partners and industry peers share their thoughts on Annam Kalyan Srinivas and the values he brings to every role.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
                          className="group backdrop-blur-sm rounded-xl shadow-lg border border-yellow-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
            style={{ 
              backgroundColor: '#ce6f69',
              animationDelay: `${index * 0.15}s`,
                padding: '0.75rem'
              }}
            >
              {/* Quote Icon */}
                              <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-lg flex items-center justify-center mb-2 lg:mb-3 group-hover:scale-110 transition-all duration-500 shadow-md" style={{ backgroundColor: 'rgba(155, 53, 52, 0.85)' }}>
                <BiSolidQuoteAltLeft className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
              </div>
              
              {/* Quote Text */}
              <blockquote className="leading-relaxed mb-2 lg:mb-3 italic text-xs lg:text-sm" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal', color: '#ffe5d4' }}>
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author Info */}
              <div className="border-t border-yellow-200 pt-1 lg:pt-2">
                <div className="font-bold mb-0 lg:mb-0.5 text-xs lg:text-sm" style={{ fontFamily: 'FocusGrotesk, sans-serif', color: '#ffe5d4' }}>
                  {testimonial.author}
                </div>
                <div className="text-xs" style={{ fontFamily: 'FocusGrotesk, sans-serif', fontWeight: 'normal', color: '#ffe5d4' }}>
                  {testimonial.position}
                </div>
              </div>

              {/* Decorative Corner Element */}
                              <div className="absolute top-0 right-0 w-4 h-4 opacity-20 rounded-bl-xl" style={{ backgroundColor: 'rgba(155, 53, 52, 0.85)' }}></div>
            </div>
          ))}
        </div>

        {/* Bottom Quote Icon */}
        <div className="text-center mt-8 lg:mt-16">
                      <div className="inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-full shadow-lg" style={{ backgroundColor: 'rgba(155, 53, 52, 0.85)' }}>
            <BiSolidQuoteAltRight className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;