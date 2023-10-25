'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'



const Button1 = ({text, url, width, bgColor='tz-bg-orange-1', icon=false, img="/assets/images/arrow-right-line.png", iconLeft=false}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div>
            <Link 
                href={url} 
                className={`flex py-3 px-6 justify-center items-center font-semibold w-${width} ${icon && 'gap-3'} ${iconLeft && 'gap-2'} rounded-lg tz-text-dark-1 ${bgColor}`}
            >
                {iconLeft && <Image src={img} alt="logo icon" width={16} height={16} />}
                {text}
                {icon && <Image src={img} alt="logo icon" width={16} height={16} />}
            </Link>
        </div>
    );
};

export default Button1;
