'use client';

import React from 'react';
// import Image from "next/image";
// import Link from "next/link";

import NavBar from '@/components/groups/NavBar';
import HomeBanner from '@/components/groups/HomeBanner';
import TravelWherever from '@/components/groups/TravelWherever';
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
            <TravelWherever />
            <div className="my-20"></div>
            <ReferAndEarn 
                title={"Sign in to save time"} 
                description={"Your Treepz account allows you to book cars efficiently"} 
                image={"/assets/images/cuate.png"} width={222} height={83} 
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
