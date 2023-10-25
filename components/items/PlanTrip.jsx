'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import Button1 from '@/components/items/Button1'
// import isMobile from '@/components/helpers/isMobile'



const PlanTrip = ({links}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex justify-center items-center gap-5">
            <div  className="h-[2px] w-64 tz-line-gradient-right"></div>
            <Button1 text={"Plan your trip now"} url={"#"} width={"[21.5rem]"} />
            <div  className="h-[2px] w-64 tz-line-gradient-left"></div>
        </div>
    );
};

export default PlanTrip;
