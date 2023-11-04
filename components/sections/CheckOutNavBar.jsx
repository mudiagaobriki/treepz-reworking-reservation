'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Third party components
import {isMobile} from "react-device-detect";

const CheckOutNavBar = () => {
    // const isMobile = () => typeof window !== 'undefined' ? (window.matchMedia && window.matchMedia("(max-width: 480px)").matches ? true : false) : false

    let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="inline-flex justify-between items-center w-full px-32 py-2 bg-white tz-border-bottom-1">
            <div className="flex items-center gap-6">
                <div className="p-2">
                    <Image src="/assets/images/x-close.png" alt="logo icon" width={24} height={24} />
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-[1px] h-7 tz-bg-gray-4"></div>
                    <div className="text-2xl font-semibold tz-text-gray-3">Checkout</div>
                </div>
            </div>
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-5">
                    <div className="flex justify-center items-center w-10 h-10 rounded-full text-sm font-medium tz-text-dark-1 tz-bg-orange-1">1</div>
                    <div className="text-center font-medium tz-text-dark">Your selection</div>
                    <div className="">
                        <Image src="/assets/images/chevron-right-line.png" alt="menu-line icon" width={14} height={14} />
                    </div>
                </div> 
                <div className="flex items-center gap-5">
                    <div className="flex justify-center items-center w-10 h-10 rounded-full text-sm font-medium tz-text-dark-1 tz-bg-orange-1">2</div>
                    <div className="text-center font-medium tz-text-dark">Payment</div>
                </div> 
            </div>
        </div>
    );
};

export default CheckOutNavBar;
