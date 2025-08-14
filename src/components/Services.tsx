import React from 'react';
import { Monitor, Palette, Code2, Smartphone, Search, Zap } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  color: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'Web Design',
      description: 'Creating visually appealing and user-friendly website designs that capture your brand essence.',
      icon: <Palette className="w-8 h-8" />,
      features: ['Custom Design', 'Brand Integration', 'User Experience', 'Modern Layouts'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 2,
      title: 'Front-End Development',
      description: 'Building interactive and responsive websites using modern technologies and best practices.',
      icon: <Code2 className="w-8 h-8" />,
      features: ['React Development', 'TypeScript', 'Modern CSS', 'Performance Optimization'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'Designing intuitive user interfaces and experiences that delight your users.',
      icon: <Monitor className="w-8 h-8" />,
      features: ['User Research', 'Wireframing', 'Prototyping', 'User Testing'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 4,
      title: 'Responsive Design',
      description: 'Ensuring your website looks and works perfectly on all devices and screen sizes.',
      icon: <Smartphone className="w-8 h-8" />,
      features: ['Mobile-First', 'Cross-Browser', 'Touch-Friendly', 'Flexible Layouts'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 5,
      title: 'SEO Optimization',
      description: 'Optimizing your website for search engines to improve visibility and rankings.',
      icon: <Search className="w-8 h-8" />,
      features: ['Technical SEO', 'Content Optimization', 'Meta Tags', 'Site Speed'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 6,
      title: 'Performance Optimization',
      description: 'Making your website fast, efficient, and providing the best user experience.',
      icon: <Zap className="w-8 h-8" />,
      features: ['Code Optimization', 'Image Compression', 'Caching', 'Bundle Analysis'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I offer a comprehensive range of web development and design services to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6">
                <button className={`w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="mb-6 opacity-90">
              Let's work together to create something amazing. I'm here to help bring your ideas to life.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;