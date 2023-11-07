'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Third party components
import {isMobile} from "react-device-detect";

const AccountSideBar = ({page}) => {

    let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="inline-flex flex-col items-start w-64 bg-white gap-3">
            <Link href="/account/profile" className={`flex items-center gap-2 p-3 w-full rounded-lg hover:bg-[#F7F7F7] ${page == 'profile' && 'tz-bg-orange'}`}>
                <Image src="/assets/images/account/user-3-fill.png" alt="" width={20} height={20} className="flex-shrink-0" />
                <div className={page == 'profile' ? "font-semibold tz-text-dark-5" : "tz-text-gray"}>My Profile</div>
            </Link>
            <Link href="/account/security-settings" className={`flex items-center gap-2 p-3 w-full rounded-lg hover:bg-[#F7F7F7] ${page == 'security-settings' && 'tz-bg-orange'}`}>
                <Image src="/assets/images/account/shield-keyhole-fill.png" alt="" width={20} height={20} className="flex-shrink-0" />
                <div className={page == 'security-settings' ? "font-semibold tz-text-dark-5" : "tz-text-gray"}>Security settings</div>
            </Link>
            <Link href="/account/notifications" className={`flex items-center gap-2 p-3 w-full rounded-lg hover:bg-[#F7F7F7] ${page == 'notifications' && 'tz-bg-orange'}`}>
                <Image src="/assets/images/account/bell-fill.png" alt="" width={20} height={20} className="flex-shrink-0" />
                <div className={page == 'notifications' ? "font-semibold tz-text-dark-5" : "tz-text-gray"}>Notifications</div>
            </Link>
            <Link href="/account/bank-details" className={`flex items-center gap-2 p-3 w-full rounded-lg hover:bg-[#F7F7F7] ${page == 'bank-details' && 'tz-bg-orange'}`}>
                <Image src="/assets/images/account/bank-fill.png" alt="" width={20} height={20} className="flex-shrink-0" />
                <div className={page == 'bank-details' ? "font-semibold tz-text-dark-5" : "tz-text-gray"}>Bank Details</div>
            </Link>
            <Link href="/account/referals" className={`flex items-center gap-2 p-3 w-full rounded-lg hover:bg-[#F7F7F7] ${page == 'referals' && 'tz-bg-orange'}`}>
                <Image src="/assets/images/account/user-2-fill.png" alt="" width={20} height={20} className="flex-shrink-0" />
                <div className={page == 'referals' ? "font-semibold tz-text-dark-5" : "tz-text-gray"}>Referals</div>
            </Link>
        </div>
    );
};

export default AccountSideBar;
