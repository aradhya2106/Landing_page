"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TeamCard from "../Component/imagecard/TeamCard";
import Girlimage from "../Assets/Girlimage.jpg";

export default function TeamSection() {
  const teamData = [
    {
      name: "John Doe",
      role: "CEO",
      image: Girlimage,
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: Girlimage,
      twitter: "https://twitter.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
    },
    {
      name: "Alice Johnson",
      role: "Design Head",
      image: Girlimage,
      twitter: "https://twitter.com/alicejohnson",
      linkedin: "https://linkedin.com/in/alicejohnson",
    },
    {
      name: "Robert Brown",
      role: "Marketing Lead",
      image: Girlimage,
      twitter: "https://twitter.com/robertbrown",
      linkedin: "https://linkedin.com/in/robertbrown",
    },
  ];

  // detect <1024px
  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 1023px)");
    const onChange = (e) => setIsSmall(e.matches);
    mql.addEventListener("change", onChange);
    setIsSmall(mql.matches);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // carousel index & control
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const startCarousel = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((i) => (i + 1) % teamData.length);
    }, 3000);
  };
  const stopCarousel = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    if (isSmall) startCarousel();
    else {
      stopCarousel();
      setCurrent(0);
    }
    return stopCarousel;
  }, [isSmall]);
  const variants = {
    enter: { x: "100%", opacity: 0 },
    center: {
      x: "0%",
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.8, ease: "easeIn" },
    },
  };

  return (
    <section className="bg-black py-16 text-white overflow-hidden">
      <h2 className="text-center text-3xl font-bold mb-12">Meet Our Team</h2>

      {isSmall ? (
        <div
          className="relative w-full h-[340px] flex items-center justify-center"
          onTouchStart={stopCarousel}
          onTouchEnd={startCarousel}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={current}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute"
            >
              <TeamCard {...teamData[current]} index={current} />
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6 px-6">
          {teamData.map((m, i) => (
            <TeamCard key={i} {...m} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}
