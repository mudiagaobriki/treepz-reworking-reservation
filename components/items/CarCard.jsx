'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import { Carousel } from 'flowbite';

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
                {/*<Image src={carImage} alt="car image" width={288} height={208} />*/}

                <div id="controls-carousel" class="relative w-full" data-carousel="slide">
                    {/*Carousel wrapper*/}
                    <div class="relative h-52 w-72 overflow-hidden rounded-t-lg px-3">
                        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                            <Image src={carImage} alt="" width={288} height={208} class="absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <Image src={carImage} alt="" width={288} height={208} class="absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <Image src={carImage} alt="" width={288} height={208} class="absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                    </div>
                    <div className="inline-flex items-center justify-between w-full absolute px-3 pt-4 top-0 left-0 right-0 z-30">
                        <div className="flex items-start px-2 py-1 gap-1 rounded-3xl bg-white tz-border-light-1">
                            <span className="text-sm tz-text-dark">{location}</span>
                        </div>
                        <Image src="/assets/images/heart-2-light.png" alt="" width={24} height={24} />
                    </div>
                    {/*Slider indicators*/}
                    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                        <button type="button" class="w-2 h-2 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" class="w-2 h-2 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" class="w-2 h-2 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    </div>
                    {/*Slider controls*/}
                    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-0 group-focus:ring-white group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                            </svg>
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-0 group-focus:ring-white group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <span class="sr-only">Next</span>
                        </span>
                    </button>
                </div>

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
                <div className="flex justify-between items-center self-stretch">
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
                            <span className="font-bold text-base tz-text-dark-1">NGN{price}</span>
                            <span className="text-xs text-opacity-80 tz-text-gray-1">/day</span>
                        </div>
                        {/*<div className="text-xs text-right text-opacity-80 underline tz-text-gray">&#8358; {price} total</div>*/}
                        {/*<div className="text-xs  text-opacity-80 underline tz-text-gray">₦ 20,000 total</div>*/}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default CarCard;
