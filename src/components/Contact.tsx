import React, { useState } from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: FiPhone,
      title: "Phone",
      value: "+91 98855 21122",
      description: "Direct line for urgent matters"
    },
    {
      icon: FiMail,
      title: "Email",
      value: "kalyan@kalamandir.com",
      description: "For detailed discussions"
    },
    {
      icon: FiMapPin,
      title: "Office",
      value: "Vijayawada, Andhra Pradesh",
      description: "Headquarters location"
    }
  ];

  return (
    <section id="contact" className="py-8 lg:py-20" style={{ backgroundColor: '#ffe5d4' }}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2 lg:mb-4 font-serif">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            For collaborations, speaking engagements, or professional discussions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Methods */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg border border-yellow-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(155, 53, 52, 0.85)' }}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-1">{method.title}</h4>
                    <p className="text-gray-700 font-semibold mb-1">{method.value}</p>
                    <p className="text-gray-600/70 text-sm">{method.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <div className="bg-white rounded-xl shadow-lg border border-yellow-100 p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-serif">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-yellow-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-yellow-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@domain.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-800 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-yellow-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    placeholder="Message subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-yellow-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white py-4 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 uppercase tracking-wide"
                  style={{ backgroundColor: 'rgba(155, 53, 52, 0.85)' }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;