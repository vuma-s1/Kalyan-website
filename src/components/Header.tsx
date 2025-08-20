import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { HiOfficeBuilding } from 'react-icons/hi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <div className="container mx-auto px-4 mt-4">
        {/* Card-style Navigation Bar */}
        <div className="relative rounded-xl shadow-lg border border-yellow-400/30 backdrop-blur-sm" style={{ backgroundColor: 'rgba(155, 53, 52, 0.85)' }}>
          {/* Logo is now outside the flex container to not affect its height */}
          <a href="#home" className={`group ${isMenuOpen ? 'lg:block hidden' : 'block'}`}>
            <img 
              src="/images/logo main.png" 
              alt="AJKS Logo" 
              className="absolute top-1/2 -translate-y-1/2 left-4 lg:left-8 w-20 h-20 lg:w-24 lg:h-24 object-contain hover:scale-105 transition-all duration-300 z-10"
              style={{ transform: 'translateY(-45%)' }}
            />
          </a>

          <div className="flex items-center justify-between px-8 py-3 pl-24 lg:pl-32">
            {/* Logo Placeholder - This empty div maintains the space correctly in the flex layout */}
            <div className="flex-shrink-0"></div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`font-medium text-sm transition-all duration-300 ${
                    item.name === 'Home' 
                      ? 'text-white px-4 py-2 rounded-lg shadow-sm' 
                      : 'text-white hover:text-yellow-200'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Contact Button & Mobile Menu Toggle */}
            <div className="flex items-center space-x-4">
              {/* Contact Button */}
              <button
                onClick={scrollToContact}
                className="hidden md:flex items-center space-x-2 px-4 py-2 text-white hover:text-yellow-200 transition-all duration-300 font-medium rounded-lg shadow-sm"
              >
                <FiPhone className="w-4 h-4" />
                <span>Contact Us</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden w-8 h-8 flex items-center justify-center transition-colors duration-300 text-white hover:text-yellow-200"
              >
                {isMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`lg:hidden transition-all duration-500 overflow-hidden border-t border-yellow-400/30 relative z-5 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <nav className="py-4 px-6">
              <div className="flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-medium py-2 px-3 rounded-lg transition-all duration-300 text-sm ${
                      item.name === 'Home'
                        ? 'text-white'
                        : 'text-white hover:text-yellow-200 hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
                <button
                  onClick={() => {
                    scrollToContact();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 px-4 py-2 text-white hover:text-yellow-200 transition-all duration-300 font-medium rounded-lg mt-2 self-start"
                >
                  <FiPhone className="w-4 h-4" />
                  <span>Contact Us</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;