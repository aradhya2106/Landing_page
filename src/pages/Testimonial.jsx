"use client";
import React from 'react';
import TestimonialCard from '@/Component/TestimonialCard/testimonialCard.jsx'; // <<<--- This is where we import the card component


const testimonials = [
  {
    name: 'Rodriguez',
    title: 'CEO, TechCorp',
    quote: '"GTM Labs transformed our go-to-market strategy and helped us achieve 300% growth in just 6 months."',
  },
  {
    name: 'Maria Garcia',
    title: 'Founder, StartUpXYZ',
    quote: '"Their expertise in development and marketing is unmatched. Highly recommend their services."',
  },
  {
    name: 'David Kim',
    title: 'CTO, InnovateLab',
    quote: '"Professional, reliable, and results-driven. GTM Labs exceeded all our expectations."',
  },
];

const ClientTestimonials = () => {
  return (
    <section className="relative bg-black text-white py-28 px-4 md:px-8 lg:px-16 overflow-hidden font-sora">
      {/* Background Gradient Circles (LARGER, ADJUSTED POSITION, OPACITY-50 REMOVED) */}
      {/* Left-side blue gradient */}
      <div className="absolute w-[1000px] h-[1000px] left-[-700px] top-[-30%]
                      bg-[radial-gradient(circle_at_center,rgba(48,158,255,0.574)_0%,rgba(48,158,255,0.377)_30%,rgba(48,158,255,0.188)_50%,transparent_70%)]
                      rounded-full blur-[80px] z-10 pointer-events-none" /> {/* opacity-50 removed */}
      
      {/* Right-side purple gradient */}
      <div className="absolute w-[1000px] h-[1000px] right-[-700px] top-[-30%]
                      bg-[radial-gradient(circle_at_center,rgba(177,69,255,0.574)_0%,rgba(177,69,255,0.377)_30%,rgba(177,69,255,0.188)_50%,transparent_70%)]
                      rounded-full blur-[80px] z-10 pointer-events-none" /> {/* opacity-50 removed */}

      {/* Content wrapper with higher z-index to stay above the gradients */}
      <div className="max-w-7xl mx-auto text-center z-20 relative">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-2">
          What Our{' '}
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            Clients Say
          </span>
        </h2>
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          Don't just take our word for it
        </p>

        {/* Testimonial Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              title={testimonial.title}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;