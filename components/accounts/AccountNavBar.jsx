'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Third party components
import {isMobile} from "react-device-detect";

const AccountNavBar = ({active}) => {

    let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex items-center w-full px-32 pt-8 pb-0 bg-white tz-border-bottom-1">
            <div className="flex gap-5 h-12 pb-0">
                <div className="flex flex-col items-start pb-0 self-stretch w-24 gap-4">
                    <Link href="/account/profile" className="flex justify-center items-start self-stretch p-1 gap-1">
                        <span className="text-sm font-medium tz-text-dark">Profile</span>
                    </Link>
                    {active == 'profile' && <div className="h-[2px] self-stretch tz-bg-dark-1"></div>}
                </div>
                <div className="flex flex-col items-start pb-0 self-stretch w-24 gap-4">
                    <Link href="/account/wallet" className="flex justify-center items-start self-stretch p-1 gap-1">
                        <span className="text-sm font-medium tz-text-dark">Wallet</span>
                    </Link>
                    {active == 'wallet' && <div className="h-[2px] self-stretch tz-bg-dark-1"></div>}
                </div>
            </div>
        </div>
    );
};

export default AccountNavBar;
