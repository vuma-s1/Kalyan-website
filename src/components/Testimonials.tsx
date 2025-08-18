import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, Award } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Kalyan's leadership blends sharp business discipline with genuine care for people and culture. He is as focused on building relationships as he is on delivering results.",
      name: "Industry Leader",
      position: "Former Colleague",
      company: "Retail Excellence Forum",
      rating: 5
    },
    {
      quote: "His vision for retail goes far beyond sales. He thinks about long term growth, sustainable practices and the people who make it all possible.",
      name: "Business Partner", 
      position: "Strategic Advisor",
      company: "Global Retail Advisory",
      rating: 5
    },
    {
      quote: "Kalyan has an ability to see the big picture while paying attention to the smallest detail. That balance is rare and invaluable in today's competitive market.",
      name: "Team Member",
      position: "Senior Executive",
      company: "Sai Silks (Kalamandir) Limited",
      rating: 5
    },
    {
      quote: "Working with him means working with someone who inspires you to aim higher and equips you with the tools to get there.",
      name: "Colleague",
      position: "Department Head",
      company: "Operations Excellence",
      rating: 5
    },
    {
      quote: "He builds trust instantly, and once you work with him, you realise that his word is as strong as his strategy.",
      name: "Industry Peer",
      position: "Board Member",
      company: "Industry Advisory Council",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-cream to-white relative overflow-hidden">
      {/* Traditional decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-gold/20 rounded-full opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-gold/15 rounded-full opacity-25"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 border border-gold/10 rounded-full opacity-20"></div>
      <div className="absolute top-1/3 right-20 w-20 h-20 border border-gold/15 rounded-full opacity-25"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="w-16 h-px bg-gold"></div>
            <span className="text-gold text-lg font-medium tracking-wider uppercase">Professional Endorsements</span>
            <div className="w-16 h-px bg-gold"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-serif">
            Words From My Network
          </h2>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
            The impact of leadership is best reflected in the voices of those who have worked alongside it. Colleagues, partners and industry peers share their thoughts on Annam Kalyan Srinivas and the values he brings to every role.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-lg shadow-2xl border border-gold/20 p-12 lg:p-16">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-gold" />
              </div>
            </div>
            
            <div className="text-center animate-fade-in">
              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-gold fill-current" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-2xl lg:text-3xl text-slate-900 font-light leading-relaxed mb-10 italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              {/* Author Info */}
              <div className="border-t border-gold/30 pt-8">
                <div className="flex items-center justify-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <p className="text-slate-900 text-xl font-semibold">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-gold font-medium">
                      {testimonials[currentTestimonial].position}
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm font-medium">
                  {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-12">
            <button 
              onClick={prevTestimonial}
              className="group w-14 h-14 bg-white hover:bg-gold rounded-full flex items-center justify-center transition-all duration-300 shadow-lg border border-gold/20 hover:border-gold"
            >
              <ChevronLeft className="w-6 h-6 text-slate-700 group-hover:text-slate-900 transition-colors" />
            </button>
            
            {/* Testimonial Indicators */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentTestimonial === index 
                      ? 'bg-gold scale-125 shadow-lg' 
                      : 'bg-slate-300 hover:bg-gold/50 hover:scale-110'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="group w-14 h-14 bg-white hover:bg-gold rounded-full flex items-center justify-center transition-all duration-300 shadow-lg border border-gold/20 hover:border-gold"
            >
              <ChevronRight className="w-6 h-6 text-slate-700 group-hover:text-slate-900 transition-colors" />
            </button>
          </div>
        </div>

        {/* Additional Recognition */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="w-12 h-px bg-gold"></div>
            <span className="text-gold text-lg font-medium tracking-wider uppercase">Industry Recognition</span>
            <div className="w-12 h-px bg-gold"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-lg shadow-lg border border-gold/20">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-slate-900" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Leadership Excellence</h4>
              <p className="text-slate-600 text-sm">Recognized for outstanding strategic leadership</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg border border-gold/20">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-slate-900" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Industry Impact</h4>
              <p className="text-slate-600 text-sm">Significant contribution to retail sector growth</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg border border-gold/20">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Quote className="w-6 h-6 text-slate-900" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Peer Recognition</h4>
              <p className="text-slate-600 text-sm">Highly regarded by industry professionals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;