'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import NavBar from '@/components/sections/NavBar';
import VehicleType from '@/components/sections/VehicleType';
import VehicleImage from '@/components/sections/VehicleImage';
import BookingDetails from '@/components/sections/BookingDetails';
import MapSection from '@/components/sections/MapSection';
import LocationSection from '@/components/sections/LocationSection';
import BreadCrumb from '@/components/items/BreadCrumb';
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
            <BookingDetails />
            <div className="my-20"></div>
            <MapSection />
            <div className="mt-24 pt-16 pb-10 tz-bg-light">
                <BreadCrumb links={["Rent a car", "Ikejah", "Mercedes", "Mercedes Mayback 20233"]} />
            </div>
            <LocationSection />
            <div className="pt-24 tz-bg-light"></div>
            <Footer />
        </div>
    );
};

export default Page;
