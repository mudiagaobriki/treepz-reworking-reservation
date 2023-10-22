'use client';

import React from 'react';
// import Image from "next/image";
// import Link from "next/link";

import NavBar from '@/components/groups/NavBar';
import HomeBanner from '@/components/groups/HomeBanner';
import CardRow1 from '@/components/groups/CardRow1';
import FeaturedCars from '@/components/groups/FeaturedCars';
import DiscountOffer from '@/components/groups/DiscountOffer';
import Community from '@/components/groups/Community';
import CityRow from '@/components/groups/CityRow';
import BlogRow from '@/components/groups/BlogRow';
import ReviewRow from '@/components/groups/ReviewRow';
import ClientRow1 from '@/components/groups/ClientRow1';
import StatsRow from '@/components/groups/StatsRow';
import GetStartedRow from '@/components/groups/GetStartedRow';
import CommonQuestions from '@/components/groups/CommonQuestions';
import Footer from '@/components/groups/Footer';

const Page = () => {

    return (
        <div>
            <NavBar bgColor="#FFF" />
            <HomeBanner />
            <div className="my-20"></div>
            <CardRow1 />
            <div className="my-20"></div>
            <FeaturedCars />
            <div className="my-20"></div>
            <DiscountOffer />
            <div className="my-20"></div>
            <Community />
            <div className="my-20"></div>
            <CityRow />
            <div className="my-20"></div>
            <BlogRow />
            <div className="my-20"></div>
            <ReviewRow />
            <div className="my-20"></div>
            <ClientRow1 />
            <div className="my-20"></div>
            <StatsRow />
            <div className="my-20"></div>
            <GetStartedRow />
            <div className="my-20"></div>
            <CommonQuestions />
            <div className="my-20"></div>
            <Footer />
            <div className="my-20"></div>
        </div>
    );
};

export default Page;
