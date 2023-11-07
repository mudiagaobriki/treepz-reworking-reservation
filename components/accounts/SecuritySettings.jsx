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
                        <a href="#" onClick={() => setOldVisible(!oldVisible)} className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-cursor">
                            <Image src="/assets/images/account/eye-off-fill.png" alt="eye-icon" width={20} height={20} />
                        </a>
                        <input type={oldVisible ? "text" : "password"} id="oldPassword" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                        <label for="oldPassword" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Enter password</label>
                    </div>
                    <div className="relative w-full">
                        <a href="#" onClick={() => setNewVisible(!newVisible)} className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-cursor">
                            <Image src="/assets/images/account/eye-off-fill.png" alt="eye-icon" width={20} height={20} />
                        </a>
                        <input type={newVisible ? "text" : "password"} id="newPassword" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                        <label for="newPassword" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Enter password</label>
                    </div>
                    <div className="relative w-full">
                        <a href="#" onClick={() => setConfirmVisible(!confirmVisible)} className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-cursor">
                            <Image src="/assets/images/account/eye-off-fill.png" alt="eye-icon" width={20} height={20} />
                        </a>
                        <input type={confirmVisible ? "text" : "password"} id="confirmPassword" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                        <label for="confirmPassword" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Enter password</label>
                    </div>
                </div>
            </div>
            <div>
                <Button1 text="Change password" width={"width1"} />
            </div>
        </div>
    );
};

export default SecuritySettings;
