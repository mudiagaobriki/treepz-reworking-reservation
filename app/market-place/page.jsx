'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import NavBar from '@/components/sections/NavBar';
import SearchBoxArea from '@/components/sections/SearchBoxArea';
import CarGridShow from '@/components/sections/CarGridShow';
import Footer from '@/components/sections/Footer';

const Page = () => {

    return (
        <div>
            <NavBar bgColor="#FFF" />
            <SearchBoxArea page="market-place" />
            <div className="my-20"></div>
            <CarGridShow />
            <div className="my-20"></div>
            <Footer />
            <div className="my-20"></div>
        </div>
    );
};

export default Page;
