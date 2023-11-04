'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import CheckOutNavBar from '@/components/sections/CheckOutNavBar';
import SearchBoxArea from '@/components/sections/SearchBoxArea';
import CheckOutDetail from '@/components/sections/CheckOutDetail';
import Footer from '@/components/sections/Footer';

const Page = () => {

    return (
        <div>
            <CheckOutNavBar bgColor="#FFF" />
            <div className="my-16"></div>
            <CheckOutDetail />
            <div className="my-48"></div>
            <Footer />
            <div className="my-20"></div>
        </div>
    );
};

export default Page;
