'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import Card4 from '@/components/items/Card4';
import GuestHost from '@/components/items/GuestHost';
// import isMobile from '@/components/helpers/isMobile'

const DATA = [
    {
        key: 1,
        image: "/assets/images/login-gold.png",
        title: 'Explore vehicle',
        description: 'Discover a world of possibilities. Use our intuitive search functionality to explore a diverse range of vehicles. '+
            'Filter your search based on location, date, price, and vehicle type to find the perfect match for your travel needs. Read '+
            'reviews and view photos to make informed decisions.',
    },
    {
        key: 2,
        image: "/assets/images/bookmark-gold.png",
        title: "Make a booking",
        description: 'Seal the deal for your next adventure. Select your desired vehicle, choose your preferred booking dates, and '+
            'review additional options such as delivery and insurance. Communicate with the host to ensure a smooth rental experience.',
    },
    {
        key: 3,
        image: "/assets/images/user-smile-gold.png",
        title: "Enjoy the experince",
        description: 'Embark on an unforgettable journey. Maintain clear communication with your host before and during the rental period. '+
            'Be punctual for pick-up or delivery, treat the vehicle with care, and adhere to the agreed-upon terms to make the most of your '+
            'rental experience.',
    },
]

const ExploreRow = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="tz-px-30">
            <div className="m-20">
                <GuestHost />
            </div>
            {/*<div className="z-10">
                <Image src="/assets/images/carOnTheRoad.png" alt="logo icon" width={1200} height={200} className="flex-shrink-0 rounded-xl" />
            </div>
            <div className="flex flex-col items-end h-[57.5rem] pt-40 space-y-32 z-0 tz-px-30 tz-bg-dark-1">*/}
                {/*<div className="flex justify-between items-center w-full">
                    <div>
                        <div className="text-[2.5em] font-medium text-white">Don’t stress.</div> 
                        <div className="flex items-center gap-2">
                            <span className="text-[2.5em] font-medium text-white">Don’t break.</span>         
                            <Image src="/assets/images/user-check-gold.png" alt="user-check" width={40} height={40} />
                            <span className="text-[2.5em] font-medium tz-text-orange-1">Just move.</span>
                        </div>
                    </div>
                    <div className="text-xl font-normal w-[37.5em] tz-text-gray-2">
                        Treepz is a user-friendly vehicle rental marketplace that provides a platform 
                        for hosts and guests to connect and embark on unforgettable travel experiences.
                    </div>
                </div>*/}
                <div className="flex flex-col items-center gap-8">
                    {
                        DATA.map((item, index) => {
                            return <div key={item?.key}>
                                    <Card4 image={item?.image} title={item?.title} description={item?.description} />
                                </div>
                        })
                    }
                </div>
            {/*</div>*/}
        </div>
    );
};

export default ExploreRow;
