'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import NavBar from '@/components/sections/NavBar';
import CarSlider from '@/components/items/CarSlider';
import CancelConfirmation from '@/components/items/CancelConfirmation';
import Footer from '@/components/sections/Footer';

const Page = () => {

    return (
        <div>
            <NavBar bgColor="#FFF" />
            <div className="my-20"></div>
            <div className='flex items-start justify-between px-32 w-full'>
                <div>
                    <CarSlider />
                </div>
                <div>
                    <CancelConfirmation />
                </div>
            </div>
            <div className="my-48"></div>
            <Footer />
            <div className="my-20"></div>
        </div>
    );
};

export default Page;














