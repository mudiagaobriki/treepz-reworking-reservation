'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import Button3 from '@/components/items/Button3';
// import isMobile from '@/components/helpers/isMobile'

const SupportCommunity = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="px-32">
            <div className="m-20 w-full">
                <h2 className="text-center self-stretch text-[2.5rem] font-medium mb-2 tz-text-dark">You are not alone</h2>
                <p className="text-center self-stretch text-xl tz-text-gray">Find your ultimate road trip vehicle for your dream destination</p>
            </div>
            <div className="flex items-center gap-32 w-full">
                <div className="flex flex-col items-start gap-10 px-5 py-7 rounded-2xl bg-white tz-shadow">
                    <div>
                        <h4 className="text-2xl font-medium mb-6 tz-text-dark">Dedicated Support</h4> 
                        <p className="self-stretch tz-text-gray">We offer a dedicated customer support team to assist you with any questions or concerns that may arise during your hosting journey. Reach out to us via phone, email, or our online chat feature.</p>
                    </div>
                    <Button3 text="Contact support" imgLight="/assets/images/arrow-right-line-white.png" url="" width="width2" iconLeft={true} />
                </div>
                <div className="flex flex-col items-start gap-10 px-5 py-7 rounded-2xl bg-white tz-shadow">
                    <div>
                        <h4 className="text-2xl font-medium mb-6 tz-text-dark">Host Community</h4> 
                        <p className="self-stretch tz-text-gray">Connect with other Treepz hosts through our host community forums, events, and online-white groups. Share insights, tips, and experiences to enhance your hosting skills and network with like-minded individuals.</p>
                    </div>
                    <Button3 text="Join community" imgLight="/assets/images/arrow-right-line-white.png" url="" width="width2" iconLeft={true} />
                </div>
            </div>
        </div>
    );
};

export default SupportCommunity;
