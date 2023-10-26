'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import Button1 from '@/components/items/Button1';
// import isMobile from '@/components/helpers/isMobile'

const ReserveForm = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3"; // h-[32.5rem]

    return (
        <div>
            <div className="flex flex-col items-start px-4 py-6 w-96 bg-white rounded-xl mb-6 tz-shadow tz-border-light-2">
                <div className="flex items-start gap-3 pb-4 mb-6">
                    <div className="flex items-center gap-1">
                        <Image src="/assets/images/star.png" alt="rating-star" width={16} height={16} />
                        <span className="text-sm font-bold tz-text-dark-1">4.9</span>
                    </div>
                    <p className="text-sm text-opacity-80 tz-text-dark">(34 reviews)</p>
                </div>
                <div className="flex items-center -space-x-2 w-full mb-5">
                    <div className="z-0 flex items-center gap-2 px-3 py-2 rounded-l-lg bg-white tz-border-light-3">
                        <div className="flex flex-col items-start gap-1">
                            <span className="text-xs tz-text-gray-2">Pick off date</span>
                            <input className="text-base w-full outline-none tz-text-gray-2" type="text" name="" placeholder="6/15/2023" />
                        </div>
                    </div>
                    <div className="z-10 flex justify-between items-center px-3 py-2 rounded-lg bg-white tz-border-light-3">
                        <div className="flex flex-col items-start gap-1">
                            <span className="text-xs tz-text-gray-2">Pick off time</span>
                            <input className="text-base w-full outline-none tz-text-gray-2" type="text" name="" placeholder="10:00 AM" />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image src="/assets/images/arrow-down.png" alt="chevron-down" width={20} height={20} />
                        </div>
                    </div>
                </div>
                <div className="flex items-center -space-x-2 w-full mb-5">
                    <div className="z-0 flex items-center gap-2 px-3 py-2 rounded-l-lg bg-white tz-border-light-3">
                        <div className="flex flex-col items-start gap-1">
                            <span className="text-xs tz-text-gray-2">Drop off date</span>
                            <input className="text-base w-full outline-none tz-text-gray-2" type="text" name="" placeholder="6/15/2023" />
                        </div>
                    </div>
                    <div className="z-10 flex justify-between items-center px-3 py-2 rounded-lg bg-white tz-border-light-3">
                        <div className="flex flex-col items-start gap-1">
                            <span className="text-xs tz-text-gray-2">Drop off time</span>
                            <input className="text-base w-full outline-none tz-text-gray-2" type="text" name="" placeholder="10:00 AM" />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image src="/assets/images/arrow-down.png" alt="chevron-down" width={20} height={20} />
                        </div>
                    </div>
                </div>
                <div className="flex items-center self-stretch gap-2 py-4 px-3 rounded-lg bg-white w-full mb-5 tz-border-light-3 mb-3">
                    <input className="w-full outline-none tz-text-gray-2" type="text" name="" placeholder="Enter pick-up location" />
                </div>
                <div className="flex items-center gap-2 mb-5">
                    <Image src="/assets/images/information-line.png" alt="info-line" width={20} height={20} />
                    <p className="text-xs font-light tz-text-red">The owner is available for pickup from 12:00 PM to 6:00 PM on Sundays</p>
                </div>
                <div className="w-full mb-6">
                    <Button1 text="Reserve" url="" width={"full"} />
                </div>
                <div className="w-full tz-border-top-1">
                    <div className="flex items-center justify-between w-full mb-3 mt-5">
                        <div>
                            <span className="text-base font-medium tz-text-gray-3">Total&nbsp;</span>
                            <span className="text-xs tz-text-gray-3">(incl. of tax)</span>
                        </div>
                        <div className="font-medium tz-text-dark">₦44,000</div>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <div>
                            <span className="text-base font-medium tz-text-gray-3">Total in GHC&nbsp;</span>
                            <span className="text-xs tz-text-gray-3">(incl. of tax)</span>
                        </div>
                        <div className="font-medium tz-text-dark">GHC4,400</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center p-4 w-96 bg-white rounded-xl mb-7 tz-shadow tz-border-light-2">
                <p className="text-xs font-medium tz-text-gray-50 mb-3 self-stretch">CANCELLATION POLICY</p>
                <div className="flex items-center gap-3 w-full">
                    <Image src="/assets/images/refund-fill.png" alt="info-line" width={32} height={32} />
                    <div>
                        <h4 className="text-sm font-medium tz-text-dark-1">Free Cancellation</h4>
                        <p className="text-xs font-light tz-text-gray-1">Full refund if trip is cancelled at least 48 hours ahead</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center px-4 py-3 w-96 bg-white rounded-xl tz-shadow tz-border-light-2">
                <p className="text-xs font-medium tz-text-gray-50 mb-3 self-stretch">CANCELLATION POLICY</p>
                <div className="flex items-center gap-3 w-full">
                    <Image src="/assets/images/shield-check-fill.png" alt="info-line" width={24} height={24} />
                    <div className="flex items-center gap-1">
                        <p className="text-sm tz-text-gray-3">Insurance via Octamile</p>
                        <Image src="/assets/images/information-line-gray.png" alt="info-line" width={16} height={16} />
                    </div>
                </div>
            </div>
            <div className="text-sm font-semibold underline mt-7 text-center tz-text-orange-1">Report listing</div>
            <div className="text-sm font-semibold underline mt-7 text-center tz-text-orange-1">Cancellation policy</div>
        </div>
    );
};

export default ReserveForm;

/*
display: flex;
width: 384px;
padding: 18px 16px 17px 16px;
justify-content: center;
align-items: center;

display: flex;
width: 384px;
padding: 12px 16px;
flex-direction: column;
align-items: flex-start;
gap: 8px;

border-radius: 12px;
border: 1px solid var(--neutral-tints-95, #E9EBEC);
background: var(--white-00, #FFF);

box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);
*/
