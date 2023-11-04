'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import AccountNavBar from '@/components/accounts/AccountNavBar';
import AccountSideBar from '@/components/accounts/AccountSideBar';
import BankDetails from '@/components/accounts/BankDetails';

const Page = () => {

    return (
        <div className="">
            <AccountNavBar active={"profile"} />
            <div className="my-16"></div>
            <div className="px-32 flex items-start gap-14">
                <AccountSideBar page={"bank-details"} />
                <BankDetails />
            </div>
            <div className="my-48"></div>
        </div>
    );
};

export default Page;
