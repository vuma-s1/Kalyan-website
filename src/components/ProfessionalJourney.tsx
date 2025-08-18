import React from 'react';
import { BiBriefcase, BiTrendingUp } from 'react-icons/bi';
import { AiFillTrophy, AiFillStar } from 'react-icons/ai';
import { HiOfficeBuilding, HiAcademicCap } from 'react-icons/hi';

const ProfessionalJourney = () => {
  const timeline = [
    {
      year: '1995',
      icon: HiAcademicCap,
      event: 'Bachelor of Commerce',
      institution: 'Nagarjuna University',
      description: 'Completed undergraduate studies in Commerce with distinction, laying the foundation for business leadership',
      category: 'Education',
      highlight: false
    },
    {
      year: '1997',
      icon: HiAcademicCap,
      event: 'Postgraduate Diploma in Business Administration',
      institution: 'Institute of Marketing and Management, New Delhi',
      description: 'Specialized in Business Administration and Strategic Management, developing core business acumen',
      category: 'Education',
      highlight: false
    },
    {
      year: '2000s',
      icon: HiOfficeBuilding,
      event: 'Joined SSKL Leadership',
      institution: 'Sai Silks (Kalamandir) Limited',
      description: 'Assumed key leadership responsibilities and strategic planning, beginning the transformation journey',
      category: 'Career',
      highlight: true
    },
    {
      year: '2009',
      icon: AiFillTrophy,
      event: 'CBFC Appointment',
      institution: 'Central Board of Film Certification',
      description: 'Recognized for industry leadership and appointed to national board, demonstrating governance expertise',
      category: 'Recognition',
      highlight: true
    },
    {
      year: '2013',
      icon: AiFillTrophy,
      event: 'Handloom Board of India',
      institution: 'Government of India',
      description: 'Appointed to prestigious national board for textile industry, contributing to sector development',
      category: 'Recognition',
      highlight: true
    },
    {
      year: 'Present',
      icon: BiTrendingUp,
      event: 'Strategic Leadership',
      institution: 'Multi-brand Retail Expansion',
      description: 'Leading sustained growth and innovation across markets, driving SSKL to new heights',
      category: 'Leadership',
      highlight: true
    }
  ];

  return (
    <section id="professional-journey" className="py-24 bg-gradient-to-b from-white to-yellow-50 relative overflow-hidden">
      {/* Traditional Pattern Background */}
      <div className="absolute inset-0 bg-paisley-pattern opacity-5"></div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-yellow-400/20 rounded-full opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-yellow-400/15 rounded-full opacity-25"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 border border-yellow-400/10 rounded-full opacity-20"></div>
      <div className="absolute top-1/3 right-20 w-20 h-20 border border-yellow-400/15 rounded-full opacity-25"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="w-16 h-px bg-yellow-500"></div>
            <span className="text-yellow-600 text-lg font-medium tracking-wider uppercase">Career Timeline</span>
            <div className="w-16 h-px bg-yellow-500"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-serif">
            Professional Journey
            <span className="block text-yellow-600">Milestones & Achievements</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A comprehensive timeline showcasing the evolution from academic excellence to
            strategic leadership, highlighting key milestones and industry recognition.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 via-yellow-400/60 to-yellow-300/30"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="group relative animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute left-6 top-6 w-4 h-4 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 ${
                      item.highlight ? 'bg-yellow-500' : 'bg-gray-400/30'
                    }`}>
                      {item.highlight && <AiFillStar className="w-2 h-2 text-white absolute inset-0 m-auto" />}
                    </div>

                    {/* Content Card */}
                    <div className={`ml-16 p-6 rounded-lg shadow-lg border transition-all duration-300 hover:shadow-xl ${
                      item.highlight
                        ? 'bg-gradient-to-r from-yellow-50 to-yellow-100/50 border-yellow-300/30'
                        : 'bg-white border-gray-200'
                    }`}>
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            item.highlight ? 'bg-yellow-500' : 'bg-gray-100'
                          }`}>
                            <IconComponent className={`w-5 h-5 ${
                              item.highlight ? 'text-gray-900' : 'text-gray-600'
                            }`} />
                          </div>
                          <div>
                            <h4 className={`text-lg font-bold font-serif ${
                              item.highlight ? 'text-gray-800' : 'text-gray-700'
                            }`}>
                              {item.event}
                            </h4>
                            <p className="text-yellow-600 font-medium text-sm">{item.institution}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            item.highlight
                              ? 'bg-yellow-500 text-gray-900'
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {item.category}
                          </span>
                          <div className={`text-2xl font-bold mt-1 ${
                            item.highlight ? 'text-yellow-600' : 'text-gray-400'
                          }`}>
                            {item.year}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Highlight Indicator */}
                      {item.highlight && (
                        <div className="mt-4 pt-4 border-t border-yellow-300/20">
                          <div className="flex items-center space-x-2">
                            <AiFillStar className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm font-medium text-yellow-600">Key Milestone</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Journey Summary */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="w-12 h-px bg-yellow-500"></div>
            <span className="text-yellow-600 text-lg font-medium tracking-wider uppercase">Journey Summary</span>
            <div className="w-12 h-px bg-yellow-500"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg border border-yellow-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiAcademicCap className="w-6 h-6 text-gray-900" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Education</h4>
              <p className="text-gray-600 text-sm">Strong academic foundation</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg border border-yellow-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BiBriefcase className="w-6 h-6 text-gray-900" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Career Growth</h4>
              <p className="text-gray-600 text-sm">Strategic leadership progression</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg border border-yellow-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <AiFillTrophy className="w-6 h-6 text-gray-900" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Recognition</h4>
              <p className="text-gray-600 text-sm">Industry and government appointments</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg border border-yellow-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BiTrendingUp className="w-6 h-6 text-gray-900" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Leadership</h4>
              <p className="text-gray-600 text-sm">Sustained growth and innovation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;
