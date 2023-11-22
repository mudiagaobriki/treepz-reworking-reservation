'use client';

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";

import Button1 from '@/components/items/Button1';
import {useSelector} from "react-redux";
import {BASE_URL} from "../../public/assets/constants/constants";
import axios from "axios";

const Notifications = () => {
    const [emailSelected, setEmailSelected] = useState(false)
    const [pushSelected, setPushSelected] = useState(false)
    const [smsSelected, setSmsSelected] = useState(false)
    const [notificationPreference, setNotificationPreference] = useState([])

    const {currentUser, token} = useSelector(state => state.auth)
    const bearerToken = token?.token;
    // console.log({currentUser, token})

    // fetch user profile
    useEffect(() => {
        FetchProfile()
            .then(response => {
                console.log({response})
                setNotificationPreference(response?.setting?.notificationPreference)
                setEmailSelected(response?.setting?.notificationPreference?.includes('EMAIL'))
                setPushSelected(response?.setting?.notificationPreference?.includes('PUSH'))
                setSmsSelected(response?.setting?.notificationPreference?.includes('SMS'))
            })
    }, []);

    const FetchProfile = async () => {
        const url = `${BASE_URL}/auth/user/profile`

        try {
            const headers = {
                Authorization: `Bearer ${bearerToken}`,
            }
            const res = await axios.get(url, {headers})
            console.log({res})

            if (res?.status === 200) {
                return res?.data?.data
            }
        } catch (ex) {
            console.log({ex})
            alert("Invalid credentials. Please try again")
        }
    }

    const UpdateNotificationPreference = (item) => {
        const preferences = notificationPreference;
        if (preferences?.includes(item?.toUpperCase())) {
            const index = preferences.indexOf(item?.toUpperCase());
            preferences.splice(index, 1);
        } else {
            preferences?.push(item?.toUpperCase());
        }

        console.log({preferences})
    }

    const handleSavePreferences = async () => {
        // update backend
        const credentials = {
            notificationPreference
        }
        console.log({credentials})
        const url = `${BASE_URL}/auth/setting`

        try {
            const headers = {
                Authorization: `Bearer ${bearerToken}`,
            }
            const res = await axios.patch(url, credentials, {headers})

            if (res?.status === 200) {
                setInterval(() => window.location.reload(), 2000)
            }
        } catch (ex) {
            console.log({ex})
            alert("Invalid credentials. Please try again")
        }
    }

    const EmailToggled = () => {
        setEmailSelected(prevState => !prevState)
        UpdateNotificationPreference("email")
    }

    const PushToggled = () => {
        setPushSelected(prevState => !prevState)
        UpdateNotificationPreference("push")
    }

    const SmsToggled = () => {
        setSmsSelected(prevState => !prevState)
        UpdateNotificationPreference("sms")
    }

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
                                <div className="text-sm tz-text-gray-6">Automatically send notifications to <span className="font-medium"> {currentUser?.email}</span></div>
                            </div>
                            <div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" checked={emailSelected} onChange={EmailToggled} name="email" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-[#FDF2D0] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F8B02B]"></div>
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
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input checked={pushSelected} onChange={PushToggled} type="checkbox" name="push" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-[#FDF2D0] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F8B02B]"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center px-3 py-4 gap-4 rounded-lg w-full bg-white self-stretch tz-border-gray-3 tz-shadow-2">
                        <Image src="/assets/images/account/bell-fill.png" alt="eye-icon" width={20} height={20} />
                        <div className="flex items-center justify-between w-full">
                            <div>
                                <div className="font-medium tz-text-dark-6">SMS</div>
                                <div className="text-sm tz-text-gray-6">Automatically send me notifications to <span className="font-medium"> {currentUser?.phoneNumber}</span></div>
                            </div>
                            <div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input checked={smsSelected} onChange={SmsToggled} type="checkbox" name="sms" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-[#FDF2D0] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F8B02B]"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Button1 onClick={handleSavePreferences} submit={true} text="Save preferences" width={"width1"} />
            </div>
        </div>
    );
};

export default Notifications;
