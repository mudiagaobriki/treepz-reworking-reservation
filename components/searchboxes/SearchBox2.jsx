'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'



const SearchBox2 = ({links}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex justify-center items-center w-full">
            <div className="flex items-center gap-5 p-2 md:min-w-[44rem] flex-shrink-0 rounded-full tz-border-light-1">
                <div className="flex items-center">
                    <div className="flex justify-center items-center gap-1 py-1 pl-2 pr-5">
                        <Image src="/assets/images/map-pin-fill.png" alt="" width={24} height={24} />
                        <p className="tz-text-gray-4">Muritala Muhammed Airport, Ikeja</p>
                    </div>
                    <div className="w-[1px] h-3 tz-bg-gray-1"></div>
                    <div className="flex justify-center items-center gap-1 py-1 pl-5 pr-2">
                        <Image src="/assets/images/calendar-event-fill.png" alt="" width={24} height={24} />
                        <div className="flex items-center gap-2">
                            <p className="tz-text-gray-2">19 /05, 10:30 PM</p>
                            <div className="w-[10px] h-[1px] tz-bg-gray-1"></div>
                            <p className="tz-text-gray-2">19 /05, 6:30 AM</p>
                        </div>
                    </div>
                </div>   
                <div>
                    <button className="flex items-center p-2 rounded-full tz-bg-orange-1">
                        <Image src="/assets/images/search-line.png" alt="" width={24} height={24} />
                    </button>
                </div>     
            </div>
        </div>
    );
};

export default SearchBox2;
