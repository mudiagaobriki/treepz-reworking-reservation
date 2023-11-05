'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import AccountNavBar from '@/components/accounts/AccountNavBar';
import AccountSideBar from '@/components/accounts/AccountSideBar';
import Wallet from '@/components/accounts/Wallet';

const Page = () => {

    return (
        <div className="">
            <AccountNavBar active={"wallet"} />
            <div className="my-24"></div>
            <Wallet />
            <div className="my-96"></div>
        </div>
    );
};

export default Page;
