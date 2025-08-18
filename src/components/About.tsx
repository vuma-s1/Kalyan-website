import React from 'react';
import { BiBriefcase } from 'react-icons/bi';
import { AiFillTrophy, AiFillStar } from 'react-icons/ai';
import { HiAcademicCap, HiOfficeBuilding, HiUserGroup } from 'react-icons/hi';

const About = () => {
  const credentials = [
    {
      icon: HiAcademicCap,
      title: "Bachelor of Commerce",
      institution: "Nagarjuna University",
      year: "1995"
    },
    {
      icon: BiBriefcase,
      title: "Postgraduate Diploma",
      institution: "Institute of Marketing and Management",
      year: "1997"
    },
    {
      icon: AiFillTrophy,
      title: "Law Degree",
      institution: "Legal Education",
      year: "2000s"
    }
  ];

  const leadershipAreas = [
    {
      icon: HiOfficeBuilding,
      title: "Strategic Planning",
      description: "Long-term vision and market expansion strategies"
    },
    {
      icon: HiUserGroup,
      title: "Team Leadership",
      description: "Building high-performance executive teams"
    },
    {
      icon: AiFillStar,
      title: "Operational Excellence",
      description: "Process optimization and performance improvement"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-yellow-50 to-white relative overflow-hidden">
      {/* Traditional Pattern Background */}
      <div className="absolute inset-0 bg-temple-border opacity-5"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-yellow-400/20 rounded-full opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 border border-yellow-400/15 rounded-full opacity-25"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 border border-yellow-400/10 rounded-full opacity-20"></div>
      <div className="absolute top-1/3 right-20 w-20 h-20 border border-yellow-400/15 rounded-full opacity-25"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="w-16 h-px bg-yellow-500"></div>
            <span className="text-yellow-600 text-lg font-medium tracking-wider uppercase">Executive Profile</span>
            <div className="w-16 h-px bg-yellow-500"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-serif">
            From Vijayawada to
            <span className="block text-yellow-600">the Boardroom</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A journey from traditional roots to modern retail leadership, combining academic excellence with strategic vision.
          </p>
        </div>

        {/* Portrait and Summary Section */}
        <div className="flex justify-center mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl">
            {/* Executive Summary */}
            <div className="animate-fade-in-up -ml-4">
              <div className="max-w-3xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 font-serif">Executive Summary</h3>
                <div className="prose prose-lg text-gray-700 space-y-1">
                  <p className="text-lg leading-relaxed">
                    Annam Kalyan Srinivas was born in Vijayawada, Andhra Pradesh, on July 16, 1974, and completed his schooling at SDA High School.
                  </p>
                  <p className="text-lg leading-relaxed">
                    In 1995, he earned his Bachelor's degree in Commerce from Nagarjuna University, followed by a Postgraduate Diploma in Business Administration from the Institute of Marketing and Management, New Delhi. He later obtained a law degree, equipping him with a rare combination of strategic, operational, and legal expertise.
                  </p>
                  <p className="text-lg leading-relaxed">
                    With over 15 years of experience in the retail sector, he has played a pivotal role in leading Sai Silks (Kalamandir) Limited through sustained growth, multi-brand expansion, and operational excellence. His leadership focuses on building high performance teams, strengthening business systems, and creating opportunities that achieve commercial success while preserving the cultural heritage of Indian textiles.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Portrait */}
            <div className="animate-fade-in-up ml-8 mt-16" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-yellow-200/20 to-yellow-300/20 rounded-2xl shadow-xl border-4 border-yellow-400/30 relative overflow-hidden">
                  {/* Traditional Pattern Overlay */}
                  <div className="absolute inset-0 bg-paisley-pattern opacity-10"></div>
                  
                  {/* Portrait Placeholder */}
                  <div className="absolute inset-4 bg-gradient-to-br from-yellow-100/80 to-yellow-200/80 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-4xl font-bold text-gray-900 font-traditional">AKS</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 font-serif">ANNAM KALYAN SRINIVAS</h3>
                      <p className="text-sm text-gray-700 font-medium">Whole-time Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-4 mb-4">
              <div className="w-12 h-px bg-yellow-500"></div>
              <span className="text-yellow-600 text-sm font-medium tracking-wider uppercase">Academic & Professional Credentials</span>
              <div className="w-12 h-px bg-yellow-500"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {credentials.map((credential, index) => {
              const IconComponent = credential.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg border border-yellow-200 p-6 text-center hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-gray-900" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2 font-serif">{credential.title}</h4>
                  <p className="text-yellow-600 font-medium text-sm mb-1">{credential.institution}</p>
                  <p className="text-gray-600 text-sm">{credential.year}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership Areas */}
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl p-12 border border-yellow-200 relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-paisley-pattern opacity-5"></div>
          <div className="absolute top-6 right-6 w-16 h-16 border border-yellow-400/30 rounded-full opacity-20"></div>
          <div className="absolute bottom-6 left-6 w-12 h-12 border border-yellow-400/25 rounded-full opacity-15"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-4 mb-4">
                <div className="w-12 h-px bg-yellow-500"></div>
                <span className="text-yellow-600 text-sm font-medium tracking-wider uppercase">Core Leadership Areas</span>
                <div className="w-12 h-px bg-yellow-500"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif">Strategic Expertise</h3>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Key areas of leadership that drive organizational success and sustainable growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {leadershipAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-yellow-300/50 hover:bg-white hover:shadow-xl transition-all duration-300 text-center group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-gray-900" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-3 font-serif">{area.title}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{area.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;