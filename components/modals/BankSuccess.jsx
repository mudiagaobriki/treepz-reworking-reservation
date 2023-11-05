'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'

const BankSuccess = () => {
    
    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div>
            {/* Main modal */}
            <div id="bank-success-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-2xl max-h-full">
                    {/* Modal content */}
                    <div className="bg-white rounded-2xl shadow w-[33.5rem]">
                        <div className="flex flex-col items-start justify-center w-full pt-20 pb-28 px-8">
                            <div className="flex justify-center w-full mb-8">
                                <Image src="/assets/images/Group-3.png" alt="eye-icon" width={172} height={172} />
                            </div>
                            <h4 className="text-2xl font-semibold text-center w-full tz-text-dark-3 mb-2">Bank details added successfully!</h4>
                            <p className="text-sm text-opacity-70 text-center w-full tz-text-dark-3 mb-11">Your provide bank details has been added to your account.</p>
                            <button data-modal-hide="bank-success-modal" className="flex py-3 px-6 justify-center items-center font-semibold w-full rounded-lg bg-[#F8B02B] hover:bg-[#F8B02B]/80 tz-text-dark-1">
                                Understood!
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default BankSuccess;
