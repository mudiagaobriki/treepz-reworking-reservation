'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import FilterButton from '@/components/items/FilterButton';
import CarSlider from '@/components/items/CarSlider';
import SheduleDetail from '@/components/items/SheduleDetail';
// import isMobile from '@/components/helpers/isMobile'

/*const FEATURED_CARS = [
  {
    carName: "Mercedes Maybach",
    isChauffeured: true,
    isPromoted: false,
    isSelfDrive: false,
    isRareFind: false,
    rating: 4.9,
    trips: 30,
    hasDisabledSeat: true,
    hasAC: true,
    hasWifi: true,
    seats: 4,
    price: 2000,
    image: "/assets/images/featuredCars/car1.png",
    location: "Asanti kotoko, Ikejah"
  },
  {
    carName: "Chevrolet Equinox",
    isChauffeured: true,
    isPromoted: false,
    isSelfDrive: false,
    isRareFind: false,
    rating: 4.9,
    trips: 30,
    hasDisabledSeat: true,
    hasAC: true,
    hasWifi: true,
    seats: 4,
    price: 2000,
    image: "/assets/images/featuredCars/car5.png",
    location: "Asanti kotoko, Ikejah"
  },
  {
    carName: "Ferrari Mustang Mach 1",
    isChauffeured: false,
    isPromoted: false,
    isSelfDrive: true,
    isRareFind: false,
    rating: 4.9,
    trips: 30,
    hasDisabledSeat: true,
    hasAC: true,
    hasWifi: true,
    seats: 4,
    price: 2000,
    image: "/assets/images/featuredCars/car6.png",
    location: "Asanti kotoko, Ikejah"
  },
  {
    carName: "Honda Accord Mach 1",
    isChauffeured: true,
    rating: 4.9,
    trips: 30,
    hasDisabledSeat: true,
    hasAC: true,
    hasWifi: true,
    seats: 4,
    price: 2000,
    image: "/assets/images/featuredCars/car4.png",
    location: "Asanti kotoko, Ikejah"
  }
];
*/
const CheckOutDetail = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className='flex items-start justify-between px-32 w-full'>
            <div>
                <CarSlider />
            </div>
            <div>
                <SheduleDetail />
            </div>
        </div>
    );
};

export default CheckOutDetail;
