import React, { useState, useRef } from 'react';
import GradientGlowText from '@/Component/Typography/Heading';


const PartnersAndPlatformsSection = () => {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <div className="relative z-10 px-8 py-20">
                <div className="text-center mb-32">
                    <GradientGlowText
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider"
                        circleSize={120}
                        baseTextColor="text-gray-500"
                    >
                        PARTNERS & PLATFORMS
                    </GradientGlowText>
                </div>
                <div className="max-w-6xl mx-auto mb-40">
                    <h2 className="text-4xl font-bold text-center mb-20">Partners</h2>
                    <div className="h-40 flex items-center justify-center">
                        <div className="text-gray-500 text-lg">
                            Partner logos and content will go here
                        </div>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto mb-40">
                    <h2 className="text-4xl font-bold text-center mb-20">
                        <span
                            className="bg-gradient-to-r from-[#B145FF] to-[#30A0FF] bg-clip-text text-transparent">
                            Platforms
                        </span>{" "}
                        We Work On
                    </h2>
                    <div className="h-40 flex items-center justify-center">
                        <div className="text-gray-500 text-lg">
                            Platform icons and content will go here
                        </div>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto mb-0">
                    <h2 className="text-4xl font-bold text-center mb-20">
                        <span
                            className="bg-gradient-to-r from-[#B145FF] to-[#30A0FF] bg-clip-text text-transparent">
                            Tools & Tech Stack
                        </span>
                    </h2>
                    <div className="h-40 flex items-center justify-center">
                        <div className="text-gray-500 text-lg">
                            Tools and tech stack icons will go here
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnersAndPlatformsSection;