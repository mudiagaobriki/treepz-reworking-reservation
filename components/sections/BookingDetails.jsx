'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import VehicleHost from '@/components/sections/VehicleHost';
import VehicleFeatures from '@/components/sections/VehicleFeatures';
import ReviewSection2 from '@/components/sections/ReviewSection2';
import ReserveForm from '@/components/items/ReserveForm';
// import BlogCard2 from '@/components/items/BlogCard2';
// import isMobile from '@/components/helpers/isMobile'

const BookingDetails = ({description="",amenities=[],
                        onReserve={}, hasError=false, price='', localPrice='',ride={}}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className='flex justify-between items-start px-32 w-full mt-14'>
            <div>
                <VehicleHost description={description} />
                <div className="my-20"></div>
                <VehicleFeatures amenities={amenities} />
                <div className="my-20"></div>
                <ReviewSection2 />
                <div className="my-20"></div>
            </div>
            <div>
                <ReserveForm onReserve={onReserve} hasError={hasError}
                price={price} localPrice={localPrice} ride={ride}/>
            </div>
        </div>
    );
};

export default BookingDetails;
