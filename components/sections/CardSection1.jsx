'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import Card1 from '@/components/items/Card1';
// import isMobile from '@/components/helpers/isMobile'

const DATA = [
    {
        key: 1,
        image: '/assets/images/carRental.png',
        title: "Affordable car rental in seconds",
        description: 'Treepz is also budget-friendly, with a wide selection' +
            ' of vehicles at competitive prices. Plus, we offer promos and discounts' +
            ' to make it even more affordable.',
        width: 240,
    },
    {
        key: 2,
        image: "/assets/images/multipleCarIcons.png",
        title: "One search, multiple options",
        description: 'It takes 2 to 5 days to get a vehicle rented from initial search to pickup.' +
            ' We are building Treepz to make vehicle rental as easy as clicking a button.',
        width: 250,
    },
    {
        key: 3,
        image: "/assets/images/weightScale.png",
        title: "Flexible booking policy",
        description: 'We aggregate vehicles from different partners, giving you access to different' +
            ' range of vehicles. So, you never have to settle again for limited options.',
        width: 162,
    },
]

const CardSection1 = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className='flex justify-between items-start self-stretch tz-px-30'>
            {
                DATA.map((item, index) => {
                    return <div key={item?.key}>
                            <Card1 image={item?.image} title={item?.title} description={item?.description} width={item?.width} />
                        </div>
                })
            }
        </div>
    );
};

export default CardSection1;
