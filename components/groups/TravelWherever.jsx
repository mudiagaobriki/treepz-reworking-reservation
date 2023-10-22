'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import Card7 from '@/components/items/Card7';
import GuestHost from '@/components/items/GuestHost';
// import isMobile from '@/components/helpers/isMobile'

const DATA = [
    {
        key: 1,
        image: "/assets/images/article-search.png",
        description: "It takes 2 to 5 days to get a vehicle rented from initial search to pickup. We are building Treepz.",
    },
    {
        key: 2,
        image: "/assets/images/statistic-chart.png",
        description: "We aggregate vehicles from different partners, giving you access to different range of vehicles.",
    },
    {
        key: 3,
        image: "/assets/images/money-minus.png",
        description: "Treepz is also budget-friendly, with a wide selection of vehicles at competitive prices.",
    },
]

const TravelWherever = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="px-32">
            <div className="flex justify-between items-center">
                <div className="flex flex-col items-start gap-[4.5rem]">
                    <div>
                        <h4 className="text-3xl font-medium tz-text-dark mb-3">Travel wherever you may</h4>
                        <p className="text-lg font-normal tz-text-gray self-stretch">Find your ultimate road trip vehicle for your dream destination</p>
                    </div>
                    <div className="flex flex-col items-center gap-8 w-[30.375rem]">
                        {
                            DATA.map((item, index) => {
                                return <div key={item?.key}>
                                        <Card7 image={item?.image} title={item?.title} description={item?.description} />
                                    </div>
                            })
                        }
                    </div>
                </div>
                <div>
                    <Image src="/assets/images/travel-wherever.png" alt="logo icon" width={588} height={484} className="flex-shrink-0 rounded-2xl" />
                </div>
            </div>
        </div>
    );
};

export default TravelWherever;
