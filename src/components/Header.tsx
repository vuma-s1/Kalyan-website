import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { HiOfficeBuilding } from 'react-icons/hi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Professional Journey', href: '#professional-journey' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-gray-900/95 backdrop-blur-md shadow-xl border-b border-yellow-400/20"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <a href="#home" className="group">
              <div className="transition-all duration-300 text-white">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                    <HiOfficeBuilding className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <h1 className="text-lg lg:text-xl font-bold font-serif group-hover:text-yellow-300 transition-colors duration-300 tracking-wide">
                      ANNAM KALYAN SRINIVAS
                    </h1>
                    <p className="text-xs font-light tracking-wider uppercase text-gray-300">
                      Whole-time Director
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="font-medium relative group transition-all duration-300 text-gray-300 hover:text-yellow-300"
              >
                <span className="relative">
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            ))}
          </nav>

          {/* Contact Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Professional Contact Button */}
            <button
              onClick={scrollToContact}
              className="hidden md:flex items-center space-x-2 px-6 py-3 bg-yellow-500 text-gray-900 hover:bg-yellow-400 transition-all duration-300 font-semibold rounded-lg shadow-lg group"
            >
              <FiPhone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="tracking-wide">Contact</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center transition-colors duration-300 text-gray-300 hover:text-yellow-300"
            >
              {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-6 border-t border-yellow-400/20">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-medium py-3 px-4 rounded-lg transition-all duration-300 text-gray-300 hover:text-yellow-300 hover:bg-gray-800/50"
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => {
                  scrollToContact();
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-2 px-6 py-3 bg-yellow-500 text-gray-900 hover:bg-yellow-400 transition-all duration-300 font-semibold rounded-lg mt-4 self-start shadow-lg"
              >
                <FiPhone className="w-4 h-4" />
                <span className="tracking-wide">Contact</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;