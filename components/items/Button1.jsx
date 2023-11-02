'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'

const Button1 = ({text, width="full", url="", icon=false, img="/assets/images/arrow-right-line.png", iconLeft=false, submit=false, modalId=""}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div>
            {submit ?
                <button 
                    data-modal-target={`${modalId}`} 
                    data-modal-toggle={`${modalId}`} 
                    type="submit"
                    className={`flex py-3 px-6 justify-center items-center font-semibold w-${width} ${icon && 'gap-3'} ${iconLeft && 'gap-2'} rounded-lg bg-[#F8B02B] hover:bg-[#F8B02B]/80 tz-text-dark-1`}
                >
                    {iconLeft && <Image src={img} alt="logo icon" width={16} height={16} />}
                    {text}
                    {icon && <Image src={img} alt="logo icon" width={16} height={16} />}
                </button> : 
                <Link 
                    data-modal-target={`${modalId}`} 
                    data-modal-toggle={`${modalId}`} 
                    href={url} 
                    className={`flex py-3 px-6 justify-center items-center font-semibold w-${width} ${icon && 'gap-3'} ${iconLeft && 'gap-2'} rounded-lg bg-[#F8B02B] hover:bg-[#F8B02B]/80 tz-text-dark-1`}
                >
                    {iconLeft && <Image src={img} alt="logo icon" width={16} height={16} />}
                    {text}
                    {icon && <Image src={img} alt="logo icon" width={16} height={16} />}
                </Link>}
        </div>
    );
};

export default Button1;
