'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

import { Modal } from 'flowbite';

import FundWallet from '@/components/modals/FundWallet';

const Wallet = () => {

    return (
        <div className="w-full px-32">
            <div className="flex justify-start items-end gap-14 w-full">
                <div className="w-96 h-56 p-4 rounded-lg tz-border-gray-1 tz-bg-dark-2">
                    <div className="flex justify-between items-center w-full mb-10">
                        <div>
                            <Image src="/assets/images/account/Logo.png" alt="" width={60} height={16} className="flex-shrink-0" />
                        </div>
                        <div className="flex items-center justify-center px-2 py-1 h-5 gap-1 bg-white rounded-[2em]">
                            <p className="text-xs font-medium tz-text-dark-1">TRAVEL CARD</p>
                        </div>
                    </div>
                    <div className="inline-flex flex-col items-start gap-1 mb-8">
                        <div className="text-xs tz-text-gray">Wallet balance</div>
                        <div className="text-3xl font-bold text-white">₦ 20</div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <p className="text-base font-medium text-white">DARA SOBALOJU</p>
                        <div className="flex items-center p-2 rounded-full tz-bg-orange">
                            <Image src="/assets/images/account/wallet-3-fill.png" alt="" width={20} height={20} className="flex-shrink-0" />
                        </div>
                    </div>
                </div>  
                <div className="flex items-start gap-10">
                    <button data-modal-target="fund-wallet-modal" data-modal-toggle="fund-wallet-modal" className="flex flex-col items-center gap-2 w-20 px-0 py-2">
                        <div className="flex items-center p-2 rounded-full tz-bg-orange-1">
                            <Image src="/assets/images/account/add-fill.png" alt="" width={32} height={32} className="flex-shrink-0" />
                        </div>
                        <p className="text-base font-medium tz-text-dark">Fund</p>
                    </button>
                    <Link href="" className="flex flex-col items-center gap-2 w-20 px-0 py-2">
                        <div className="flex items-center p-2 rounded-full tz-bg-orange-1">
                            <Image src="/assets/images/account/send-plane-fill.png" alt="" width={32} height={32} className="flex-shrink-0" />
                        </div>
                        <p className="text-base font-medium tz-text-dark">Withdraw</p>
                    </Link>
                </div>
            </div>
            <div className="h-[1px] self-stretch tz-bg-cc my-14"></div>
            <div className="flex items-center justify-between mb-20">
                <h3 className="text-3xl font-semibold tz-text-gray-3">All transactions</h3>
                <button className="flex items-center gap-3 px-2 py-3 bg-white rounded tz-border-2b">
                    <Image src="/assets/images/account/filter-3-line.png" alt="" width={24} height={24} />
                    Filter
                    <Image src="/assets/images/account/arrow-down-s-line.png" alt="" width={24} height={24} />
                </button>
            </div>

            {/*<div className="flex flex-col items-start justify-center w-full">
                <div className="flex justify-center w-full mb-10">
                    <Image src="/assets/images/no-transactions.png" alt="" width={276} height={152} />
                </div>
                <h3 className="w-full text-3xl font-semibold mb-4 text-center whitespace-nowrap tz-text-gray-3">No transactions yet</h3>
                <p className="w-full mb-14 text-center self-stretch whitespace-nowrap tz-text-gray">Explore our marketplace to find a car for your next adventure</p>
            </div>*/}

            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left tz-text-gray-3">
                    <thead class="text-base font-medium tz-text-dark">
                        <tr class="bg-white border-b">
                            <th scope="col" class="px-6 py-3">Reference no</th>
                            <th scope="col" class="px-6 py-3">Amount</th>
                            <th scope="col" class="px-6 py-3">Transaction type</th>
                            <th scope="col" class="px-6 py-3">Date and time</th>
                            <th scope="col" class="px-6 py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b">
                            <td class="px-6 pb-4 pt-10 tz-text-gray-3 truncate">Mercedes Maybach 2023</td>
                            <td class="px-6 pb-4 pt-10 tz-text-gray-3">₦1,000,000</td>
                            <td class="px-6 pb-4 pt-10 tz-text-gray-3">Ride booking</td>
                            <td class="px-6 pb-4 pt-10 tz-text-gray-3">12/05/2023; 04:44 AM</td>
                            <td class="px-6 pb-4 pt-10">
                                <span className="flex items-center gap-1 px-2 py-1 rounded-full w-fit tz-bg-success-light">
                                    <span className="w-2 h-2 rounded-full tz-bg-success"></span><span className="text-sm text-center tz-text-success">Credit</span>
                                </span>
                            </td>
                        </tr>
                        <tr class="bg-white border-b">
                            <td class="px-6 pb-4 pt-10 tz-text-gray-3 truncate">flw_2023_1234/6776</td>
                            <td class="px-6 pb-4 pt-10 tz-text-gray-3">₦1,000,000</td>
                            <td class="px-6 pb-4 pt-10 tz-text-gray-3">Referral bonus</td>
                            <td class="px-6 pb-4 pt-10 tz-text-gray-3">12/05/2023; 04:44 AM</td>
                            <td class="px-6 pb-4 pt-10">
                                <span className="flex items-center gap-1 px-2 py-1 rounded-full w-fit tz-bg-danger-light">
                                    <span className="w-2 h-2 rounded-full tz-bg-danger"></span>
                                    <span className="text-sm text-center tz-text-danger">Debit</span>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <FundWallet />

        </div>
    );
};

export default Wallet;
