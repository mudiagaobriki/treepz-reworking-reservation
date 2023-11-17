'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'

const EmptyState = ({image, title, description, width, height, btnText=""}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex flex-col items-start justify-center w-full">
            <div className="flex justify-center w-full mb-10">
                <Image src={image} alt="" width={width} height={height} />
            </div>
            <h3 className="w-full text-3xl font-semibold mb-4 text-center whitespace-nowrap tz-text-gray-3">{title}</h3>
            <p className="w-full mb-8 text-center self-stretch whitespace-nowrap tz-text-gray">{description}</p>
            {btnText && 
                <div className="flex justify-center w-full">
                    <Link 
                        href=""
                        className="flex py-3 px-6 justify-center items-center font-semibold w-[21.5rem]  rounded-lg bg-white hover:text-white hover:bg-[#101010] tz-text-dark-1 tz-border-dark-1"
                    >
                        {btnText}
                    </Link>
                </div>
            }
        </div>
    );
};

export default EmptyState;
