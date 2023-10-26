'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

const ClientSection1 = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        // <div className="">
            <div className="flex justify-between items-center h-24 tz-px-30 tz-bg-light">
                <p className="text-base font-semibold tz-text-gray">AS SEEN IN</p>
                <div className="flex items-center gap-10">
                    <Image src="/assets/images/clients/img.png" alt="logo icon" width={74} height={32} />
                    <Image src="/assets/images/clients/img_1.png" alt="logo icon" width={238} height={40} />
                    <Image src="/assets/images/clients/img_2.png" alt="logo icon" width={40} height={40} />
                    <Image src="/assets/images/clients/img_3.png" alt="logo icon" width={108} height={40} />
                    <Image src="/assets/images/clients/img_4.png" alt="logo icon" width={134} height={40} />
                    <Image src="/assets/images/clients/img_5.png" alt="logo icon" width={80} height={40} />
                </div>
            </div>
        // </div>
    );
};

export default ClientSection1;
