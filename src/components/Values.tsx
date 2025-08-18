import React from 'react';
import { Shield, Users, Leaf, MessageCircle } from 'lucide-react';

const Values = () => {
  const principles = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Every decision is grounded in honesty, transparency and doing what is right for the business, its people and the community."
    },
    {
      icon: Users,
      title: "People First", 
      description: "Teams are the foundation of every achievement. Investing in their growth and well-being creates the environment where success can thrive."
    },
    {
      icon: Leaf,
      title: "Sustainable Growth",
      description: "True progress means building for the long term, balancing commercial success with responsibility to the next generation."
    }
  ];

  const quotes = [
    "People are the foundation of every great business.",
    "Growth means nothing if it's not sustainable.",
    "Heritage is not just something we protect — it's something we live every day.",
    "Teams that trust each other can achieve the impossible.",
    "Success is measured not only in numbers, but in the lives we impact."
  ];

  return (
    <section id="values" className="py-20 bg-cream">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Principles Section */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6 font-serif">
              Principles That Guide My Work
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <div 
                  key={index}
                  className="group text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-cream group-hover:text-navy" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4 font-serif group-hover:text-navy transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-charcoal/80 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Personal Insights Section */}
        <div>
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6 font-serif">
              In His Own Words
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Leadership is shaped by values, experiences, and lessons learned along the way. Here are thoughts that reflect the mindset behind every decision and milestone.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {quotes.map((quote, index) => (
                <div 
                  key={index}
                  className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <MessageCircle className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
                    <blockquote className="text-lg text-charcoal italic leading-relaxed group-hover:text-navy transition-colors">
                      "{quote}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;