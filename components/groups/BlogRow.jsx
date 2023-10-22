'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import BlogCard1 from '@/components/items/BlogCard1';
import BlogCard2 from '@/components/items/BlogCard2';
// import isMobile from '@/components/helpers/isMobile'

const DATA = [
    {
        key: 1,
        image: '/assets/images/heartOfAfrica2.png',
        title: "Moving in the heart of Africa",
        description: 'Moving in the heart of Africa can be an exciting and enriching experience.',
    },
    {
        key: 2,
        image: "/assets/images/heartOfAfrica3.png",
        title: "Moving in the heart of Africa",
        description: 'Moving in the heart of Africa can be an exciting and enriching experience.',
    },
]

const BlogRow = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className='flex items-start gap-9 tz-px-30'>
            <div>
                <BlogCard2 />
            </div>
            <div className="flex flex-col items-end gap-6">
                <div className="flex items-start gap-9">
                    <BlogCard1 image={DATA[0].image} title={DATA[0].title} description={DATA[0].description} />
                    <BlogCard1 image={DATA[0].image} title={DATA[0].title} description={DATA[0].description} />
                </div>
                <div>
                    <Link href="" className="flex items-center self-stretch py-4 px-60 rounded-lg tz-border-dark-1">Read our blog</Link>
                </div>
            </div>
        </div>
    );
};

export default BlogRow;
