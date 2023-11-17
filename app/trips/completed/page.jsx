'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import TripsNavBar from '@/components/trips/TripsNavBar';
import Completed from '@/components/trips/Completed';

const Page = () => {

    return (
        <div className="">
            <TripsNavBar active={"completed"} />
            <div className="my-16"></div>
            <Completed />
            <div className="my-32"></div>
        </div>
    );
};

export default Page;
