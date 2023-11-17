'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import FilterButton from '@/components/items/FilterButton'
// import isMobile from '@/components/helpers/isMobile'

const FilterBar = () => {
    const seat = useRef();
    const progressRef = useRef(null);
    const [minValue, setMinValue] = useState(250);
    const [maxValue, setMaxValue] = useState(750);
    
    const handleMin = (e) => {
        if (maxValue - minValue >= 100 && maxValue <= 1000) {
            if (parseInt(e.target.value) > parseInt(maxValue)) {
            } else {
                setMinValue(parseInt(e.target.value));
            }
        } else {
            if (parseInt(e.target.value) < minValue) {
                setMinValue(parseInt(e.target.value));
            }
        }
    };

    const handleMax = (e) => {
        if (maxValue - minValue >= 100 && maxValue <= 1000) {
            if (parseInt(e.target.value) < parseInt(minValue)) {
            } else {
                setMaxValue(parseInt(e.target.value));
            }
        } else {
            if (parseInt(e.target.value) > maxValue) {
                setMaxValue(parseInt(e.target.value));
            }
        }
    };

    useEffect(() => {
        progressRef.current.style.left = (minValue / 1000) * 10 + "%";
        progressRef.current.style.right = 10 - (maxValue / 1000) * 10 + "%";
    }, [minValue, maxValue]);

    return (
        <div className="w-72 self-stretch rounded-xl bg-white px-4 tz-shadow tz-border-gray-1">
            <div className="flex justify-between items-center w-full py-2 mb-8 tz-border-bottom-1 tz-bg-gradient">
                <div className="font-medium tz-text-dark">Filter</div>
                <Link href="" className="flex items-center gap-1 tz-text-orange-1">
                    <Image src="/assets/images/refresh-line.png" alt="" width={16} height={16} /> Refresh
                </Link>
            </div>
            <div className="flex flex-col items-start gap-5 w-64 w-full">
                <div className="w-full">
                    <div className="text-sm font-medium tz-text-dark mb-1">Price range</div>
                    <div className="flex items-center justify-between self-stretch w-full mb-4">
                        <div className="flex items-center">
                            <span className="text-sm font-light tz-text-dark">Display total price </span>
                            <span className="text-xs tz-text-gray">(incl. all fees)</span>
                        </div>
                        <div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" name="totalPrice" class="sr-only peer" />
                                <div class="w-9 h-5 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-[#FDF2D0] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#F8B02B]"></div>
                            </label>
                        </div>
                    </div>
                    <div className="mb-4">Price range</div>
                    <div className="mb-4">
                        <div className="slider relative h-1 rounded-md tz-bg-gray-2">
                            <div className="progress absolute h-1 rounded tz-bg-range" ref={progressRef}></div>
                        </div>
                        <div className="input-range relative">
                            <input type="range" name="" value={minValue} min={0} step={10} max={1000} onChange={handleMin} className="absolute w-full -top-1 h-1 bg-red-300 appearance-none accent-[#D3D6D9]" />
                            <input type="range" name="" value={maxValue} min={0} step={10} max={1000} onChange={handleMax} className="absolute w-full -top-1 h-1 bg-red-300 appearance-none accent-[#D3D6D9] [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-12 [&::-webkit-slider-thumb]:w-12 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500" />
                        </div>
                        
                    </div>
                    <div className="flex items-center justify-between self-stretch">
                        <div className="flex items-center justify-center px-3 py-1 bg-white rounded tz-border-light-3">
                            <span className="text-xs tz-text-gray">NGN</span>
                            <input type="number" name="" size="5" onChange={(e) => setMinValue(e.target.value)} value={minValue} className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-xs outline-none h-4 px-1 border-0 focus:ring-0 tz-text-gray" />
                        </div>
                        <div className="w-4 h-[2px] tz-bg-light-1"></div>
                        <div className="flex items-center justify-center px-3 py-1 bg-white rounded tz-border-light-3">
                            <span className="text-xs tz-text-gray">NGN</span>
                            <input type="number" name="" size="5" onChange={(e) => setMaxValue(e.target.value)} value={maxValue} className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-xs outline-none h-4 px-1 border-0 focus:ring-0 tz-text-gray" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-4 pt-5 w-full tz-border-top-1">
                    <div className="text-sm font-medium tz-text-dark">Popular filters</div>
                    <div className="flex flex-col items-start gap-3">
                        <label className="flex items-center gap-2" for="selfDriven">
                            <input type="checkbox" name="" className="w-5 h-5 accent-[#F8B02B] focus:ring-2 focus:ring-[#F8B02B] rounded tz-text-orange-1 tz-checbox-border" id="selfDriven" /> 
                            <span className="text-sm tz-text-gray-3">Self driven</span>
                        </label>
                        <label className="flex items-center gap-2" for="fullDay">
                            <input type="checkbox" name="" className="w-5 h-5 accent-[#F8B02B] focus:ring-2 focus:ring-[#F8B02B] rounded tz-text-orange-1 tz-checbox-border" id="fullDay" /> 
                            <span className="text-sm tz-text-gray-3">Full day</span>
                        </label>
                        <label className="flex items-center gap-2" for="luxurious">
                            <input type="checkbox" name="" className="w-5 h-5 accent-[#F8B02B] focus:ring-2 focus:ring-[#F8B02B] rounded tz-text-orange-1 tz-checbox-border" id="luxurious" /> 
                            <span className="text-sm tz-text-gray-3">Luxurious</span>
                        </label>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-4 pt-5 w-full tz-border-top-1">
                    <div className="text-sm font-medium tz-text-dark">Star ratings</div>
                    <div className="flex items-center gap-3">
                        <Link href="" className="flex justify-center items-center gap-1 px-2 py-1 rounded  hover:bg-[#101010] hover:text-white text-sm tz-text-dark-3 tz-bg-gh">
                            <Image src="/assets/images/star.png" alt="" width={14} height={14} /> {'<2'}
                        </Link>
                        <Link href="" className="flex justify-center items-center gap-1 px-2 py-1 rounded  hover:bg-[#101010] hover:text-white text-sm tz-text-dark-3 tz-bg-gh">
                            <Image src="/assets/images/star.png" alt="" width={14} height={14} /> 3
                        </Link>
                        <Link href="" className="flex justify-center items-center gap-1 px-2 py-1 rounded  hover:bg-[#101010] hover:text-white text-sm tz-text-dark-3 tz-bg-gh">
                            <Image src="/assets/images/star.png" alt="" width={14} height={14} /> 4
                        </Link>
                        <Link href="" className="flex justify-center items-center gap-1 px-2 py-1 rounded  hover:bg-[#101010] hover:text-white text-sm tz-text-dark-3 tz-bg-gh">
                            <Image src="/assets/images/star.png" alt="" width={14} height={14} /> 5
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-4 pt-5 w-full tz-border-top-1">
                    <div className="text-sm font-medium tz-text-dark">Hire mode</div>
                    <div className="flex flex-col items-start gap-2">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="" className="w-5 h-5 accent-[#F8B02B] focus:ring-2 focus:ring-[#F8B02B] rounded tz-text-orange-1 tz-checbox-border" /> 
                            <div className="flex flex-col items-start">
                                <span className="text-sm tz-text-gray-3">Self driven</span>
                                <span className="text-[0.625em] tz-text-gray">You will drive yourself</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="" className="w-5 h-5 accent-[#F8B02B] focus:ring-2 focus:ring-[#F8B02B] rounded tz-text-orange-1 tz-checbox-border" /> 
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
                            <FilterButton text={"Sedan"} url="" icon={true} img={"/assets/images/car.png"} imgLight={"/assets/images/car-light.png"} />
                            <FilterButton text={"Sedan"} url="" icon={true} img={"/assets/images/car.png"} imgLight={"/assets/images/car-light.png"} />
                        </div>
                        <div className="flex items-start gap-3 justify-start w-full">
                            <FilterButton text={"Sedan"} url="" icon={true} img={"/assets/images/car.png"} imgLight={"/assets/images/car-light.png"} />
                            <FilterButton text={"Commercial"} url="" icon={true} img={"/assets/images/car.png"} imgLight={"/assets/images/car-light.png"} />
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
                                size="2"
                                name="numOfSeat"
                                ref={seat}
                                class="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-xs font-medium outline-none w-8 h-4 text-center border-0 focus:ring-0 tz-text-dark" 
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
                            <FilterButton text={"Air-conditioning"} url="" icon={true} img={"/assets/images/car.png"} imgLight={"/assets/images/car-light.png"} />
                        </div>
                        <div className="flex items-start gap-3 justify-start w-full">
                            <FilterButton text={"Bluetooth"} url="" icon={true} img={"/assets/images/bluetooth.png"} />
                            <FilterButton text={"Baby sit"} url="" icon={true} img={"/assets/images/car.png"} imgLight={"/assets/images/car-light.png"} />
                        </div>
                        <div className="flex items-start gap-3 justify-start w-full">
                            <FilterButton text={"Wi-fi"} url="" icon={true} img={"/assets/images/wifi.png"} />
                            <FilterButton text={"Show more"} url="" icon={true} img={"/assets/images/more-2-fill.png"} />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center w-full mb-5">
                    <Link 
                        href="" 
                        className="flex py-2 px-6 justify-center items-center text-sm font-medium w-48 rounded-lg hover:bg-opacity-80 tz-text-dark-1 tz-bg-orange-1"
                    >
                        Reset all filters
                    </Link>
                </div>

            </div>
        </div>
        
    );
};

export default FilterBar;
