'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import ReviewCard2 from '@/components/items/ReviewCard2';

const DATA = [
    {
        key: 1,
        image: "/assets/images/profile-photo-2.png",
        username: 'Ananda',
        timestamp: '2 hours ago',
        review: 'A really lovely experience. Great driver in a calm and decent bus. He was on time and friendly.'
    },
    {
        key: 2,
        image: "/assets/images/profile-photo-2.png",
        username: 'Ananda',
        timestamp: '2 hours ago',
        review: 'A really lovely experience. Great driver in a calm and decent bus. He was on time and friendly.'
    },
    {
        key: 3,
        image: "/assets/images/profile-photo-2.png",
        username: 'Ananda',
        timestamp: '2 hours ago',
        review: 'A really lovely experience. Great driver in a calm and decent bus. He was on time and friendly.'
    },
    {
        key: 4,
        image: "/assets/images/profile-photo-2.png",
        username: 'Ananda',
        timestamp: '2 hours ago',
        review: 'A really lovely experience. Great driver in a calm and decent bus. He was on time and friendly.'
    },
    /*{
        key: 5,
        image: "/assets/images/profile-photo-2.png",
        username: 'Ananda',
        timestamp: '2 hours ago',
        review: 'A really lovely experience. Great driver in a calm and decent bus. He was on time and friendly.'
    },
    {
        key: 6,
        image: "/assets/images/profile-photo-2.png",
        username: 'Ananda',
        timestamp: '2 hours ago',
        review: 'A really lovely experience. Great driver in a calm and decent bus. He was on time and friendly.'
    },*/
]

const ReviewSection2 = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="w-2/3 pt-8 tz-border-top-3">
            <h3 className="text-2xl font-medium tz-text-dark mb-5">Reviews (56)</h3>
            <div className="grid grid-cols-2 gap-y-8 mb-5">
                {
                    DATA.map((item, index) => {
                        return <div key={item?.key}>
                            <ReviewCard2 image={item?.image} username={item?.username} timestamp={item?.timestamp} review={item?.review} />
                        </div>
                    })
                }
            </div>
            <div className="flex items-center justify-center gap-2 w-full">
                <p className="text-base font-semibold tz-text-dark">Show less</p>
                <Image src="/assets/images/chevron-up-line.png" alt="" width={24} height={24} className="flex-shrink-0" />
            </div>
        </div>
    );
};

export default ReviewSection2;
