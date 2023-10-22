'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'



const Card1 = ({image, title, description, width, height=160}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className={`flex flex-col flex-nowrap items-center gap-8 w-80`}>
            <div>
                <Image src={image} alt="logo icon" width={width} height={height} />
            </div>
            <div className="flex flex-col items-center gap-4 self-stretch">
                <h4 className="text-2xl font-medium tz-text-dark whitespace-nowrap">{title}</h4>
                <p className="text-base font-normal tz-text-gray">{description}</p>
            </div>
            
        </div>
    );
};

export default Card1;
