'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import AccountNavBar from '@/components/accounts/AccountNavBar';
import AccountSideBar from '@/components/accounts/AccountSideBar';
import SecuritySettings from '@/components/accounts/SecuritySettings';

const Page = () => {

    return (
        <div className="">
            <AccountNavBar active={"profile"} />
            <div className="my-16"></div>
            <div className="px-32 flex items-start gap-14">
                <AccountSideBar page={"security-settings"} />
                <SecuritySettings />
            </div>
            <div className="my-48"></div>
        </div>
    );
};

export default Page;
