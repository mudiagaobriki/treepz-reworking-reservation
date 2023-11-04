'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Third party components
// import {isMobile} from "react-device-detect";

const NavBar = ({bgColor='white'}) => {
    const isMobile = () => typeof window !== 'undefined' ? (window.matchMedia && window.matchMedia("(max-width: 480px)").matches ? true : false) : false

    let mobPad = isMobile() ? "px-5 py-2" : "px-20 py-3";
    const bg = {white: "bg-white", yellow: "bg-[#FDF2D0]"};

    return (
        <div className={`flex justify-between items-center w-full px-20 py-3 ${bg[bgColor]}`}>
            <div>
                <Image src="/assets/images/logo.png" alt="logo icon" width={120} height={32} />
            </div>
            <div className="flex items-start gap-5">
            {!isMobile ? 
                <div className="">
                    <div className="flex items-center gap-2 py-2 px-3">
                        <Image src="/assets/images/menu-line.png" alt="menu-line icon" width={20} height={20} />
                        <Image src="/assets/images/user-5-fill.png" alt="user-5-fill icon" width={20} height={20} />
                    </div>
                </div> :
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 py-2 px-3">
                            <Image src="/assets/images/car.png" alt="car icon" width={20} height={20} />
                            <Link href="" className="text-sm font-medium">Become a host</Link>
                        </div>
                        <div className="flex items-center gap-1 py-2 px-3">
                            <Image src="/assets/images/nigeria.png" alt="car icon" width={20} height={20} />
                            <p className="text-sm font-medium">NGN</p>
                        </div>
                    </div>
                    
                        <div className="flex items-center gap-2 py-2 px-3">
                            <Image src="/assets/images/menu-line.png" alt="menu-line icon" width={20} height={20} />
                            <Image src="/assets/images/user-5-fill.png" alt="user-5-fill icon" width={20} height={20} />
                        </div>
                    
                </div>
            }   
            </div>
        </div>
    );
};

export default NavBar;
