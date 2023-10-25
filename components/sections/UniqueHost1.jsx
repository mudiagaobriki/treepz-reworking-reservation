'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import UniqueHost2 from '@/components/items/UniqueHost2';

const UniqueHost1 = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="px-32 flex justify-between items-start w-full">
            <UniqueHost2 />
            <div>
                <Image src="/assets/images/monkey-bw.png" alt="monkey" width={420} height={520} className="flex-shrink-0 rounded-t-[4rem]" />
            </div>
            <UniqueHost2 />
        </div>
    );
};

export default UniqueHost1;
