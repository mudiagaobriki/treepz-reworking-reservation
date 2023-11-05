'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import Button1 from '@/components/items/Button1';
// import isMobile from '@/components/helpers/isMobile'

const FundWallet = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div>
            {/* Main modal */}
            <div id="fund-wallet-modal" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-2xl max-h-full">
                    {/* Modal content */}
                    <div className="bg-white rounded-2xl shadow w-[37.5rem]">
                        <div className="flex justify-between items-center w-full px-8 py-3 tz-border-bottom-1">
                            <h4 className="font-medium tz-text-dark-1">Fund wallet</h4>
                            <button type="button" className="p-1 tz-bg-light bg-transparent hover:bg-gray-200 rounded-lg w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="fund-wallet-modal">
                                <Image src="/assets/images/close-lg.png" alt="close-x" width={16} height={16} />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="w-full pt-12 pb-20 px-8">
                            <div className="mb-16">
                                <h3 className="text-2xl font-semibold text-center tz-text-dark-1">Enter amount</h3>
                                <p className="text-sm text-opacity-70 text-center tz-text-dark-1">Enter an amount and select your preferred gateway</p>
                            </div>
                            <form action="#">
                                <div className="flex flex-col items-start gap-1 mb-10">
                                    <div className="relative w-full">
                                        <input type="text" id="amount" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                                        <label for="amount" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Amount</label>
                                    </div>
                                    <div className="text-sm tz-text-dark">Current balance:<span className="tz-text-gray"> ₦1,000,000</span></div>
                                </div>
                                <div className="flex flex-col items-start gap-4 w-full mb-16">
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex items-center gap-4">
                                            <Image src="/assets/images/flutterwave.png" alt="eye-icon" width={36} height={36} />
                                            <div className="font-medium tz-text-dark">Pay online (with flutterwave)</div>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="flutterwave" type="radio" value="flutterwave" name="payWith" class="w-5 h-5 text-[#F8B02B] bg-white border border-[#DEE0E3] focus:ring-[#F8B02B] focus:ring-2" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center justify-center w-8 h-8">
                                                <Image src="/assets/images/paystack.png" alt="eye-icon" width={18} height={18} />
                                            </div>
                                            <div className="font-medium tz-text-dark">Pay online (with paystack)</div>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="paystack" type="radio" value="paystack" name="payWith" class="w-5 h-5 text-[#F8B02B] bg-white border border-[#DEE0E3] focus:ring-[#F8B02B] focus:ring-2" />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <Button1 text="Fund wallet" width="full" submit={true} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default FundWallet;
