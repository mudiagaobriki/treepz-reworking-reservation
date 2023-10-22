'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";


const Card7 = ({image, description, bgColor}) => {

    return (
        <div className="flex items-center gap-8 self-stretch">
            <div>
                <Image src={image} alt="logo icon" width={52} height={52} />
            </div>
            <div className="text-base font-normal tz-text-gray-3 self-stretch">{description}</div>
        </div>
    );
};

export default Card7;
