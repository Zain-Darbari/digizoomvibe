import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ['Digital Marketing', 'Web Development', 'Video Editing', 'Graphic Designing'];
  const fullText = texts[currentIndex];

  useEffect(() => {
    if (currentText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentText('');
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentText, currentIndex, fullText]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="w-8 h-8 text-purple-400 animate-spin" />
          <span className="mx-3 text-lg text-gray-400">Welcome to the Future</span>
          <Sparkles className="w-8 h-8 text-teal-400 animate-spin" />
        </div>
        
        <h1 className="text-5xl sm:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-teal-400 bg-clip-text text-transparent">
            DigiZoomVibe
          </span>
        </h1>
        
        <div className="text-2xl sm:text-4xl font-semibold mb-8 h-16 flex items-center justify-center">
          <span className="text-gray-300">Excellence in </span>
          <span className="ml-3 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent min-w-[300px] text-left">
            {currentText}
            <span className="animate-pulse">|</span>
          </span>
        </div>
        
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Transform your digital presence with our comprehensive suite of creative and technical services. 
          We bring your vision to life with cutting-edge solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
            <span className="flex items-center">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;