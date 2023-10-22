'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import CityCard from '@/components/items/CityCard';
// import isMobile from '@/components/helpers/isMobile'

const DATA = [
    {
        key: 1,
        image: '/assets/images/destination/nairobi.png',
        city: "Nairobi"
    },
    {
        key: 2,
        image: "/assets/images/destination/lagos.png",
        city: "Lagos"
    },
    {
        key: 3,
        image: "/assets/images/destination/accra.png",
        city: "Accra"
    },,
    {
        key: 4,
        image: "/assets/images/destination/kampala.png",
        city: "Kampala"
    },
    {
        key: 5,
        image: "/assets/images/destination/abuja.png",
        city: "Abujah"
    },
]

const CardRow1 = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className='flex items-start gap-6 tz-px-30'>
            {
                DATA.map((item, index) => {
                    return <div key={item?.key}>
                            <CityCard image={item?.image} city={item?.city} />
                        </div>
                })
            }
        </div>
    );
};

export default CardRow1;
