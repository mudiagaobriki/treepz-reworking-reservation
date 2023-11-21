'use client';

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'

const SuccessCard = ({title, description, btnText, modalId, isOpen, closeModal, onNextStep,}) => {
    const [isVisible, setIsVisible] = useState(isOpen);

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";
    useEffect(() => {
        setIsVisible(isOpen);
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling when modal is closed
        }
    }, [isOpen]);

    return (
        <div>
            {/* Main modal */}
            <div id={modalId} data-modal-backdrop="static" tabindex="-1" aria-hidden="true" className={`fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 ${isVisible ? 'block' : 'hidden'}`}>
                <div className="relative w-full max-w-2xl max-h-full">
                    {/* Modal content */}
                    <div className="bg-white rounded-2xl shadow w-[33.5rem]">
                        <div className="flex flex-col items-start justify-center w-full pt-20 pb-28 px-8">
                            <div className="flex justify-center w-full mb-8">
                                <Image src="/assets/images/Group-3.png" alt="eye-icon" width={172} height={172} />
                            </div>
                            <h4 className="text-2xl font-semibold text-center w-full tz-text-dark-3 mb-2">{title}</h4>
                            <p className="text-sm text-opacity-70 text-center w-full tz-text-dark-3 mb-11">{description}</p>
                            <button onClick={closeModal} className="flex py-3 px-6 justify-center items-center font-semibold w-full rounded-lg bg-[#F8B02B] hover:bg-[#F8B02B]/80 tz-text-dark-1">
                                {btnText}
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default SuccessCard;
