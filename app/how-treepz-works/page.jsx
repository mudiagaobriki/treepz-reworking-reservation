'use client';

import React from 'react';
// import Image from "next/image";
// import Link from "next/link";

import NavBar from '@/components/groups/NavBar';
import HowItWorks from '@/components/groups/HowItWorks';
import JustMove from '@/components/groups/JustMove';
import ExploreRow from '@/components/groups/ExploreRow';
// import DiscountOffer from '@/components/groups/DiscountOffer';
// import Community from '@/components/groups/Community';
// import CityRow from '@/components/groups/CityRow';
// import BlogRow from '@/components/groups/BlogRow';
// import ReviewRow from '@/components/groups/ReviewRow';
// import ClientRow1 from '@/components/groups/ClientRow1';
// import StatsRow from '@/components/groups/StatsRow';
// import GetStartedRow from '@/components/groups/GetStartedRow';
// import CommonQuestions from '@/components/groups/CommonQuestions';
import Footer from '@/components/groups/Footer';

const Page = () => {

    return (
        <div>
            <NavBar bgColor="#FFF" />
            <HowItWorks />
            <div className="my-20"></div>
            <ExploreRow />
            <div className="my-20"></div>
            <JustMove />
            <div className="my-20"></div>
            <Footer />
            <div className="my-20"></div>
        </div>
    );
};

export default Page;
