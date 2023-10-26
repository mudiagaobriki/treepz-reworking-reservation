'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'

const MapSection = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="px-32">
            <div className="flex flex-col items-start gap-10 pt-8 tz-border-top-3">
                <h2 className="text-2xl font-medium tz-text-dark">Host/Vehicle location</h2>
                <div className="flex items-center justify-center w-full h-[32.5rem] bg-cover bg-center bg-[url('/assets/images/location-map.png')]">
                </div>
            </div>
        </div>
        
    );
};

export default MapSection;
