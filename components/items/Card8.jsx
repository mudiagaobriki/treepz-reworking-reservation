'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'

const Card8 = ({image, title, description}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex flex-col items-center gap-4 w-96">
            <div className="flex items-start gap-3 w-full">
                <div className="flex items-center p-2 rounded-full tz-bg-orange">
                    <Image src={image} alt="logo icon" width={20} height={20} />
                </div>
                <h4 className="text-xl font-semibold tz-text-dark">{title}</h4>
            </div>
            <div className="self-stretch">
                <p className="text-base font-normal tz-text-gray">{description}</p>
            </div>
            
        </div>
    );
};

export default Card8;
