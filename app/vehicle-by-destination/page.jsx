'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import NavBar from '@/components/sections/NavBar';
// import HomeBanner from '@/components/sections/HomeBanner';
import BreadCrumb from '@/components/items/BreadCrumb';
import SearchBox2 from '@/components/searchboxes/SearchBox2';
import FeaturedCars from '@/components/sections/FeaturedCars';
import UniqueHost1 from '@/components/sections/UniqueHost1';
import PlanTrip from '@/components/items/PlanTrip';
import ExploreWithoutLimits1 from '@/components/sections/ExploreWithoutLimits1';
import HaveQuestion from '@/components/sections/HaveQuestion';
import ExploreWithoutLimits2 from '@/components/sections/ExploreWithoutLimits2';
import CommonQuestions from '@/components/sections/CommonQuestions';
import Footer from '@/components/sections/Footer';

const DATA = [{key: 1, name: "Rent a car"}, {key: 2, name: "By destination"}, {key: 3, name: "Lagos"}];

const Page = () => {

    return (
        <div>
            <NavBar bgColor="#FFF" />
            <Image src="/assets/images/vehicle-by-destination-banner.png" alt="" width={0} height={0} sizes="100vw" className="flex-shrink-0 w-full h-80" />
            <div className="my-20"></div>
            <BreadCrumb links={["Rent a car", "By destination", "Lagos"]} />
            <div className="my-20"></div>
            <SearchBox2 />
            <div className="my-20"></div>
            <FeaturedCars />
            <div className="my-20"></div>
            <UniqueHost1 />
            <div className="my-20"></div>
            <PlanTrip />
            <div className="my-20"></div>
            <ExploreWithoutLimits1 />
            <div className="my-20"></div>
            <HaveQuestion />
            <div className="my-20"></div>
            <ExploreWithoutLimits2 />
            <div className="my-20"></div>
            <CommonQuestions />
            <div className="my-20"></div>
            <Footer />
            <div className="my-20"></div>
        </div>
    );
};

export default Page;
