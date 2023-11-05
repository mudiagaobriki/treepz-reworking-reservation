'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

import Button1 from '@/components/items/Button1';

const Notifications = () => {

    return (
        <div className="flex flex-col items-start gap-10 w-[37rem]">
            <div className="flex flex-col items-start gap-5 self-stretch p-5 rounded-xl w-full tz-border-gray-2">
                <p className="text-2xl font-medium tz-text-dark">Communication preference</p>
                <div className="flex flex-col items-start gap-6 self-stretch w-full">
                    <div className="flex items-center px-3 py-4 gap-4 rounded-lg w-full bg-white self-stretch tz-border-gray-3 tz-shadow-2">
                        <Image src="/assets/images/account/bell-fill.png" alt="eye-icon" width={20} height={20} />
                        <div className="flex items-center justify-between w-full">
                            <div>
                                <div className="font-medium tz-text-dark-6">Email</div>
                                <div className="text-sm tz-text-gray-6">Automatically send notifications to <span className="font-medium"> isidore@treepz.com</span></div>
                            </div>
                            <div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" name="email" class="sr-only peer" />
                                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-[#FDF2D0] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F8B02B]"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center px-3 py-4 gap-4 rounded-lg w-full bg-white self-stretch tz-border-gray-3 tz-shadow-2">
                        <Image src="/assets/images/account/bell-fill.png" alt="eye-icon" width={20} height={20} />
                        <div className="flex items-center justify-between w-full">
                            <div>
                                <div className="font-medium tz-text-dark-6">Push notifications</div>
                                <div className="text-sm tz-text-gray-6">Receive in-app notifications</div>
                            </div>
                            <div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" name="push" class="sr-only peer" />
                                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-[#FDF2D0] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F8B02B]"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center px-3 py-4 gap-4 rounded-lg w-full bg-white self-stretch tz-border-gray-3 tz-shadow-2">
                        <Image src="/assets/images/account/bell-fill.png" alt="eye-icon" width={20} height={20} />
                        <div className="flex items-center justify-between w-full">
                            <div>
                                <div className="font-medium tz-text-dark-6">SMS</div>
                                <div className="text-sm tz-text-gray-6">Automatically send me notifications to <span className="font-medium"> +2347098786756</span></div>
                            </div>
                            <div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" name="sms" class="sr-only peer" />
                                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-[#FDF2D0] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F8B02B]"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Button1 text="Change password" width={"88"} />
            </div>
        </div>
    );
};

export default Notifications;
