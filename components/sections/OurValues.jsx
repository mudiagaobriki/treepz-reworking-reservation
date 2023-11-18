'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import Card4 from '@/components/items/Card4';
import GuestHost from '@/components/items/GuestHost';
// import isMobile from '@/components/helpers/isMobile'

const OurValues = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="pr-32">
            <div className="flex justify-between items-start w-full py-20 pl-32 pr-20 m-20 relative tz-bg-light">
                <div className="">
                    <div className="text-[2.5rem] font-medium tz-text-dark">OUR VALUES</div>
                    <div className="absolute left-0 bottom-0">
                        <Image src="/assets/images/our-values.png" alt="logo icon" width={422} height={422} className="flex-shrink-0 rounded-xl" />
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-col items-start gap-10 w-full">
                        <div className="flex gap-20 items-start">
                            <div className="w-96">
                                <h4 className="text-xl font-medium mb-3 tz-text-dark">Humility</h4>
                                <p className="tz-text-gray">In achieving success, we can never underestimate the value of each person. Therefore, to each one, we accord Respect and Humility. </p>
                            </div>
                            <div className="w-96">
                                <h4 className="text-xl font-medium mb-3 tz-text-dark">Hunger</h4>
                                <p className="tz-text-gray">We must be seen as people who are constantly and consistently thinking out of the box  and re-inventing themselves by making today’s achievements the starting point for our success  stories for tomorrow. </p>
                            </div>
                        </div>
                        <div className="flex gap-20 items-start">
                            <div className="w-96">
                                <h4 className="text-xl font-medium mb-3 tz-text-dark">Have fun</h4>
                                <p className="tz-text-gray">All work and no play will not only make us dull but will dampen our creative talents.  Having fun allows us to be flexible and creates an enabling environment where we can exhale. </p>
                            </div>
                            <div className="w-96">
                                <h4 className="text-xl font-medium mb-3 tz-text-dark">Integrity</h4>
                                <p className="tz-text-gray">We do not only comply with regulations, good business practices and ethical standards,  but we also are honest, reliable, and trustworthy people. </p>
                            </div>
                        </div>
                        <div className="flex gap-20 items-start">
                            <div className="w-96">
                                <h4 className="text-xl font-medium mb-3 tz-text-dark">People-smart</h4>
                                <p className="tz-text-gray">We have Interpersonal intelligence and are constantly seeking to improve our relationships with our customers and colleagues. </p>
                            </div>
                            <div className="w-96">
                                <h4 className="text-xl font-medium mb-3 tz-text-dark">Excellence</h4>
                                <p className="tz-text-gray">Excellence for us, is not just a watchword, it’s an intrinsic habit. it’s the default mode  for all our operational standards so that mediocrity and half measures become alien to our  culture. </p>
                            </div>
                        </div>
                        <div className="flex gap-20 items-start">
                            <div className="w-96">
                                <h4 className="text-xl font-medium mb-3 tz-text-dark">Speed</h4>
                                <p className="tz-text-gray">Speed is central to everything we are and everything we do; we are quick in creating and implementing innovative solutions, being fast in our time-responsiveness to our clients demands.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurValues;
