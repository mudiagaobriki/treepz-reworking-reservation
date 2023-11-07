'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

const EmailOTP = ({ numberOfDigits }) => {
    const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
    const [otpError, setOtpError] = useState(true);;
    const otpBoxReference = useRef([]);

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
    }

    useEffect(() => { 
        setOtpError(otp.join("").length === numberOfDigits);
    }, [otp]);

    return (
        <div>
            {/* Main modal */}
            <div id="email-otp-modal" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-2xl max-h-full">
                    {/* Modal content */}
                    <div className="bg-white rounded-2xl shadow w-[37.5rem]">
                        <div className="flex justify-between items-center w-full px-8 py-3 tz-border-bottom-1">
                            <div className="flex items-center gap-3">
                                <Link href="" className="flex items-center hover:bg-gray-200  rounded-lg p-1 tz-bg-light">
                                    <Image src="/assets/images/arrow-left-line.png" alt="close-x" width={24} height={24} />
                                </Link>
                                <h4 className="font-medium tz-text-dark-1">Confirm email address</h4>
                            </div>
                            <button type="button" className="p-1 tz-bg-light bg-transparent hover:bg-gray-200 rounded-lg w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="email-otp-modal">
                                <Image src="/assets/images/close-lg.png" alt="close-x" width={16} height={16} />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="w-full pt-9 pb-12 px-8">
                            <p className="mb-8 tz-text-gray-3">Enter the OTP we sent to <span className="font-medium tz-text-dark"> heresanexample@email.com:</span></p>
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
                                        disabled={!otpError} 
                                        data-modal-target={"bank-success-modal"} 
                                        data-modal-toggle={"bank-success-modal"} 
                                        type="submit"
                                        className={`flex py-3 px-6 justify-center items-center font-semibold w-full rounded-lg ${otpError ? 'bg-[#F8B02B] hover:bg-[#F8B02B]/80' : 'bg-[#FBDF88]'} tz-text-dark-1`}
                                    >
                                        Verify email address
                                    </button>
                                </div>
                                <div>
                                    <p className="text-center">
                                        <span className="text-sm font-bold tz-text-dark">0:59</span> <br />
                                        <span className="text-xs font-light tz-text-gray-3">
                                            Didn’t receive it? <Link href="" className="font-semibold underline tz-text-gray-2"> Resend code</Link>
                                        </span>
                                    </p>
                                    <p className="text-center">
                                        <span className="text-sm font-bold tz-text-gray-2">0:00</span> <br />
                                        <span className="text-xs font-light tz-text-gray-3">
                                            Didn’t receive it? <Link href="" className="font-semibold underline tz-text-dark-1"> Resend code</Link>
                                        </span>
                                    </p>
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
