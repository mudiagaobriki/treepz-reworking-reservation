'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import NavBar from '@/components/sections/NavBar';
import VehicleType from '@/components/sections/VehicleType';
import VehicleImage from '@/components/sections/VehicleImage';
import VehicleHost from '@/components/sections/VehicleHost';
import VehicleFeatures from '@/components/sections/VehicleFeatures';
import ReviewSection2 from '@/components/sections/ReviewSection2';
// import PlanTrip from '@/components/items/PlanTrip';
// import ExploreWithoutLimits1 from '@/components/sections/ExploreWithoutLimits1';
// import HaveQuestion from '@/components/sections/HaveQuestion';
// import ExploreWithoutLimits2 from '@/components/sections/ExploreWithoutLimits2';
// import CommonQuestions from '@/components/sections/CommonQuestions';
import Footer from '@/components/sections/Footer';

const DATA = [{key: 1, name: "Rent a car"}, {key: 2, name: "By destination"}, {key: 3, name: "Lagos"}];

const Page = () => {

    return (
        <div>
            <NavBar bgColor="#FFF" />
            <div className="px-32 flex items-center gap-2 mt-14 mb-10 font-semibold tz-text-orange-1">
                <Image src="/assets/images/arrow-go-back-fill.png" alt="rating-star" width={24} height={24} /> Go back
            </div>
            <VehicleType />
            <div className="my-20"></div>
            <VehicleImage />
            <div className="my-20"></div>
            <VehicleHost />
            <div className="my-20"></div>
            <VehicleFeatures />
            <div className="my-20"></div>
            <ReviewSection2 />
            <div className="my-20"></div>
            <Footer />
            <div className="my-20"></div>
        </div>
    );
};

export default Page;
