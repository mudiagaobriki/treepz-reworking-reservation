'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import VehicleSearchBox from '@/components/searchboxes/VehicleSearchBox'
import AirportSearchBox from '@/components/searchboxes/AirportSearchBox'
import IntercitySearchBox from "../searchboxes/IntercitySearchBox";
// import isMobile from '@/components/helpers/isMobile'

const SearchBoxArea = ({page}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="mb-20">
            <div className={`flex items-center justify-center py-6 w-full bg-white tz-border-top-2 tz-border-bottom-1`}> 
                {page == 'market-place' && <VehicleSearchBox />} 
                {page == 'airport-transfers' && <AirportSearchBox />}
                {page == 'intercity-travels' && <IntercitySearchBox />}
            </div>
        </div>
    );
};

export default SearchBoxArea;

{/*<header
        class="w-full h-96 bg-[url('https://www.kindacode.com/wp-content/uploads/2022/06/hero-image-example.jpeg')] bg-cover bg-center flex justify-center items-center">
        <div class="flex flex-col justify-center items-center">
            <h1 class=" text-center text-5xl text-white font-bold drop-shadow-lg">WELCOME TO
            <span class="text-amber-500">KINDACODE.COM</span>
            </h1>
            <p class="mt-5 text-center text-lg text-white opacity-70">This webiste is about programming and things like
                that</p>
            <a class="mt-8 px-12 py-3 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-full"
                href="#">Get Started</a>
        </div>
    </header>*/}