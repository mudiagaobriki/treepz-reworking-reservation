'use client';

import React from 'react';
// import Image from "next/image";
// import Link from "next/link";

import NavBar from '@/components/groups/NavBar';
import HomeBanner from '@/components/groups/HomeBanner';
import NeverSettle from '@/components/groups/NeverSettle';
import ReferAndEarn from '@/components/groups/ReferAndEarn';
import FeaturedCars from '@/components/groups/FeaturedCars';
import CommonQuestions from '@/components/groups/CommonQuestions';
import Footer from '@/components/groups/Footer';

const Page = () => {

    return (
        <div>
            <NavBar bgColor="#FFF" />
            <HomeBanner />
            <div className="my-20"></div>
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
