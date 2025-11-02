import React from 'react';
import { Zap, Heart, Mail, Phone, Clock, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const services = [
    { name: 'Digital Marketing', path: '/services' },
    { name: 'Web Development', path: '/services' },
    { name: 'Video Editing', path: '/services' },
    { name: 'Graphic Design', path: '/services' }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' }
  ];

  return (
    <footer className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-teal-500 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                DigiZoomVibe
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming digital experiences with innovative solutions in marketing, development, video editing, and design.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`bg-slate-800 p-3 rounded-lg text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-purple-400 mt-1" />
                <div>
                  <p className="text-gray-400">digizoomvibe@gmail.com</p>
            
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-purple-400 mt-1" />
                <div>
                  <p className="text-gray-400">+92 370 1124976</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-10 h-10 text-purple-400 mt-1" />
                <div>
                  <p className="text-gray-400">Business Hourse</p>
                  <p className="text-sm text-gray-500">Monday-Friday: 10:00 PM - 10:00 AM
                    Saturday - Sunday: 10:00 PM - 8:00 AM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-600/10 to-teal-600/10 rounded-2xl p-8 mb-12 border border-purple-500/20">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-400">Subscribe to our newsletter for the latest updates and insights</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
            />
            <button className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-2 text-red-500 animate-pulse" />
              <span>© 2024 DigiZoomVibe. All rights reserved.</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
          
          <div className="mt-6 text-center text-gray-400">
            <p>Transforming digital experiences one project at a time.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;