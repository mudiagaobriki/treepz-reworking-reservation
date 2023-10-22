'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'

const BlogCard2 = ({image, title, description, width, height=160}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex flex-col items-start gap-0 rounded-2xl tz-w-33 tz-bg-dark-1 tz-shadow">
            <div>
                <Image src="/assets/images/heartOfAfrica.png" alt="logo icon" width={520} height={216} className="flex-shrink-0" />
            </div>
            <div className="flex justify-center items-center p-6 tz-w-33">
                <div className="flex flex-col justify-center items-start gap-6 flex-shrink-0 tz-w-30">
                    <div className="flex flex-col items-start gap-2">
                        <p className="text-2xl font-medium text-white">Moving in the heart of Africa</p>
                        <div className="tz-text-light">Moving in the heart of Africa can be an exciting and enriching experience.</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link href="" className="font-medium underline text-white">Download the app</Link>
                        <Image src="/assets/images/arrow-right-light.png" alt="arrow-right-icon" width={20} height={20} />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default BlogCard2;
