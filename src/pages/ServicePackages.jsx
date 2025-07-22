'use client';

import { useState } from 'react';
import GradientGlowText from '@/Component/Typography/Heading';


const ServicePackages = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const packages = [
    {
      id: 1,
      title: 'STARTER',
      price: '$999',
      features: [
        'Basic consultation',
        'Strategy planning',
        'Email support'
      ],
      popular: false
    },
    {
      id: 2,
      title: 'PROFESSIONAL',
      price: '$2999',
      features: [
        'Full consultation',
        'Implementation',
        'Priority support'
      ],
      popular: true
    },
    {
      id: 3,
      title: 'ENTERPRISE',
      price: 'Custom',
      features: [
        'Custom solutions',
        'Dedicated team',
        '24/7 support'
      ],
      popular: false
    }
  ];

  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-black"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        {/* Main Title */}
        <div className="text-center mb-20">
          <GradientGlowText
            className="text-3xl sm:text-3xl md:text-6xl lg:text-7xl font-bold text-gray-600 mb-11 cursor-pointer whitespace-nowrap overflow-hidden"
            circleSize={120}
            baseTextColor="text-gray-600"
          >
            SERVICE PACKAGES
          </GradientGlowText>
          
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-sora text-white mb-4">
            <div className="mb-2">Choose a Plan That Fits</div>
            <div>
              Your{' '}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Growth Stage
              </span>
            </div>
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto px-4">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
             className="relative group transition-all duration-500 transform hover:scale-105"
              onMouseEnter={() => setHoveredCard(pkg.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Background with Glow Effect */}
              <div className="relative bg-black/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 h-full transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20">
                
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                      Popular
                    </span>
                  </div>
                )}

                {/* Card Content */}
                <div className="text-center">
                  {/* Title */}
                  <h3 className="text-2xl font-light text-white mb-4 font-sora">{pkg.title}</h3>
                  
                  {/* Price */}
                  <div className="mb-6 md:mb-8">
                    <span className="text-2xl md:text-3xl lg:text-3xl font-bold text-white font-sora">
                      {pkg.price}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center text-gray-300">
                        <svg 
                          className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                        <span className="text-sm md:text-base text-center">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl transition-opacity duration-300 ${
                  hoveredCard === pkg.id ? 'opacity-100' : 'opacity-0'
                }`}></div>
                {/* CTA Button - ABSOLUTELY BULLETPROOF */}
                <a
                  href="https://calendly.com/gtmlabsxyz/consult"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 mt-4 relative z-10 font-sora"
                  tabIndex={0}
                >
                  Schedule a call
                </a>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default ServicePackages; 