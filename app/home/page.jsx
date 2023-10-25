'use client';

import React from 'react';
// import Image from "next/image";
// import Link from "next/link";

import NavBar from '@/components/sections/NavBar';
import HeroBanner from '@/components/sections/HeroBanner';
import CardRow1 from '@/components/sections/CardRow1';
import FeaturedCars from '@/components/sections/FeaturedCars';
import DiscountOffer from '@/components/sections/DiscountOffer';
import Community from '@/components/sections/Community';
import CityRow from '@/components/sections/CityRow';
import BlogRow from '@/components/sections/BlogRow';
import ReviewRow from '@/components/sections/ReviewRow';
import ClientRow1 from '@/components/sections/ClientRow1';
import StatsRow from '@/components/sections/StatsRow';
import GetStartedRow from '@/components/sections/GetStartedRow';
import CommonQuestions from '@/components/sections/CommonQuestions';
import Footer from '@/components/sections/Footer';

const Page = () => {

    return (
        <div>
            <NavBar bgColor="#FFF" />
            <HeroBanner bgImg={"/assets/images/pictures-on-hero-section.png"} />
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
