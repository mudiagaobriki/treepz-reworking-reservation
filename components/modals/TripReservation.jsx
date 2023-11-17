'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import Button1 from '@/components/items/Button1';
import Button2 from '@/components/items/Button2';
// import isMobile from '@/components/helpers/isMobile'

const TripReservation = () => {
    
    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div>
            {/* Main modal */}
            <div id="trip-reservation-modal" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-2xl max-h-full">
                    {/* Modal content */}
                    <div className="bg-white rounded-2xl shadow w-[37.5rem]">
                        <div className="flex justify-between items-center w-full px-8 py-3 tz-border-bottom-1">
                            <h4 className="font-medium tz-text-dark-1">Host has accepted trip</h4>
                            <button type="button" className="p-1 tz-bg-light bg-transparent hover:bg-gray-200 rounded-lg w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="trip-reservation-modal">
                                <Image src="/assets/images/close-lg.png" alt="close-x" width={16} height={16} />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="w-full pt-12 pb-20 px-8">
                            <div className="flex items-start justify-between self-stretch mb-8">
                                <div className="flex flex-col items-start gap-4">
                                    <h3 className="text-2xl font-semibold tz-text-dark">Mercedes Maybach 2022</h3>
                                    <div className="flex items-center gap-4">
                                        <p className="font-medium tz-text-dark">May 30 - June 2</p>
                                        <div className="flex h-5 py-1 px-2 items-center gap-1 tz-bg-green rounded">
                                            <Image src="/assets/images/user-icons.png" alt="logo icon" width={12} height={12} />
                                            <span className="text-xs font-semibold tz-text-green">Chauffeurred</span>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="flex flex-col items-start gap-1">
                                    <h4 className="text-opacity-80 text-2xl font-medium tz-text-dark">
                                        NGN 20,000/<span className="text-base font-normal tz-text-gray-3">day</span>
                                    </h4>
                                    <p className="text-xs text-opacity-80 tz-text-gray">NGN 45,000 est. total</p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center items-start p-3 gap-1 mb-6 rounded-lg bg-white tz-border-gray-2">
                                <div  className="flex items-center gap-1">
                                    <Image src="/assets/images/prado2.png" alt="logo icon" width={256} height={135} />
                                    <Image src="/assets/images/prado2.png" alt="logo icon" width={256} height={135} />
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold text-center self-stretch mb-4 tz-text-dark">Mercedes Maybach 2022</h3>
                            <p className="text-center self-stretch mb-10 tz-text-gray-3">Your trip has been accepted by the host, to confirm your trip, proceed to make payment.</p>
                            <div className="flex flex-col gap-5 self-stretch">
                                <Button1 text="Make payment" url="" />
                                <Button2 text="Cancel offer" url="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default TripReservation;
