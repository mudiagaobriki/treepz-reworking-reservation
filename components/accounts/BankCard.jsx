'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

const BankCard = () => {

    return (
        <div className="w-80 h-52 px-4 pt-8 pb-5 rounded-lg tz-shadow tz-border-cc tz-bg-light-2">
            <div className="flex justify-between items-start w-full h-1/2 mb-2">
                <div className="flex items-center">
                    <Image src="/assets/images/nigeria.png" alt="" width={18} height={12} />
                    &nbsp;
                    <div className="text-sm tz-text-gray">ACCEESS BANK</div>
                </div>
                <div>
                    <Image src="/assets/images/account/edit-fill.png" alt="" width={20} height={20} />
                </div>
            </div>
            <div className="inline-flex flex-col items-end pb-0 gap-1 h-1/2 w-full mt-2">
                <div className="text-sm tz-text-gray text-left w-full">ADEPOJU AJALA INCREDIBLE</div>
                <div className="flex items-center gap-3 w-full">
                    <div className="text-xl font-semibold tz-text-dark-1">2389874563</div>
                    <button onClick={() => navigator.clipboard.writeText('2389874563')}>
                        <Image src="/assets/images/account/file-copy-fill.png" alt="" width={20} height={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BankCard;
