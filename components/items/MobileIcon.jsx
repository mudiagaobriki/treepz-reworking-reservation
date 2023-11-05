'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'



const MobileIcon = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex items-center gap-10">
            <Link href="#">
                <Image src="/assets/images/userIconGold.png" alt="appstore" width={180} height={48} />
            </Link>
            <Link href="#">
                <Image src="/assets/images/userStarFill.png" alt="playstore" width={180} height={48} />
            </Link>
        </div>
    );
};

export default MobileIcon;
