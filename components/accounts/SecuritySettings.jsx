'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

import Button1 from '@/components/items/Button1';
import AccountSideBar from '@/components/accounts/AccountSideBar';

const SecuritySettings = () => {
    const [oldVisible, setOldVisible] = useState(false);
    const [newVisible, setNewVisible] = useState(false);
    const [confirmVisible, setConfirmVisible] = useState(false);

    return (
        <div className="flex flex-col items-start gap-10 w-[37rem]">
            <div className="flex flex-col items-start gap-5 self-stretch p-5 rounded-xl w-full tz-border-gray-2">
                <p className="text-2xl font-medium tz-text-dark">Change password</p>
                <div className="flex flex-col items-start gap-6 self-stretch w-full">
                    <div className="relative w-full">
                        <button onClick={() => setOldVisible(!oldVisible)} className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-cursor">
                            <Image src="/assets/images/account/eye-off-fill.png" alt="eye-icon" width={20} height={20} />
                        </button>
                        <input type={oldVisible ? "text" : "password"} name="password" id="password" placeholder="Old password" className="flex items-center px-3 py-4 rounded-lg block w-full bg-white outline-none focus:ring-[#A0A3A6] focus:border-[#A0A3A6] self-stretch placeholder-[#A0A3A6] tz-border-light-3 tz-text-gray-2" required />
                    </div>
                    <div className="relative w-full">
                        <button onClick={() => setNewVisible(!newVisible)} className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-cursor">
                            <Image src="/assets/images/account/eye-off-fill.png" alt="eye-icon" width={20} height={20} />
                        </button>
                        <input type={newVisible ? "text" : "password"} name="password" id="password" placeholder="New password" className="flex items-center px-3 py-4 rounded-lg block w-full bg-white outline-none focus:ring-[#A0A3A6] focus:border-[#A0A3A6] self-stretch placeholder-[#A0A3A6] tz-border-light-3 tz-text-gray-2" required />
                    </div>
                    <div className="relative w-full">
                        <button onClick={() => setConfirmVisible(!confirmVisible)} className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-cursor">
                            <Image src="/assets/images/account/eye-off-fill.png" alt="eye-icon" width={20} height={20} />
                        </button>
                        <input type={confirmVisible ? "text" : "password"} name="password" id="password" placeholder="Confirm new password" className="flex items-center px-3 py-4 rounded-lg block w-full bg-white outline-none focus:ring-[#A0A3A6] focus:border-[#A0A3A6] self-stretch placeholder-[#A0A3A6] tz-border-light-3 tz-text-gray-2" required />
                    </div>
                </div>
            </div>
            <div>
                <Button1 text="Change password" width={"88"} />
            </div>
        </div>
    );
};

export default SecuritySettings;
