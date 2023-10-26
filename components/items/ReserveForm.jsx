'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'

const ReserveForm = ({image, username, timestamp, review, ratings=stars}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex flex-col justify-center items-center px-4 py-6 w-96 h-[32.5rem] bg-white rounded-xl tz-shadow tz-border-light-2">

            <div className="flex items-center gap-3">
                <div>
                    <Image src={image} alt="logo icon" width={40} height={40} className="rounded-full" />
                </div>
                <div className="flex flex-col items-start gap-3">
                    <div className="flex items-start gap-1">
                        {
                            ratings.map((item, index) => {
                                return <div key={index}>
                                        <Image src={item} alt="logo icon" width={20} height={20} />
                                    </div>
                            })
                        }
                    </div>
                    <p className="text-sm"><span className="tz-text-dark-4">{username}</span><span className="tz-text-gray">{timestamp}</span></p>
                </div>
            </div>
            <p className="tz-text-dark-2 w-72">{review}</p>

        </div>
    );
};

export default ReserveForm;

/*
display: flex;
width: 384px;
height: 522px;
padding: 24px 16px;
flex-direction: column;
justify-content: center;
align-items: center;

border-radius: 12px;
border: 1px solid var(--neutral-tints-95, #E9EBEC);
background: var(--white-00, #FFF);

box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);*/
