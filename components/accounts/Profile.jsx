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

                <div className="flex items-start gap-6 w-full">
                    <div className="relative w-1/2">
                        <input type="text" id="firstName" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                        <label for="firstName" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">First name</label>
                    </div>
                    <div className="relative w-1/2">
                        <input type="text" id="lastName" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                        <label for="lastName" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Last name</label>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start gap-5 self-stretch p-5 rounded-xl w-full tz-border-gray-2">
                <p className="text-2xl font-medium tz-text-dark">Contact information</p>
                <div className="flex flex-col items-center gap-6 self-stretch w-full">
                    <div className="flex flex-col items-start gap-3 w-full">
                        <div className="relative w-full">
                            <input type="email" id="emailAddress" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                            <label for="emailAddress" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Dropdown</label>
                            <a href="#" className="absolute inset-y-0 right-3 flex items-center p-0 pointer-cursor">
                                <Image src="/assets/images/account/checkbox-multiple-fill.png" alt="eye-icon" width={20} height={20} />
                            </a>
                        </div>
                        <div className="flex items-center gap-2 w-full">
                            <Image src="/assets/images/account/information-line.png" alt="info icon" width={20} height={20} />
                            <p className="underline text-sm tz-text-gray-3">Change your email</p>
                        </div>
                    </div>
                    <div className="relative w-full">
                        <input type="text" id="phoneNumber" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                        <label for="phoneNumber" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Phone number</label>
                    </div>
                </div>
            </div>
            <div>
                <Button1 text="Save changes" width={"width1"} />
            </div>
        </div>
    );
};

export default Profile;
