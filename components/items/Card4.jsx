'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'



const Card4 = ({image, title, description}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex justify-between items-start self-stretch pb-8 tz-border-bottom-2">
            <div className="flex items-center gap-5">
                <div className="flex items-center p-4 gap-2 rounded-full tz-bg-orange-99">
                    <Image src={image} alt="logo icon" width={28} height={28} />
                </div>
                <h4 className="text-2xl font-medium tz-text-dark">{title}</h4>
            </div>
            <div className="w-1/2">
                <p className="text-xl font-normal tz-text-gray">{description}</p>
            </div>
        </div>
    );
};

export default Card4;

/*
appstore&playstore
display: flex;
align-items: center;
gap: 40px;



guests&host btn
display: flex;
width: 320px;
height: 56px;
padding: 4px 8px;
align-items: center;
gap: 12px;
border-radius: 1000px;
background: var(--neutral-tints-95, linear-gradient(0deg, rgba(247, 247, 247, 0.40) 0%, rgba(247, 247, 247, 0.40) 100%), #E9EBEC);

*/