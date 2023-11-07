'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

const NotificationMessage = ({message, dateTime, bellIcon, bgColor, keyIndex, read=false}) => {

    return (
        <div className={`flex items-center justify-between w-full self-stretch ${keyIndex ? 'px-2 pb-2 pt-6 tz-border-top-1' : 'p-2'}`}>
            <div className="flex items-start gap-3 w-11/12 self-stretch">
                <div className={`flex items-center p-2 gap-2 rounded-full ${bgColor}`}>
                    <Image src={bellIcon} alt="notification icon" width={32} height={32} />
                </div>
                <div className="flex flex-col items-start gap-3">
                    <p className={`${!read && 'font-semibold'} tz-text-dark`}>{message}</p>
                    <p className="text-sm tz-text-gray">{dateTime}</p>
                </div>
            </div>
            <div className="flex items-center p-2 gap-2 rounded-lg tz-bg-light">
                <Image src="/assets/images/close-lg.png" alt="logo icon" width={16} height={16} />
            </div>
        </div>
    );
};

export default NotificationMessage;
