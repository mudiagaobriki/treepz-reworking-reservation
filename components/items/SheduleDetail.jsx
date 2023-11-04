'use client';

import React, { useRef } from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import Button1 from '@/components/items/Button1'
import ButtonSm from '@/components/items/ButtonSm'
// import isMobile from '@/components/helpers/isMobile'

const SheduleDetail = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="w-[37.5rem] flex flex-col items-start gap-11 bg-white">
            <div className="flex flex-col items-start gap-7">
                <h3 className="text-[1.75em] font-semibold tz-text-dark">Your schedule details</h3>
                <div>
                    <p className="text-lg font-semibold tz-text-dark mb-1">Date</p>
                    <div className="flex items-center gap-2">
                        <Image src="/assets/images/calendar-event-line.png" alt="logo icon" width={20} height={20} />
                        <div className="flex items-center gap-3">
                            <div className="tz-text-dark-2">Sat, June 3 12:23 PM</div>
                            <div className="w-4 h-[2px] tz-bg-gray-4"></div>
                            <div className="tz-text-dark-2">Sat, June 3 12:23 PM</div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-lg font-semibold tz-text-dark mb-1">Pickup location</p>
                    <div className="flex items-center gap-2">
                        <Image src="/assets/images/car.png" alt="logo icon" width={20} height={20} />
                        <p className="tz-text-dark-2">Flight at flight airport, Cupertino, San Francisco, CF</p>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="flex justify-between w-full mb-3">
                    <p className="underline tz-text-dark-2">₦20,000 x 2 days</p>
                    <p className="text-right tz-text-gray">₦40,000</p>
                </div>
                <div className="flex justify-between w-full mb-3">
                    <p className="underline tz-text-dark-2">Special promo</p>
                    <p className="text-right tz-text-gray">₦2,000</p>
                </div>
                <div className="flex justify-end w-full mb-2">
                    <p className="text-right text-xs tz-text-gray tz-text-fadeout">₦2,000</p>
                </div>
                <div className="flex justify-end w-full">
                    {/*<p className="underline tz-text-dark-2">&nbsp;</p>*/}
                    <p className="flex items-center gap-2">
                        <span className="font-semibold tz-text-orange-1">Show more</span>
                        <Image src="/assets/images/chevron-down-gold.png" alt="logo icon" width={24} height={24} />
                    </p>
                </div>
                <div className="h-[1px] self-stretch tz-bg-gray-3 my-5"></div>
                <div className="flex justify-between items-center self-stretch w-full rounded-lg bg-white py-2 pr-2 pl-3 tz-border-light-4">
                    <p className="tz-text-gray-2">Enter promo code <em>(optional)</em></p>
                    <ButtonSm text="Apply code" />
                </div>
                <div className="flex justify-between w-full mt-2">
                    <p className="text-xl tz-text-dark">Total (after VAT)</p>
                    <p className="text-xl font-medium tz-text-dark">₦44,000</p>
                </div>
            </div>
            <div className="w-full">
                <h3 className="text-[1.75em] font-semibold tz-text-dark mb-12"></h3>
                <div className="flex justify-between items-start mb-6">
                    <div className="flex items-start gap-4">
                        <Image src="/assets/images/wallet-fill.png" alt="wallet icon" width={32} height={32} />
                        <div>
                            <p className="mb-2 text-xl tz-text-dark">₦44,000</p>
                            <p className="tz-text-gray">Wallet</p>
                        </div>
                    </div>
                    <Image src="/assets/images/Radio.png" alt="radio icon" width={20} height={20} />
                </div>
                <div className="flex justify-between items-center py-2 mb-2">
                    <div className="flex items-center gap-4">
                        <Image src="/assets/images/flutterwave.png" alt="chevron icon" width={36} height={36} />
                        <p className="text-xl tz-text-dark">Pay online (with flutterwave)</p>
                    </div>
                    <Image src="/assets/images/chevron-right-line.png" alt="radio icon" width={20} height={20} />
                </div>
                <div className="flex justify-between items-center py-2">
                    <div className="flex items-center gap-4">
                        <div className="p-2">
                            <Image src="/assets/images/paystack.png" alt="chevron icon" width={18} height={18} />
                        </div>
                        <p className="text-xl tz-text-dark">Pay online (with paystack)</p>
                    </div>
                    <Image src="/assets/images/chevron-right-line.png" alt="radio icon" width={20} height={20} />
                </div>
            </div>
            <div>
                <p className="tz-text-gray mb-8">
                    By selecting the button below, you agree to our 
                    <span className="underline tz-text-dark"> guest booking policy, the cancellation policy,</span> and 
                    <span className="underline tz-text-dark"> refund policy.</span>
                </p>
                <Button1 text="Proceed to pay" width="80" />
            </div>
        </div>
        
    );
};

export default SheduleDetail;
/*

*/ 