'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'



const CarCard = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className='flex flex-col flex-start rounded-xl tz-shadow tz-border-light'>
            <div className="self-stretch">
                <Image src="/assets/images/featuredCars/car1.png" alt="logo icon" width={288} height={208} />
            </div>
            <div className="flex flex-col items-start p-3 gap-3 self-stretch">
                <div className="flex justify-between items-center self-stretch">
                    <div className="flex h-5 py-1 px-2 items-center gap-1 tz-bg-green rounded">
                        <Image src="/assets/images/user-icons.png" alt="logo icon" width={12} height={12} />
                        <span className="text-xs font-semibold tz-text-green">Chauffeurred</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image src="/assets/images/star.png" alt="logo icon" width={13} height={13} />
                        <span className="text-xs font-medium">4.9 (30 trips)</span>
                    </div>
                </div>
                <div className="text-base font-medium tz-text-dark">Mercedes Maybach</div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div><Image src="/assets/images/seat.png" alt="logo icon" width={16} height={16} /></div>
                        <div><Image src="/assets/images/air-conditioner.png" alt="logo icon" width={12} height={12} /></div>
                        <div><Image src="/assets/images/wifi.png" alt="logo icon" width={12} height={12} /></div>
                    </div>
                    <div>
                        <span className="text-xs text-opacity-80 tz-text-gray-1">from </span> 
                        <span className="font-bold text-base tz-text-dark-1">₦20,000</span>
                        <span className="text-xs text-opacity-80 tz-text-gray-1">/day</span>
                        {/*<div className="text-xs  text-opacity-80 underline tz-text-gray">₦ 20,000 total</div>*/}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default CarCard;
