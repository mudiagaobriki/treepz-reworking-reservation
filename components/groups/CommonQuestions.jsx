'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import FaqsItem from '@/components/items/FaqsItem';
// import isMobile from '@/components/helpers/isMobile'

const DATA = [
    {
        key: 1,
        question: 'Where is Treepz available?',
        title: "Affordable car rental in seconds",
        description: 'As a renter, you can search for available cars on our platform and book the one that best fits your needs. '+
            'As an owner, you can list your car on our platform, set your rental rates and availability, and earn money by renting out your vehicle.',
    },
    {
        key: 2,
        question: "How does Treepz works",
        title: "One search, multiple options",
        description: 'As a renter, you can search for available cars on our platform and book the one that best fits your needs. '+
            'As an owner, you can list your car on our platform, set your rental rates and availability, and earn money by renting out your vehicle.',
    },
    {
        key: 3,
        question: "How does Treepz works",
        title: "Flexible booking policy",
        description: 'As a renter, you can search for available cars on our platform and book the one that best fits your needs. '+
            'As an owner, you can list your car on our platform, set your rental rates and availability, and earn money by renting out your vehicle.',
    },
    {
        key: 4,
        question: 'Where is Treepz available?',
        title: "Affordable car rental in seconds",
        description: 'As a renter, you can search for available cars on our platform and book the one that best fits your needs. '+
            'As an owner, you can list your car on our platform, set your rental rates and availability, and earn money by renting out your vehicle.',
    },
]

const CommonQuestions = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className='flex justify-between items-start tz-px-30 tz-bg-light'>
            <div className="flex flex-col items-start gap-14">
                <div className="flex flex-col items-start gap-5">
                    <h4 className="text-4xl font-semibold tz-text-dark">Your guide to <br />common questions</h4>
                    <div className="flex items-start gap-5">
                        <button className="flex justify-center items-center px-4 py-1 gap-1 rounded-3xl tz-bg-orange-1">
                            <span className="text-base font-medium tz-text-dark">General</span>
                        </button>
                        <button className="flex justify-center items-center px-4 py-1 gap-1 rounded-3xl bg-white">
                            <span className="text-base font-medium tz-text-gray">Hosts</span>
                        </button>
                        <button className="flex justify-center items-center px-4 py-1 gap-1 rounded-3xl bg-white">
                            <span className="text-base font-medium tz-text-gray">Guests</span>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-3">
                    <p className="flex gap-1 text-sm font-normal tz-text-dark">
                        <Image src="/assets/images/needSupport.png" alt="need-support" width={20} height={20} /> 
                        <span>Need further support?</span>
                    </p>
                    <button className="flex justify-center items-center px-4 py-3 rounded-lg tz-border-dark">
                        <span className="text-base font-semibold tz-text-dark-1">Get support</span>
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-start gap-6 flex-shrink-0 tz-w-39">
                {
                    DATA.map((item, index) => {
                        return <div key={item?.key}>
                                <FaqsItem question={item?.question} title={item?.title} description={item?.description} />
                            </div>
                    })
                }
            </div>
            
        </div>
    );
};

export default CommonQuestions;
