"use client";
import React, { useMemo } from "react";
import InfoCard from "../Component/InfoCard/InfoCard";
import internet from "../Assets/internet.png";
import Peoples from "../Assets/Peoples.png";
import Rocket from "../Assets/Rocket.png";
import Circle from "../Assets/Circle.png";
import GradientGlowText from "../Component/Typography/Heading"; 
export default function OurAdvantages() {
  const advantages = useMemo(
    () => [
      {
        image: Peoples,
        text: "Web3 & AI Native Team",
        subtext:
          "Built for Web3. We speak the language of DeFi, DAOs, and AI, creating strategies made for crypto-native audiences, not Web2 templates.",
        className: "h-[239px] w-[362px]",
      },
      {
        image: Circle,
        text: "Outcome-Driven Approach",
        subtext:
          "We build campaigns that drive real business results from user growth to fundraising with ROI at the core of everything we do.",
        className: "h-[413px] w-[362px]",
      },
      {
        image: Rocket,
        text: "Fundraising & Launchpad Support",
        subtext:
          "We support your raise with sharp GTM strategy, decks, and warm intros. Then help you launch seamlessly across Tier-1 platforms with full listing, liquidity, and compliance support.",
        className: "h-[413px] w-[362px]",
      },
      {
        image: internet,
        text: "Global Network Access",
        subtext:
          "We launch globally, activate locally. With on-ground partners and cultural fluency, we scale campaigns that truly resonate.",
        className: "h-[239px] w-[362px]",
      },
    ],
    []
  );
  const leftColumn = [advantages[0], advantages[2]];
  const rightColumn = [advantages[1], advantages[3]];
  return (
    <section id="OurAdvantages" className="bg-black text-white py-20 px-6 text-center">
      <GradientGlowText className="text-xl sm:text-2xl md:text-5xl lg:text-6xl font-black mb-6 tracking-widest">
        OUR ADVANTAGES
      </GradientGlowText>
      <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4">
        Not Just Another Agency,
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          A Real Growth Partner.
        </span>
      </h3>
      <p className="text-gray-400 max-w-2xl mx-auto mb-14 text-sm sm:text-base md:text-lg">
        Here's how we help Web3 and AI startups grow with purpose.
      </p>
      <div className="flex justify-center flex-col md:flex-row gap-6 items-center">
        <div className="flex flex-col gap-y-4 items-center">
          {leftColumn.map((item, index) => (
            <InfoCard
              key={index}
              image={item.image}
              text={item.text}
              subtext={item.subtext}
              className={item.className}
            />
          ))}
        </div>
        <div className="flex flex-col gap-y-4 items-center">
          {rightColumn.map((item, index) => (
            <InfoCard
              key={index + 2}
              image={item.image}
              text={item.text}
              subtext={item.subtext}
              className={item.className}
            />
          ))}
        </div>
      </div>
      <a
        href="https://calendly.com/gtmlabsxyz/consult" >
        <button className="mt-12 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg">
          Turn Strategy Into Action
        </button>
      </a>
    </section>
  );
}
