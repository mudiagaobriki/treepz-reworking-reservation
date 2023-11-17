'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// import isMobile from '@/components/helpers/isMobile'

const TreepzExperience = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex justify-between items-center h-96 self-stretch rounded-xl border border-[#EAEDF1] bg-[#F6F8FA]">
            <div className="flex flex-col items-start gap-5 px-8 py-10 w-full self-stretch">
                <div className="tz-text-2b">Make commuting easier for your clients, in few clicks. </div>
                <div className="flex flex-col items-start gap-3">
                    <div className="flex items-center gap-3">
                        <Image src="/assets/images/checkbox-circle-fill.png" alt="" width={24} height={24} />
                        <p>Make 5% on all completed bookings</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Image src="/assets/images/checkbox-circle-fill.png" alt="" width={24} height={24} />
                        <p>Make 5% on all completed bookings</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Image src="/assets/images/checkbox-circle-fill.png" alt="" width={24} height={24} />
                        <p>Make 5% on all completed bookings</p>
                    </div>
                </div>
            </div>
            <div className="h-full">
                <Image src="/assets/images/programmable.png" alt="" width={920} height={384} />
            </div>
        </div>
    );
};

export default TreepzExperience;
