'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'

let stars = [
    '/assets/images/star.png',
    '/assets/images/star.png',
    '/assets/images/star.png',
    '/assets/images/star.png',
    '/assets/images/star.png',
]

const ReviewCard = ({image, username, userType, review, ratings=stars}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex flex-col items-start gap-5 px-4 py-5 rounded-xl tz-bg-light">
            <div className="flex items-start gap-1">
                {
                    ratings.map((item, index) => {
                        return <div key={index}>
                                <Image src={item} alt="logo icon" width={20} height={20} />
                            </div>
                    })
                }
            </div>
            <p className="text-xs font-light tz-text-dark w-52">{review}</p>
            <div className="flex items-center gap-3">
                <div>
                    <Image src={image} alt="logo icon" width={40} height={40} className="rounded-full" />
                </div>
                <div className="flex flex-col items-start gap-1">
                    <h4 className="text-sm font-medium tz-text-dark">{username}</h4>
                    <p className="text-xs font-light tz-text-dark">{userType}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
