'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import Button1 from '@/components/items/Button1';

const VehicleImage = ({description}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="w-2/3">
            <div className="flex justify-between items-center mb-8 w-full">
                <div className="flex flex-col items-start gap-4">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl font-medium tz-text-dark">Hosted by Isidore Kpokufe</span>
                        <Image src="/assets/images/status-icons.png" alt="logo icon" width={20} height={20} />
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="flex items-center gap-1">
                            <Image src="/assets/images/userStarFill.png" alt="user-star" width={16} height={16} />
                            <span className="text-sm tz-text-gray">Host since Feb. 2023</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Image src="/assets/images/car-wheel-2.png" alt="user-star" width={16} height={16} />
                            <span className="text-sm tz-text-gray">Gasoline</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Image src="/assets/images/wifi.png" alt="user-star" width={16} height={16} />
                            <span className="text-sm tz-text-gray">4 seats</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Image src="/assets/images/bluetooth.png" alt="user-star" width={16} height={16} />
                            <span className="text-sm tz-text-gray">2 doors</span>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Image src="/assets/images/profile-photo.png" alt="profile photo" width={68} height={68} className="rounded-full border-white flex-shrink-0" />
                </div>
            </div>
            <div className="flex flex-col items-end gap-2 pt-8 tz-border-top-3">
                <div>
                    <h3 className="text-2xl font-medium tz-text-dark mb-5">Description</h3>
                    <div className="flex flex-col justify-center w-full h-24 flex-shrink-0">
                        <p className="tz-text-gray overflow-hidden overflow-ellipsis w-full tz-text-fadeout">
                            {description}
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-end gap-2 w-full">
                    <p className="text-base font-semibold tz-text-dark">Show more</p>
                    <Image src="/assets/images/chevron-down-line.png" alt="" width={24} height={24} className="flex-shrink-0" />
                </div>
            </div>
        </div>
        
    );
};

export default VehicleImage;
