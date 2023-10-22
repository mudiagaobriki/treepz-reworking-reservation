'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'

let stars = [
    '/assets/images/star.png',
    '/assets/images/star.png',
    '/assets/images/star.png',
    '/assets/images/star.png',
    '/assets/images/star.png',
]

const HowItWorks = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="tz-px-30">
            <div className="flex justify-between items-center gap-10"> 
                <div>
                    <Image src="/assets/images/how-treepz-works-1.png" alt="home-banner" width={300} height={600} />
                </div>
                <div className="flex flex-col items-center gap-16">
                    <div>
                        <p className="text-7xl font-medium tz-text-dark">How Treepz works</p>
                        <p className="text-7xl font-medium tz-text-orange-1">for you to ride</p>
                    </div>
                    <div className="flex items-start gap-5 px-4 py-5 rounded-xl tz-bg-light tz-border-light-1">
                        <div>
                            <Image src="/assets/images/manOnGlasses.png" alt="photo" width={120} height={128} className="flex-shrink-0 rounded-lg" />
                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <div className="flex items-start gap-1">
                                {
                                    stars.map((item, index) => {
                                        return <div key={index}>
                                                <Image src={item} alt="logo icon" width={20} height={20} />
                                            </div>
                                    })
                                }
                            </div>
                            <p className="text-xs font-light tz-text-dark">I recently used Treepz to rent a car for a weekend getaway and I couldn&apos;t 
                            have been more pleased with the experience. The platform was easy to use and I was able to find a great vehicle that met 
                            all of my needs. The host was friendly and accommodating.</p>
                            <h4 className="text-sm font-medium tz-text-dark">John Remington (Star Host)</h4>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src="/assets/images/how-treepz-works2.png" alt="home-banner" width={300} height={600} />
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
