'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

import Button1 from '@/components/items/Button1';

const Profile = () => {
    const [selectedImage, setSelectedImage] = useState("/assets/images/profile-photo-3.png");

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            setSelectedImage("/assets/images/profile-photo-3.png");
        }
    };

    return (
        <div className="flex flex-col items-start gap-10 w-[37rem]">
            <div className="flex flex-col items-start gap-5 self-stretch p-5 rounded-xl tz-border-gray-2">
                <p className="text-2xl font-medium tz-text-dark">Your photo</p>
                <div className="flex items-center gap-8">
                    <div className="rounded-full">
                        <Image src={selectedImage} alt="profile photo" width={100} height={100} className="rounded-full" />
                    </div>
                    <div class="flex flex-row items-center">
                        <input type="file" id="custom-input" accept="images/*" onChange={handleImageChange} hidden />
                        <label for="custom-input" className="flex items-center justify-center px-3 py-2 rounded-lg hover:bg-[#101010] hover:text-white tz-border-dark-1">
                            Change picture
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start gap-5 self-stretch p-5 rounded-xl w-full tz-border-gray-2">
                <p className="text-2xl font-medium tz-text-dark">Personal information</p>
                <div className="flex items-start gap-6 self-stretch w-full">
                    <div className="flex items-center px-3 py-2 rounded-lg bg-white w-full tz-border-light-3">
                        <div className="flex flex-col items-start gap-1 w-full">
                            <p className="text-xs tz-text-gray-2">First name</p>
                            <input type="text" name="firstName" placeholder="Isidore" className="self-stretch border-0 focus:ring-0 p-0 placeholder-[#A0A3A6] tz-text-gray-2" />
                        </div>
                    </div>
                    <div className="flex items-center px-3 py-2 rounded-lg bg-white w-full tz-border-light-3">
                        <div className="flex flex-col items-start gap-1 w-full">
                            <p className="text-xs tz-text-gray-2">Last name</p>
                            <input type="text" name="lastName" placeholder="Kpotufe" className="self-stretch border-0 focus:ring-0 p-0 placeholder-[#A0A3A6] tz-text-gray-2" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start gap-5 self-stretch p-5 rounded-xl w-full tz-border-gray-2">
                <p className="text-2xl font-medium tz-text-dark">Contact information</p>
                <div className="flex flex-col items-center gap-6 self-stretch w-full">
                    <div className="flex flex-col items-start gap-3 w-full">
                        <div className="flex items-center px-3 py-2 rounded-lg bg-white w-full tz-border-light-3">
                            <div className="flex flex-col items-start gap-1 relative w-full">
                                <p className="text-xs tz-text-gray-2">Dropdown</p>
                                <input type="text" name="firstName" placeholder="isidore@treepz.com" className="w-full border-0 focus:ring-0 p-0 placeholder-[#A0A3A6] tz-text-gray-2" />
                                <button className="absolute inset-y-0 right-0 flex items-center p-0 pointer-cursor">
                                    <Image src="/assets/images/account/checkbox-multiple-fill.png" alt="eye-icon" width={20} height={20} />
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 w-full">
                            <Image src="/assets/images/account/information-line.png" alt="info icon" width={20} height={20} />
                            <p className="underline text-sm tz-text-gray-3">Change your email</p>
                        </div>
                    </div>
                    <div className="flex items-center px-3 py-2 rounded-lg bg-white w-full tz-border-light-3">
                        <div className="flex flex-col items-start gap-1 w-full">
                            <p className="text-xs tz-text-gray-2">Phone number</p>
                            <input type="text" name="firstName" placeholder="7045676545" className="self-stretch border-0 focus:ring-0 p-0 placeholder-[#A0A3A6] tz-text-gray-2" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Button1 text="Save changes" width={"88"} />
            </div>
        </div>
    );
};

export default Profile;
