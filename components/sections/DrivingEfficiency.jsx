'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// import isMobile from '@/components/helpers/isMobile'

const DrivingEfficiency = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex justify-between items-center p-32 w-full tz-bg-orange">
            <Image src="/assets/images/mtn.png" alt="" width={480} height={320} />
            <div className="w-[42rem]">
                <h3 className="text-3xl font-medium mb-8 tz-text-dark">Moving employees, driving efficiency</h3>
                <p className="text-xl mb-14 tz-text-gray-3">“Moving our employees has resulted in an unexpected growth due to their improved efficiency. Moving our employees has resulted in an unexpected growth due to their improved efficiency. Moving our employees has resulted in an unexpected growth due to their improved efficiency. Moving our employees has resulted in an unexpected growth due to their improved efficiency.”</p>
                <div className="flex flex-col items-start gap-3">
                    <div className="text-xl tz-text-dark">
                        <span className="font-semibold">Adepoju Onyeka </span> /  CEO, MTN Nigeria
                    </div>
                    {/*<div className="flex items-center gap-3">
                        <Image src="/assets/images/checkbox-circle-fill.png" alt="" width={24} height={24} />
                        <p>Make 5% on all completed bookings</p>
                    </div>*/}
                </div>
            </div>
        </div>
    );
};

export default DrivingEfficiency;
