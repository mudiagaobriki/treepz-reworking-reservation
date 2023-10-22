'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'



const BlogCard1 = ({image, title, description}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex flex-col items-center gap-5">
            <div>
                <Image src={image} alt="logo icon" width={304} height={200} className="rounded-xl" />
            </div>
            <div className="flex flex-col items-center gap-4">
                <h4 className="text-2xl font-medium tz-text-dark">{title}</h4>
                <p className="text-base font-normal tz-text-gray">{description}</p>
            </div>
        </div>
    );
};

export default BlogCard1;
