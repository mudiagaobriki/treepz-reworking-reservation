'use client';

import React, { useRef } from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import Button1 from '@/components/items/Button1'
import ButtonSm from '@/components/items/ButtonSm'
// import isMobile from '@/components/helpers/isMobile'

const CancelConfirmation = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="w-[37.5rem] flex flex-col items-start gap-11 bg-white">
            <div className="flex flex-col items-start gap-6 w-full">
                <h3 className="text-[1.75em] font-semibold tz-text-dark">Confirm cancellation</h3>
                <div className="flex items-center justify-between self-stretch w-full">
                    <div className="flex flex-col items-start gap-2">
                        <div className="text-lg font-semibold tz-text-dark">Amount paid</div>
                        <div className="text-xl tz-text-dark-2">₦60,000</div>
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <div className="text-lg font-semibold tz-text-dark">Your refund</div>
                        <div className="text-xl tz-text-dark-2">₦60,000</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start gap-6 w-full self-stretch">
                <div className="text-xl font-medium tz-text-dark">Why are you cancelling this booking?</div>
                <div className="relative w-full">
                    <select id="cancelReason" class="block w-full px-3 py-4 text-base border rounded-lg bg-white appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3">
                        <option value="" selected>Reason for cancellation</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-col items-start gap-6 w-full">
                <h3 className="text-xl font-medium tz-text-dark">Detailed breakdown</h3>
                <div className="flex flex-col items-start gap-3 w-full">
                    <div className="flex items-center justify-between self-stretch w-full">
                        <div className="flex flex-col items-start gap-1">
                            <div className="tz-text-dark-2">Rend fee</div>
                            <div className="text-xs tz-text-gray">₦20,000</div>
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <div className="tz-text-dark-2">Full refund</div>
                            <div className="text-xs tz-text-gray">of ₦20,000</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between self-stretch w-full">
                        <div className="flex flex-col items-start gap-1">
                            <div className="tz-text-dark-2">Treepz service fee</div>
                            <div className="text-xs tz-text-gray">₦20,000</div>
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <div className="tz-text-dark-2">Full refund</div>
                            <div className="text-xs tz-text-gray">of ₦20,000</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between self-stretch w-full">
                        <div className="flex flex-col items-start gap-1">
                            <div className="tz-text-dark-2">Taxes</div>
                            <div className="text-xs tz-text-gray">₦20,000</div>
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <div className="tz-text-dark-2">Full refund</div>
                            <div className="text-xs tz-text-gray">of ₦20,000</div>
                        </div>
                    </div>
                </div>
                <div className="h-[1px] self-stretch tz-bg-gray-3 my-5"></div>
                <div className="flex items-center justify-between self-stretch w-full">
                    <div className="font-medium tz-text-dark">Total refund</div>
                    <div className="font-medium tz-text-dark">of ₦60,000</div>
                </div>
            </div>
            <div>
                <p className="tz-text-gray mb-8">
                    By selecting the button below, you agree to our 
                    <span className="underline tz-text-dark"> guest booking policy, the cancellation policy,</span> and 
                    <span className="underline tz-text-dark"> refund policy.</span>
                </p>
                <div className="flex items-start self-stretch gap-8">
                    <Link href="" className="flex py-3 px-6 justify-center items-center font-semibold w-full  rounded-lg bg-white hover:text-white hover:bg-[#101010] tz-text-dark-1 tz-border-dark-1">
                        Keep booking
                    </Link><Link href="" className="flex py-3 px-6 justify-center items-center font-semibold w-full  rounded-lg bg-[#FBDF88] hover:bg-[#FBDF88]/80 tz-text-dark-1">
                        Cancel booking
                    </Link>
                </div>
            </div>
        </div>
        
    );
};

export default CancelConfirmation;
/*
background: var(--secondary-tints-90, #FBDF88); 
*/ 