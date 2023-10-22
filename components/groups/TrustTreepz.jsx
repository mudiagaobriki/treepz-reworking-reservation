'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import Card2 from '@/components/items/Card2';
import GuestHost from '@/components/items/GuestHost';
// import isMobile from '@/components/helpers/isMobile'

const DATA = [
    {
        key: 1,
        image: "/assets/images/d-extra-income.png",
        title: 'Extra Income',
        description: 'By becoming a Treepz host, you can earn extra income by renting out your vehicle when you\'re not using it. '+
            'Tap into the demand for unique and well-maintained vehicles, and start generating revenue.',
    },
    {
        key: 2,
        image: "/assets/images/d-flexibility.png",
        title: "Flexibilty",
        description: 'You have the flexibility to set your own availability and rental terms. Decide when you want to make your '+
            'vehicle available for bookings, whether it\'s on weekends, during specific seasons, or on select weekdays.',
    },
    {
        key: 3,
        image: "/assets/images/d-meet-new-people.png",
        title: "Meet New People",
        description: 'As a host, you\'ll have the chance to meet travelers from different backgrounds and cultures. Share local insights, '+
            'provide recommendations, and create memorable experiences for your guests.',
    },
]

const TrustTreepz = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="px-32">
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
                <div className="flex justify-between items-center">
                    {
                        DATA.map((item, index) => {
                            return <div key={item?.key}>
                                    <Card2 image={item?.image} title={item?.title} description={item?.description} />
                                </div>
                        })
                    }
                </div>
            {/*</div>*/}
        </div>
    );
};

export default TrustTreepz;
