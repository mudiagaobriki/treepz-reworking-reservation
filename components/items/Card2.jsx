'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'



const Card2 = ({image, title, description}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex flex-col items-start gap-9 w-96 flex-shrink-0">
            <div>
                <Image src={image} alt="logo icon" width={105} height={75} />
            </div>
            <div className="flex flex-col items-start gap-8 self-stretch">
                <h4 className="text-3xl font-semibold tz-text-dark">{title}</h4>
                <p className="text-base font-normal tz-text-gray self-stretch">{description}</p>
            </div>
        </div>
    );
};

export default Card2;
