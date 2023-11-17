'use client';

import React from 'react';
import Image from "next/image";
// import Link from "next/link";

import NavBar from '@/components/sections/NavBar';
import DriveIncome from '@/components/sections/DriveIncome';
import TrustTreepz from '@/components/sections/TrustTreepz';
import ExploreSection from '@/components/sections/ExploreSection';
import SupportCommunity from '@/components/sections/SupportCommunity';
import SoundsGood from '@/components/sections/SoundsGood';
import Card10 from '@/components/items/Card10';
import FromACarToFleets from '@/components/sections/FromACarToFleets';
// import ReviewRow from '@/components/sections/ReviewRow';
// import ClientRow1 from '@/components/sections/ClientRow1';
// import StatsRow from '@/components/sections/StatsRow';
// import GetStartedRow from '@/components/sections/GetStartedRow';
// import CommonQuestions from '@/components/sections/CommonQuestions';
import Footer from '@/components/sections/Footer';

const DATA = [
    {
        key: 1,
        image: "/assets/images/car-on-road.png",
        title: "Vehicle Insurance Cover",
        description: "We offer a dedicated customer support team to assist you with any questions or concerns that may arise during your hosting journey. Reach out to us via phone, email, or our online chat feature.",
    },
    {
        key: 2,
        image: "/assets/images/car-on-road.png",
        title: "Fleet scheduling",
        description: "We offer a dedicated customer support team to assist you with any questions or concerns that may arise during your hosting journey. Reach out to us via phone, email, or our online chat feature.",
    },
    {
        key: 3,
        image: "/assets/images/car-on-road.png",
        title: "Mobile dashboard",
        description: "We offer a dedicated customer support team to assist you with any questions or concerns that may arise during your hosting journey. Reach out to us via phone, email, or our online chat feature.",
    },
]

const Page = () => {

    return (
        <div>
            <NavBar bgColor="#FFF" />
            <DriveIncome />
            <div className="my-20"></div>
            <TrustTreepz />
            <div className="my-20"></div>
            <Image src="/assets/images/carOnRoad.png" alt="" width={0} height={0} sizes="100vw" className="flex-shrink-0 w-full h-72" />
            <ExploreSection />
            <div className="my-20"></div>
            <FromACarToFleets />
            <div className="my-40"></div>
            <div className="flex gap-6 items-center w-full px-32">
                {
                    DATA.map((item, index) => {
                        return <div key={item?.key}>
                                <Card10 image={item?.image} title={item?.title} description={item?.description} />
                            </div>
                    })
                }
            </div>
            <div className="my-20"></div>
            <SupportCommunity />
            <div className="my-20"></div>
            <SoundsGood />
            <div className="my-20"></div>
            <Footer />
        </div>
    );
};

export default Page;
