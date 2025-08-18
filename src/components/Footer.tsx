import React from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { HiOfficeBuilding } from 'react-icons/hi';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Professional Journey', href: '#professional-journey' },
    { name: 'Leadership', href: '#leadership' },
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
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-paisley-pattern opacity-5"></div>
      <div className="absolute top-10 left-10 w-24 h-24 border border-yellow-400/20 rounded-full opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border border-yellow-400/15 rounded-full opacity-15"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Executive Profile */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                  <HiOfficeBuilding className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-serif">ANNAM KALYAN SRINIVAS</h3>
                  <p className="text-yellow-200 text-sm">Whole-time Director</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Leading Sai Silks (Kalamandir) Limited with vision, discipline, and impact. 
                Transforming retail leadership through strategic innovation and cultural preservation.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>📞 +91 98480 12345</span>
                <span>📧 kalyan@sskl.com</span>
              </div>
            </div>

            {/* Quick Navigation */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4 font-serif">Quick Navigation</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-yellow-300 transition-colors duration-300 text-sm"
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
                    <span className="text-gray-300 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Call-to-Action */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-3 font-serif">Ready to Connect?</h3>
              <p className="text-gray-300 mb-4 max-w-2xl mx-auto">
                For collaborations, speaking engagements, or professional discussions about retail leadership and strategic growth.
              </p>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-yellow-500 text-gray-900 hover:bg-yellow-400 transition-all duration-300 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <FiPhone className="w-5 h-5" />
                <span>Book a Call</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Annam Kalyan Srinivas. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-gray-400">Vijayawada, Andhra Pradesh</span>
              <span className="text-yellow-400">•</span>
              <span className="text-gray-400">Sai Silks (Kalamandir) Limited</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;