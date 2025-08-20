import React from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { HiOfficeBuilding } from 'react-icons/hi';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Achievements', href: '#leadership-achievements' },
    { name: 'Roles', href: '#roles-initiatives' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Strategic Consulting',
    'Leadership Speaking',
    'Board Advisory',
    'Team Development'
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#9b3534' }}>
      {/* Background Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="py-8 lg:py-12">
          {/* Call-to-Action - Now at Top */}
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 lg:mb-3 font-serif">Ready to Connect?</h3>
            <p className="text-white mb-4 max-w-2xl mx-auto text-sm lg:text-base">
              For collaborations, speaking engagements, or professional discussions about retail leadership and strategic growth.
            </p>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center space-x-2 px-6 py-3 lg:px-8 lg:py-4 text-gray-900 transition-all duration-300 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm lg:text-base"
              style={{ backgroundColor: '#ffffff' }}
            >
              <FiPhone className="w-4 h-4 lg:w-5 lg:h-5" />
              <span>My Journey</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Quick Navigation */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4 font-serif">Quick Navigation</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white hover:text-yellow-300 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Professional Services */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4 font-serif">Professional Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-white text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Executive Profile - Now at Bottom */}
            <div className="md:col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <HiOfficeBuilding className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-bold text-white font-serif">ANNAM KALYAN SRINIVAS</h3>
                  <p className="text-white text-sm">Whole-time Director</p>
                </div>
              </div>
              <p className="text-white leading-relaxed mb-4 text-sm lg:text-base">
                Annam Kalyan Srinivas — Leading Sai Silks (Kalamandir) Limited with vision, discipline, and impact.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-sm text-white">
                <span>📞 +91 98855 21122</span>
                <span>📧 kalyan@kalamandir.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 lg:py-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white text-xs lg:text-sm mb-3 md:mb-0 text-center md:text-left">
              © 2024 Annam Kalyan Srinivas. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-1 sm:space-y-0 text-xs lg:text-sm text-center">
              <span className="text-white">Vijayawada, Andhra Pradesh</span>
              <span className="text-white hidden sm:inline">•</span>
              <span className="text-white">Sai Silks (Kalamandir) Limited</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;