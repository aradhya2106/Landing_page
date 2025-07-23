"use client";
import { useState } from "react";
import Image from "next/image";

export default function TeamCard({ name, role, twitter, linkedin, image }) {
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo((prev) => !prev);
  };

  return (
    <div
      className="relative w-40 sm:w-52 rounded-xl overflow-hidden shadow-md group bg-white cursor-pointer"
      onClick={handleClick}
    >
      <div className="absolute top-2 right-2 z-10 bg-white/80 p-1 rounded-full">
        <i className="fas fa-heart text-red-500 text-sm"></i>
      </div>

      <Image
        src={image}
        alt={name}
        width={208}
        height={280}
        className="object-cover w-full h-full"
      />

      {/* Gradient overlay */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-purple-700 to-transparent z-0" />

      {/* Info Reveal (hover on desktop + tap on mobile) */}
      <div
        className={`
          absolute bottom-0 w-full p-3 text-center z-10 transform transition-all duration-500 ease-in-out
          ${showInfo ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
          group-hover:translate-y-0 group-hover:opacity-100
        `}
      >
        <h4 className="font-semibold text-white text-sm">{name}</h4>
        <p className="text-xs text-gray-300">{role}</p>
        <div className="mt-2 flex justify-center gap-3">
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-white hover:text-blue-400 text-sm"></i>
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in text-white hover:text-blue-300 text-sm"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
