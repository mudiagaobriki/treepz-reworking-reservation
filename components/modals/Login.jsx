'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import Button1 from '@/components/items/Button1';
// import isMobile from '@/components/helpers/isMobile'

const Login = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div>
            {/* Main modal */}
            <div id="authentication-modal" tabindex="-1" aria-hidden="true" className="fixed p-8 top-0 left-0 right-0 z-50 hidden w-full overflow-x-hidden overflow-y-auto md:inset-0 h-[43.75rem] max-h-full">
                <div className="relative w-full max-w-md max-h-full">
                    {/* Modal content */}
                    <div className="bg-white rounded-2xl shadow w-[37.5rem]">
                        <div className="flex justify-between items-center w-full px-8 py-3 tz-border-bottom-1">
                            <h4 className="font-medium tz-text-dark-1">Log in</h4>
                            <button type="button" className="p-1 tz-bg-light text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="w-full py-6 px-8">
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
                                    <input type="email" name="email" id="email" className="flex items-center px-3 py-4 rounded-lg block w-full bg-white outline-none tz-border-light-3 tz-text-gray-2" placeholder="Email address" required />
                                </div>

                                <div className="relative mb-4">
                                    <button className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-cursor">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0001 16.3333H10.0003C11.8131 16.3329 13.5721 15.7172 14.9893 14.5869C16.4066 13.4566 17.3982 11.8786 17.8018 10.1113L17.8273 9.99975L17.8017 9.8882C17.3966 8.12231 16.4044 6.5461 14.9873 5.41727C13.5701 4.28844 11.812 3.67377 10.0002 3.67377C8.18845 3.67377 6.43028 4.28844 5.01316 5.41727C3.59604 6.5461 2.60381 8.12231 2.1987 9.8882L2.17311 9.99975L2.19859 10.1113C2.60222 11.8786 3.59381 13.4566 5.01107 14.5869C6.42833 15.7172 8.1873 16.3329 10.0001 16.3333ZM10.0002 3C14.2161 3 17.73 6.01115 18.5072 10C17.7308 13.9888 14.2162 17 10.0002 17C5.7843 17 2.2704 13.9889 1.49324 9.99995C2.26961 6.0112 5.78422 3 10.0002 3ZM10.0002 13.25C9.13825 13.25 8.3116 12.9076 7.70211 12.2981C7.09262 11.6886 6.75021 10.862 6.75021 10C6.75021 9.13805 7.09262 8.3114 7.70211 7.7019C8.3116 7.09241 9.13825 6.75 10.0002 6.75C10.8622 6.75 11.6888 7.09241 12.2983 7.7019C12.9078 8.3114 13.2502 9.13805 13.2502 10C13.2502 10.862 12.9078 11.6886 12.2983 12.2981C11.6888 12.9076 10.8622 13.25 10.0002 13.25ZM10.0002 12.5833C10.6853 12.5833 11.3424 12.3112 11.8269 11.8267C12.3114 11.3422 12.5835 10.6851 12.5835 10C12.5835 9.31486 12.3114 8.65778 11.8269 8.17331C11.3424 7.68884 10.6854 7.41667 10.0002 7.41667C9.31507 7.41667 8.65798 7.68884 8.17352 8.17331C7.68905 8.65778 7.41687 9.31486 7.41687 10C7.41687 10.6851 7.68905 11.3422 8.17352 11.8267C8.65798 12.3112 9.31507 12.5833 10.0002 12.5833Z" fill="#2F2B43" stroke="#A0A3A6"/>
                                        </svg>
                                    </button>
                                    <input type="password" name="password" id="password" placeholder="Enter password" className="flex items-center px-3 py-4 rounded-lg block w-full bg-white outline-none tz-border-light-3 tz-text-gray-2" required />
                                </div>

                                {/*<div className="">
                                    <input type="password" name="password" id="password" placeholder="Enter password" className="flex items-center px-3 py-4 rounded-lg block w-full bg-white outline-none tz-border-light-3 tz-text-gray-2" required />
                                </div>*/}
                                <div className="mb-12 text-right">
                                    <span className="tz-text-gray-30">Forgot password?&nbsp;</span>
                                    <Link href="" className="font-medium underline tz-text-dark-1">Recover</Link>
                                </div>
                                <div className="w-full">
                                    <Button1 text="Log in" width="full" submit={true} />
                                </div>
                                <div className="mb-12 text-right">
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
