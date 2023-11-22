'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

import Button1 from '@/components/items/Button1';
import AccountSideBar from '@/components/accounts/AccountSideBar';
import {useSelector} from "react-redux";
import {BASE_URL} from "../../public/assets/constants/constants";
import axios from "axios";
import {setCurrentUser} from "../../redux/features/authSlice";

const SecuritySettings = () => {
    const [oldVisible, setOldVisible] = useState(false);
    const [newVisible, setNewVisible] = useState(false);
    const [confirmVisible, setConfirmVisible] = useState(false);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    const {currentUser, token} = useSelector(state => state.auth)
    const bearerToken = token?.token;

    const handleUpdatePassword = async () => {
        const credentials = {
            oldPassword, newPassword
        }
        // console.log({profileImage: profileImageUrl})
        const url = `${BASE_URL}/auth/update-password`

        try {
            const headers = {
                Authorization: `Bearer ${bearerToken}`,
            }
            const res = await axios.patch(url, credentials, {headers})
            // console.log({res})

            if (res?.status === 200) {
                // const currentUser = res?.data?.data?.user;
                // console.log({currentUser})
                // const token = res?.data?.data?.jwt;
                // dispatch(setCurrentUser({
                //     user: {...currentUser, firstName, lastName, phoneNumber, profileImageUrl},
                //     loginToken: token
                // }))
                setInterval(() => window.location.reload(), 2000)
                // setShowSuccessModal(true)
            }
        } catch (ex) {
            console.log({ex})
            alert("Invalid credentials. Please try again")
        }
    }

    return (
        <div className="flex flex-col items-start gap-10 w-[37rem]">
            <div className="flex flex-col items-start gap-5 self-stretch p-5 rounded-xl w-full tz-border-gray-2">
                <p className="text-2xl font-medium tz-text-dark">Change password</p>
                <div className="flex flex-col items-start gap-6 self-stretch w-full">
                    <div className="relative w-full">
                        <a href="#" onClick={() => setOldVisible(!oldVisible)} className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-cursor">
                            <Image src="/assets/images/account/eye-off-fill.png" alt="eye-icon" width={20} height={20} />
                        </a>
                        <input value={oldPassword} onChange={el => setOldPassword(el?.target?.value)} type={oldVisible ? "text" : "password"} id="oldPassword" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                        <label htmlFor="oldPassword" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Old password</label>
                    </div>
                    <div className="relative w-full">
                        <a href="#" onClick={() => setNewVisible(!newVisible)} className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-cursor">
                            <Image src="/assets/images/account/eye-off-fill.png" alt="eye-icon" width={20} height={20} />
                        </a>
                        <input value={newPassword} onChange={el => setNewPassword(el?.target?.value)} type={newVisible ? "text" : "password"} id="newPassword" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                        <label htmlFor="newPassword" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">New password</label>
                    </div>
                    <div className="relative w-full">
                        <a href="#" onClick={() => setConfirmVisible(!confirmVisible)} className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-cursor">
                            <Image src="/assets/images/account/eye-off-fill.png" alt="eye-icon" width={20} height={20} />
                        </a>
                        <input value={confirmNewPassword} onChange={el => setConfirmNewPassword(el?.target?.value)} type={confirmVisible ? "text" : "password"} id="confirmPassword" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                        <label htmlFor="confirmPassword" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Confirm New password</label>
                    </div>
                </div>
            </div>
            <div>
                <Button1 onClick={handleUpdatePassword} text="Change password" submit={true} width={"width1"} />
            </div>
        </div>
    );
};

export default SecuritySettings;
