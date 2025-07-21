
"use client";
import React from "react";
import Image from "next/image";
import { servicesData } from "@/data/servicesData";
import Lamp from "../../Assets/Lamp.png";

const ServiceSection = () => {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-16 lg:px-32">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-200 tracking-wide mb-4">
          SERVICES
        </h2>
        <p className="text-lg md:text-xl">
          Your All-In-One{" "}
          <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text font-bold">
            Web3 Growth Engine
          </span>
        </p>
        <p className="text-sm text-gray-400 mt-2 max-w-xl mx-auto">
          End-to-end strategies and execution to help Web3, AI, and Tech
          startups grow with clarity and confidence.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {servicesData.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="relative bg-black border-[10px] md:border-[17px] border-[#2b2b2b] rounded-[7px] p-6 md:p-10 shadow-[0_0_30px_#0ff3ff22] hover:shadow-blue-500/40 transition duration-300"
            >
            
              <div className="absolute top-0 left-6 transform -translate-y-1/2 z-10">
                <Image
                  src={Lamp}
                  alt="Lamp"
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>

        
              <div className="grid md:grid-cols-[1fr_80px_1fr] grid-cols-1 gap-6 z-10 relative mt-6">
             
                <div>
                  <h3 className="text-xl font-extrabold uppercase tracking-wide mb-1">
                    <span
                      className="inline-block"
                      style={{
                        WebkitTextStroke: "3px transparent",
                        WebkitTextFillColor: "black",
                        backgroundImage:
                          "linear-gradient(to right, #B145FF, #30A0FF)",
                        WebkitBackgroundClip: "text",
                        fontSize: "40px",
                        backgroundClip: "text",
                        color: "black",
                      }}
                    >
                      {service.title}
                    </span>
                  </h3>

                  <h4 className="text-base md:text-lg font-medium text-white mb-1">
                    {service.subtitle}
                  </h4>
                  <p className="text-gray-400 text-sm max-w-md">
                    {service.description}
                  </p>
                </div>


                <div className="flex justify-center items-center">
                  <div className="p-4 bg-gradient-to-br from-purple-700 to-blue-500 rounded-xl shadow-lg shadow-blue-500/30">
                    <Icon size={32} />
                  </div>
                </div>

                <ul className="text-sm text-gray-300 grid gap-2">
                  {service.features?.map((feature, idx) => (
                    <li
                      key={idx}
                      className="bg-[#1a1a1a] px-4 py-2 rounded-md border border-gray-700 hover:bg-[#222] transition"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceSection;
