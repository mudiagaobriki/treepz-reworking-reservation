'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'



const Card9 = ({image, title, description}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex flex-col items-start w-80 rounded-xl">
            <div className="flex flex-col items-start gap-4 pt-5 pb-10 px-5 self-stretch rounded-t-xl tz-bg-light">
                <h4 className="text-xl font-medium tz-text-dark">{title}</h4>
                <p className="text-sm font-normal self-stretch tz-text-gray-3">{description}</p>
            </div>
            <div className="rounded-b-xl">
                <Image src={image} alt="logo icon" width={320} height={280} className="rounded-b-xl" />
            </div>
        </div>
    );
};

export default Card9;
