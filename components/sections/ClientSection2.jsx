'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

const ClientSection2 = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="w-full h-24 px-32">
            <div className="flex justify-between items-center w-full px-6 py-8 rounded-2xl tz-bg-orange-2">
                <p className="text-2xl font-medium tz-text-dark">Driving the growth and productivity <br />of 200+ companies</p>
                <div className="flex items-center justify-between w-[40rem]">
                    <Image src="/assets/images/clients/img_6.png" alt="logo icon" width={60} height={16} />
                    <Image src="/assets/images/clients/img_7.png" alt="logo icon" width={60} height={24} />
                    <Image src="/assets/images/clients/img_8.png" alt="logo icon" width={60} height={30} />
                    <Image src="/assets/images/clients/img_9.png" alt="logo icon" width={60} height={36} />
                    <Image src="/assets/images/clients/img_10.png" alt="logo icon" width={60} height={20} />
                    <Image src="/assets/images/clients/img_11.png" alt="logo icon" width={60} height={20} />
                    <Image src="/assets/images/clients/img_12.png" alt="logo icon" width={60} height={20} />
                </div>
            </div>
        </div>
    );
};

export default ClientSection2;
