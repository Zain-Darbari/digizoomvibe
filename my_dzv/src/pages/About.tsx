import { Users, Award, Clock, Target, Heart, Lightbulb, Rocket, Shield } from 'lucide-react';
import { useCounterAnimation } from '../hooks/useCounterAnimation';

const About = () => {
  const stat1Counter = useCounterAnimation({ end: 100, duration: 2000 });
  const stat2Counter = useCounterAnimation({ end: 500, duration: 2000 });
  const stat3Counter = useCounterAnimation({ end: 5, duration: 2000 });
  const stat4Counter = useCounterAnimation({ end: 99, duration: 2000 });

  const stats = [
    { icon: Users, number: 100, suffix: '+', label: 'Happy Clients', counter: stat1Counter },
    { icon: Award, number: 500, suffix: '+', label: 'Projects Completed', counter: stat2Counter },
    { icon: Clock, number: 5, suffix: '+', label: 'Years Experience', counter: stat3Counter },
    { icon: Target, number: 99, suffix: '%', label: 'Success Rate', counter: stat4Counter }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'We pour our heart into every project, ensuring exceptional results that exceed expectations.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Staying ahead of trends and technologies to deliver cutting-edge solutions for our clients.'
    },
    {
      icon: Rocket,
      title: 'Results Focused',
      description: 'Every strategy is designed to drive measurable growth and achieve your business objectives.'
    },
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description: 'Building long-term partnerships through transparency, reliability, and consistent delivery.'
    }
  ];

  const team = [
    {
      name: 'Abdul Rehman',
      role: 'Creative Designer',
      image: 'abdulrehman.png',
      bio: 'Leading creative vision with 8+ years in digital design and brand strategy.'
    },
    {
      name: 'Sabih Majid',
      role: 'Lead Developer',
      image: 'sabih.jpg',
      bio: 'Full-stack developer specializing in modern web technologies and scalable solutions.'
    },
    {
      name: 'Ezan Aziz',
      role: 'Marketing Strategist',
      image: 'ezan.png',
      bio: 'Digital marketing expert with proven track record in ROI-driven campaigns.'
    },
    {
      name: 'Zain Darbari',
      role: 'Video Producer',
      image: 'zaain.jpg',
      bio: 'Award-winning video producer creating compelling visual stories for brands.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              About DigiZoomVibe
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We are a dynamic digital agency passionate about creating exceptional digital experiences that drive real business results.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              Founded in 2019, DigiZoomVibe emerged from a simple belief: every business deserves a powerful digital presence. 
              What started as a small team of passionate creatives has grown into a full-service digital agency.
            </p>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              We've helped hundreds of businesses transform their digital presence, from startups taking their first steps online 
              to established enterprises looking to innovate and grow.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Our approach combines strategic thinking with creative execution, ensuring every project not only looks amazing 
              but delivers measurable results for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                ref={stat.counter.elementRef}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 text-center group hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.counter.count}{stat.suffix}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-lg text-gray-400">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex p-4 bg-gradient-to-r from-purple-500 to-teal-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-400">The creative minds behind DigiZoomVibe</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden group hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-teal-600/20 rounded-2xl p-12 border border-purple-500/20">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work Together?</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your digital presence and achieve your business goals.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;