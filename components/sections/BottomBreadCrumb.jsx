'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import BlogCard1 from '@/components/items/BlogCard1';
import BlogCard2 from '@/components/items/BlogCard2';
// import isMobile from '@/components/helpers/isMobile'

const BottomBreadCrumb = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className='flex flex-col items-start gap-8 px-32'>
            <div className="w-full">
                <div className="mb-4 text-sm font-medium tz-text-dark">Helpful resources</div>
                <div className="h-[1px] self-stretch tz-bg-gray-3"></div>
            </div>
            <div className="flex items-center gap-12">
                <Link href="/contact-us" className="flex items-center gap-2">
                    <p className="text-sm font-medium tz-text-dark-1">Contact us</p>
                    <Image src="/assets/images/export.png" alt="export icon" width={16} height={16} className="flex-shrink-0" />
                </Link>
                <Link href="/faqs" className="flex items-center gap-2">
                    <p className="text-sm font-medium tz-text-dark-1">Got question? FAQs</p>
                    <Image src="/assets/images/export.png" alt="export icon" width={16} height={16} className="flex-shrink-0" />
                </Link>
                <Link href="/market-place" className="flex items-center gap-2">
                    <p className="text-sm font-medium tz-text-dark-1">View marketplace</p>
                    <Image src="/assets/images/CaretRight.png" alt="caret right" width={20} height={20} />
                </Link>
            </div>
        </div>
    );
};

export default BottomBreadCrumb;
