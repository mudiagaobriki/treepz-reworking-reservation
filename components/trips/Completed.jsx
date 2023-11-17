'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import Title from '@/components/trips/Title';
import CarCard2 from '@/components/trips/CarCard2';

/*
carImage, carName, price, location="", rating=4.9, tripsCount=30,
                             tripDate="", tripTime="", hasLiked=false, status="",
                             isChauffeured=false, isAirportTransfer=false, isIntercityTravel=false
*/

const FEATURED_CARS = [
  {
    carName: "Mercedes Maybach",
    isChauffeured: true,
    isAirportTransfer: false,
    isIntercityTravel: false,
    rating: 4.9,
    trips: 30,
    status: "Completed",
    hasLiked: true,
    tripDate: "Trip date: Jun, 12 - July, 13, 2023",
    tripTime: "Time: 2:30 PM WAT",
    price: "NGN400,456.89",
    image: "/assets/images/featuredCars/car1.png",
    location: "Adekunle Jone, Ikeja, Lagos"
  },
  {
    carName: "Chevrolet Equinox",
    isChauffeured: true,
    isAirportTransfer: false,
    isIntercityTravel: false,
    rating: 4.9,
    trips: 30,
    status: "Completed",
    hasLiked: true,
    tripDate: "Trip date: Jun, 12 - July, 13, 2023",
    tripTime: "Time: 2:30 PM WAT",
    price: "NGN400,456.89",
    image: "/assets/images/featuredCars/car5.png",
    location: "Adekunle Jone, Ikeja, Lagos"
  },
  {
    carName: "Ferrari Mustang Mach 1",
    isChauffeured: false,
    isAirportTransfer: true,
    isIntercityTravel: false,
    rating: 4.9,
    trips: 30,
    status: "Completed",
    hasLiked: true,
    tripDate: "Trip date: Jun, 12 - July, 13, 2023",
    tripTime: "Time: 2:30 PM WAT",
    price: "NGN400,456.89",
    image: "/assets/images/featuredCars/car6.png",
    location: "Adekunle Jone, Ikeja, Lagos"
  },
  {
    carName: "Honda accord Mach 1",
    isChauffeured: false,
    isAirportTransfer: false,
    isIntercityTravel: true,
    rating: 4.9,
    trips: 30,
    status: "Completed",
    hasLiked: true,
    tripDate: "Trip date: Jun, 12 - July, 13, 2023",
    tripTime: "Time: 2:30 PM WAT",
    price: "NGN400,456.89",
    image: "/assets/images/featuredCars/car4.png",
    location: "Adekunle Jone, Ikeja, Lagos"
  }
];

const Completed = () => {

    return (
        <div className="flex flex-col items-start gap-16 w-full px-32 pb-0 bg-white">
            <Title title="Completed rides" />
            <div className="w-full">
                <div className="flex justify-between items-center w-full">
                    {
                        FEATURED_CARS.map((item, index) => {
                            return <div key={index}>
                                <CarCard2
                                    carName={item.carName}
                                    carImage={item.image}
                                    location={item.location}
                                    hasLiked={item.hasLiked}
                                    tripDate={item.tripDate}
                                    status={item.status}
                                    isChauffeured={item.isChauffeured}
                                    isPromoted={item.isPromoted}
                                    isAirportTransfer={item.isAirportTransfer}
                                    isIntercityTravel={item.isIntercityTravel}
                                    rating={item.rating}
                                    tripTime={item.tripTime}
                                    price={item.price}
                                    tripsCount={item.trips}
                                />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Completed;
