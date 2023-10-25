'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import ReviewCard from '@/components/items/ReviewCard';
// import isMobile from '@/components/helpers/isMobile'

const DATA = [
    {
        key: 1,
        image: '/assets/images/reviewer.png',
        username: "John Remington",
        userType: "Treepz User",
        review: 'I recently used Treepz to rent a car for a weekend getaway and I couldn\'t have been more pleased with the experience. '+
            'The platform was easy to use and I was able to find a great vehicle that met all of my needs. The host was friendly and accommodating.',
    },
    {
        key: 2,
        image: "/assets/images/reviewer.png",
        username: "John Remington",
        userType: "Treepz User",
        review: 'I recently used Treepz to rent a car for a weekend getaway and I couldn\'t have been more pleased with the experience. '+
            'The platform was easy to use and I was able to find a great vehicle that met all of my needs. The host was friendly and accommodating.',
    },
    {
        key: 3,
        image: "/assets/images/reviewer.png",
        username: "Redmond Relington",
        userType: "Treepz Host",
        review: 'The host was friendly and accommodating, and the negotiation feature allowed me to get a great deal on the rental price. '+
            'Plus, the entire rental process was seamless and stress-free, from booking to pickup to drop-off. I would highly recommend '+
            'Treepz to anyone looking for a reliable and convenient car rental service.',
    },
    {
        key: 4,
        image: "/assets/images/reviewer.png",
        username: "John Remington",
        userType: "Treepz User",
        review: 'I recently used Treepz to rent a car for a weekend getaway and I couldn\'t have been more pleased with the experience. '+
            'The platform was easy to use and I was able to find a great vehicle that met all of my needs. The host was friendly and accommodating.',
    },
    {
        key: 5,
        image: "/assets/images/reviewer.png",
        username: "John Remington",
        userType: "Treepz User",
        review: 'I recently used Treepz to rent a car for a weekend getaway and I couldn\'t have been more pleased with the experience. '+
            'The platform was easy to use and I was able to find a great vehicle that met all of my needs. The host was friendly and accommodating.',
    },
]

const ReviewRow = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className='tz-px-30'>
            <div className="flex items-start gap-8 tz-review-gradient">
                {
                    DATA.map((item, index) => {
                        return <div key={item?.key}>
                                <ReviewCard image={item?.image} username={item?.username} userType={item?.userType} review={item?.review} />
                            </div>
                    })
                }
            </div>
        </div>
    );
};

export default ReviewRow;

/*
background: linear-gradient(90deg, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0.83) 20.84%, #FFF 100%);
filter: blur(2px);*/