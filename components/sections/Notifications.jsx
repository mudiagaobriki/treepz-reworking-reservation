'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import BlogCard1 from '@/components/items/BlogCard1';
import BlogCard2 from '@/components/items/BlogCard2';
import NotificationMessage from '@/components/items/NotificationMessage'

const DATA = [
    {
        key: 1,
        bellIcon: "/assets/images/bell-fill-light.png",
        bgColor: "bg-[#3CC13B]",
        message: "Please confirm your email address by clicking on the link we just emailed you. If you cannot find the email, you can request a new confirmation email or change your email address.",
        dateTime: "7:00 PM on May 24, 2023",
        read: false
    },
    {
        key: 2,
        bellIcon: "/assets/images/bell-fill-green.png",
        bgColor: "bg-[#E0F5E0]",
        message: "Please confirm your email address by clicking on the link we just emailed you. If you cannot find the email, you can request a new confirmation email or change your email address.",
        dateTime: "7:00 PM on May 24, 2023",
        read: true
    },
    {
        key: 3,
        bellIcon: "/assets/images/bell-fill-red.png",
        bgColor: "bg-[#FEECEC]",
        message: "Booking request rejected",
        dateTime: "7:00 PM on May 24, 2023",
        read: true
    },
]

const Notifications = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="px-32 w-full mb-96">
            <div className="flex flex-col items-start gap-5 mb-14">
                <div className="flex items-start gap-2 py-2 pl-40 pr-2 w-full">
                    <div className="text-3xl font-medium tz-text-dark">Notifications</div>
                </div>
                <div className="h-[1px] self-stretch tz-bg-gray-3"></div>
            </div>
            {/*<div className="flex flex-col items-start justify-center w-full">
                <div className="flex justify-center w-full mb-10">
                    <Image src="/assets/images/Message.png" alt="empty notifications" width={106} height={124} />
                </div>
                <h3 className="w-full text-center text-3xl font-semibold tz-text-gray-3">You are all caught up!</h3>
            </div>*/}
            <div className="flex flex-col items-start gap-8 px-40 w-full">
                {
                    DATA.map((item, index) => {
                        return <div key={item?.key} className="w-full">
                                <NotificationMessage bellIcon={item?.bellIcon} message={item?.message} dateTime={item?.dateTime} bgColor={item?.bgColor} read={item?.read} keyIndex={index} />
                            </div>
                    })
                }
            </div>
        </div>
    );
};

export default Notifications;
