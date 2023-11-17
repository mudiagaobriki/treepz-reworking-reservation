'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'



const Card10 = ({image, title, description}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex flex-col items-start gap-8 px-3 pt-3 pb-6 w-96 rounded-2xl flex-shrink-0 bg-white tz-border-cc">
            <Image src={image} alt="card image" width={360} height={120} className="self-stretch rounded-xl" />
            <h4 className="text-3xl font-semibold tz-text-dark">{title}</h4>
            <p className="text-base font-normal tz-text-gray self-stretch">{description}</p>
        </div>
    );
};

export default Card10;
