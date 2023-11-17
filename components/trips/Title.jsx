'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Title = ({title}) => {

    return (
        <div className="flex flex-col items-start gap-5 w-full pt-8 pb-0 bg-white tz-border-bottom-1">
            <div className="flex items-start gap-2 px-0 py-2">
                <div className="text-3xl font-medium tz-text-dark">{title}</div>
            </div>
            <div className="h-[1px] self-stretch tz-bg-gray-3"></div>
        </div>
    );
};

export default Title;
