'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import Button1 from '@/components/items/Button1';
// import isMobile from '@/components/helpers/isMobile'

const Login = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div>
            {/* Main modal */}
            <div id="authentication-modal" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-2xl max-h-full">
                    {/* Modal content */}
                    <div className="bg-white rounded-2xl shadow w-[37.5rem]">
                        <div className="flex justify-between items-center w-full px-8 py-3 tz-border-bottom-1">
                            <h4 className="font-medium tz-text-dark-1">Log in</h4>
                            <button type="button" className="p-1 tz-bg-light bg-transparent hover:bg-gray-200 rounded-lg w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="authentication-modal">
                                <Image src="/assets/images/close-lg.png" alt="close-x" width={16} height={16} />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="w-full pt-6 pb-20 px-8">
                            <div className="mb-12">
                                <h3 className="text-2xl font-semibold text-center tz-text-dark-1">Welcome back!</h3>
                                <p className="text-sm text-opacity-70 text-center tz-text-dark-1">Let’s pick things up from where you left it</p>
                            </div>
                            <Link href="" className="flex justify-center items-center w-full bg-white gap-2 px-4 py-3 rounded-lg tz-border-dark">
                                <Image src="/assets/images/Google-svg.png" alt="" width={24} height={24} />
                                <p className="font-semibold tz-text-dark-1">Continue with Google</p>
                            </Link>
                            <div className="flex justify-center items-center gap-3 my-8">
                                <div  className="h-[2px] w-36 tz-line-gradient-right"></div>
                                <p className="text-sm font-medium tz-text-dark">or</p>
                                <div  className="h-[2px] w-36 tz-line-gradient-left"></div>
                            </div>
                            <form className="space-y-6" action="#">
                                <div className="mb-8">
                                    <input type="email" name="email" id="email" className="flex items-center px-3 py-4 rounded-lg block w-full bg-white outline-none focus:ring-[#A0A3A6] focus:border-[#A0A3A6] tz-border-light-3 tz-text-gray-2" placeholder="Email address" required />
                                </div>

                                <div className="relative mb-4">
                                    <button onClick={() => setIsVisible(!isVisible)} className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-cursor">
                                        <Image src="/assets/images/eye-line.png" alt="eye-icon" width={20} height={20} />
                                    </button>
                                    <input type={isVisible ? "text" : "password"} name="password" id="password" placeholder="Enter password" className="flex items-center px-3 py-4 rounded-lg block w-full bg-white outline-none focus:ring-[#A0A3A6] focus:border-[#A0A3A6] tz-border-light-3 tz-text-gray-2" required />
                                </div>
                                <div className="mb-12 text-right">
                                    <span className="tz-text-gray-30">Forgot password?&nbsp;</span>
                                    <Link href="" className="font-medium underline tz-text-dark-1">Recover</Link>
                                </div>
                                <div className="w-full">
                                    <Button1 text="Log in" width="full" submit={true} />
                                </div>
                                <div className="text-right">
                                    <span className="tz-text-gray-30">Don’t have an account?&nbsp;</span>
                                    <Link href="" className="font-medium underline tz-text-dark-1">Register</Link>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Login;
