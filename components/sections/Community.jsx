'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Community = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="tz-px-30">
            <div className="flex flex-col items-center gap-10">
                <div className="flex flex-col items-center gap-16">
                    <h4 className="text-4xl font-medium tz-text-dark">A thriving community of hosts and guests</h4>
                    <div className="flex flex-col items-center gap-3">
                        <div className='flex p-10 justify-center items-center gap-3'>
                            <div>
                                <Image src="/assets/images/lady-man-in-car.png" alt="logo icon" width={320} height={296} className="flex-shrink-0 rounded-2xl" />
                            </div>
                            <div>
                                <Image src="/assets/images/sample-hosts2.png" alt="logo icon" width={440} height={296} className="flex-shrink-0" />
                            </div>
                            <div>
                                <Image src="/assets/images/heartOfAfrica3.png" alt="logo icon" width={320} height={296} className="flex-shrink-0 rounded-2xl" />
                            </div>
                        </div>
                        <p className="max-w-5xl text-center text-xl tz-text-gray">
                        Get ready to rev up your travel game with a dynamic community of passionate hosts and adventurous guests. Whether you&apos;re in the mood 
                        for a classic convertible, a sleek sports car, or a rugged off-road vehicle, our diverse range of rentals has got you covered.</p>
                    </div>
                </div>
                <div>
                    <Link href="" className="flex py-3 px-4 w-52 justify-center items-center rounded-lg tz-border-dark">
                        See how it works
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Community;
// `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.