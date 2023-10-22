'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'

const Card5 = ({image, title, description}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex flex-col justify-center items-center -space-y-9">
            <div className="flex items-center w-24 h-20 -rotate-45 p-6 gap-3 flex-shrink-0 rounded-md z-10 rotate-[-39deg] tz-thick-border tz-bg-orange-99">
                <Image src={image} alt="logo icon" width={45.09} height={45.09} className="flex-shrink-0" />
            </div>
            <div className="flex flex-col items-start rounded-xl bg-white px-8 py-16 gap-3 z-0">
                <h4 className="text-3xl font-semibold self-stretch tz-text-dark">{title}</h4>
                <p className="text-base font-normal self-stretch tz-text-gray">{description}</p>
            </div>
        </div>
    );
};

export default Card5;
