'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'



const Button1 = ({btnText, url, bgColor='tz-bg-orange-1', arrowRight=false, btnImg="/assets/images/arrow-right-line.png"}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div>
            <Link href={url} className={`flex py-3 px-6 justify-center items-center gap-3 rounded-lg ${bgColor}`}>
                {btnText}
                {arrowRight && <Image src={btnImg} alt="logo icon" width={16} height={16} />}
            </Link>
        </div>
    );
};

export default Button1;
