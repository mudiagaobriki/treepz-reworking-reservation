'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import Modal from 'flowbite';

import TripsNavBar from '@/components/trips/TripsNavBar';
import Booked from '@/components/trips/Booked';

const Page = () => {

    return (
        <div className="">
            <TripsNavBar active={"booked"} />
            <div className="my-16"></div>
            <Booked />
            <div className="my-32"></div>
            {/*<TripReservation />*/}
        </div>
    );
};

export default Page;
