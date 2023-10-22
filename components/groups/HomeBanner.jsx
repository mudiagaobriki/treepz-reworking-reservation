'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'

const HomeBanner = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div> 
            <Image src="/assets/images/home-top-background.jpeg" alt="home-banner" width={0} height={0} sizes="100vw" className="w-full h-1/2" /> 
        </div>

    );
};

export default HomeBanner;
