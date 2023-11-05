'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

import { Dismiss } from 'flowbite';

const Referals = () => {

    return (
        <div className="inline-flex gap-24 items-start">
            <div className="flex flex-col items-start gap-8 w-[31rem]">
                <div className="flex items-start gap-6 mb-8 w-full">
                    <div className="flex flex-col items-start px-3 py-4 gap-2 rounded-lg bg-white w-1/2 tz-border-light-2">
                        <div className="text-sm tz-text-gray-7">Amount earned</div>
                        <div className="text-xl font-semibold tz-text-dark">₦100,000,000</div>
                    </div>
                    <div className="flex flex-col items-start px-3 py-4 gap-2 rounded-lg bg-white w-1/2 tz-border-light-2">
                        <div className="text-sm tz-text-gray-7">Completed referrals</div>
                        <div className="text-xl font-semibold tz-text-dark">20</div>
                    </div>
                </div>  
                <div className="flex justify-between items-center p-3 mb-10 rounded-lg w-full tz-bg-light tz-border-gray-2">
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-xs tz-text-gray-7">Referral link</div>
                        <div className="text-sm tz-text-dark-1">https//treepz.com/edhdhehhssh</div>
                    </div>
                    <button onClick={() => navigator.clipboard.writeText('https//treepz.com/edhdhehhssh')} id="copyToClipboard" data-collapse-toggle="copy-toast" data-tooltip-target="tooltip-default">
                        <Image src="/assets/images/account/copy.png" alt="" width={88} height={44} className="flex-shrink-0" />
                    </button>
                </div>
                <h3 className="mb-8 text-2xl font-medium tz-text-dark">Your invite history</h3>
                {/*<div className="flex flex-col items-center gap-1 justify-center w-full">
                    <p className="text-center text-lg font-medium tz-text-dark">No referrals yet</p>
                    <p className="text-center text-sm font-light tz-text-gray">Invite your friends to earn</p>
                </div>*/}
                <div className="flex flex-col items-start w-full gap-5">
                    <div className="flex justify-between items-center pb-0 w-full tz-border-light-2">
                        <div className="flex flex-col items-start gap-1">
                            <div className="font-medium tz-text-dark">Afolabi Wahab</div>
                            <div className="text-xs tz-text-gray-3">Jul, 2023</div>
                        </div>
                        <div className="text-sm font-medium tz-text-dark">NGN 500</div>
                    </div>
                    <div className="flex justify-between items-center pb-0 w-full tz-border-light-2">
                        <div className="flex flex-col items-start gap-1">
                            <div className="font-medium tz-text-dark">Afolabi Wahab</div>
                            <div className="text-xs tz-text-gray-3">Jul, 2023</div>
                        </div>
                        <div className="text-sm font-medium tz-text-dark">NGN 500</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start justify-center w-96">
                <div className="flex justify-center w-full mb-10">
                    <Image src="/assets/images/rafiki.png" alt="" width={208} height={208} />
                </div>
                <h4 className="w-full text-2xl font-semibold mb-1 text-center tz-text-dark">Spread the love and earn</h4>
                <p className="w-full mb-6 text-center self-stretch tz-text-gray">Explore our marketplace to find a car for your next adventure</p>
                {/*<p className="w-full mb-6 text-center self-stretch tz-text-gray">Invite a friend and earn <span className="font-medium tz-text-dark">NGN500</span></p>*/}
                <div className="flex justify-center w-full">
                    <Link 
                        href=""
                        className="flex py-3 px-6 justify-center items-center font-semibold w-full  rounded-lg bg-white hover:text-white hover:bg-[#101010] tz-text-dark-1 tz-border-dark-1"
                    >
                        Invite a friend
                    </Link>
                </div>
            </div>
            {/*<div id="tooltip-default" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Copy
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>*/}

            {/*<div id="copy-toast" class="flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
                <Image src="/assets/images/status-icons.png" alt="logo icon" width={20} height={20} />
                <div class="pl-4 text-sm font-normal">Copied to clipboard</div>
            </div>*/}

            {/*<div id="copy-toast" class="fixed hidden flex items-center w-full max-w-xs p-4 space-x-4 text-white bg-gray-800 divide-x divide-gray-200 rounded-lg shadow bottom-5 left-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
                <div class="text-sm font-normal">Copied to clipboard</div>
            </div>*/}

        </div>
        
    );
};

export default Referals;
