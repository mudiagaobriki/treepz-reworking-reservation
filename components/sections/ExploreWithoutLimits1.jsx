'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

const ExploreWithoutLimits1 = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="px-32">
            <div className="text-[3.5rem] font-medium mb-[7.5rem]">
                <span className="tz-text-gray">Explore the</span> <span className="tz-text-dark">heart of Kampala, </span><br />
                <div className="tz-text-dark">admire the beauty of the African culture.</div>
            </div>
            <div className="flex justify-between items-start w-full">
                <div className="flex flex-col items-start gap-32 w-[31.25rem]">
                    <Image src="/assets/images/explore.png" alt="dome" width={200} height={200} />
                    <p className="text-2xl tz-text-gray">
                        Near the banks of Lake Victoria, Kampala, the capital of Uganda, is a lively city with a long history. Before the British, 
                        the city was the capital of the Buganda Kingdom, and remains so to this day. The city sits on several hills, each housing 
                        an important government or religious building. Kasubi Hill is the home of the Kasubi Tombs, a sacred burial ground of Buganda Kings.
                    </p>
                </div>
                <div className="">
                    <Image src="/assets/images/dome.png" alt="dome" width={576} height={696} />
                </div>
            </div>
        </div>
        
    );
};

export default ExploreWithoutLimits1;
