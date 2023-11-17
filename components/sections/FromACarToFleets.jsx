'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import Button1 from '@/components/items/Button1';

const FromACarToFleets = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="px-32 pt-10 pb-28 w-full tz-bg-light">
            <div className="m-36 w-full">
                <h2 className="text-center self-stretch text-[2.5rem] font-medium mb-2 tz-text-dark">Change, facilitated by hosts</h2>
                <p className="text-center self-stretch text-xl tz-text-gray">Don’t take our word for it, see what our host community has to say</p>
            </div>

            {/*<div className="inline-flex justify-between items-center pl-16 pr-24 rounded-2xl w-full tz-bg-dark-1">*/}
                    <div className="flex items-start justify-between w-full">
                        <div className="w-1/3">
                            <div className="text-3xl font-medium mb-4 tz-text-dark">From a car to fleets</div>
                            <div className="mb-10 tz-text-gray">Dembe moved from being a Uber driver to owing a fleet of his own and he enjoys hosting a lot.</div>
                            <Button1 text="Read his story" url="#" width="width2" icon={true} img="/assets/images/arrow-right-up-line.png" />
                        </div>
                        <div className="">
                            <Image src="/assets/images/treepz-star-host.png" alt="logo icon" width={800} height={400} />
                        </div>
                    </div>
            {/*</div>*/}
        </div>
    );
};

export default FromACarToFleets;
