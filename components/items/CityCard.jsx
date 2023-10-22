'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile';

const CityCard = ({city, image}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className='flex flex-col flex-shrink-0 items-center gap-2 pt-2 pr-2 pb-5 pl-2 w-52 rounded-xl tz-h-22 tz-bg-light'>
            <div>
                <Image src={image} alt="logo icon" width={192} height={296} className="rounded-xl" />
            </div>
            <p className="text-center text-xl font-medium tz-text-dark">{city}</p>
        </div>
    );
};

export default CityCard;
