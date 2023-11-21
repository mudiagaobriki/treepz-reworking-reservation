'use client';

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import Button1 from '@/components/items/Button1';
import {BASE_URL} from "../../public/assets/constants/constants";
import axios from "axios";
import {setCurrentUser, setResetEmail} from "../../redux/features/authSlice";
import {useDispatch} from "react-redux";
// import isMobile from '@/components/helpers/isMobile'

const ForgotPassword = ({isOpen, closeModal, onNextStep, onBackClicked}) => {
    const [isValue, setIsValue] = useState(false);
    const [isVisible, setIsVisible] = useState(isOpen);
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();
    
    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";
    useEffect(() => {
        setIsVisible(isOpen);
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling when modal is closed
        }
    }, [isOpen]);

    const handlePasswordResetRequest = async () => {
        const credentials = {
            email,
        }
        console.log({credentials})
        const url = `${BASE_URL}/auth/request-password-reset`
        try{
            const res = await axios.post(url, credentials)

            console.log({res})
            if (res?.status === 200){
                dispatch(setResetEmail(email))
                onNextStep()
                // const currentUser = res?.data?.data?.user;
                // console.log({currentUser})
                // const token = res?.data?.data?.jwt;
                // dispatch(setCurrentUser({user: currentUser, loginToken: token}))
                // setInterval(() => window.location.reload(), 3000)
            }
        }
        catch (ex) {
            console.log({ex})
            alert("Invalid credentials. Please try again")
        }
        // console.log({url})
        // console.log({res})
    }

    return (
        <div>
            {/* Main modal */}
            <div id="forgot-password-modal" tabindex="-1" aria-hidden="true" className={`fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 ${isVisible ? 'block' : 'hidden'}`}>
                <div className="relative w-full max-w-2xl max-h-full">
                    {/* Modal content */}
                    <div className="bg-white rounded-2xl shadow w-[37.5rem]">
                        <div className="flex justify-between items-center w-full px-8 py-3 tz-border-bottom-1">
                            <div className="flex items-center gap-3">
                                <div onClick={onBackClicked} className="flex items-center hover:bg-gray-200  rounded-lg p-1 tz-bg-light">
                                    <Image src="/assets/images/arrow-left-line.png" alt="close-x" width={24} height={24} />
                                </div>
                                <h4 className="font-medium tz-text-dark-1">Forgot password</h4>
                            </div>
                            <button onClick={closeModal} type="button" className="p-1 tz-bg-light bg-transparent hover:bg-gray-200 rounded-lg w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="forgot-password-modal">
                                <Image src="/assets/images/close-lg.png" alt="close-x" width={16} height={16} />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="w-full pt-12 pb-20 px-8">
                            <div className="mb-8">
                                <p className="text-base font-medium text-center tz-text-dark-1">Enter your email to receive OTP</p>
                            </div>
                            <form className="" action="#">
                                <div className="relative w-full mb-12">
                                    <input value={email} onChange={el => setEmail(el?.target.value?.trim())} type="email" id="emailAddress" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                                    <label htmlFor="emailAddress" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Email address</label>
                                </div>
                                <div className="w-full mb-4">
                                    <Button1 onClick={handlePasswordResetRequest} text="Reset password" submit={true} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default ForgotPassword;
