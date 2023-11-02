'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import FilterButton from '@/components/items/FilterButton';
import FilterBar from '@/components/items/FilterBar';
import CarCard from '@/components/items/CarCard';
// import isMobile from '@/components/helpers/isMobile'

const FEATURED_CARS = [
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

const CarGridShow = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className='flex items-start gap-6 px-32 w-full'>
            <div>
                <FilterBar />
            </div>
            <div className="flex flex-col items-start gap-10 w-full">
                <div className="flex flex-col items-start gap-5">
                    <div className="text-3xl font-semibold tz-text-dark">200+ cars available</div>
                    <div className="flex items-start content-start self-stretch flex-wrap gap-4">
                        <FilterButton text={"Most popular"} url="" bg={"tz-bg-dark-1"} />
                        <FilterButton text={"Price"} url="" />
                        <FilterButton text={"Star rating"} url="" />
                        <FilterButton text={"Distance"} url="" />
                        <FilterButton text={"Chauffeured"} url="" />
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex justify-between items-center w-full">
                        {
                            FEATURED_CARS.map((item, index) => {
                                return <div key={index}>
                                    <CarCard
                                        carName={item.carName}
                                        carImage={item.image}
                                        location={item.location}
                                        hasAC={item.hasAC}
                                        hasWifi={item.hasWifi}
                                        hasDisabledSeat={item.hasDisabledSeat}
                                        isChauffeured={item.isChauffeured}
                                        isPromoted={item.isPromoted}
                                        isSelfDrive={item.isSelfDrive}
                                        isRareFind={item.isRareFind}
                                        rating={item.rating}
                                        numSeats={item.seats}
                                        price={item.price}
                                        tripsCount={item.trips}
                                    />
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarGridShow;
