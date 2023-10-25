'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

const ReferAndEarn = ({title, description, image, width, height}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="px-32">
            <div className="rounded-2xl bg-white h-48 pl-10 pr-12 py-5 relative tz-border-gray">
                <div className="flex justify-between items-center flex-shrink-0 w-full">
                    <div className="flex flex-col items-center">
                        <h4 className="text-3xl font-medium self-stretch mb-3 tz-text-dark">{title}</h4>
                        <p className="text-xl mb-6 tz-text-gray">{description}</p>
                        <Link href="#" className="flex items-center gap-2 self-stretch">
                            <span className="font-semibold tz-text-orange-1">Sign in now</span>
                            <Image src="/assets/images/arrow-right-gold.png" alt="logo icon" width={24} height={24} />
                        </Link>
                    </div>
                    <div>
                        <Image src={image} alt="logo icon" width={width} height={height} />
                    </div>
                </div>
                <Image src="/assets/images/x-close.png" alt="logo icon" width={32} height={32} className="flex-shrink-0 absolute top-4 right-6" />
            </div>
        </div>
    );
};

export default ReferAndEarn;
