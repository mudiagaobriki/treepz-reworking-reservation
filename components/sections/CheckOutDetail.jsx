'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import FilterButton from '@/components/items/FilterButton';
import CarSlider from '@/components/items/CarSlider';
import SheduleDetail from '@/components/items/SheduleDetail';
// import isMobile from '@/components/helpers/isMobile'

const CheckOutDetail = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className='flex items-start justify-between px-32 w-full'>
            <div>
                <CarSlider />
            </div>
            <div>
                <SheduleDetail />
            </div>
        </div>
    );
};

export default CheckOutDetail;
