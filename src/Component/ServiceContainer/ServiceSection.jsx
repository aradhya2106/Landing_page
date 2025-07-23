// "use client";
// import React, { memo } from "react";
// import Image from "next/image";
// import { servicesData } from "@/data/servicesData";
// import Lamp from "../../Assets/Lamp.png";
// import GradientGlowText from "../Typography/Heading";

// const ServiceCard = memo(({ service }) => (
//   <div className="relative bg-[#1a1a1a] border-[10px] md:border-[17px] border-[#2b2b2b] rounded-[20px] md:rounded-[30px] shadow-[0_0_30px_#0ff3ff22] hover:shadow-blue-500/40 transition duration-300 w-full max-w-[1100px]">
//     <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] h-full">
//       <div className="bg-black w-full flex flex-col justify-center p-6 sm:p-8 md:p-10 rounded-t-[20px] md:rounded-[30px_0_0_30px] relative">
//         <div className="absolute -top-[85px] sm:-top-[70px] md:-top-[80px] left-2 sm:left-4 md:left-6 z-20">
//           <Image
//             src={Lamp}
//             alt="Lamp"
//             width={300}
//             height={250}
//             className="object-contain drop-shadow-[0_0_25px_#0ff3ff] opacity-90"
//           />
//         </div>

//         <h3 className="text-2xl font-extrabold uppercase tracking-wide mb-2 bg-gradient-to-r from-[#B145FF] to-[#30A0FF] text-transparent bg-clip-text">
//           {service.title}
//         </h3>
//         <h4 className="text-base md:text-lg font-medium text-white mb-1">
//           {service.subtitle}
//         </h4>
//         <p className="text-gray-300 text-sm max-w-md">{service.description}</p>
//       </div>

//       <div className="flex items-center justify-center bg-black px-4 py-4 md:px-4">
//         <div className="p-2 rounded-xl bg-black">
//           {service.iconType === "image" ? (
//             <Image
//               src={service.icon}
//               alt={`${service.title} icon`}
//               width={250}
//               height={250}
//               className="object-contain"
//             />
//           ) : (
//             <service.icon size={32} color="white" />
//           )}
//         </div>
//       </div>

//       <div className="bg-[#1e1e1e] border-t border-b border-black rounded-b-[20px] md:rounded-[0_30px_30px_0] flex flex-col justify-center h-full w-full">
//         <ul className="text-sm text-white w-full">
//           {service.features?.map((feature, idx) => (
//             <li
//               key={idx}
//               className={`px-4 py-3 border-black ${
//                 idx !== 0 ? "border-t" : ""
//               } ${idx !== service.features.length - 1 ? "border-b" : ""}`}
//             >
//               {feature}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   </div>
// ));

// const ServiceSection = () => {
//   return (
//     <section
//       id="ServiceSection"
//       className="bg-black text-white py-20 px-4 md:px-16 lg:px-32"
//     >
//       <div className="text-center mb-20">
//         <GradientGlowText className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-black mb-6 tracking-widest leading-tight">
//           SERVICES
//         </GradientGlowText>

//         <p className="text-base sm:text-lg md:text-xl">
//           Your All-In-One{" "}
//           <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text font-bold">
//             Web3 Growth Engine
//           </span>
//         </p>
//         <p className="text-sm text-gray-400 mt-2 max-w-xl mx-auto px-2">
//           End-to-end strategies and execution to help Web3, AI, and Tech
//           startups grow with clarity and confidence.
//         </p>
//       </div>
//       <div className="flex flex-col gap-12 items-center">
//         {servicesData.map((service, index) => (
//           <ServiceCard key={index} service={service} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default memo(ServiceSection);


"use client";
import React, { memo } from "react";
import Image from "next/image";
import { servicesData } from "@/data/servicesData";
import Lamp from "../../Assets/Lamp.png";
import GradientGlowText from "../Typography/Heading";

const ServiceCard = memo(({ service }) => (
  <div className="relative bg-[#1a1a1a] border-[10px] md:border-[17px] border-[#2b2b2b] rounded-[20px] md:rounded-[30px] shadow-[0_0_30px_#0ff3ff22] hover:shadow-blue-500/40 transition duration-300 w-full max-w-[1100px]">
    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] h-full">
      <div className="bg-black w-full flex flex-col justify-center p-6 sm:p-8 md:p-10 rounded-t-[20px] md:rounded-[30px_0_0_30px] relative">
        <div className="absolute -top-[85px] sm:-top-[70px] md:-top-[80px] left-2 sm:left-4 md:left-6 z-20">
          <Image
            src={Lamp}
            alt="Lamp"
            width={300}
            height={250}
            className="object-contain drop-shadow-[0_0_25px_#0ff3ff] opacity-90"
          />
        </div>

        <h3 className="text-2xl font-extrabold uppercase tracking-wide mb-2 bg-gradient-to-r from-[#B145FF] to-[#30A0FF] text-transparent bg-clip-text">
          {service.title}
        </h3>
        <h4 className="text-base md:text-lg font-medium text-white mb-1">
          {service.subtitle}
        </h4>
        <p className="text-gray-300 text-sm max-w-md">{service.description}</p>
      </div>

      <div className="flex items-center justify-center bg-black px-4 py-4 md:px-4">
        <div className="p-2 rounded-xl bg-black">
          {service.iconType === "image" ? (
            <Image
              src={service.icon}
              alt={`${service.title} icon`}
              width={250}
              height={250}
              className="object-contain"
            />
          ) : (
            <service.icon size={32} color="white" />
          )}
        </div>
      </div>

      <div className="bg-[#1e1e1e] border-t border-b border-black rounded-b-[20px] md:rounded-[0_30px_30px_0] flex flex-col justify-center h-full w-full">
        <ul className="text-sm text-white w-full">
          {service.features?.map((feature, idx) => (
            <li
              key={idx}
              className={`px-4 py-3 border-black ${
                idx !== 0 ? "border-t" : ""
              } ${idx !== service.features.length - 1 ? "border-b" : ""}`}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
));

const ServiceSection = () => {
  return (
    <section
      id="ServiceSection"
      className="bg-black text-white py-20 px-4 md:px-16 lg:px-32"
    >
      <div className="text-center mb-20">
        <GradientGlowText className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-black mb-6 tracking-widest leading-tight">
          SERVICES
        </GradientGlowText>

        {/* ✅ Updated text size here */}
        <p className="text-4xl sm:text-4xl md:text-4xl font-semibold text-center leading-snug">
          Your All-In-One{" "}
          <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text font-bold">
            Web3 Growth Engine
          </span>
        </p>

        <p className="text-sm text-gray-400 mt-2 max-w-xl mx-auto px-2">
          End-to-end strategies and execution to help Web3, AI, and Tech
          startups grow with clarity and confidence.
        </p>
      </div>

      <div className="flex flex-col gap-12 items-center">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default memo(ServiceSection);
