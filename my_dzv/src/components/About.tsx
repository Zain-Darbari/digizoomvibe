'use client';

import React from 'react';
import { Users, Award, Clock, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '100+', label: 'Happy Clients' },
    { icon: Award, number: '500+', label: 'Projects Completed' },
    { icon: Clock, number: '5+', label: 'Years Experience' },
    { icon: Target, number: '99%', label: 'Success Rate' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                About DigiZoomVibe
              </span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              We are a dynamic digital agency passionate about creating exceptional digital experiences. 
              Our team combines creativity with technical expertise to deliver solutions that not only 
              look stunning but also drive real business results.
            </p>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              From startups to established enterprises, we've helped businesses across industries 
              establish their digital presence, engage their audiences, and achieve their goals 
              through innovative strategies and cutting-edge technology.
            </p>
            
            <button className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Work With Us
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 text-center group hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;