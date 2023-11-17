'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import Button1 from '@/components/items/Button1';

const SoundsGood = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="px-32">
            <div className="inline-flex justify-between items-center pl-16 pr-24 rounded-2xl w-full tz-bg-dark-1">
                    <div className="py-12">
                        <div>
                            <div className="text-[2.5rem] font-medium text-white mb-3">
                                <span className="tz-text-gray-2">Flexibility,</span> sounds good?
                            </div>
                            <div className="mb-8 tz-text-gray-8">List your first car, enjoy a life of flexibility and financial freedom <br /> on your own terms.</div>
                            <Button1 text="List your ride" url="#" width="width2" />
                        </div>
                    </div>
                    <div className="pt-10 pb-4">
                        <Image src="/assets/images/soundsGood.png" alt="logo icon" width={440} height={240} />
                    </div>
            </div>
        </div>
    );
};

export default SoundsGood;
