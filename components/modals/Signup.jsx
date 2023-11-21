'use client';

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import Button1 from '@/components/items/Button1';
import {BASE_URL} from "../../public/assets/constants/constants";
import axios from "axios";
import {setCurrentUser} from "../../redux/features/authSlice";
// import isMobile from '@/components/helpers/isMobile'

const Signup = ({isOpen, closeModal, onLoginPressed}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isVisible, setIsVisible] = useState(isOpen);
    const [agreed, setAgreed] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [referralCode, setReferralCode] = useState("");

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    useEffect(() => {
        setIsVisible(isOpen);
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling when modal is closed
        }
    }, [isOpen]);

    const handleSignup = async () => {
        const credentials = {
            email, password, passwordConfirm: password, firstName, lastName,
            phoneNumber, accountType: "USER", referrerCode: referralCode,
        }
        console.log({credentials})
        const url = `${BASE_URL}/auth/signup`
        try{
            const res = await axios.post(url, credentials)

            console.log({res})
            // if (res?.data?.data?.user){
            //     const currentUser = res?.data?.data?.user;
            //     console.log({currentUser})
            //     const token = res?.data?.data?.jwt;
            //     dispatch(setCurrentUser({user: currentUser, loginToken: token}))
            //     setInterval(() => window.location.reload(), 3000)
            // }
        }
        catch (ex) {
            console.log({ex})
            alert("An error occurred while signing up. Please try again")
        }
        // console.log({url})
        // console.log({res})
    }

    return (
        <div>
            {/* Main modal */}
            <div id="signup-modal" tabindex="-1" aria-hidden="true" className={`fixed overflow-y-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 ${isVisible ? 'block' : 'hidden'}`}>
                <div className="relative w-full max-w-2xl max-h-full">
                    {/* Modal content */}
                    <div className="bg-white rounded-2xl shadow w-[37.5rem]">
                        <div className="flex justify-between items-center w-full px-8 py-3 tz-border-bottom-1">
                            <h4 className="font-medium tz-text-dark-1">Sign up</h4>
                            <button onClick={closeModal} type="button" className="p-1 tz-bg-light bg-transparent hover:bg-gray-200 rounded-lg w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="signup-modal">
                                <Image src="/assets/images/close-lg.png" alt="close-x" width={16} height={16} />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="w-full pt-6 pb-20 px-8">
                            <div className="mb-12">
                                <h3 className="text-xl font-semibold text-center tz-text-dark-1">Let’s get you started</h3>
                                <p className="text-sm text-opacity-70 text-center tz-text-dark-1">Create your account to move better</p>
                            </div>
                            <Link href="#" className="flex justify-center items-center w-full bg-white gap-2 px-4 py-3 rounded-lg tz-border-dark">
                                <Image src="/assets/images/Google-svg.png" alt="" width={24} height={24} />
                                <p className="font-semibold tz-text-dark-1">Continue with Google</p>
                            </Link>
                            <div className="flex justify-center items-center gap-3 my-8">
                                <div  className="h-[2px] w-36 tz-line-gradient-right"></div>
                                <p className="text-sm font-medium tz-text-dark">or</p>
                                <div  className="h-[2px] w-36 tz-line-gradient-left"></div>
                            </div>
                            <form className="" action="#">
                                <div className="flex flex-col items-start gap-8 mb-12 w-full">
                                    <div className="flex flex-col items-start gap-3 w-full">
                                        <div className="flex items-start gap-6 w-full">
                                            <div className="relative w-1/2">
                                                <input value={firstName} onChange={el => setFirstName(el?.target.value)} type="text" id="firstName" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                                                <label htmlFor="firstName" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">First name</label>
                                            </div>
                                            <div className="relative w-1/2">
                                                <input value={lastName} onChange={el => setLastName(el?.target.value)} type="text" id="lastName" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                                                <label htmlFor="lastName" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Last name</label>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <Image src="/assets/images/information-line-gray.png" alt="" width={16} height={16} />
                                            <p className="text-xs tz-text-gray-2">Ensure to enter your legal name as it’s on you ID cards</p>
                                        </div>
                                    </div>
                                    
                                    <div className="relative w-full">
                                        <input value={phoneNumber} onChange={el => setPhoneNumber(el?.target.value)} type="text" id="phoneNumber" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                                        <label htmlFor="phoneNumber" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Phone number</label>
                                    </div>
                                    <div className="relative w-full">
                                        <input value={email} onChange={el => setEmail(el?.target.value)} type="email" id="emailAddress" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                                        <label htmlFor="emailAddress" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Email address</label>
                                    </div>
                                    <div className="relative w-full">
                                        <a href="#" onClick={() => setIsPasswordVisible(!isPasswordVisible)} className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-cursor">
                                            <Image src="/assets/images/eye-line.png" alt="eye-icon" width={20} height={20} />
                                        </a>
                                        <input value={password} onChange={el => setPassword(el?.target.value)} type={isPasswordVisible ? "text" : "password"} id="password" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                                        <label htmlFor="password" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Enter password</label>
                                    </div>
                                    <div className="relative w-full">
                                        <input value={referralCode} onChange={el => setReferralCode(el?.target.value)} type="text" id="referralCode" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                                        <label htmlFor="referralCode" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Referral code (optional)</label>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start gap-5 mb-8 w-full">
                                    <div className="flex items-center">
                                        <input onChange={(e) => setAgreed(e.target.checked)} id="terms_conditions" type="checkbox" value="" class="w-6 h-6 text-[#101010] bg-gray-100 border-gray-300 rounded focus:ring-0" />
                                        <label htmlFor="terms_conditions" className="ml-3 text-sm tz-text-gray-300 text-center">
                                            I agree to the 
                                            <Link href="/terms-conditions" className="underline font-medium tz-text-dark-1"> Terms of use & Privacy policy</Link>.
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input onChange={(e) => setConfirmed(e.target.checked)} id="confirmation" type="checkbox" value="" class="w-6 h-6 text-[#101010] bg-gray-100 border-gray-300 rounded focus:ring-0" />
                                        <label htmlFor="confirmation" className="ml-3 text-sm tz-text-dark">I consent to receiving Newsletters & marketing updates</label>
                                    </div>
                                </div>
                                <div className="w-full mb-6">
                                    <button
                                        onClick={handleSignup}
                                        disabled={!agreed || !confirmed} 
                                        // data-modal-target={"bank-success-modal"}
                                        // data-modal-toggle={"bank-success-modal"}
                                        type="button"
                                        className={`flex py-3 px-6 justify-center items-center font-semibold w-full rounded-lg ${agreed && confirmed ? 'bg-[#F8B02B] hover:bg-[#F8B02B]/80' : 'bg-[#FBDF88]'} tz-text-dark-1`}
                                    >
                                        Create account
                                    </button>
                                </div>
                                <div className="text-center">
                                    <span className="tz-text-gray-30">Already have an account?&nbsp;</span>
                                    <span onClick={onLoginPressed} className="cursor-pointer font-medium underline tz-text-dark-1">Log in</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Signup;
