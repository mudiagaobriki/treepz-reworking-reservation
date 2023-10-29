'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'

const LocationSection = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="px-32 tz-bg-light tz-border-top-3 tz-border-bottom py-10">
            <div className="flex flex-col items-start gap-14">
                <h2 className="text-2xl font-medium tz-text-dark">Check other locations around Ikeja</h2>
                <div className='flex flex-col items-start gap-10'>
                    <div className="flex justify-center gap-40 items-start self-stretch">
                        <div className="flex flex-col gap-3">
                            <p className="text-sm tz-text-dark-2">Book a car</p>
                            <p className="text-sm tz-text-dark-2">Treepz for partners</p>
                            <p className="text-sm tz-text-dark-2">How it works</p>
                            <p className="text-sm tz-text-dark-2">FAQs</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="text-sm tz-text-dark-2">About</p>
                            <p className="text-sm tz-text-dark-2">Career</p>
                            <p className="text-sm tz-text-dark-2">Press</p>
                            <p className="text-sm tz-text-dark-2">Blog</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="text-sm tz-text-dark-2">Ghana</p>
                            <p className="text-sm tz-text-dark-2">Kenya</p>
                            <p className="text-sm tz-text-dark-2">Nigeria</p>
                            <p className="text-sm tz-text-dark-2">Uganda</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="text-sm tz-text-dark-2">List your car</p>
                            <p className="text-sm tz-text-dark-2">Insurance and protection</p>
                            <p className="text-sm tz-text-dark-2">FAQs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default LocationSection;
