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
