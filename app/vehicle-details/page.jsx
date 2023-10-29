'use client';

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";

// Third party components
import { Modal } from 'flowbite';

import NavBar from '@/components/sections/NavBar';
import VehicleType from '@/components/sections/VehicleType';
import VehicleImage from '@/components/sections/VehicleImage';
import BookingDetails from '@/components/sections/BookingDetails';
import MapSection from '@/components/sections/MapSection';
import LocationSection from '@/components/sections/LocationSection';
import BreadCrumb from '@/components/items/BreadCrumb';
import Footer from '@/components/sections/Footer';
import Login from '@/components/modals/Login';


const DATA = [{key: 1, name: "Rent a car"}, {key: 2, name: "By destination"}, {key: 3, name: "Lagos"}];

const Page = () => {
    /*// options with default values
    const options = {
      placement: 'bottom-right',
      backdrop: 'dynamic',
      backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
      closable: true,
    };

    useEffect(() => {
        // set the modal menu element
        const $targetEl = document.getElementById('authentication-modal');

        const modal = new Modal($targetEl, options);

        // show the modal
        modal.show();

        // hide the modal
        modal.hide();
    });*/

        


    return (
        <div>
            <NavBar bgColor="#FFF" />
            <div className="px-32 flex items-center gap-2 mt-14 mb-10 font-semibold tz-text-orange-1">
                <Image src="/assets/images/arrow-go-back-fill.png" alt="rating-star" width={24} height={24} /> Go back
                {/* Modal toggle */}
                {/*<button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                  Toggle modal
                </button>*/}

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
            <Login />
        </div>
    );
};

export default Page;
