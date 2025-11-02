import React from 'react';
import { TrendingUp, Code, Video, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Strategic campaigns that drive engagement, boost conversions, and maximize your ROI across all digital channels.',
      features: ['SEO Optimization', 'Social Media Marketing', 'PPC Campaigns', 'Content Strategy'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      features: ['Responsive Design', 'E-commerce Solutions', 'Custom Applications', 'Performance Optimization'],
      color: 'from-blue-500 to-teal-500'
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video production and editing services that captivate your audience and tell your story effectively.',
      features: ['Motion Graphics', 'Color Grading', 'Audio Enhancement', 'Multi-platform Optimization'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Palette,
      title: 'Graphic Designing',
      description: 'Creative visual solutions that communicate your brand message with impact and aesthetic excellence.',
      features: ['Brand Identity', 'Print Design', 'Digital Assets', 'UI/UX Design'],
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business and engage your audience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-teal-400 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-700">
                <button className="text-purple-400 hover:text-purple-300 font-semibold transition-colors group-hover:translate-x-2 transform duration-300">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;