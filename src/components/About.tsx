import React from 'react';
import { Download, User, GraduationCap, Heart } from 'lucide-react';

const About: React.FC = () => {
  const handleDownloadCV = () => {
    // In a real implementation, this would download the actual CV
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Abdalla_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Professional Background
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    I'm a passionate beginner web developer with a strong foundation in modern web technologies. 
                    My journey started with curiosity about how websites work, and has evolved into a deep love 
                    for creating digital experiences that make a difference.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Education & Learning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Self-taught through online courses, documentation, and hands-on projects. 
                    Currently expanding my skills in React, TypeScript, and modern development practices. 
                    I believe in continuous learning and staying updated with the latest web technologies.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-lg">
                  <Heart className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Passion & Goals
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    I'm passionate about creating clean, responsive, and user-friendly websites. 
                    My goal is to help businesses and individuals establish their online presence 
                    through beautiful and functional web solutions.
                  </p>
                </div>
              </div>

              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop"
                  alt="Abdalla - Web Developer"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-600/20 rounded-2xl transform rotate-6 scale-105"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;