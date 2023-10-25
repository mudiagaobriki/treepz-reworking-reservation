'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import Button1 from '@/components/items/Button1';

const DiscountOffer = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="tz-px-30">
            <div className='flex pl-10 justify-between items-center gap-80 rounded-2xl tz-bg-light'>
                <div className="flex flex-col items-start gap-6 w-96">
                    <div>
                        <h4 className="text-3xl font-semibold self-stretch mb-3 tz-text-dark">Rent a car from Transcorp Hilton for a discount</h4>
                        <p className="text-xl tz-text-gray">Rent a vehicle from your hotel to your destination and get a 50% discount.</p>
                    </div>
                    <div>
                        <Button1 btnText="Claim discount" url="#" arrowRight={true} />
                    </div>
                </div>
                <div>
                    <Image src="/assets/images/transcorpHilton.png" alt="logo icon" width={550} height={285} className="flex-shrink-0 rounded-r-2xl" />
                </div>
            </div>
        </div>
    );
};

export default DiscountOffer;
