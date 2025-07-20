"use client";

import { useMemo } from "react";
import TeamCard from "../Component/imagecard/TeamCard";
import Girlimage from "../Assets/Girlimage.jpg";

export default function TeamPage() {
  const teamData = useMemo(
    () => [
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
    ],
    []
  );

  return (
    <section className="bg-black py-16 text-white">
      <h2 className="text-center text-3xl font-bold mb-12">Meet Our Team</h2>
      <div className="flex flex-wrap justify-center gap-6 px-6">
        {teamData.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
            twitter={member.twitter}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </section>
  );
}
