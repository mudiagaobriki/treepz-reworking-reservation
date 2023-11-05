'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

import Modal from 'flowbite';

import Button1 from '@/components/items/Button1';
import AccountSideBar from '@/components/accounts/AccountSideBar';
import BankCard from '@/components/accounts/BankCard';
import AddBankDetails from '@/components/modals/AddBankDetails';
import BankSuccess from '@/components/modals/BankSuccess';

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
                    <button data-modal-target="bank-success-modal" data-modal-toggle="bank-success-modal">
                        <Image src="/assets/images/account/add-bank-details.png" alt="" width={56} height={56} />
                    </button>
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-lg font-medium tz-text-dark text-left w-full">Add another bank account</div>
                        <div className="text-sm tz-text-gray-3">You can up to 4 accounts</div>
                    </div>
                </div>
            </div>
            {/*<div className="flex flex-col items-start justify-center w-96">
                <div className="flex justify-center w-full mb-10">
                    <Image src="/assets/images/piggy.png" alt="" width={180} height={140} />
                </div>
                <h4 className="w-full text-2xl font-semibold mb-4 text-center whitespace-nowrap tz-text-gray-3">No bank details added yet</h4>
                <p className="w-full mb-14 text-center self-stretch whitespace-nowrap tz-text-gray">You need to add your Bank details to enable withdrawal</p>
                <div className="flex justify-center w-full">
                    <button 
                        data-modal-target="add-bank-details-modal" 
                        data-modal-toggle="add-bank-details-modal" 
                        className="flex py-3 px-6 justify-center items-center font-semibold w-80  rounded-lg bg-white hover:text-white hover:bg-[#101010] tz-text-dark-1 tz-border-dark-1"
                    >
                        Add bank details
                    </button>
                </div>
            </div>*/}
            <AddBankDetails />
            <BankSuccess />
        </div>
    );
};

export default BankDetails;
