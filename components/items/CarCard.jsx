'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'

const CarCard = ({carImage, carName, price, location="", rating=4.9, tripsCount=30,
                             hasDisabledSeat=true, numSeats=4, hasAC=true, hasWifi=true,
                             isChauffeured=false, isPromoted=false, isSelfDrive=false, isRareFind=false}) => {
    const attendedImg = () => isChauffeured ? chauffeured : selfDrive

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className='flex flex-col flex-start rounded-xl tz-shadow tz-border-light'>
            <div className="self-stretch">
                <Image src={carImage} alt="car image" width={288} height={208} />
            </div>
            <div className="flex flex-col items-start p-3 gap-3 self-stretch">
                <div className="flex justify-between items-center self-stretch">
                    <div>
                        {isChauffeured &&
                            <div className="flex h-5 py-1 px-2 items-center gap-1 tz-bg-green rounded">
                                <Image src="/assets/images/user-icons.png" alt="logo icon" width={12} height={12} />
                                <span className="text-xs font-semibold tz-text-green">Chauffeurred</span>
                            </div>}
                        {isSelfDrive &&
                            <div className="flex h-5 py-1 px-2 items-center gap-1 tz-bg-blue-1 rounded">
                                <Image src="/assets/images/steering-1.png" alt="logo icon" width={12} height={12} />
                                <span className="text-xs font-semibold tz-text-blue-1">Self drive</span>
                            </div>}
                        {isPromoted &&
                            <div className="flex h-5 py-1 px-2 items-center gap-1 tz-bg-blue rounded">
                                <span className="text-xs font-semibold tz-text-blue">Promoted</span>
                            </div>}
                        {isRareFind &&
                            <div className="flex h-5 py-1 px-2 items-center gap-1 tz-bg-yellow rounded">
                                <span className="text-xs font-semibold tz-text-brown">Rare find</span>
                            </div>}
                    </div>
                    <div className="flex items-center gap-1">
                        <Image src="/assets/images/star.png" alt="rating-star" width={13} height={13} />
                        <span className="text-xs font-medium">{rating} ({tripsCount} trips)</span>
                    </div>
                </div>
                <div className="text-base font-medium tz-text-dark">{carName}</div>
                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-2">
                        {hasDisabledSeat && <div><Image src="/assets/images/seat.png" alt="logo icon" width={16} height={16} /></div>}
                        <div className="text-xs font-semibold text-[#7D7D81]">{numSeats}</div>
                        {hasAC && <div><Image src="/assets/images/air-conditioner.png" alt="logo icon" width={12} height={12} /></div>}
                        {hasWifi && <div><Image src="/assets/images/wifi.png" alt="logo icon" width={12} height={12} /></div>}
                    </div>
                    <div>
                        <div>
                            <span className="text-xs text-opacity-80 tz-text-gray-1">from </span> 
                            {/*<span className="font-bold text-base tz-text-dark-1">₦{price}</span>*/}
                            <span className="font-bold text-base tz-text-dark-1">&#8358;{price}</span>
                            <span className="text-xs text-opacity-80 tz-text-gray-1">/day</span>
                        </div>
                        <div className="text-xs text-right text-opacity-80 underline tz-text-gray">&#8358; {price} total</div>
                        {/*<div className="text-xs  text-opacity-80 underline tz-text-gray">₦ 20,000 total</div>*/}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default CarCard;
