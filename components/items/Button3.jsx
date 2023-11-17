'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'

const Button3 = ({text, width="width_full", url="", icon=false, img="/assets/images/arrow-right-line.png", imgLight="", iconLeft=false, submit=false, modalId=""}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";
    const [isHover, setIsHover] = useState(false);
    const widths = {
        width_full: 'w-full',
        width1: 'w-[21.5rem]',
        width2: 'w-60'
    };

    return (
        <div>
            {submit ?
                <button 
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    data-modal-target={`${modalId}`} 
                    data-modal-toggle={`${modalId}`} 
                    type="submit"
                    className={`flex py-3 px-6 justify-center items-center font-semibold ${widths[width]} ${icon && 'gap-3'} ${iconLeft && 'gap-2'} rounded-lg bg-white hover:bg-[#101010] hover:text-white tz-text-dark-1 tz-border-dark-1`}
                >
                    {iconLeft && <Image src={isHover ? imgLight : img} alt="logo icon" width={24} height={24} />}
                    {text}
                    {icon && <Image src={isHover ? imgLight : img} alt="logo icon" width={24} height={24} />}
                </button> : 
                <Link 
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    data-modal-target={`${modalId}`} 
                    data-modal-toggle={`${modalId}`} 
                    href={url} 
                    className={`flex py-3 px-6 justify-center items-center font-semibold ${widths[width]} ${icon && 'gap-3'} ${iconLeft && 'gap-2'} rounded-lg bg-white hover:bg-[#101010] hover:text-white tz-text-dark-1 tz-border-dark-1`}
                >
                    {iconLeft && <Image src={isHover ? imgLight : img} alt="logo icon" width={24} height={24} />}
                    {text}
                    {icon && <Image src={isHover ? imgLight : img} alt="logo icon" width={24} height={24} />}
                </Link>}
        </div>
    );
};

export default Button3;
