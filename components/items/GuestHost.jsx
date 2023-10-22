'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'



const Button1 = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex items-center justify-between px-2 py-1 w-64 h-14 rounded-[62.5em] tz-bg-gh">
            <Link href="#" className="flex py-2 px-4 justify-center items-center gap-2 self-stretch rounded-[62.5em] bg-white">
                <Image src="/assets/images/userIconGold.png" alt="logo icon" width={24} height={24} />
                <span className="font-semibold tz-text-orange-1">Guests</span>
            </Link>
            <Link href="#" className="flex py-2 px-4 justify-center items-center gap-2 self-stretch rounded-[62.5em] tz-bg-host">
                <Image src="/assets/images/userStarFill.png" alt="logo icon" width={24} height={24} />
                <span className="font-semibold tz-text-gray-3">Hosts</span>
            </Link>
        </div>
    );
};

export default Button1;
