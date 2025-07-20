'use client';

import { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('packages');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const packagesSection = document.getElementById('service-packages');
      const solutionsSection = document.getElementById('smart-solutions');
      
      if (packagesSection && solutionsSection) {
        const packagesRect = packagesSection.getBoundingClientRect();
        const solutionsRect = solutionsSection.getBoundingClientRect();
        
        if (solutionsRect.top <= 100) {
          setActiveSection('solutions');
        } else {
          setActiveSection('packages');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-1/2 right-6 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col space-y-4">
        <button
          onClick={() => scrollToSection('service-packages')}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            activeSection === 'packages'
              ? 'bg-gradient-to-r from-purple-500 to-blue-500 scale-125'
              : 'bg-gray-600 hover:bg-gray-400'
          }`}
          title="Service Packages"
        />
        <button
          onClick={() => scrollToSection('smart-solutions')}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            activeSection === 'solutions'
              ? 'bg-gradient-to-r from-purple-500 to-blue-500 scale-125'
              : 'bg-gray-600 hover:bg-gray-400'
          }`}
          title="Smart Solutions"
        />
      </div>
    </div>
  );
};

export default Navigation; 