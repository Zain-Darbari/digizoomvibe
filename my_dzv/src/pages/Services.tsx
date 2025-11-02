import React, { useState, useEffect } from 'react';
import { TrendingUp, Code, Video, Palette, ArrowLeft, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCounterAnimation } from '../hooks/useCounterAnimation';

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  useEffect(() => {
    setSelectedService(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const price1Counter = useCounterAnimation({ end: 999, duration: 2000 });
  const price2Counter = useCounterAnimation({ end: 1999, duration: 2000 });
  const price3Counter = useCounterAnimation({ end: 3999, duration: 2000 });
  const price4Counter = useCounterAnimation({ end: 1499, duration: 2000 });
  const price5Counter = useCounterAnimation({ end: 2999, duration: 2000 });
  const price6Counter = useCounterAnimation({ end: 5999, duration: 2000 });
  const price7Counter = useCounterAnimation({ end: 299, duration: 2000 });
  const price8Counter = useCounterAnimation({ end: 599, duration: 2000 });
  const price9Counter = useCounterAnimation({ end: 1299, duration: 2000 });
  const price10Counter = useCounterAnimation({ end: 399, duration: 2000 });
  const price11Counter = useCounterAnimation({ end: 899, duration: 2000 });
  const price12Counter = useCounterAnimation({ end: 1799, duration: 2000 });

  const services = [
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Strategic campaigns that drive engagement, boost conversions, and maximize your ROI across all digital channels.',
      features: ['SEO Optimization', 'Social Media Marketing', 'PPC Campaigns', 'Content Strategy'],
      color: 'from-purple-500 to-pink-500',
      detailedDescription: 'Our digital marketing experts create data-driven strategies that amplify your brand presence across all digital platforms. We focus on measurable results and sustainable growth.',
      packages: [
        { name: 'Starter', price: 999, counter: price1Counter, features: ['Basic SEO', 'Social Media Setup', '2 Campaigns/month'] },
        { name: 'Professional', price: 1999, counter: price2Counter, features: ['Advanced SEO', 'Multi-platform Management', '5 Campaigns/month', 'Analytics Reports'] },
        { name: 'Enterprise', price: 3999, counter: price3Counter, features: ['Complete Digital Strategy', 'Dedicated Account Manager', 'Unlimited Campaigns', 'Custom Solutions'] }
      ]
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      features: ['Responsive Design', 'E-commerce Solutions', 'Custom Applications', 'Performance Optimization'],
      color: 'from-blue-500 to-teal-500',
      detailedDescription: 'We build scalable, secure, and lightning-fast websites using cutting-edge technologies. From simple landing pages to complex web applications, we deliver excellence.',
      packages: [
        { name: 'Basic Website', price: 1499, counter: price4Counter, features: ['5 Pages', 'Responsive Design', 'Basic SEO', '3 Months Support'] },
        { name: 'Business Website', price: 2999, counter: price5Counter, features: ['10 Pages', 'CMS Integration', 'E-commerce Ready', '6 Months Support'] },
        { name: 'Custom Application', price: 5999, counter: price6Counter, features: ['Custom Development', 'Database Integration', 'API Development', '12 Months Support'] }
      ]
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video production and editing services that captivate your audience and tell your story effectively.',
      features: ['Motion Graphics', 'Color Grading', 'Audio Enhancement', 'Multi-platform Optimization'],
      color: 'from-orange-500 to-red-500',
      detailedDescription: 'Transform raw footage into compelling visual stories. Our video editing team combines technical expertise with creative vision to produce content that engages and converts.',
      packages: [
        { name: 'Basic Edit', price: 299, counter: price7Counter, features: ['Up to 5 minutes', 'Basic Transitions', 'Color Correction', '2 Revisions'] },
        { name: 'Professional Edit', price: 599, counter: price8Counter, features: ['Up to 15 minutes', 'Motion Graphics', 'Audio Enhancement', '5 Revisions'] },
        { name: 'Premium Production', price: 1299, counter: price9Counter, features: ['Unlimited Length', 'Advanced Effects', 'Custom Graphics', 'Unlimited Revisions'] }
      ]
    },
    {
      icon: Palette,
      title: 'Graphic Designing',
      description: 'Creative visual solutions that communicate your brand message with impact and aesthetic excellence.',
      features: ['Brand Identity', 'Print Design', 'Digital Assets', 'UI/UX Design'],
      color: 'from-green-500 to-teal-500',
      detailedDescription: 'Create a lasting impression with our comprehensive graphic design services. We craft visual identities that resonate with your audience and strengthen your brand presence.',
      packages: [
        { name: 'Logo Package', price: 399, counter: price10Counter, features: ['Logo Design', '3 Concepts', 'Vector Files', '2 Revisions'] },
        { name: 'Brand Identity', price: 899, counter: price11Counter, features: ['Complete Branding', 'Business Cards', 'Letterhead', 'Brand Guidelines'] },
        { name: 'Complete Design Suite', price: 1799, counter: price12Counter, features: ['Full Brand Package', 'Marketing Materials', 'Digital Assets', 'Ongoing Support'] }
      ]
    }
  ];

  if (selectedService !== null) {
    const service = services[selectedService];
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setSelectedService(null)}
            className="flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                <service.icon className="w-12 h-12 text-white" />
              </div>
              
              <h1 className="text-4xl font-bold text-white mb-6">{service.title}</h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                {service.detailedDescription}
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-semibold text-white">What's Included:</h3>
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    {feature}
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Get Started Today
              </Link>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Choose Your Package</h3>
              {service.packages.map((pkg, index) => (
                <div key={index} ref={pkg.counter.elementRef} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-semibold text-white">{pkg.name}</h4>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-400">${pkg.counter.count}</div>
                      <div className="text-sm text-gray-400">Starting from</div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                    Choose Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
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
              
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-teal-400 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-700">
                <button 
                  onClick={() => setSelectedService(index)}
                  className="text-purple-400 hover:text-purple-300 font-semibold transition-colors group-hover:translate-x-2 transform duration-300"
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;