'use client';

import React, { useRef } from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import FilterButton from '@/components/items/FilterButton'
// import isMobile from '@/components/helpers/isMobile'



const FilterBar = () => {
    const seat = useRef();
    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="w-72 self-stretch rounded-xl bg-white px-4 tz-shadow tz-border-gray-1">
            <div className="flex justify-between items-center w-full py-2 tz-border-bottom-1 tz-bg-gradient">
                <div className="font-medium tz-text-dark">Filter</div>
                <Link href="" className="flex items-center gap-1 tz-text-orange-1">
                    <Image src="/assets/images/refresh-line.png" alt="" width={16} height={16} /> Refresh
                </Link>
            </div>
            <div className="flex flex-col items-start gap-5 w-64">
                <div>
                    <div className="text-sm font-medium tz-text-dark mb-1">Price range</div>
                    <div className="mb-4">
                        <span className="text-sm font-light tz-text-dark">Display total price </span>
                        <span className="text-xs tz-text-gray">(incl. all fees)</span>
                    </div>
                    <div className="mb-4">Price range</div>
                    <div><input type="checkbox" name="" /></div>
                    
                </div>

                <div className="flex flex-col items-start gap-4 pt-5 w-full tz-border-top-1">
                    <div className="text-sm font-medium tz-text-dark">Popular filters</div>
                    <div className="flex flex-col items-start gap-3">
                        <label><input type="checkbox" name="" /> <span className="text-sm ml-2 tz-text-gray-3">Self driven</span></label>
                        <label><input type="checkbox" name="" /> <span className="text-sm ml-2 tz-text-gray-3">Full day</span></label>
                        <label><input type="checkbox" name="" /> <span className="text-sm ml-2 tz-text-gray-3">Luxurious</span></label>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-4 pt-5 w-full tz-border-top-1">
                    <div className="text-sm font-medium tz-text-dark">Star ratings</div>
                    <div className="flex items-center gap-3">
                        <Link href="" className="flex justify-center items-center gap-1 px-2 py-1 rounded tz-bg-gh">
                            <Image src="/assets/images/star.png" alt="" width={14} height={14} /> <span className="text-sm tz-text-dark-3">{'<2'}</span>
                        </Link>
                        <Link href="" className="flex justify-center items-center gap-1 px-2 py-1 rounded tz-bg-gh">
                            <Image src="/assets/images/star.png" alt="" width={14} height={14} /> <span className="text-sm tz-text-dark-3">3</span>
                        </Link>
                        <Link href="" className="flex justify-center items-center gap-1 px-2 py-1 rounded tz-bg-gh">
                            <Image src="/assets/images/star.png" alt="" width={14} height={14} /> <span className="text-sm tz-text-dark-3">4</span>
                        </Link>
                        <Link href="" className="flex justify-center items-center gap-1 px-2 py-1 rounded tz-bg-gh">
                            <Image src="/assets/images/star.png" alt="" width={14} height={14} /> <span className="text-sm tz-text-dark-3">5</span>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-4 pt-5 w-full tz-border-top-1">
                    <div className="text-sm font-medium tz-text-dark">Hire mode</div>
                    <div className="flex flex-col items-start gap-2">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="" /> 
                            <div className="flex flex-col items-start">
                                <span className="text-sm tz-text-gray-3">Self driven</span>
                                <span className="text-[0.625em] tz-text-gray">You will drive yourself</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="" /> 
                            <div className="flex flex-col items-start">
                                <span className="text-sm tz-text-gray-3">Chauffeured</span>
                                <span className="text-[0.625em] tz-text-gray">A driver takes you around</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-4 pt-5 w-full tz-border-top-1">
                    <div className="text-sm font-medium tz-text-dark">Duration</div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="flex items-start gap-3 justify-start w-full">
                            <FilterButton text={"Hourly"} url="" />
                            <FilterButton text={"Half day"} url="" />
                        </div>
                        <div className="flex items-start gap-3 justify-start w-full">
                            <FilterButton text={"Full day"} url="" />
                            <FilterButton text={"Weekly"} url="" />
                        </div>
                        <div className="flex items-start gap-3 justify-start w-full">
                            <FilterButton text={"Monthly"} url="" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-4 pt-5 w-full tz-border-top-1">
                    <div className="text-sm font-medium tz-text-dark">Vehicle type</div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="flex items-start gap-3 justify-start w-full">
                            <FilterButton text={"Sedan"} url="" icon={true} img={"/assets/images/car.png"} />
                            <FilterButton text={"Sedan"} url="" icon={true} img={"/assets/images/car.png"} />
                        </div>
                        <div className="flex items-start gap-3 justify-start w-full">
                            <FilterButton text={"Sedan"} url="" icon={true} img={"/assets/images/car.png"} />
                            <FilterButton text={"Commercial"} url="" icon={true} img={"/assets/images/car.png"} />
                        </div>
                        <div className="flex items-start gap-3 justify-start w-full">
                            <FilterButton text={"Show more"} url="" icon={true} img={"/assets/images/more-2-fill.png"} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-4 pt-5 w-full tz-border-top-1">
                    <div className="text-sm font-medium tz-text-dark">Number of seats</div>
                    <div className="flex justify-between items-start w-full">
                        <div className="text-sm tz-text-gray-3">Number of seats</div>
                        <div className="flex justify-between items-center w-[4.5em] p-1 bg-white rounded-[2rem] tz-border-gray-1">
                            <button onClick={() => seat.current.stepDown()} id="increment">
                                <Image src="/assets/images/subtract-fill.png" alt="" width={16} height={16} />
                            </button>
                            <input
                                type="number"
                                value="4"
                                min="1"
                                name="numOfSeat"
                                ref={seat}
                                class="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-xs font-medium outline-none w-6 text-center tz-text-dark" 
                            />
                            <button onClick={() => seat.current.stepUp()} id="decrement">
                                <Image src="/assets/images/add-line.png" alt="" width={16} height={16} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-4 pt-5 w-full tz-border-top-1">
                    <div className="text-sm font-medium tz-text-dark">Car make</div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="flex items-start gap-3 justify-start w-full">
                            <FilterButton text={"Toyota"} url="" />
                            <FilterButton text={"Audi"} url="" />
                        </div>
                        <div className="flex items-start gap-3 justify-start w-full">
                            <FilterButton text={"Mercedes-Benz"} url="" />
                            <FilterButton text={"Nissan"} url="" />
                        </div>
                        <div className="flex items-start gap-3 justify-start w-full">
                            <FilterButton text={"Monthly"} url="" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-4 pt-5 w-full mb-8 tz-border-top-1">
                    <div className="text-sm font-medium tz-text-dark">Vehicle type</div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="flex items-start gap-3 justify-start w-full">
                            <FilterButton text={"Air-conditioning"} url="" icon={true} img={"/assets/images/car.png"} />
                            <FilterButton text={"Wi-fi"} url="" icon={true} img={"/assets/images/wifi.png"} />
                        </div>
                        <div className="flex items-start gap-3 justify-start w-full">
                            <FilterButton text={"Bluetooth"} url="" icon={true} img={"/assets/images/bluetooth.png"} />
                            <FilterButton text={"Baby sit"} url="" icon={true} img={"/assets/images/car.png"} />
                        </div>
                        <div className="flex items-start gap-3 justify-start w-full">
                            <FilterButton text={"Show more"} url="" icon={true} img={"/assets/images/more-2-fill.png"} />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center w-full mb-5">
                    <Link 
                        href="" 
                        className={`flex py-2 px-6 justify-center items-center text-sm font-medium w-48 rounded-lg tz-text-dark-1 tz-bg-orange-1`}
                    >
                        Reset all filters
                    </Link>
                </div>

            </div>
        </div>
        
    );
};

export default FilterBar;
