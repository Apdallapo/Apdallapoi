import React, { useState, useEffect } from 'react';
import { Code, Palette, Smartphone, Database, Globe, Zap } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills: Skill[] = [
    { name: 'HTML/CSS', level: 90, icon: <Code className="w-6 h-6" />, color: 'from-orange-400 to-red-500' },
    { name: 'JavaScript', level: 85, icon: <Zap className="w-6 h-6" />, color: 'from-yellow-400 to-orange-500' },
    { name: 'React', level: 80, icon: <Globe className="w-6 h-6" />, color: 'from-blue-400 to-cyan-500' },
    { name: 'UI/UX Design', level: 75, icon: <Palette className="w-6 h-6" />, color: 'from-pink-400 to-purple-500' },
    { name: 'Responsive Design', level: 88, icon: <Smartphone className="w-6 h-6" />, color: 'from-green-400 to-emerald-500' },
    { name: 'Node.js', level: 70, icon: <Database className="w-6 h-6" />, color: 'from-emerald-400 to-teal-500' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills');
      if (element) {
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY;

        if (scrollTop > elementTop - windowHeight + elementHeight / 2) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className={`bg-gradient-to-r ${skill.color} p-3 rounded-lg text-white mr-4`}>
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 200}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">2+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">30+</div>
              <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;