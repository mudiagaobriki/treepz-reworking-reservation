'use client';

import React from 'react';
// import Image from "next/image";
// import Link from "next/link";

import NavBar from '@/components/sections/NavBar';
import HeroBanner from '@/components/sections/HeroBanner';
import NeverSettle from '@/components/sections/NeverSettle';
import ReferAndEarn from '@/components/sections/ReferAndEarn';
import FeaturedCars from '@/components/sections/FeaturedCars';
import CommonQuestions from '@/components/sections/CommonQuestions';
import Footer from '@/components/sections/Footer';

const Page = () => {

    return (
        <div>
            <NavBar bgColor="#FFF" />
            <HeroBanner bgImg={"/assets/images/airport-hero-section.png"} />
            <div className="my-20 absolute"></div>
            <NeverSettle />
            <div className="my-20"></div>
            <ReferAndEarn 
                title={"Refer a friend and earn ₦20,000 "} 
                description={"Rent a vehicle from your hotel to your destination and get a 50% discount."} 
                image={"/assets/images/rafiki.png"} width={205} height={152} 
            />
            <div className="my-20"></div>
            <FeaturedCars />
            <div className="my-20"></div>
            <CommonQuestions />
            <div className="my-20"></div>
            <Footer />
            <div className="my-20"></div>
        </div>
    );
};

export default Page;
