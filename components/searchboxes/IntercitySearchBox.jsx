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

const IntercitySearchBox = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex flex-col justify-center items-center -space-y-3">
            <div className="flex items-center gap-3 px-3 py-2 rounded-[3.75rem] tz-searchbox-buttons">
                <Link href="/airport-transfers" className="flex items-center gap-2 px-3 py-2 rounded-3xl">
                    <Image src="/assets/images/plane-light.png" alt="" width={20} height={20} />
                    <span className="text-white">Airport transfers</span>
                </Link>
                <Link href="/home" className="flex items-center gap-2 px-3 py-2 rounded-3xl">
                    <Image src="/assets/images/car-light.png" alt="" width={20} height={20} />
                    <span className="text-white">Vehicle rentals</span>
                </Link>
                <Link href="/inter-city-travels" className="flex items-center gap-2 px-3 py-2 rounded-3xl bg-white">
                    <Image src="/assets/images/car.png" alt="" width={20} height={20} />
                    <span className="tz-text-dark">Inter-city travels</span>
                </Link>
            </div>

            <div className="flex flex-col items-start rounded-2xl bg-white pt-6 pb-5 px-5 gap-4">
                <div className="flex items-start gap-3">
                    <Link href="" className="flex items-center px-0 py-1 tz-border-bottom-4">
                        <p className="text-sm font-medium tz-text-dark">One way trip</p>
                    </Link>
                    <Link href="" className="flex items-center px-0 py-1">
                        <p className="text-sm font-medium tz-text-dark">Return trip</p>
                    </Link>
                </div>
                <div className="flex items-center gap-4 self-stretch w-full">
                    <div className="flex flex-col items-center -space-y-11 pt-[0.875rem]">
                        <div className="p-2 rounded-full z-10 self-center tz-bg-dark-1">
                            <Image src="/assets/images/arrow-left-right-line.png" alt="" width={16} height={16} />
                        </div>
                        <div className="flex items-center gap-4 z-0">
                            <div className="relative w-80">
                                <select id="cancelReason" class="block w-full px-3 pt-6 pb-2 text-base border rounded-lg bg-white appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3">
                                    <option value="">Select city</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                                {/*<input type="text" id="departureLocation" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />*/}
                                <label for="departureLocation" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Departure location</label>
                            </div>
                            <div className="relative w-80">
                                <select id="cancelReason" class="block w-full px-3 pt-6 pb-2 text-base border rounded-lg bg-white appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3">
                                    <option value="">Select city</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                                {/*<input type="text" id="departureLocation" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />*/}
                                <label for="departureLocation" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Destination city</label>
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
                        <Button1 text={"Search"} url={"#"} width={"[21.5rem]"} iconLeft={true} img={"/assets/images/search-line.png"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntercitySearchBox;
