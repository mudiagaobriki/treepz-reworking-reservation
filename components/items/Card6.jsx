'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'



const Card6 = ({image, title, description, bgColor}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex flex-col items-start gap-8 w-96">
            <div>
                <Image src={image} alt="logo icon" width={52} height={52} />
            </div>
            <div className="flex flex-col items-start gap-4 self-stretch">
                <h4 className="text-2xl font-medium tz-text-dark">{title}</h4>
                <p className="text-base font-normal tz-text-gray-3 self-stretch">{description}</p>
            </div>
        </div>
    );
};

export default Card6;
/*
border-radius: 8px;
background: var(--tertiary-tints-99, #D8E2FB);

border-radius: 8px;
background: var(--secondary-tints-99, #FDF2D0);

border-radius: 8px;
background: var(--success-light, #E0F5E0);
*/