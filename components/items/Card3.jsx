'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'

const Card3 = ({image, title, description, width, height=160}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex flex-col items-start gap-0 w-72">
            <div>
                <Image src="/assets/images/explore-without-limit.png" alt="logo icon" width={304} height={200} className="rounded-t-xl" />
            </div>
            <div className="flex flex-col justify-center items-center p-3 rounded-b-xl tz-bg-dark-1">
                <div className="flex flex-col items-start gap-4">
                    <p className="text-lg font-medium text-white self-stretch">Explore without limits. Find your next ride.</p>
                    <div>
                        <Link href="" className="flex justify-center items-center py-2 px-6 w-64 rounded-xl tz-bg-orange-1">Download the app</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card3;
