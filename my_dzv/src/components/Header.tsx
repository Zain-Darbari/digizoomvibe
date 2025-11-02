import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleNavClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="bg-white p-1 rounded-lg">
        <img 
        src="digizoomvibe.png" 
        alt="Digi Zoom Vibe Logo" 
        className="w-12 h-12 object-contain"
        />
        </div>

            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              DigiZoomVibe
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" onClick={() => handleNavClick('/')} className={`transition-colors duration-300 ${location.pathname === '/' ? 'text-purple-400' : 'text-gray-300 hover:text-purple-400'}`}>Home</Link>
            <Link to="/services" onClick={() => handleNavClick('/services')} className={`transition-colors duration-300 ${location.pathname === '/services' ? 'text-purple-400' : 'text-gray-300 hover:text-purple-400'}`}>Services</Link>
            <Link to="/about" onClick={() => handleNavClick('/about')} className={`transition-colors duration-300 ${location.pathname === '/about' ? 'text-purple-400' : 'text-gray-300 hover:text-purple-400'}`}>About</Link>
            <Link to="/contact" onClick={() => handleNavClick('/contact')} className={`transition-colors duration-300 ${location.pathname === '/contact' ? 'text-purple-400' : 'text-gray-300 hover:text-purple-400'}`}>Contact</Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-purple-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm rounded-lg mt-2 p-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className={`transition-colors duration-300 ${location.pathname === '/' ? 'text-purple-400' : 'text-gray-300 hover:text-purple-400'}`} onClick={() => handleNavClick('/')}>Home</Link>
              <Link to="/services" className={`transition-colors duration-300 ${location.pathname === '/services' ? 'text-purple-400' : 'text-gray-300 hover:text-purple-400'}`} onClick={() => handleNavClick('/services')}>Services</Link>
              <Link to="/about" className={`transition-colors duration-300 ${location.pathname === '/about' ? 'text-purple-400' : 'text-gray-300 hover:text-purple-400'}`} onClick={() => handleNavClick('/about')}>About</Link>
              <Link to="/contact" className={`transition-colors duration-300 ${location.pathname === '/contact' ? 'text-purple-400' : 'text-gray-300 hover:text-purple-400'}`} onClick={() => handleNavClick('/contact')}>Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;