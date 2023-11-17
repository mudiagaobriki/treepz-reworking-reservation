'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

// Third party component
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Custom components
import Button1 from '@/components/items/Button1'
// import isMobile from '@/components/helpers/isMobile'

const AirportSearchBox = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex flex-col justify-center items-center -space-y-3">
            <div className="flex items-center gap-3 px-3 py-2 rounded-[3.75rem] tz-searchbox-buttons">
                <Link href="/airport-transfers" className="flex items-center gap-2 px-3 py-2 rounded-3xl bg-white">
                    <Image src="/assets/images/plane-fill.png" alt="" width={20} height={20} />
                    <span className="tz-text-dark">Airport transfers</span>
                </Link>
                <Link href="/home" className="flex items-center gap-2 px-3 py-2 rounded-3xl">
                    <Image src="/assets/images/car-light.png" alt="" width={20} height={20} />
                    <span className="text-white">Vehicle rentals</span>
                </Link>
                <Link href="/inter-city-travels" className="flex items-center gap-2 px-3 py-2 rounded-3xl">
                    <Image src="/assets/images/car-light.png" alt="" width={20} height={20} />
                    <span className="text-white">Inter-city travels</span>
                </Link>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-2xl bg-white pt-6 pb-5 px-5 gap-4">
                <div className="flex items-start gap-3">
                    <Link href="" className="flex items-center px-0 py-1 tz-border-bottom-4">
                        <p className="text-sm font-medium tz-text-dark">Airport Pick-up</p>
                    </Link>
                    <Link href="" className="flex items-center px-0 py-1">
                        <p className="text-sm font-medium tz-text-dark">Airport Drop-off</p>
                    </Link>
                </div>
                <div className="flex items-center gap-4 self-stretch w-full">
                    <div className="flex flex-col items-center -space-y-11 pt-[0.875rem]">
                        <div className="p-2 rounded-full z-10 self-center tz-bg-dark-1">
                            <Image src="/assets/images/arrow-left-right-line.png" alt="" width={16} height={16} />
                        </div>
                        <div className="flex items-center gap-4 z-0">
                            <div className="flex items-center px-3 py-2 rounded-lg bg-white w-56 tz-border-light-3">
                                <div className="flex justify-center items-center gap-3 w-full">
                                    <Image src="/assets/images/map-pin.png" alt="" width={20} height={20} />
                                    <div className="w-full">
                                        <p className="mb-1 text-xs tz-text-gray-2">Pick-up location</p>
                                        <input type="text" className="text-base self-stretch p-0 w-full outline-none border-0 focus:ring-0 placeholder-[#C8CCD0] tz-text-gray-5" placeholder="Enter location" />
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-56">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                                    <Image src="/assets/images/flight-takeoff-line.png" alt="eye-icon" width={20} height={20} />
                                </div>
                                <select id="destinationCity" class="block w-full pl-10 pr-3 pt-6 pb-2 text-base border rounded-lg bg-white appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-5 tz-border-light-3">
                                    <option value="">Select an airport</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                                <label for="destinationCity" className="absolute text-base duration-100 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-10 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Destination city</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white w-56 tz-border-light-3">
                        <div>
                            <Image src="/assets/images/calendar-event-fill.png" alt="" width={20} height={20} />
                        </div>
                        <div>
                            <p className="mb-1 text-xs tz-text-gray-2">Departure Date</p>
                            <DatePicker
                                className="outline-none border-0 focus:ring-0 w-20 p-0 text-sm tz-text-gray-2"
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                dateFormat="MMM dd" // Customize the date format if needed
                            />
                        </div>
                        <div className="w-[1px] flex-shrink-0 self-stretch tz-bg-light-1"></div>
                        <div>
                            <p className="mb-1 text-xs tz-text-gray-2">Time</p>
                            <DatePicker
                                className="outline-none border-0 focus:ring-0 w-16 p-0 text-sm tz-text-gray-2"
                                selected={selectedTime}
                                showTimeSelect
                                timeFormat="HH:mm aa"
                                onChange={(date) => setSelectedTime(date)}
                                dateFormat="HH:mm aa" // Customize the date format if needed
                            />
                        </div>
                    </div>
                    <div>
                        <div className="relative w-56">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                                <Image src="/assets/images/user-add-fill.png" alt="eye-icon" width={20} height={20} />
                            </div>
                            <select id="passengers" class="block w-full pl-10 pr-3 pt-6 pb-2 text-base border rounded-lg bg-white appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-5 tz-border-light-3">
                                <option value="">Select passengers</option>
                                <option value="1">1 passenger(s)</option>
                                <option value="2">2 passenger(s)</option>
                                <option value="3">3 passenger(s)</option>
                                <option value="4">4 passenger(s)</option>
                            </select>
                            <label for="passengers" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-10 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Passengers</label>
                        </div>
                    </div>
                    <div>
                        <Button1 text={"Search"} url={"#"} width={"[21.5rem]"} iconLeft={true} img={"/assets/images/search-line.png"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AirportSearchBox;
