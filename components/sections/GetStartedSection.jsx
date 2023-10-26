'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import Button1 from '@/components/items/Button1';

const GetStartedSection = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex gap-8 items-center tz-px-30 tz-bg-light">
            <div className="flex flex-shrink-0 rounded-2xl bg-white pl-10 tz-w-36 tz-h-17">
                <div className="flex flex-col items-start gap-6 w-56">
                    <div>
                        <h4 className="text-3xl font-medium self-stretch mb-3 tz-text-dark">Rent a car</h4>
                        <p className="text-base self-stretch tz-text-gray">Far or near, there’s a vehicle for your next trip</p>
                    </div>
                    <div>
                        <Button1 text="Get started" url="#" />
                    </div>
                </div>
                <div>
                    <Image src="/assets/images/rent-a-car2.png" alt="" width={320} height={276} /> 
                </div>
            </div>
            <div className="flex flex-shrink-0 rounded-2xl bg-white pr-10 tz-w-36 tz-h-17">
                <div>
                    <Image src="/assets/images/become-a-host2.png" alt="" width={320} height={276} /> 
                </div>
                <div className="flex flex-col items-start gap-6 w-56">
                    <div>
                        <h4 className="text-3xl font-medium self-stretch mb-3 tz-text-dark">Become a host</h4>
                        <p className="text-base self-stretch tz-text-gray">Earn extra income with your vehicle on your own terms</p>
                    </div>
                    <div>
                        <Button1 text="Get started" url="#" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStartedSection;
