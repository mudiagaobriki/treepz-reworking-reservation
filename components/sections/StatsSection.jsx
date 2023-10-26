'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

const StatsSection = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex justify-between items-center tz-px-30">
            <div className="flex flex-col justify-between items-start self-stretch">
                <p className="text-4xl font-medium tz-text-dark">Treepz by <br />the numbers.</p>
                <Image src="/assets/images/treepz-by-numbers.png" alt="treepz-by-numbers" width={386} height={362} className="rounded-2xl" />                
            </div>
            <div className="flex flex-col items-start gap-5 flex-shrink-0 tz-w-33">
                <div className="flex flex-col items-start self-stretch gap-1 pb-6 tz-border-bottom">
                    <h1 className="text-5xl font-medium tz-text-dark">11K+</h1>
                    <p className="text-xl font-normal tz-text-gray">Total completed bookings</p>
                </div>

                <div className="flex flex-col items-start self-stretch gap-1 pb-6 tz-border-bottom">
                    <h1 className="text-5xl font-medium tz-text-dark">2K+</h1>
                    <p className="text-xl font-normal tz-text-gray">Total hosts doing business on Treepz*</p>
                </div>

                <div className="flex flex-col items-start self-stretch gap-1 pb-6 tz-border-bottom">
                    <h1 className="text-5xl font-medium tz-text-dark">20K+</h1>
                    <p className="text-xl font-normal tz-text-gray">Vehicles listed on Treepz marketplace*</p>
                </div>

                <div className="flex flex-col items-start self-stretch gap-1 pb-6 tz-border-bottom">
                    <h1 className="text-5xl font-medium tz-text-dark">12K+</h1>
                    <p className="text-xl font-normal tz-text-gray">African countries covered*</p>
                </div>
            </div>
        </div>
    );
};

export default StatsSection;
