"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TwitterIcon from "../../Assets/TwitterIcon.png";
import LinkedInIcon from "../../Assets/LinkedInIcon.png";
export default function TeamCard({
  name,
  role,
  twitter,
  linkedin,
  image,
  index = 0,
}) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.3 }}
      viewport={{ once: true }}
      className="relative w-40 sm:w-52 rounded-xl overflow-hidden shadow-md group bg-white cursor-pointer"
      onClick={() => setShowInfo((prev) => !prev)}
    >
      <div className="absolute top-2 right-2 z-10 bg-white/80 p-1 rounded-full">
        <i className="fas fa-heart text-red-500 text-sm" />
      </div>
      <Image
        src={image}
        alt={`${name} photo`}
        width={208}
        height={280}
        className="object-cover w-full h-full"
      />
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-purple-700 to-transparent z-0" />
      <div
        className={`
          absolute bottom-0 w-full p-3 text-center z-10 transform transition-all duration-500 ease-in-out
          ${showInfo ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
          group-hover:translate-y-0 group-hover:opacity-100
        `}
      >
        <h4 className="font-semibold text-white text-sm">{name}</h4>
        <p className="text-xs text-gray-300">{role}</p>
        <div className="mt-3 flex justify-center gap-4">
          {twitter && (
            <a href={twitter} target="_blank" rel="noopener noreferrer">
              <Image
                src={TwitterIcon}
                alt="Twitter"
                width={24}
                height={24}
                className="hover:opacity-75"
              />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <Image
                src={LinkedInIcon}
                alt="LinkedIn"
                width={24}
                height={24}
                className="hover:opacity-75"
              />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
