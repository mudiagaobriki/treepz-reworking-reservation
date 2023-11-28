'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'



const Button1 = ({text, url, onPress, bg="bg-white", icon=false, img="", selected=false}) => {

    const currentBg = selected? "bg-[#101010]": "bg-white"

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div>
            <button
                onClick={onPress}
                // href={url}
                className={`
                    flex py-2 px-4 justify-center items-center font-semibold ${currentBg} 
                    text-xs font-medium rounded-3xl ${icon && 'gap-1'} tz-border-gray-1 
                    ${currentBg === 'bg-white' ? 'tz-text-gray-3' : 'text-white'} hover:bg-[#101010] hover:text-white`}
            >
                {icon && <Image src={img} alt="" width={16} height={16} />}
                {text}
            </button>
        </div>
    );
};

export default Button1;
