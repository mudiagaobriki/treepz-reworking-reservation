'use client';

import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import Autocomplete, {usePlacesWidget} from "react-google-autocomplete";
import "react-datepicker/dist/react-datepicker.css";

// Custom components
import Button1 from '@/components/items/Button1';
import DatePicker from "react-datepicker";
// import isMobile from '@/components/helpers/isMobile'

const ReserveForm = ({onReserve, ride, hasError, price, localPrice}) => {
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState('The owner is not available for pickup on that day.');
    const [selectedPickDate, setSelectedPickDate] = useState(new Date());
    const [selectedPickTime, setSelectedPickTime] = useState(new Date());
    const [selectedDropDate, setSelectedDropDate] = useState(new Date());
    const [selectedDropTime, setSelectedDropTime] = useState(new Date());
    const [toLocation, setToLocation] = useState('');

    const handleReserveClicked = () => {
        console.log({toLocation})
        let location = ref?.current?.value
        console.log({location})
        if (!selectedPickDate || !selectedPickTime){
            setError(true)
            setErrorText('Select a pickup date and time to proceed.')
            return
        }
        else if(!selectedDropDate || !selectedDropTime){
            setError(true)
            setErrorText('Select a drop off date and time to proceed.')
            return
        }
        else if (!location || location===""){
            setError(true)
            setErrorText('Please provide a pickup location to proceed.')
            return
        }
        // check for ride availability
        // console.log({selectedPickDate})
        // console.log({selectedPickTime})
        // let pd = selectedPickDate?.getDate()
        // let pt = selectedPickTime?.getTime()
        // console.log({pd, pt})

        let pDate = selectedPickDate
        //format the selected pickup date
        let year = pDate.toLocaleString("default", { year: "numeric" });
        let month = pDate.toLocaleString("default", { month: "2-digit" });
        let day = pDate.toLocaleString("default", { day: "2-digit" });

        // Generate yyyy-mm-dd date string
        let formattedDate = year + "-" + month + "-" + day;
        console.log(formattedDate)
        if (!ride?.availableTimes.includes(formattedDate)){
            setError(true)
        }
        else{
            setError(false)
            onReserve(selectedPickDate,selectedPickTime,selectedDropDate,selectedDropTime,location)
        }
    }

    const { ref, autocompleteRef } = usePlacesWidget({
        apiKey:"AIzaSyDcpqQNbjIQasjqRriOGOYnnSQdAGOUvVs",
        onPlaceSelected: (place) => {
            console.log(place);
        }
    });

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3"; // h-[32.5rem]

    return (
        <div>
            <div className="flex flex-col items-start px-4 py-6 w-96 bg-white rounded-xl mb-6 tz-shadow tz-border-light-2">
                <div className="flex items-start gap-3 pb-4 mb-6">
                    <div className="flex items-center gap-1">
                        <Image src="/assets/images/star.png" alt="rating-star" width={16} height={16} />
                        <span className="text-sm font-bold tz-text-dark-1">4.9</span>
                    </div>
                    <p className="text-sm text-opacity-80 tz-text-dark">(34 reviews)</p>
                </div>
                <div className="flex items-center -space-x-2 w-full mb-5">
                    <div className="z-0 flex items-center gap-2 px-3 py-2 rounded-l-lg bg-white tz-border-light-3">
                        <div className="flex flex-col items-start gap-1">
                            <span className="text-xs tz-text-gray-2">Pick off date</span>
                            <DatePicker
                                className="outline-none w-full border-0 focus:ring-0 w-20 p-0 text-sm tz-text-gray-2"
                                selected={selectedPickDate}
                                onChange={(date) => {setSelectedPickDate(date); setSelectedPickTime(date)}}
                                dateFormat="MMM dd" // Customize the date format if needed
                            />
                            {/*<input className="w-full border-0  focus:ring-0 focus:border-0 tz-text-gray-2" type="text" name="" placeholder="6/15/2023" />*/}
                        </div>
                    </div>
                    <div className="z-10 flex justify-between items-center px-3 py-2 rounded-lg bg-white tz-border-light-3">
                        <div className="flex flex-col items-start gap-1">
                            <span className="text-xs tz-text-gray-2">Pick off time</span>
                            <DatePicker
                                className="outline-none w-full border-0 focus:ring-0 w-16 p-0 text-sm tz-text-gray-2"
                                selected={selectedPickTime}
                                // showDateSelect={false}
                                showTimeSelect
                                showTimeSelectOnly
                                timeFormat="HH:mm aa"
                                onChange={(date) => setSelectedPickTime(date)}
                                dateFormat="HH:mm aa" // Customize the date format if needed
                            />
                            {/*<input className="w-full border-0  focus:ring-0 focus:border-0 tz-text-gray-2" type="text" name="" placeholder="10:00 AM" />*/}
                        </div>
                        <div className="flex justify-center items-center">
                            <Image src="/assets/images/arrow-down.png" alt="chevron-down" width={20} height={20} />
                        </div>
                    </div>
                </div>
                <div className="flex items-center -space-x-2 w-full mb-5">
                    <div className="z-500 flex items-center gap-2 px-3 py-2 rounded-l-lg bg-white tz-border-light-3">
                        <div className="flex flex-col items-start gap-1">
                            <span className="text-xs tz-text-gray-2">Drop off date</span>
                            <DatePicker
                                className="outline-none w-full border-0 focus:ring-0 w-20 p-0 text-sm tz-text-gray-2"
                                selected={selectedDropDate}
                                onChange={(date) => {setSelectedDropDate(date); setSelectedDropTime(date)}}
                                dateFormat="MMM dd" // Customize the date format if needed
                            />
                            {/*<input className="w-full border-0  focus:ring-0 focus:border-0 tz-text-gray-2" type="text" name="" placeholder="6/15/2023" />*/}
                        </div>
                    </div>
                    <div className="z-500 flex justify-between items-center px-3 py-2 rounded-lg bg-white tz-border-light-3">
                        <div className="flex flex-col items-start gap-1">
                            <span className="text-xs tz-text-gray-2">Drop off time</span>
                            <DatePicker
                                className="outline-none w-full border-0 focus:ring-0 w-16 p-0 text-sm tz-text-gray-2"
                                selected={selectedDropTime}
                                showTimeSelect
                                showTimeSelectOnly
                                timeFormat="HH:mm aa"
                                onChange={(date) => setSelectedDropTime(date)}
                                dateFormat="HH:mm aa" // Customize the date format if needed
                            />
                            {/*<input className="w-full border-0  focus:ring-0 focus:border-0 tz-text-gray-2" type="text" name="" placeholder="10:00 AM" />*/}
                        </div>
                        <div className="flex justify-center items-center">
                            <Image src="/assets/images/arrow-down.png" alt="chevron-down" width={20} height={20} />
                        </div>
                    </div>
                </div>
                <div className="flex items-center self-stretch gap-2 w-ful py-4 px-3 bg-whitel mb-5 mb-3 rounded-lg tz-border-light-3">
                    {/*<Autocomplete*/}
                    {/*    apiKey={'AIzaSyDcpqQNbjIQasjqRriOGOYnnSQdAGOUvVs'}*/}
                    {/*    onPlaceSelected={(place) => {*/}
                    {/*        console.log(place);*/}
                    {/*    }}*/}
                    {/*/>;*/}
                    <input onChange={el => setToLocation(el?.target?.value)} ref={ref} className="w-full outline-none border-0 p-0 focus:ring-0 focus:border-0 tz-text-gray-2" type="text" name="" placeholder="Enter pick-up location" />
                </div>
                {error && <div className="flex items-center gap-2 mb-5">
                    <Image src="/assets/images/information-line.png" alt="info-line" width={20} height={20} />
                    <p className="text-xs font-light tz-text-red">{errorText}</p>
                </div>}
                <div className="w-full mb-6">
                    <Button1 onClick={handleReserveClicked} text="Reserve" submit={true} />
                </div>
                <div className="w-full tz-border-top-1">
                    <div className="flex items-center justify-between w-full mb-3 mt-5">
                        <div>
                            <span className="font-m border-0edium tz-text-gray-3">Total&nbsp;</span>
                            <span className="text-xs tz-text-gray-3">(incl. of tax)</span>
                        </div>
                        <div className="font-medium tz-text-dark">₦44,000</div>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <div>
                            <span className="font-m border-0edium tz-text-gray-3">Total in GHC&nbsp;</span>
                            <span className="text-xs tz-text-gray-3">(incl. of tax)</span>
                        </div>
                        <div className="font-medium tz-text-dark">GHC4,400</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center p-4 w-96 bg-white rounded-xl mb-7 tz-shadow tz-border-light-2">
                <p className="text-xs font-medium tz-text-gray-50 mb-3 self-stretch">CANCELLATION POLICY</p>
                <div className="flex items-center gap-3 w-full">
                    <Image src="/assets/images/refund-fill.png" alt="info-line" width={32} height={32} />
                    <div>
                        <h4 className="text-sm font-medium tz-text-dark-1">Free Cancellation</h4>
                        <p className="text-xs font-light tz-text-gray-1">Full refund if trip is cancelled at least 48 hours ahead</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center px-4 py-3 w-96 bg-white rounded-xl tz-shadow tz-border-light-2">
                <p className="text-xs font-medium tz-text-gray-50 mb-3 self-stretch">CANCELLATION POLICY</p>
                <div className="flex items-center gap-3 w-full">
                    <Image src="/assets/images/shield-check-fill.png" alt="info-line" width={24} height={24} />
                    <div className="flex items-center gap-1">
                        <p className="text-sm tz-text-gray-3">Insurance via Octamile</p>
                        <Image src="/assets/images/information-line-gray.png" alt="info-line" width={16} height={16} />
                    </div>
                </div>
            </div>
            <div className="text-sm font-semibold underline mt-7 text-center tz-text-orange-1">Report listing</div>
            <div className="text-sm font-semibold underline mt-7 text-center tz-text-orange-1">Cancellation policy</div>
        </div>
    );
};

export default ReserveForm;
