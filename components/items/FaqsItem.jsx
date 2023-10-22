'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'



const FaqsItem = ({question, title, description, faqsPage=false}) => {
    const [isHover, setIsHover] = useState(false)
    const [isClick, setIsClick] = useState(false);

    const toggleFaq = () => {
        setIsClick(!isClick);
    };

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div>
            {faqsPage ? 
                <div className={`w-full tz-border-top ${isHover && 'cursor-pointer'}`} onClick={toggleFaq}>
                    {isClick ?
                    <div className="flex flex-col items-start gap-4 self-stretch px-0 py-5">
                        <div className="flex justify-between items-center">
                            <h4 className="text-4xl font-medium tz-text-dark-1">{title}</h4>
                            <p><Image src="/assets/images/chevron-up-line.png" alt="arrow-up" width={32} height={32} /></p>
                        </div>
                        <p className="text-base font-normal tz-text-dark">{description}</p>
                    </div> :
                    <div 
                        className={`flex justify-between items-center self-stretch px-0 py-5 ${isHover && 'px-2'}`}
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                    >
                        <h4 className="text-4xl font-medium tz-text-dark-1">{question}</h4>
                        <p><Image src="/assets/images/chevron-down-line.png" alt="arrow-down" width={32} height={32} /></p>
                    </div>
                    }
                </div> :
                <div className={`w-full tz-border-bottom-1 ${isHover && 'cursor-pointer'}`} onClick={toggleFaq}>
                    {isClick ?
                    <div className="flex flex-col items-start gap-4 self-stretch px-0 py-5">
                        <div className="flex justify-between items-center w-full">
                            <h4 className="text-xl font-normal tz-text-dark">{title}</h4>
                            <p><Image src="/assets/images/chevron-up-line.png" alt="arrow-up" width={32} height={32} /></p>
                        </div>
                        <p className="text-base font-normal tz-text-gray">{description}</p>
                    </div> :
                    <div 
                        className={`flex justify-between items-center px-0 py-5 w-3/4 ${isHover && 'px-2'}`}
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                    >
                        <h4 className="text-xl font-normal tz-text-dark self-stretch">{question}</h4>
                        <p><Image src="/assets/images/chevron-down-line.png" alt="arrow-down" width={32} height={32} /></p>
                        
                    </div>
                    }
                </div>
            }
        </div>
    );
};

export default FaqsItem;
