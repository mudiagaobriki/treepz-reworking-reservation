'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'



const Button1 = ({text, url, bg="bg-white", icon=false, img=""}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div>
            <Link 
                href={url} 
                className={`
                    flex py-2 px-4 justify-center items-center font-semibold ${bg} 
                    text-xs font-medium rounded-3xl ${icon && 'gap-1'} tz-border-gray-1 
                    ${bg === 'bg-white' ? 'tz-text-gray-3' : 'text-white'} hover:bg-[#101010] hover:text-white`}
            >
                {icon && <Image src={img} alt="" width={16} height={16} />}
                {text}
            </Link>
        </div>
    );
};

export default Button1;
