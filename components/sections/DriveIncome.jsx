'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import Button1 from '@/components/items/Button1';

const DiscountOffer = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="pl-[7.5rem] pr-0">
            <div className='flex justify-between items-center w-full'>
                <div className="inline-flex flex-col items-start gap-24 w-1/2">
                    <div className="flex flex-col items-start gap-8">
                        <div>
                            <h1 className="text-7xl font-medium mb-5 tz-text-dark">Drive your <span className="tz-text-orange-1">income</span> <br /> Make it a business.</h1>
                            <p className="text-xl tz-text-gray">Drive your income to new heights and embark on a journey where hosting <br />
                                becomes more than just sharing—it becomes a profitable venture.</p>
                        </div>
                        <div>
                            <Button1 btnText="Download app" url="#" arrowRight={true} btnImg={"/assets/images/share-box-fill.png"} />
                        </div>
                    </div>
                    <div className="flex items-start gap-11">
                        <div>
                            <h4 className="text-3xl font-medium mb-3 tz-text-dark-1">2000+</h4>
                            <p className="tz-text-gray-3">marketplace vehicles</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-medium mb-3 tz-text-dark-1">3M+</h4>
                            <p className="tz-text-gray-3">passengers moved</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-medium mb-3 tz-text-dark-1">12+</h4>
                            <p className="tz-text-gray-3">cities covered</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-end -space-y-[42rem]">
                    <div className="w-[37rem] h-[43rem] tz-bg-dark-1"></div>
                    <Image src="/assets/images/driverInCar.png" alt="logo icon" width={572} height={688} />
                </div>
            </div>
        </div>
    );
};

export default DiscountOffer;
