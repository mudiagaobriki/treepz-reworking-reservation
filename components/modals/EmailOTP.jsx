'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import Countdown from "react-countdown";
import {BASE_URL} from "../../public/assets/constants/constants";
import axios from "axios";
import {setResetCode, setResetEmail} from "../../redux/features/authSlice";

const EmailOTP = ({ numberOfDigits, isOpen, closeModal, onNextStep, onBackClicked }) => {
    const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
    const [otpError, setOtpError] = useState(true);
    const otpBoxReference = useRef([]);
    const [isVisible, setIsVisible] = useState(isOpen);
    const [timerValue, setTimerValue] = useState(59);

    const dispatch = useDispatch();

    const {resetEmail} = useSelector(state => state?.auth);

    useEffect(() => {
        setIsVisible(isOpen);
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling when modal is closed
        }
    }, [isOpen]);

    useEffect(() => {
        if (timerValue > 0){
            const interval = setInterval(() => {
                setTimerValue(prevState => prevState - 1);
            }, 1000);

            // if (timerValue <= 0) clearInterval(interval)

            return () => clearInterval(interval);
        }
    }, [timerValue]);

    const handleChange = (value, index) => {
        let newArr = [...otp];
        newArr[index] = value;
        setOtp(newArr);
        if (value && index < numberOfDigits - 1) {
            otpBoxReference.current[index + 1].focus()
        }
    }

    const handleBackspaceAndEnter = (e, index) => {
        if (e.key === "Backspace" && !e.target.value && index > 0) {
            otpBoxReference.current[index - 1].focus()
        }
        if (e.key === "Enter" && e.target.value && index < numberOfDigits -  1) {
            otpBoxReference.current[index + 1].focus()
        }
        if (e.key === "ArrowLeft") {
            otpBoxReference.current[index - 1].focus()
        }
        if (e.key === "ArrowRight") {
            otpBoxReference.current[index + 1].focus()
        }
    }

    useEffect(() => { 
        setOtpError(otp.join("").length === numberOfDigits);
    }, [otp]);

    const handleResendCode = async () => {
        const credentials = {
            email: resetEmail,
        }
        console.log({credentials})
        const url = `${BASE_URL}/auth/request-password-reset`
        try{
            const res = await axios.post(url, credentials)

            console.log({res})
            if (res?.status === 200){
                setTimerValue(59)
                // dispatch(setResetEmail(email))
                // onNextStep()
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

    const verifyOTP = async () => {
        // call api to verify
        // if successful
        dispatch(setResetCode(otp))
        onNextStep()
    }

    return (
        <div>
            {/* Main modal */}
            <div id="email-otp-modal" tabindex="-1" aria-hidden="true" className={`fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 ${isVisible ? 'block' : 'hidden'}`}>
                <div className="relative w-full max-w-2xl max-h-full">
                    {/* Modal content */}
                    <div className="bg-white rounded-2xl shadow w-[37.5rem]">
                        <div className="flex justify-between items-center w-full px-8 py-3 tz-border-bottom-1">
                            <div className="flex items-center gap-3">
                                <div onClick={onBackClicked} className="flex items-center hover:bg-gray-200  rounded-lg p-1 tz-bg-light">
                                    <Image src="/assets/images/arrow-left-line.png" alt="close-x" width={24} height={24} />
                                </div>
                                <h4 className="font-medium tz-text-dark-1">Confirm email address</h4>
                            </div>
                            <button onClick={closeModal} type="button" className="p-1 tz-bg-light bg-transparent hover:bg-gray-200 rounded-lg w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="email-otp-modal">
                                <Image src="/assets/images/close-lg.png" alt="close-x" width={16} height={16} />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="w-full pt-9 pb-12 px-8">
                            <p className="mb-8 tz-text-gray-3">Enter the OTP we sent to <span className="font-medium tz-text-dark"> {resetEmail}:</span></p>
                            <form className="" action="#">
                                <div className="flex items-start gap-3 w-full mb-3">
                                    {otp.map((digit, index)=>(
                                        <input 
                                            key={index}
                                            value={digit}
                                            type="number" 
                                            size={1} 
                                            maxLength={1} 
                                            ref={(reference) => (otpBoxReference.current[index] = reference)}
                                            onChange={(e)=> handleChange(e.target.value, index)}
                                            onKeyUp={(e)=> handleBackspaceAndEnter(e, index)}
                                            data-index="1" 
                                            className="rounded text-center p-3 w-14 h-12 bg-white appearance-none focus:outline-none focus:ring-0 focus:border-[#F8B02B] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-xl tz-text-dark tz-border-light-3" 
                                        />
                                    ))}
                                </div>
                                <div className="flex items-start w-3/4 h-12 mb-3">
                                    {/*<div className={`flex items-center gap-2 w-full ${otpError && 'hidden'}`}>*/}
                                    <div className={`flex items-center gap-2 w-full hidden`}>
                                        <Image src="/assets/images/information-line.png" alt="" width={20} height={20} />
                                        <p className="text-xs font-light tz-text-red">Sorry, we are not able to verify the code. Please make sure you input the right email address and code.</p>
                                    </div>
                                </div>
                                <div className="w-full mb-3">
                                    <button
                                        onClick={verifyOTP}
                                        disabled={!otpError} 
                                        // data-modal-target={"bank-success-modal"}
                                        // data-modal-toggle={"bank-success-modal"}
                                        type="button"
                                        className={`flex py-3 px-6 justify-center items-center font-semibold w-full rounded-lg ${otpError ? 'bg-[#F8B02B] hover:bg-[#F8B02B]/80' : 'bg-[#FBDF88]'} tz-text-dark-1`}
                                    >
                                        Verify email address
                                    </button>
                                </div>
                                <div>
                                    <p className="text-center">
                                        {/*<Countdown count={60} autoStart precision={1} onComplete={() => console.log("Countdown complete")}*/}
                                        {/*           renderer={props => <p>Mudi{props.total}</p>}/>*/}
                                        <span className="text-sm font-bold tz-text-dark">0:{timerValue.toLocaleString('en-US', {
                                            minimumIntegerDigits: 2,
                                            useGrouping: false
                                        })}</span> <br />
                                        <span className="text-xs font-light tz-text-gray-3">
                                            Didn’t receive it?
                                            {
                                                timerValue === 0? <span onClick={handleResendCode} className="cursor-pointer font-semibold underline tz-text-gray-1"> Resend code</span>:
                                                    <span className="font-semibold underline tz-text-gray-2"> Resend code</span>
                                            }

                                        </span>
                                    </p>
                                    {/*<p className="text-center">*/}
                                    {/*    <span className="text-sm font-bold tz-text-gray-2">0:00</span> <br />*/}
                                    {/*    <span className="text-xs font-light tz-text-gray-3">*/}
                                    {/*        Didn’t receive it? <Link href="" className="font-semibold underline tz-text-dark-1"> Resend code</Link>*/}
                                    {/*    </span>*/}
                                    {/*</p>*/}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default EmailOTP;
