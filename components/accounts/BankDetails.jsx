'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

import Button1 from '@/components/items/Button1';
import AccountSideBar from '@/components/accounts/AccountSideBar';
import BankCard from '@/components/accounts/BankCard';

const BankDetails = () => {

    return (
        <div className="flex flex-col items-start gap-8">
            <div className="flex items-start gap-8">
                <BankCard />
                <BankCard />
            </div>
            <div className="flex items-start gap-8">
                <BankCard />
                <div className="w-80 h-52 p-4 rounded-lg flex flex-col justify-center items-start gap-4 bg-white flex-shrink-0 border border-dashed border-black">
                    <div>
                        <Image src="/assets/images/account/add-bank-details.png" alt="" width={56} height={56} />
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-lg font-medium tz-text-dark text-left w-full">Add another bank account</div>
                        <div className="text-sm tz-text-gray-3">You can up to 4 accounts</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BankDetails;

/*
display: flex;
width: 320px;
height: 210px;
padding: 16px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 16px;
flex-shrink: 0;

border-radius: 8px;
border: 1px dashed #000;
background: #FFF;
*/