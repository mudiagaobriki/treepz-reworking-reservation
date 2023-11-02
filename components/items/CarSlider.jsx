'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'

const CarSlider = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className='flex flex-col flex-start p-4 gap-8 flex-shrink-0 rounded-3xl bg-white w-[40rem] tz-border-gray-2'>
            <div className="flex justify-between items-start self-stretch">
                <div>
                    <h3 className="text-[1.75em] font-semibold tz-text-dark mb-4">Mercedes Maybach 2022</h3>
                    <div className="flex items-center gap-4">
                        <p>May 30 - June 2</p>
                        <div className="flex h-5 py-1 px-2 items-center gap-1 tz-bg-green rounded">
                            <Image src="/assets/images/user-icons.png" alt="logo icon" width={12} height={12} />
                            <span className="text-xs font-semibold tz-text-green">Chauffeurred</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <span className="text-opacity-80 text-2xl font-medium tz-text-dark">₦ 20,000/</span>
                        <span className="text-opacity-80 tz-text-dark-2">day</span>
                    </div>
                    <p className="text-opacity-80 text-xs tz-text-gray">₦ 45,000 est. total</p>
                </div>
            </div>
            <div className="rounded-2xl">
                <Image src="/assets/images/toyota-prado.png" alt="" width={556} height={290} />
            </div>
        </div>
    );
};

export default CarSlider;