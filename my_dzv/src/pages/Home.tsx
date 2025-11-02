import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Code, Palette, TrendingUp, Video, Zap, Globe, Smartphone, Database, Cloud, Cpu, Monitor, Users, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCounterAnimation } from '../hooks/useCounterAnimation';

const Home = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fallingIcons, setFallingIcons] = useState<number[]>([]);
  const texts = ['Digital Marketing', 'Web Development', 'Video Editing', 'Graphic Designing'];
  const fullText = texts[currentIndex];

  const stat1Counter = useCounterAnimation({ end: 500, duration: 2000 });
  const stat2Counter = useCounterAnimation({ end: 100, duration: 2000 });
  const stat3Counter = useCounterAnimation({ end: 5, duration: 2000 });
  const stat4Counter = useCounterAnimation({ end: 99, duration: 2000 });

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

  const techIcons = [
    { Icon: Code, delay: '0s', position: { top: '10%', left: '10%' }, id: 0 },
    { Icon: Palette, delay: '0.5s', position: { top: '20%', right: '15%' }, id: 1 },
    { Icon: Globe, delay: '1s', position: { top: '60%', left: '5%' }, id: 2 },
    { Icon: Smartphone, delay: '1.5s', position: { top: '70%', right: '10%' }, id: 3 },
    { Icon: Database, delay: '2s', position: { top: '30%', left: '80%' }, id: 4 },
    { Icon: Cloud, delay: '2.5s', position: { top: '80%', left: '70%' }, id: 5 },
    { Icon: Cpu, delay: '3s', position: { top: '15%', left: '60%' }, id: 6 },
    { Icon: Monitor, delay: '3.5s', position: { top: '50%', right: '5%' }, id: 7 },
    { Icon: TrendingUp, delay: '4s', position: { top: '40%', left: '20%' }, id: 8 },
    { Icon: Video, delay: '4.5s', position: { top: '85%', left: '40%' }, id: 9 },
    { Icon: Zap, delay: '5s', position: { top: '25%', left: '40%' }, id: 10 },
  ];

  const handleIconClick = (id: number) => {
    setFallingIcons(prev => [...prev, id]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFallingIcons([]);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: TrendingUp,
      title: 'Strategic Growth',
      description: 'Data-driven marketing strategies that deliver measurable results and sustainable business growth.'
    },
    {
      icon: Code,
      title: 'Modern Development',
      description: 'Cutting-edge web solutions built with the latest technologies for optimal performance.'
    },
    {
      icon: Video,
      title: 'Creative Content',
      description: 'Compelling video content that tells your story and engages your target audience effectively.'
    },
    {
      icon: Palette,
      title: 'Visual Excellence',
      description: 'Stunning graphic designs that capture attention and communicate your brand message clearly.'
    }
  ];

  const stats = [
    { number: 500, suffix: '+', label: 'Projects Completed', icon: Award, counter: stat1Counter },
    { number: 100, suffix: '+', label: 'Happy Clients', icon: Users, counter: stat2Counter },
    { number: 5, suffix: '+', label: 'Years Experience', icon: CheckCircle, counter: stat3Counter },
    { number: 99, suffix: '%', label: 'Success Rate', icon: TrendingUp, counter: stat4Counter }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'DigiZoomVibe transformed our digital presence completely. Their strategic approach and creative execution exceeded all our expectations.'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCorp',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The team delivered exceptional results on time and within budget. Our website traffic increased by 300% in just 3 months.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, Creative Studio',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Professional, creative, and results-driven. DigiZoomVibe is our go-to partner for all digital marketing needs.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        
        {/* Tech-themed floating icons with pulse animation */}
        <div className="absolute inset-0">
          {techIcons.map((tech, i) => {
            const isFalling = fallingIcons.includes(tech.id);
            const floatingPosition = isFalling ? 10 + (i * 8) : null;
            return (
              <div
                key={i}
                onClick={() => handleIconClick(tech.id)}
                className={`absolute cursor-pointer transition-all $${
                  isFalling
                    ? 'opacity-60 animate-bounce'
                    : 'animate-pulse opacity-20 hover:opacity-40'
                }`}
                style={{
                  ...(isFalling ? {
                    top: 'calc(100vh - 180px)',
                    left: `${floatingPosition}%`,
                    right: 'auto',
                    transform: 'rotate(360deg)',
                    transitionProperty: 'top, left, transform, opacity',
                    transitionDuration: '2s, 2s, 2s, 1s',
                    transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                  } : {
                    ...tech.position,
                    animationDelay: tech.delay,
                    animationDuration: `${3 + Math.random() * 2}s`
                  })
                }}
              >
                <tech.Icon className="w-8 h-8 text-purple-400" />
              </div>
            );
          })}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping mr-3"></div>
            <span className="text-lg text-gray-400">Welcome to the Future of Digital Excellence</span>
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-ping ml-3"></div>
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
            We bring your vision to life with cutting-edge solutions that drive real business results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/services"
              className="group bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              <span className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link 
              to="/about"
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                Why Choose DigiZoomVibe?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine creativity, technology, and strategy to deliver exceptional digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group text-center">
                <div className="bg-gradient-to-r from-purple-500 to-teal-500 p-4 rounded-xl inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/10 to-teal-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group" ref={stat.counter.elementRef}>
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                  <div className="bg-gradient-to-r from-purple-500 to-teal-500 p-3 rounded-lg inline-flex mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.counter.count}{stat.suffix}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-purple-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-400 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-teal-600/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss your project and create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link 
              to="/services"
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;