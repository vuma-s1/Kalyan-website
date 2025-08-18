import React from 'react';
import { Users, GraduationCap, Award, Heart } from 'lucide-react';

const RolesCSR = () => {
  const roles = [
    "Whole-Time Director, Sai Silks (Kalamandir) Limited — Leading strategy, growth, and operations.",
    "Trustee, Kalamandir Foundation — Driving education, culture, and community development projects.",
    "Member, Central Board of Film Certification (2009).",
    "Member, Handloom Board of India (2013)."
  ];

  const impacts = [
    {
      icon: GraduationCap,
      number: "10,000+",
      description: "students given access to education and learning resources"
    },
    {
      icon: Users,
      number: "500+", 
      description: "artisans trained and supported to sustain their livelihoods"
    },
    {
      icon: Heart,
      number: "50+",
      description: "community development programs successfully completed"
    }
  ];

  return (
    <section id="roles" className="py-20 bg-cream">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Roles Section */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6 font-serif">
              Commitment Beyond Business
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-fade-in">
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <div className="space-y-6">
                  {roles.map((role, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-charcoal/90 leading-relaxed">{role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-up">
              <div className="h-80 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3182822/pexels-photo-3182822.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="CSR activities and board meetings"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* CSR Impact Section */}
        <div>
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6 font-serif">
              Creating Lasting Change Through Kalamandir Foundation
            </h2>
            <p className="text-xl text-charcoal/80 max-w-4xl mx-auto leading-relaxed">
              Through the Kalamandir Foundation, Annam Kalyan Srinivas champions initiatives that go beyond business, focusing on education, women's empowerment and the revival of India's artisan traditions. The foundation works closely with communities to create opportunities, preserve cultural heritage and build a stronger, more inclusive future.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {impacts.map((impact, index) => {
              const IconComponent = impact.icon;
              return (
                <div 
                  key={index}
                  className="group text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-cream group-hover:text-navy" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-gold mb-4 font-serif">
                    {impact.number}
                  </div>
                  <p className="text-charcoal/90 leading-relaxed">
                    {impact.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RolesCSR;