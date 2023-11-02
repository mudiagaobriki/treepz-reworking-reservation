'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import Button1 from '@/components/items/Button1'
// import isMobile from '@/components/helpers/isMobile'



const VehicleSearchBox = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex flex-col justify-center items-center -space-y-3">
            <div className="flex items-center gap-3 px-3 py-2 rounded-[3.75rem] tz-searchbox-buttons">
                <button className="flex items-center gap-2 px-3 py-2 rounded-3xl">
                    <Image src="/assets/images/plane-light.png" alt="" width={20} height={20} />
                    <span className="text-white">Airport transfers</span>
                </button>
                <button className="flex items-center gap-2 px-3 py-2 rounded-3xl bg-white">
                    <Image src="/assets/images/car.png" alt="" width={20} height={20} />
                    <span className="tz-text-dark">Vehicle rentals</span>
                </button>
                <button className="flex items-center gap-2 px-3 py-2 rounded-3xl">
                    <Image src="/assets/images/car-light.png" alt="" width={20} height={20} />
                    <span className="text-white">Inter-city travels</span>
                </button>
            </div>


            <div className="flex flex-col items-start gap-4 rounded-2xl bg-white pt-6 pb-5 px-5">
                <div className="flex items-center gap-4 self-stretch w-full">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white tz-border-light-3">
                        <div className="flex justify-center items-center gap-3">
                            <Image src="/assets/images/map-pin.png" alt="" width={20} height={20} />
                            <div>
                                <p className="mb-1 text-xs tz-text-gray-2">Where are you going?</p>
                                <input type="text" className="text-sm tz-text-gray-5 self-stretch pl-0 w-full max-w-min outline-none border-0 focus:ring-0" placeholder="City, airport, address or hotel" />
                                {/*<p className="text-sm tz-text-gray-5">City, airport, address or hotel</p>*/}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white tz-border-light-3">
                        <div>
                            <Image src="/assets/images/calendar-event-fill.png" alt="" width={20} height={20} />
                        </div>
                        <div>
                            <p className="mb-1 text-xs tz-text-gray-2">Pick-up Date</p>
                            <input type="date" className="text-sm tz-text-gray-2 max-w-max outline-none border-0 focus:ring-0" placeholder="Sun, Sep 10" />
                            {/*<p className="text-sm tz-text-gray-2">Sun, Sep 10</p>*/}
                        </div>
                        <div className="w-[1px] flex-shrink-0 self-stretch tz-bg-light-1"></div>
                        <div>
                            <p className="mb-1 text-xs tz-text-gray-2">&nbsp;</p>
                            <input type="time" className="text-sm tz-text-gray-2 max-w-max outline-none border-0 focus:ring-0" placeholder="01:10 PMl" />
                            {/*<p className="text-sm tz-text-gray-2">01:10 PMl</p>*/}
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white tz-border-light-3">
                        <div>
                            <Image src="/assets/images/calendar-event-fill.png" alt="" width={20} height={20} />
                        </div>
                        <div>
                            <p className="mb-1 text-xs tz-text-gray-2">Drop-off Date</p>
                            <input type="date" className="text-sm tz-text-gray-2 max-w-max outline-none border-0 focus:ring-0" placeholder="Sun, Sep 10" />
                            {/*<p className="text-sm tz-text-gray-2">Sun, Sep 10</p>*/}
                        </div>
                        <div className="w-[1px] flex-shrink-0 self-stretch tz-bg-light-1"></div>
                        <div>
                            <p className="mb-1 text-xs tz-text-gray-2">&nbsp;</p>
                            <input type="time" className="text-sm tz-text-gray-2 max-w-max outline-none border-0 focus:ring-0" placeholder="01:10 PMl" />
                            {/*<p className="text-sm tz-text-gray-2">01:10 PMl</p>*/}
                        </div>
                    </div>
                    <div>
                        <Button1 text={"Search"} url={"#"} width={"[21.5rem]"} iconLeft={true} img={"/assets/images/search-line.png"} />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div>
                        <input type="checkbox" name="" />
                    </div>
                    <div>
                        <label className="text-sm tz-text-gray-3">I’m travelling for work</label>
                    </div>
                </div>
            </div>
        </div>
        
        
    );
};

export default VehicleSearchBox;

/*
display: flex;
padding: 8px 12px;
align-items: flex-start;
gap: 12px;
border-radius: 60px;
background: rgba(22, 23, 29, 0.50);
backdrop-filter: blur(2px);


display: flex;
padding: 8px 12px;
align-items: center;
gap: 8px;
*/