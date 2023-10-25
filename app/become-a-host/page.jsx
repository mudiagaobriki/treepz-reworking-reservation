'use client';

import React from 'react';
import Image from "next/image";
// import Link from "next/link";

import NavBar from '@/components/sections/NavBar';
import DriveIncome from '@/components/sections/DriveIncome';
import TrustTreepz from '@/components/sections/TrustTreepz';
import ExploreRow from '@/components/sections/ExploreRow';
// import DiscountOffer from '@/components/sections/DiscountOffer';
// import Community from '@/components/sections/Community';
// import CityRow from '@/components/sections/CityRow';
// import BlogRow from '@/components/sections/BlogRow';
// import ReviewRow from '@/components/sections/ReviewRow';
// import ClientRow1 from '@/components/sections/ClientRow1';
// import StatsRow from '@/components/sections/StatsRow';
// import GetStartedRow from '@/components/sections/GetStartedRow';
// import CommonQuestions from '@/components/sections/CommonQuestions';
import Footer from '@/components/sections/Footer';

const Page = () => {

    return (
        <div>
            <NavBar bgColor="#FFF" />
            <DriveIncome />
            <div className="my-20"></div>
            <TrustTreepz />
            <div className="my-20"></div>
            <Image src="/assets/images/carOnRoad.png" alt="" width={0} height={0} sizes="100vw" className="flex-shrink-0 w-full h-72" />
            <ExploreRow />
            <div className="my-20"></div>
            <Footer />
            <div className="my-20"></div>
        </div>
    );
};

export default Page;
/*width: 1440px;
height: 280px;
flex-shrink: 0;*/