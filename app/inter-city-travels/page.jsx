'use client';

import React from 'react';
// import Image from "next/image";
// import Link from "next/link";

import NavBar from '@/components/sections/NavBar';
import HeroBanner from '@/components/sections/HeroBanner';
import TravelWherever from '@/components/sections/TravelWherever';
import ReferAndEarn from '@/components/sections/ReferAndEarn';
import FeaturedCars from '@/components/sections/FeaturedCars';
import CommonQuestions from '@/components/sections/CommonQuestions';
import Footer from '@/components/sections/Footer';

const Page = () => {

    return (
        <div>
            <NavBar bgColor="#FFF" />
            <HeroBanner page="intercity-travels" />
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
