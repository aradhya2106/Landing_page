"use client";
import React, { useMemo } from "react";
import InfoCard from "../Component/InfoCard/InfoCard";
import internet from "../Assets/internet.png";
import Peoples from "../Assets/Peoples.png";
import Rocket from "../Assets/Rocket.png";
import Circle from "../Assets/Circle.png";
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
  const leftColumn = useMemo(
    () => [advantages[0], advantages[2]],
    [advantages]
  );
  const rightColumn = useMemo(
    () => [advantages[1], advantages[3]],
    [advantages]
  );
  const titleChars = useMemo(
    () =>
      "OUR ADVANTAGES".split("").map((char, i) => (
        <span
          key={i}
          className="text-[#373737] opacity-90 transition duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#B145FF] hover:to-[#30A0FF] hover:drop-shadow-[0_0_6px_rgba(177,69,255,0.8)]"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      )),
    []
  );
  return (
    <section className="bg-[#0B0B0B] text-white py-20 px-6 text-center">
      <h2 className="flex justify-center flex-wrap gap-1 text-xl sm:text-2xl md:text-5xl lg:text-6xl font-black mb-6 tracking-widest">
        {titleChars}
      </h2>
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
      <button className="mt-12 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg">
        Turn Strategy Into Action
      </button>
    </section>
  );
}
