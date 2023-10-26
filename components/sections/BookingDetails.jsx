'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import VehicleHost from '@/components/sections/VehicleHost';
import VehicleFeatures from '@/components/sections/VehicleFeatures';
import ReviewSection2 from '@/components/sections/ReviewSection2';
import ReserveForm from '@/components/items/ReserveForm';
// import BlogCard2 from '@/components/items/BlogCard2';
// import isMobile from '@/components/helpers/isMobile'

const DATA = [
    {
        key: 1,
        image: '/assets/images/heartOfAfrica2.png',
        title: "Moving in the heart of Africa",
        description: 'Moving in the heart of Africa can be an exciting and enriching experience.',
    },
    {
        key: 2,
        image: "/assets/images/heartOfAfrica3.png",
        title: "Moving in the heart of Africa",
        description: 'Moving in the heart of Africa can be an exciting and enriching experience.',
    },
]

const BookingDetails = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className='flex justify-between items-start px-32 w-full mt-14'>
            <div>
                <VehicleHost />
                <div className="my-20"></div>
                <VehicleFeatures />
                <div className="my-20"></div>
                <ReviewSection2 />
                <div className="my-20"></div>
            </div>
            <div>
                <ReserveForm />
            </div>
        </div>
    );
};

export default BookingDetails;
