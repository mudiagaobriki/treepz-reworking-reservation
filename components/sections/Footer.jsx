'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import FaqsItem from '@/components/items/FaqsItem';
// import isMobile from '@/components/helpers/isMobile'

const Footer = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className='flex flex-col items-start gap-10 pb-10 pt-14 tz-px-30 tz-bg-light'>
            <div className="flex justify-between items-center self-stretch">
                <div> <Image src="/assets/images/logo.png" alt="need-support" width={120} height={32} /> </div>
                <div className="flex items-center gap-5">
                    <div className="text-base font-medium tz-text-dark-2">Your journey starts here, get the app</div>
                    <div className="flex gap-1">
                        <Image src="/assets/images/appstore-icon.png" alt="need-support" width={110} height={33} /> 
                        <Image src="/assets/images/google-play-icon.png" alt="need-support" width={110} height={33} /> 
                    </div>
                </div>
            </div>
            <div className="w-full tz-h-1 tz-bg-gray-2"></div>
            <div className="flex justify-center gap-40 items-start self-stretch">
                <div className="flex flex-col items-start gap-6">
                    <div className="font-medium tz-text-dark-2">Features</div>
                    <div className="flex flex-col gap-3">
                        <p className="text-sm tz-text-dark-2">Book a car</p>
                        <p className="text-sm tz-text-dark-2">Treepz for partners</p>
                        <p className="text-sm tz-text-dark-2">How it works</p>
                        <p className="text-sm tz-text-dark-2">FAQs</p>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-6">
                    <div className="font-medium tz-text-dark-2">Comapny</div>
                    <div className="flex flex-col gap-3">
                        <p className="text-sm tz-text-dark-2">About</p>
                        <p className="text-sm tz-text-dark-2">Career</p>
                        <p className="text-sm tz-text-dark-2">Press</p>
                        <p className="text-sm tz-text-dark-2">Blog</p>
                        <p className="text-sm tz-text-dark-2">Help center</p>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-6">
                    <div className="font-medium tz-text-dark-2">Locations</div>
                    <div className="flex flex-col gap-3">
                        <p className="text-sm tz-text-dark-2">Ghana</p>
                        <p className="text-sm tz-text-dark-2">Kenya</p>
                        <p className="text-sm tz-text-dark-2">Nigeria</p>
                        <p className="text-sm tz-text-dark-2">Uganda</p>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-8">
                    <div className="flex flex-col items-start gap-6">
                        <div className="font-medium tz-text-dark-2">Hosting</div>
                        <div className="flex flex-col gap-3">
                            <p className="text-sm tz-text-dark-2">List your car</p>
                            <p className="text-sm tz-text-dark-2">Insurance and protection</p>
                            <p className="text-sm tz-text-dark-2">FAQs</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <div className="text-base font-medium tz-text-dark-2">Follow us</div>
                        <div className="flex gap-2">
                            <Image src="/assets/images/twitter-icon.png" alt="twitter-icon" width={24} height={24} /> 
                            <Image src="/assets/images/facebook-icon.png" alt="facebook-icon" width={24} height={24} /> 
                            <Image src="/assets/images/linkedin-icon.png" alt="linkedin-icon" width={24} height={24} /> 
                            <Image src="/assets/images/instagram-icon.png" alt="instagram-icon" width={24} height={24} /> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-0 w-full"></div>
            <div className="flex justify-between items-center w-full">
                <p>© 2023 Treepz.com, Inc. All rights reserved.</p>
                <div className="flex gap-1">
                    <p>Terms & Conditions</p>
                    <div className="self-stretch tz-w-1 tz-bg-gray-1"></div>
                    <p>Privacy policy</p>
                    <div className="self-stretch tz-w-1 tz-bg-gray-1"></div>
                    <p>Cookie policy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
