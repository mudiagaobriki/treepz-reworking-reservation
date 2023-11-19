'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import Button1 from '@/components/items/Button1';

const VehicleImage = ({images}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="px-32 flex gap-6 items-start w-full">
            <div className="flex flex-col items-start w-1/3 h-[27rem] gap-4">
                <div className="w-full h-[12.5rem] rounded-tl-xl bg-cover bg-center bg-[url('/assets/images/benz-sm.png')] flex-shrink-0">
                </div>
                <div className="w-full h-[11.25rem] bg-cover bg-center bg-[url('/assets/images/benz-interior.png')] flex-shrink-0"></div>
                <div className="w-full h-5 bg-cover bg-center bg-[url('/assets/images/benz-part.png')]">
                </div>
            </div>
            <div className="w-2/3 h-[27rem] rounded-r-xl bg-cover bg-center bg-[url('/assets/images/benz-lg.png')]">
                
            </div>
        </div>
    );
};

export default VehicleImage;
