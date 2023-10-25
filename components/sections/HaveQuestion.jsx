'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

const HaveQuestion = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="px-32 py-24 height-[32.5rem] flex-shrink-0 tz-bg-light">
            <div className="flex justify-between items-center gap-14">
                <div className="flex flex-col items-start gap-5">
                    <h4 className="text-2xl tz-text-dark">STILL HAVE A QUESTION?</h4>
                    <p className="text-4xl tz-text-dark">
                        <span className="tz-text-gray">Still have a question? </span>If you have questions <br /> or need further assistance, please do not <br /> hesitate and contact us by email
                    </p>
                </div>
                <div className="">
                    <Image src="/assets/images/city-outline.png" alt="city-outline" width={230} height={326} className="rounded-[4.5rem] tz-border-dark" />
                </div>
            </div>
        </div>
    );
};

export default HaveQuestion;
