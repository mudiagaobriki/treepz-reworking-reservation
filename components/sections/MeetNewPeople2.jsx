'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import Card8 from '@/components/items/Card8';

const DATA = [
    {
        key: 1,
        image: "/assets/images/money-dollar-circle-fill.png",
        title: "Extra Income",
        description: "By becoming a Treepz host, you can earn extra income by renting out your vehicle when you're not using it. Tap into the demand for unique and well-maintained vehicles, and start generating revenue.",
    },
    {
        key: 2,
        image: "/assets/images/money-dollar-circle-fill.png",
        title: "Extra Income",
        description: "By becoming a Treepz host, you can earn extra income by renting out your vehicle when you're not using it. Tap into the demand for unique and well-maintained vehicles, and start generating revenue.",
    },
    {
        key: 3,
        image: "/assets/images/money-dollar-circle-fill.png",
        title: "Extra Income",
        description: "By becoming a Treepz host, you can earn extra income by renting out your vehicle when you're not using it. Tap into the demand for unique and well-maintained vehicles, and start generating revenue.",
    },
]

const MeetNewPeople2 = ({imageRight=true}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="w-full px-32 py-14 flex flex-col items-start gap-10 tz-bg-light">
            <h1 className="text-5xl font-medium text-center self-stretch tz-text-dark">Meet new people</h1>
            <div className="flex justify-between items-center w-full">
                    {
                        DATA.map((item, index) => {
                            return <div key={item?.key}>
                                    <Card8 image={item?.image} title={item?.title} description={item?.description} />
                                </div>
                        })
                    }
                </div>
        </div>
    );
};

export default MeetNewPeople2;
