"use client"; 

import React, { useState } from 'react';

import GradientButton from '../Component/GradientButton/GradientButton'; 

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'message' && value.length > 250) {
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields (Name, Email, Phone Number).');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (

    <section className="relative bg-black text-white py-8 px-4 md:px-8 lg:px-16 overflow-hidden font-sora"> 

      <div className="max-w-6xl mx-auto z-10 relative"> 

        <h2 className="text-4xl md:text-5xl  text-center mb-8"> 
          Contact Us
        </h2>

        <div className="relative p-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-lg">

          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-md opacity-80"></div>
          
          <div className="relative bg-black rounded-2xl px-8 py-6">
            <form onSubmit={handleSubmit} className="space-y-6"> 

              <div>
                <label className="block text-white text-lg font-medium mb-2"> 
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Please Enter your name"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 text-base focus:outline-none focus:border-blue-500 transition-colors" 
                  required
                />
              </div>

              
              <div>
                <label className="block text-white text-lg font-medium mb-2"> 
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Please Enter your email id"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 text-base focus:outline-none focus:border-blue-500 transition-colors" 
                  required
                />
              </div>

              
              <div>
                <label className="block text-white text-lg font-medium mb-2"> 
                  Phone number<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Please Enter your phone number"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 text-base focus:outline-none focus:border-blue-500 transition-colors" 
                  required
                />
              </div>

              
              <div>
                <label className="block text-white text-lg font-medium mb-2"> 
                  Message<span className="text-gray-400 font-normal"> (Optional)</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here."
                  rows="3" 
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 text-base resize-none focus:outline-none focus:border-blue-500 transition-colors" 
                ></textarea>
                <p className="text-gray-400 text-sm text-right mt-1">
                  *Limit of max 250 characters. ({formData.message.length}/250)
                </p>
              </div>

              
              <div className="flex justify-center pt-4"> 
                <GradientButton type="submit"> 
                  Submit
                </GradientButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;