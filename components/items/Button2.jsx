'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'

const Button2 = ({text, width="width_full", url="", submit=false, modalId=""}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";
    const widths = {
        width_full: 'w-full',
        width1: 'w-[21.5rem]'
    };

    return (
        <div>
            {submit ?
                <button 
                    data-modal-target={`${modalId}`} 
                    data-modal-toggle={`${modalId}`} 
                    type="submit"
                    className={`flex py-3 px-6 justify-center items-center font-semibold ${widths[width]} rounded-lg bg-white hover:bg-[#101010] hover:text-white tz-text-dark-1 tz-border-dark-1`}
                >
                    {text}
                </button> : 
                <Link 
                    data-modal-target={`${modalId}`} 
                    data-modal-toggle={`${modalId}`} 
                    href={url} 
                    className={`flex py-3 px-6 justify-center items-center font-semibold ${widths[width]} rounded-lg bg-white hover:bg-[#101010] hover:text-white tz-text-dark-1 tz-border-dark-1`}
                >
                    {text}
                </Link>}
        </div>
    );
};

export default Button2;
