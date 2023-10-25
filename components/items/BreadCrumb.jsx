'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'



const BreadCrumb = ({links}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex justify-start items-center gap-2 px-32">
                <Link href="#" className="text-sm font-medium tz-text-gray-3 underline">Treepz</Link>
                {
                    links.map((item, index) => {
                        return <div key={index} className="flex justify-start items-center gap-2">
                                <Image src="/assets/images/chevron-right-line.png" alt="logo icon" width={16} height={16} />
                                <Link href="#" className="text-sm font-medium tz-text-gray-3">{item}</Link>
                            </div>
                    })
                }
            
        </div>
    );
};

export default BreadCrumb;
