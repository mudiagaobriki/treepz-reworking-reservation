'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import FilterButton from '@/components/items/FilterButton';
import FilterBar from '@/components/items/FilterBar';
import CarCard from '@/components/items/CarCard';
import {isMobile} from "react-device-detect";
import {useRouter} from "next/navigation";
import {fetchVehicleListing} from "../../services/dataservices/vehicleService";
import {getMinMaxValues} from "../../services/functions/common";
import {
    filterAC, filterAmenities,
    filterChauffeured, filterData,
    filterFullDay, filterHalfDay,
    filterHourly, filterMonthly, filterNumOfSeats, filterObjects,
    filterPriceBetween,
    filterSelfDriven, filterVehicleMake, filterVehicleType, filterWeekly, multipleFilter, sortByPrice
} from "../../services/functions/filters";
import {useDispatch, useSelector} from "react-redux";
import {
    setAllVehicleListings,
    setFilterResult, setMaxPrice, setMinPrice,
    setSelectedRide,
    setVehiclesListing
} from "../../redux/features/marketplaceSlice";
// import isMobile from '@/components/helpers/isMobile'
// import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import RangeSlider from "../items/RangeSlider";
// import {RangeSlider} from "flowbite-react";

const FEATURED_CARS = [
    {
        "id": "a32f82b3-8d8e-47d9-8914-0d9e1276d263",
        "driverId": "985f9bd0-43c1-4372-a8e8-9e72b59803c2",
        "isAvailable": true,
        "isBooked": false,
        "airportTransfer": false,
        "interCity": false,
        "rentalBooking": true,
        "vehicleId": "010ef07f-c152-4022-a6a7-a42f5d922ec4",
        "createdAt": "2023-04-18T09:21:11.013Z",
        "updatedAt": "2023-11-27T03:30:00.111Z",
        "locationKeywords": [
            "surulere",
            "ikeja",
            "lagos",
            "nigeria"
        ],
        "longitude": 3.358,
        "latitude": 6.48932,
        "tripCoverageRange": null,
        "tripType": "hired",
        "couponId": null,
        "description": null,
        "discountId": null,
        "pricePerDay": 24000,
        "pricePerHour": 2000,
        "pricePerMonth": 720000,
        "pricePerWeek": 168000,
        "halfDayPrice": 12000,
        "airportTransferPrice": 0,
        "country": "NIGERIA",
        "currency": "NGN",
        "currencySymbol": "₦",
        "timezone": "Africa/Lagos",
        "promotionId": null,
        "promotionExpiry": null,
        "promotionActive": false,
        "availableTimes": [
            "2023-11-27",
            "2023-11-28",
            "2023-11-29",
            "2023-11-30",
            "2023-12-01",
            "2023-12-02",
            "2023-12-03",
            "2023-12-04",
            "2023-12-05",
            "2023-12-06",
            "2023-12-07",
            "2023-12-08",
            "2023-12-09",
            "2023-12-10",
            "2023-12-11",
            "2023-12-12",
            "2023-12-13",
            "2023-12-14",
            "2023-12-15",
            "2023-12-16",
            "2023-12-17",
            "2023-12-18",
            "2023-12-19",
            "2023-12-20",
            "2023-12-21",
            "2023-12-22",
            "2023-12-23",
            "2023-12-24",
            "2023-12-25",
            "2023-12-26",
            "2023-12-27",
            "2023-12-28",
            "2023-12-29",
            "2023-12-30",
            "2023-12-31",
            "2024-01-01",
            "2024-01-02",
            "2024-01-03",
            "2024-01-04",
            "2024-01-05",
            "2024-01-06",
            "2024-01-07",
            "2024-01-08",
            "2024-01-09",
            "2024-01-10",
            "2024-01-11",
            "2024-01-12",
            "2024-01-13",
            "2024-01-14",
            "2024-01-15",
            "2024-01-16",
            "2024-01-17",
            "2024-01-18",
            "2024-01-19",
            "2024-01-20",
            "2024-01-21",
            "2024-01-22",
            "2024-01-23",
            "2024-01-24",
            "2024-01-25",
            "2024-01-26",
            "2024-01-27",
            "2024-01-28",
            "2024-01-29",
            "2024-01-30",
            "2024-01-31",
            "2024-02-01",
            "2024-02-02",
            "2024-02-03",
            "2024-02-04",
            "2024-02-05",
            "2024-02-06",
            "2024-02-07",
            "2024-02-08",
            "2024-02-09",
            "2024-02-10",
            "2024-02-11",
            "2024-02-12",
            "2024-02-13",
            "2024-02-14",
            "2024-02-15",
            "2024-02-16",
            "2024-02-17",
            "2024-02-18",
            "2024-02-19",
            "2024-02-20",
            "2024-02-21",
            "2024-02-22",
            "2024-02-23",
            "2024-02-24",
            "2024-02-25",
            "2024-02-26",
            "2024-02-27",
            "2024-02-28",
            "2024-02-29",
            "2024-03-01",
            "2024-03-02",
            "2024-03-03",
            "2024-03-04",
            "2024-03-05",
            "2024-03-06",
            "2024-03-07",
            "2024-03-08",
            "2024-03-09",
            "2024-03-10",
            "2024-03-11",
            "2024-03-12",
            "2024-03-13",
            "2024-03-14",
            "2024-03-15",
            "2024-03-16",
            "2024-03-17",
            "2024-03-18",
            "2024-03-19",
            "2024-03-20",
            "2024-03-21",
            "2024-03-22",
            "2024-03-23",
            "2024-03-24",
            "2024-03-25",
            "2024-03-26",
            "2024-03-27",
            "2024-03-28",
            "2024-03-29",
            "2024-03-30",
            "2024-03-31",
            "2024-04-01",
            "2024-04-02",
            "2024-04-03",
            "2024-04-04",
            "2024-04-05",
            "2024-04-06",
            "2024-04-07",
            "2024-04-08",
            "2024-04-09",
            "2024-04-10",
            "2024-04-11",
            "2024-04-12",
            "2024-04-13",
            "2024-04-14",
            "2024-04-15",
            "2024-04-16",
            "2024-04-17",
            "2024-04-18",
            "2024-04-19",
            "2024-04-20",
            "2024-04-21",
            "2024-04-22",
            "2024-04-23",
            "2024-04-24",
            "2024-04-25",
            "2024-04-26",
            "2024-04-27",
            "2024-04-28",
            "2024-04-29",
            "2024-04-30",
            "2024-05-01",
            "2024-05-02",
            "2024-05-03",
            "2024-05-04",
            "2024-05-05",
            "2024-05-06",
            "2024-05-07",
            "2024-05-08",
            "2024-05-09",
            "2024-05-10",
            "2024-05-11",
            "2024-05-12",
            "2024-05-13",
            "2024-05-14",
            "2024-05-15",
            "2024-05-16",
            "2024-05-17",
            "2024-05-18",
            "2024-05-19",
            "2024-05-20",
            "2024-05-21",
            "2024-05-22",
            "2024-05-23",
            "2024-05-24",
            "2024-05-25",
            "2024-05-26",
            "2024-05-27",
            "2024-05-28",
            "2024-05-29",
            "2024-05-30",
            "2024-05-31",
            "2024-06-01",
            "2024-06-02",
            "2024-06-03",
            "2024-06-04",
            "2024-06-05",
            "2024-06-06",
            "2024-06-07",
            "2024-06-08",
            "2024-06-09",
            "2024-06-10",
            "2024-06-11",
            "2024-06-12",
            "2024-06-13",
            "2024-06-14",
            "2024-06-15",
            "2024-06-16",
            "2024-06-17",
            "2024-06-18",
            "2024-06-19",
            "2024-06-20",
            "2024-06-21",
            "2024-06-22",
            "2024-06-23",
            "2024-06-24",
            "2024-06-25",
            "2024-06-26",
            "2024-06-27",
            "2024-06-28",
            "2024-06-29",
            "2024-06-30",
            "2024-07-01",
            "2024-07-02",
            "2024-07-03",
            "2024-07-04",
            "2024-07-05",
            "2024-07-06",
            "2024-07-07",
            "2024-07-08",
            "2024-07-09",
            "2024-07-10",
            "2024-07-11",
            "2024-07-12",
            "2024-07-13",
            "2024-07-14",
            "2024-07-15",
            "2024-07-16",
            "2024-07-17",
            "2024-07-18",
            "2024-07-19",
            "2024-07-20",
            "2024-07-21",
            "2024-07-22",
            "2024-07-23",
            "2024-07-24",
            "2024-07-25",
            "2024-07-26",
            "2024-07-27",
            "2024-07-28",
            "2024-07-29",
            "2024-07-30",
            "2024-07-31",
            "2024-08-01",
            "2024-08-02",
            "2024-08-03",
            "2024-08-04",
            "2024-08-05",
            "2024-08-06",
            "2024-08-07",
            "2024-08-08",
            "2024-08-09",
            "2024-08-10",
            "2024-08-11",
            "2024-08-12",
            "2024-08-13",
            "2024-08-14",
            "2024-08-15",
            "2024-08-16",
            "2024-08-17",
            "2024-08-18",
            "2024-08-19",
            "2024-08-20",
            "2024-08-21",
            "2024-08-22",
            "2024-08-23",
            "2024-08-24",
            "2024-08-25",
            "2024-08-26",
            "2024-08-27",
            "2024-08-28",
            "2024-08-29",
            "2024-08-30",
            "2024-08-31",
            "2024-09-01",
            "2024-09-02",
            "2024-09-03",
            "2024-09-04",
            "2024-09-05",
            "2024-09-06",
            "2024-09-07",
            "2024-09-08",
            "2024-09-09",
            "2024-09-10",
            "2024-09-11",
            "2024-09-12",
            "2024-09-13",
            "2024-09-14",
            "2024-09-15",
            "2024-09-16",
            "2024-09-17",
            "2024-09-18",
            "2024-09-19",
            "2024-09-20",
            "2024-09-21",
            "2024-09-22",
            "2024-09-23",
            "2024-09-24",
            "2024-09-25",
            "2024-09-26",
            "2024-09-27",
            "2024-09-28",
            "2024-09-29",
            "2024-09-30",
            "2024-10-01",
            "2024-10-02",
            "2024-10-03",
            "2024-10-04",
            "2024-10-05",
            "2024-10-06",
            "2024-10-07",
            "2024-10-08",
            "2024-10-09",
            "2024-10-10",
            "2024-10-11",
            "2024-10-12",
            "2024-10-13",
            "2024-10-14",
            "2024-10-15",
            "2024-10-16",
            "2024-10-17",
            "2024-10-18",
            "2024-10-19",
            "2024-10-20",
            "2024-10-21",
            "2024-10-22",
            "2024-10-23",
            "2024-10-24",
            "2024-10-25",
            "2024-10-26",
            "2024-10-27",
            "2024-10-28",
            "2024-10-29",
            "2024-10-30",
            "2024-10-31",
            "2024-11-01",
            "2024-11-02",
            "2024-11-03",
            "2024-11-04",
            "2024-11-05",
            "2024-11-06",
            "2024-11-07",
            "2024-11-08",
            "2024-11-09",
            "2024-11-10",
            "2024-11-11",
            "2024-11-12",
            "2024-11-13",
            "2024-11-14",
            "2024-11-15",
            "2024-11-16",
            "2024-11-17",
            "2024-11-18",
            "2024-11-19",
            "2024-11-20",
            "2024-11-21",
            "2024-11-22",
            "2024-11-23",
            "2024-11-24",
            "2024-11-25",
            "2024-11-26",
            "2024-11-27",
            "2024-11-28",
            "2024-11-29",
            "2024-11-30",
            "2024-12-01",
            "2024-12-02",
            "2024-12-03",
            "2024-12-04",
            "2024-12-05",
            "2024-12-06",
            "2024-12-07",
            "2024-12-08",
            "2024-12-09",
            "2024-12-10",
            "2024-12-11",
            "2024-12-12",
            "2024-12-13",
            "2024-12-14",
            "2024-12-15",
            "2024-12-16",
            "2024-12-17",
            "2024-12-18",
            "2024-12-19",
            "2024-12-20",
            "2024-12-21",
            "2024-12-22",
            "2024-12-23",
            "2024-12-24",
            "2024-12-25",
            "2024-12-26",
            "2024-12-27",
            "2024-12-28",
            "2024-12-29",
            "2024-12-30",
            "2024-12-31",
            "2025-01-01",
            "2025-01-02",
            "2025-01-03",
            "2025-01-04",
            "2025-01-05",
            "2025-01-06",
            "2025-01-07",
            "2025-01-08",
            "2025-01-09",
            "2025-01-10",
            "2025-01-11",
            "2025-01-12",
            "2025-01-13",
            "2025-01-14",
            "2025-01-15",
            "2025-01-16",
            "2025-01-17",
            "2025-01-18",
            "2025-01-19",
            "2025-01-20",
            "2025-01-21",
            "2025-01-22",
            "2025-01-23",
            "2025-01-24",
            "2025-01-25",
            "2025-01-26",
            "2025-01-27",
            "2025-01-28",
            "2025-01-29",
            "2025-01-30",
            "2025-01-31",
            "2025-02-01",
            "2025-02-02",
            "2025-02-03",
            "2025-02-04",
            "2025-02-05",
            "2025-02-06",
            "2025-02-07",
            "2025-02-08",
            "2025-02-09",
            "2025-02-10",
            "2025-02-11",
            "2025-02-12",
            "2025-02-13",
            "2025-02-14",
            "2025-02-15",
            "2025-02-16",
            "2025-02-17",
            "2025-02-18",
            "2025-02-19",
            "2025-02-20",
            "2025-02-21",
            "2025-02-22",
            "2025-02-23",
            "2025-02-24",
            "2025-02-25",
            "2025-02-26",
            "2025-02-27",
            "2025-02-28",
            "2025-03-01",
            "2025-03-02",
            "2025-03-03",
            "2025-03-04",
            "2025-03-05",
            "2025-03-06",
            "2025-03-07",
            "2025-03-08",
            "2025-03-09",
            "2025-03-10",
            "2025-03-11",
            "2025-03-12",
            "2025-03-13",
            "2025-03-14",
            "2025-03-15",
            "2025-03-16",
            "2025-03-17",
            "2025-03-18",
            "2025-03-19",
            "2025-03-20",
            "2025-03-21",
            "2025-03-22",
            "2025-03-23",
            "2025-03-24",
            "2025-03-25",
            "2025-03-26",
            "2025-03-27",
            "2025-03-28",
            "2025-03-29",
            "2025-03-30",
            "2025-03-31",
            "2025-04-01",
            "2025-04-02",
            "2025-04-03",
            "2025-04-04",
            "2025-04-05",
            "2025-04-06",
            "2025-04-07",
            "2025-04-08",
            "2025-04-09",
            "2025-04-10",
            "2025-04-11",
            "2025-04-12",
            "2025-04-13",
            "2025-04-14",
            "2025-04-15",
            "2025-04-16",
            "2025-04-17",
            "2025-04-18",
            "2025-04-19",
            "2025-04-20",
            "2025-04-21",
            "2025-04-22",
            "2025-04-23",
            "2025-04-24",
            "2025-04-25",
            "2025-04-26",
            "2025-04-27",
            "2025-04-28",
            "2025-04-29",
            "2025-04-30",
            "2025-05-01",
            "2025-05-02",
            "2025-05-03",
            "2025-05-04",
            "2025-05-05",
            "2025-05-06",
            "2025-05-07",
            "2025-05-08",
            "2025-05-09",
            "2025-05-10",
            "2025-05-11",
            "2025-05-12",
            "2025-05-13",
            "2025-05-14",
            "2025-05-15",
            "2025-05-16",
            "2025-05-17",
            "2025-05-18",
            "2025-05-19",
            "2025-05-20",
            "2025-05-21",
            "2025-05-22",
            "2025-05-23",
            "2025-05-24",
            "2025-05-25",
            "2025-05-26",
            "2025-05-27",
            "2025-05-28",
            "2025-05-29",
            "2025-05-30",
            "2025-05-31",
            "2025-06-01",
            "2025-06-02",
            "2025-06-03",
            "2025-06-04",
            "2025-06-05",
            "2025-06-06",
            "2025-06-07",
            "2025-06-08",
            "2025-06-09",
            "2025-06-10",
            "2025-06-11",
            "2025-06-12",
            "2025-06-13",
            "2025-06-14",
            "2025-06-15",
            "2025-06-16",
            "2025-06-17",
            "2025-06-18",
            "2025-06-19",
            "2025-06-20",
            "2025-06-21",
            "2025-06-22",
            "2025-06-23",
            "2025-06-24",
            "2025-06-25",
            "2025-06-26",
            "2025-06-27",
            "2025-06-28",
            "2025-06-29",
            "2025-06-30",
            "2025-07-01",
            "2025-07-02",
            "2025-07-03",
            "2025-07-04",
            "2025-07-05",
            "2025-07-06",
            "2025-07-07",
            "2025-07-08",
            "2025-07-09",
            "2025-07-10",
            "2025-07-11",
            "2025-07-12",
            "2025-07-13",
            "2025-07-14",
            "2025-07-15",
            "2025-07-16",
            "2025-07-17",
            "2025-07-18",
            "2025-07-19",
            "2025-07-20",
            "2025-07-21",
            "2025-07-22",
            "2025-07-23",
            "2025-07-24",
            "2025-07-25",
            "2025-07-26",
            "2025-07-27",
            "2025-07-28",
            "2025-07-29",
            "2025-07-30",
            "2025-07-31",
            "2025-08-01",
            "2025-08-02",
            "2025-08-03",
            "2025-08-04",
            "2025-08-05",
            "2025-08-06",
            "2025-08-07",
            "2025-08-08",
            "2025-08-09",
            "2025-08-10",
            "2025-08-11",
            "2025-08-12",
            "2025-08-13",
            "2025-08-14",
            "2025-08-15",
            "2025-08-16",
            "2025-08-17",
            "2025-08-18",
            "2025-08-19",
            "2025-08-20",
            "2025-08-21",
            "2025-08-22",
            "2025-08-23",
            "2025-08-24",
            "2025-08-25",
            "2025-08-26",
            "2025-08-27",
            "2025-08-28",
            "2025-08-29",
            "2025-08-30",
            "2025-08-31",
            "2025-09-01",
            "2025-09-02",
            "2025-09-03",
            "2025-09-04",
            "2025-09-05",
            "2025-09-06",
            "2025-09-07",
            "2025-09-08",
            "2025-09-09",
            "2025-09-10",
            "2025-09-11",
            "2025-09-12",
            "2025-09-13",
            "2025-09-14",
            "2025-09-15",
            "2025-09-16",
            "2025-09-17",
            "2025-09-18",
            "2025-09-19",
            "2025-09-20",
            "2025-09-21",
            "2025-09-22",
            "2025-09-23",
            "2025-09-24",
            "2025-09-25",
            "2025-09-26",
            "2025-09-27",
            "2025-09-28",
            "2025-09-29",
            "2025-09-30",
            "2025-10-01",
            "2025-10-02",
            "2025-10-03",
            "2025-10-04",
            "2025-10-05",
            "2025-10-06",
            "2025-10-07",
            "2025-10-08",
            "2025-10-09",
            "2025-10-10",
            "2025-10-11",
            "2025-10-12",
            "2025-10-13",
            "2025-10-14",
            "2025-10-15",
            "2025-10-16",
            "2025-10-17",
            "2025-10-18",
            "2025-10-19",
            "2025-10-20",
            "2025-10-21",
            "2025-10-22",
            "2025-10-23",
            "2025-10-24",
            "2025-10-25",
            "2025-10-26",
            "2025-10-27",
            "2025-10-28",
            "2025-10-29",
            "2025-10-30",
            "2025-10-31",
            "2025-11-01",
            "2025-11-02",
            "2025-11-03",
            "2025-11-04",
            "2025-11-05",
            "2025-11-06",
            "2025-11-07",
            "2025-11-08",
            "2025-11-09",
            "2025-11-10",
            "2025-11-11",
            "2025-11-12",
            "2025-11-13",
            "2025-11-14",
            "2025-11-15",
            "2025-11-16",
            "2025-11-17",
            "2025-11-18",
            "2025-11-19",
            "2025-11-20",
            "2025-11-21",
            "2025-11-22",
            "2025-11-23",
            "2025-11-24",
            "2025-11-25",
            "2025-11-26",
            "2025-11-27",
            "2025-11-28",
            "2025-11-29",
            "2025-11-30",
            "2025-12-01",
            "2025-12-02",
            "2025-12-03",
            "2025-12-04",
            "2025-12-05",
            "2025-12-06",
            "2025-12-07",
            "2025-12-08",
            "2025-12-09",
            "2025-12-10",
            "2025-12-11",
            "2025-12-12",
            "2025-12-13",
            "2025-12-14",
            "2025-12-15",
            "2025-12-16",
            "2025-12-17",
            "2025-12-18",
            "2025-12-19",
            "2025-12-20",
            "2025-12-21",
            "2025-12-22",
            "2025-12-23",
            "2025-12-24",
            "2025-12-25",
            "2025-12-26",
            "2025-12-27",
            "2025-12-28",
            "2025-12-29",
            "2025-12-30",
            "2025-12-31",
            "2026-01-01",
            "2026-01-02",
            "2026-01-03",
            "2026-01-04",
            "2026-01-05",
            "2026-01-06",
            "2026-01-07",
            "2026-01-08",
            "2026-01-09",
            "2026-01-10",
            "2026-01-11",
            "2026-01-12",
            "2026-01-13",
            "2026-01-14",
            "2026-01-15",
            "2026-01-16",
            "2026-01-17",
            "2026-01-18",
            "2026-01-19",
            "2026-01-20",
            "2026-01-21",
            "2026-01-22",
            "2026-01-23",
            "2026-01-24",
            "2026-01-25",
            "2026-01-26",
            "2026-01-27",
            "2026-01-28",
            "2026-01-29",
            "2026-01-30",
            "2026-01-31"
        ],
        "documents": [],
        "driveType": "chaffeured",
        "vehicle": {
            "id": "010ef07f-c152-4022-a6a7-a42f5d922ec4",
            "driverId": "985f9bd0-43c1-4372-a8e8-9e72b59803c2",
            "vehicleMode": "Road",
            "vehicleMakeId": "c53526b8-6613-4924-97a0-17f5f7af03ba",
            "vehicleModelId": "20bab933-0c5a-4533-8dd1-34943cb9174b",
            "vehicleColorId": "c809636a-eb49-4839-bd07-7cedfcd1dad3",
            "vehicleYear": "2023",
            "vehicleCategory": "cars_and_sedans",
            "vehicleSittingCapacity": 6,
            "vehicleFuelType": null,
            "vehicleGuideLine": "The vehicle is a new latest Lexus RX 350H 2023 with very comfortable seats and interior. The car is fully equipped with various amenities including Bluetooth connectivity, charging port for riders and full option AC.",
            "vehicleDoors": 0,
            "vehicleHasAirCondition": false,
            "smokingAllowed": false,
            "vehiclePlateNumber": "WA002LSR",
            "vehicleImages": [
                "https://treepz.s3.us-east-1.amazonaws.com/1681809641499-img_0719.jpg",
                "https://treepz.s3.us-east-1.amazonaws.com/1681809641500-img_0720.jpg",
                "https://treepz.s3.us-east-1.amazonaws.com/1681809641505-img_0721.jpg",
                "https://treepz.s3.us-east-1.amazonaws.com/1681809641510-img_0722.jpg"
            ],
            "createdAt": "2023-04-18T09:19:55.464Z",
            "updatedAt": "2023-04-18T09:20:41.655Z",
            "companyId": null,
            "transportPartnerAdminId": null,
            "enterpriseAdminId": null,
            "vehicleLocation": "Surulere, Ikeja, Lagos, Nigeria",
            "vehicleLocationDetails": {
                "city": "",
                "type": "Point",
                "state": "LA",
                "street": "",
                "country": "NG",
                "zipcode": "",
                "coordinates": [
                    3.358,
                    6.48932
                ],
                "formattedAddress": ", , LA, NG"
            },
            "vehicleMake": {
                "id": "c53526b8-6613-4924-97a0-17f5f7af03ba",
                "name": "LEXUS",
                "isDisabled": false,
                "createdAt": "2023-03-10T11:44:22.396Z",
                "weight": 0,
                "updatedAt": "2023-03-10T11:44:22.396Z",
                "vehicleCategories": [
                    "cars_and_sedans",
                    "trucks",
                    "suvs",
                    "mini_vans",
                    "bus",
                    "luxury_vehicle",
                    "vehicle"
                ]
            },
            "vehicleModel": {
                "id": "20bab933-0c5a-4533-8dd1-34943cb9174b",
                "name": "LS",
                "isDisabled": false,
                "iconUrl": null,
                "vehicleMakeId": "c53526b8-6613-4924-97a0-17f5f7af03ba",
                "weight": 0,
                "vehicleCategory": "cars_and_sedans",
                "createdAt": "2023-03-10T16:48:41.583Z",
                "updatedAt": "2023-03-10T16:48:41.583Z"
            },
            "vehicleColor": {
                "id": "c809636a-eb49-4839-bd07-7cedfcd1dad3",
                "color": "Red",
                "hexCode": "#FF0000",
                "isDisabled": false,
                "createdAt": "2023-02-06T15:54:27.753Z",
                "updatedAt": "2023-02-06T15:54:27.753Z"
            },
            "vehicleAmenities": [
                {
                    "id": "b77f3eff-0810-4352-94e2-25c5b823e718",
                    "name": "Bluetooth",
                    "isDisabled": false,
                    "iconUrl": "https://treepz.s3.us-east-1.amazonaws.com/1679089020566-icon-2.png",
                    "createdAt": "2023-02-06T15:53:22.885Z",
                    "updatedAt": "2023-03-17T22:08:09.224Z"
                },
                {
                    "id": "81697304-bd81-41fc-8d0b-239516e0f218",
                    "name": "Bin",
                    "isDisabled": false,
                    "iconUrl": "https://treepz.s3.us-east-1.amazonaws.com/1679090918352-icon.png",
                    "createdAt": "2023-03-17T22:08:38.446Z",
                    "updatedAt": "2023-03-17T22:08:38.446Z"
                },
                {
                    "id": "41f70b50-a5bb-4c5c-9cd1-2a02ef5b80d7",
                    "name": "Sunroof",
                    "isDisabled": false,
                    "iconUrl": "https://treepz.s3.us-east-1.amazonaws.com/1679090968660-icon-3.png",
                    "createdAt": "2023-03-17T22:09:28.718Z",
                    "updatedAt": "2023-03-17T22:09:28.718Z"
                },
                {
                    "id": "ad74a198-a1fd-4bad-9c9f-448f5602764d",
                    "name": "Pets friendly",
                    "isDisabled": false,
                    "iconUrl": "https://treepz.s3.us-east-1.amazonaws.com/1679091004122-pets%201.png",
                    "createdAt": "2023-03-17T22:10:04.173Z",
                    "updatedAt": "2023-03-17T22:10:04.173Z"
                }
            ]
        }
    },
    {
        "id": "155fffd1-4866-482d-a794-b10a66c1cec7",
        "driverId": "4fbb889b-75ca-48c7-b6d9-58a51bdedbab",
        "isAvailable": true,
        "isBooked": false,
        "airportTransfer": false,
        "interCity": false,
        "rentalBooking": true,
        "vehicleId": "26c5d129-99e8-41f1-a8e6-e6500fe10356",
        "createdAt": "2023-04-25T18:07:05.996Z",
        "updatedAt": "2023-11-27T03:30:00.148Z",
        "locationKeywords": [
            "lekki",
            "lagos",
            "nigeria"
        ],
        "longitude": 3.38804,
        "latitude": 6.45485,
        "tripCoverageRange": null,
        "tripType": "hired",
        "couponId": null,
        "description": null,
        "discountId": null,
        "pricePerDay": 84000,
        "pricePerHour": 7000,
        "pricePerMonth": 2520000,
        "pricePerWeek": 588000,
        "halfDayPrice": 42000,
        "airportTransferPrice": 0,
        "country": "NIGERIA",
        "currency": "NGN",
        "currencySymbol": "₦",
        "timezone": "Africa/Lagos",
        "promotionId": null,
        "promotionExpiry": null,
        "promotionActive": false,
        "availableTimes": [
            "2023-11-27",
            "2023-11-28"
        ],
        "documents": [],
        "driveType": "chaffeured",
        "vehicle": {
            "id": "26c5d129-99e8-41f1-a8e6-e6500fe10356",
            "driverId": "4fbb889b-75ca-48c7-b6d9-58a51bdedbab",
            "vehicleMode": "Road",
            "vehicleMakeId": "97b05890-9c29-4419-a1cc-cae326fd3f84",
            "vehicleModelId": "04832b3e-39d0-411d-8a23-84f14665fb6c",
            "vehicleColorId": "5efb5f0e-3109-4cec-b374-5bc678e00d9a",
            "vehicleYear": "2020",
            "vehicleCategory": "suvs",
            "vehicleSittingCapacity": 5,
            "vehicleFuelType": null,
            "vehicleGuideLine": "Nice",
            "vehicleDoors": 0,
            "vehicleHasAirCondition": false,
            "smokingAllowed": false,
            "vehiclePlateNumber": "NGL 556 KL",
            "vehicleImages": [
                "https://treepz.s3.us-east-1.amazonaws.com/1682445818616-55e45b85-eeeb-4943-871c-05d26e8d51b2.jpg",
                "https://treepz.s3.us-east-1.amazonaws.com/1682445818617-f344e79f-f6c6-419e-aa43-9076edadc7ab.jpg"
            ],
            "createdAt": "2023-04-25T18:01:57.174Z",
            "updatedAt": "2023-04-25T18:03:38.727Z",
            "companyId": null,
            "transportPartnerAdminId": null,
            "enterpriseAdminId": null,
            "vehicleLocation": "Lekki, Lagos, Nigeria",
            "vehicleLocationDetails": {
                "city": "Lagos",
                "type": "Point",
                "state": "LA",
                "street": "Imam Ligali St",
                "country": "NG",
                "zipcode": "",
                "coordinates": [
                    3.38804,
                    6.45485
                ],
                "formattedAddress": "Imam Ligali St, Lagos, LA, NG"
            },
            "vehicleMake": {
                "id": "97b05890-9c29-4419-a1cc-cae326fd3f84",
                "name": "TOYOTA",
                "isDisabled": false,
                "createdAt": "2023-03-10T11:44:22.396Z",
                "weight": 100,
                "updatedAt": "2023-04-11T13:35:55.852Z",
                "vehicleCategories": [
                    "cars_and_sedans",
                    "trucks",
                    "suvs",
                    "mini_vans",
                    "bus",
                    "luxury_vehicle",
                    "vehicle"
                ]
            },
            "vehicleModel": {
                "id": "04832b3e-39d0-411d-8a23-84f14665fb6c",
                "name": "Sienna",
                "isDisabled": false,
                "iconUrl": null,
                "vehicleMakeId": "97b05890-9c29-4419-a1cc-cae326fd3f84",
                "weight": 0,
                "vehicleCategory": "suvs",
                "createdAt": "2023-03-15T14:47:31.704Z",
                "updatedAt": "2023-03-15T14:47:31.704Z"
            },
            "vehicleColor": {
                "id": "5efb5f0e-3109-4cec-b374-5bc678e00d9a",
                "color": "Chrome",
                "hexCode": "#5870a1 ",
                "isDisabled": false,
                "createdAt": "2023-03-15T20:50:36.264Z",
                "updatedAt": "2023-03-15T20:50:36.264Z"
            },
            "vehicleAmenities": [
                {
                    "id": "b77f3eff-0810-4352-94e2-25c5b823e718",
                    "name": "Bluetooth",
                    "isDisabled": false,
                    "iconUrl": "https://treepz.s3.us-east-1.amazonaws.com/1679089020566-icon-2.png",
                    "createdAt": "2023-02-06T15:53:22.885Z",
                    "updatedAt": "2023-03-17T22:08:09.224Z"
                },
                {
                    "id": "81697304-bd81-41fc-8d0b-239516e0f218",
                    "name": "Bin",
                    "isDisabled": false,
                    "iconUrl": "https://treepz.s3.us-east-1.amazonaws.com/1679090918352-icon.png",
                    "createdAt": "2023-03-17T22:08:38.446Z",
                    "updatedAt": "2023-03-17T22:08:38.446Z"
                },
                {
                    "id": "41f70b50-a5bb-4c5c-9cd1-2a02ef5b80d7",
                    "name": "Sunroof",
                    "isDisabled": false,
                    "iconUrl": "https://treepz.s3.us-east-1.amazonaws.com/1679090968660-icon-3.png",
                    "createdAt": "2023-03-17T22:09:28.718Z",
                    "updatedAt": "2023-03-17T22:09:28.718Z"
                },
                {
                    "id": "ad74a198-a1fd-4bad-9c9f-448f5602764d",
                    "name": "Pets friendly",
                    "isDisabled": false,
                    "iconUrl": "https://treepz.s3.us-east-1.amazonaws.com/1679091004122-pets%201.png",
                    "createdAt": "2023-03-17T22:10:04.173Z",
                    "updatedAt": "2023-03-17T22:10:04.173Z"
                }
            ]
        }
    },
    {
        "id": "4c431b1b-7885-4790-bb39-1d8b9336cebd",
        "driverId": "4fbb889b-75ca-48c7-b6d9-58a51bdedbab",
        "isAvailable": true,
        "isBooked": false,
        "airportTransfer": false,
        "interCity": false,
        "rentalBooking": true,
        "vehicleId": "4c1f7dde-fc7f-4f09-92f4-cbfbad0eae32",
        "createdAt": "2023-04-01T14:43:08.661Z",
        "updatedAt": "2023-11-27T03:30:00.154Z",
        "locationKeywords": [
            "lagos",
            "nigeria"
        ],
        "longitude": 3.3792057,
        "latitude": 6.5243793,
        "tripCoverageRange": null,
        "tripType": "hired",
        "couponId": null,
        "description": null,
        "discountId": null,
        "pricePerDay": 60000,
        "pricePerHour": 5000,
        "pricePerMonth": 1800000,
        "pricePerWeek": 420000,
        "halfDayPrice": 30000,
        "airportTransferPrice": 0,
        "country": "NIGERIA",
        "currency": "NGN",
        "currencySymbol": "₦",
        "timezone": "Africa/Lagos",
        "promotionId": null,
        "promotionExpiry": null,
        "promotionActive": false,
        "availableTimes": [
            "2023-11-27",
            "2023-11-28"
        ],
        "documents": [],
        "driveType": "chaffeured",
        "vehicle": {
            "id": "4c1f7dde-fc7f-4f09-92f4-cbfbad0eae32",
            "driverId": "4fbb889b-75ca-48c7-b6d9-58a51bdedbab",
            "vehicleMode": "Road",
            "vehicleMakeId": "97b05890-9c29-4419-a1cc-cae326fd3f84",
            "vehicleModelId": "470d636d-2aae-43f5-b292-ada79efa7393",
            "vehicleColorId": "6cb52de7-d005-4eb0-ac3d-ac503cb4a882",
            "vehicleYear": "2014",
            "vehicleCategory": "bus",
            "vehicleSittingCapacity": 15,
            "vehicleFuelType": null,
            "vehicleGuideLine": "Comfortable brand new bus for your rental pleasure ",
            "vehicleDoors": 0,
            "vehicleHasAirCondition": false,
            "smokingAllowed": true,
            "vehiclePlateNumber": "HB 559 JJ",
            "vehicleImages": [
                "https://treepz.s3.us-east-1.amazonaws.com/1680360103774-img_6828.jpg",
                "https://treepz.s3.us-east-1.amazonaws.com/1680360103775-img_6831.jpg",
                "https://treepz.s3.us-east-1.amazonaws.com/1680360103775-img_6830.jpg",
                "https://treepz.s3.us-east-1.amazonaws.com/1680360103786-img_6829.jpg",
                "https://treepz.s3.us-east-1.amazonaws.com/1687304342555-9000e2c9-b4d7-4b68-b850-c8206596d221.jpeg"
            ],
            "createdAt": "2023-04-01T14:35:42.490Z",
            "updatedAt": "2023-06-20T23:39:02.666Z",
            "companyId": null,
            "transportPartnerAdminId": null,
            "enterpriseAdminId": null,
            "vehicleLocation": "Lagos, Nigeria",
            "vehicleLocationDetails": {
                "city": "Lagos",
                "type": "Point",
                "country": "NG",
                "coordinates": [
                    3.3792057,
                    6.5243793
                ],
                "formattedAddress": "Lagos, Nigeria"
            },
            "vehicleMake": {
                "id": "97b05890-9c29-4419-a1cc-cae326fd3f84",
                "name": "TOYOTA",
                "isDisabled": false,
                "createdAt": "2023-03-10T11:44:22.396Z",
                "weight": 100,
                "updatedAt": "2023-04-11T13:35:55.852Z",
                "vehicleCategories": [
                    "cars_and_sedans",
                    "trucks",
                    "suvs",
                    "mini_vans",
                    "bus",
                    "luxury_vehicle",
                    "vehicle"
                ]
            },
            "vehicleModel": {
                "id": "470d636d-2aae-43f5-b292-ada79efa7393",
                "name": "Hiace",
                "isDisabled": false,
                "iconUrl": null,
                "vehicleMakeId": "97b05890-9c29-4419-a1cc-cae326fd3f84",
                "weight": 0,
                "vehicleCategory": "bus",
                "createdAt": "2023-04-01T08:00:42.019Z",
                "updatedAt": "2023-04-01T08:00:42.019Z"
            },
            "vehicleColor": {
                "id": "6cb52de7-d005-4eb0-ac3d-ac503cb4a882",
                "color": "White",
                "hexCode": "#FFFFFF",
                "isDisabled": false,
                "createdAt": "2023-02-06T19:24:59.933Z",
                "updatedAt": "2023-02-06T19:24:59.933Z"
            },
            "vehicleAmenities": [
                {
                    "id": "b77f3eff-0810-4352-94e2-25c5b823e718",
                    "name": "Bluetooth",
                    "isDisabled": false,
                    "iconUrl": "https://treepz.s3.us-east-1.amazonaws.com/1679089020566-icon-2.png",
                    "createdAt": "2023-02-06T15:53:22.885Z",
                    "updatedAt": "2023-03-17T22:08:09.224Z"
                },
                {
                    "id": "81697304-bd81-41fc-8d0b-239516e0f218",
                    "name": "Bin",
                    "isDisabled": false,
                    "iconUrl": "https://treepz.s3.us-east-1.amazonaws.com/1679090918352-icon.png",
                    "createdAt": "2023-03-17T22:08:38.446Z",
                    "updatedAt": "2023-03-17T22:08:38.446Z"
                },
                {
                    "id": "41f70b50-a5bb-4c5c-9cd1-2a02ef5b80d7",
                    "name": "Sunroof",
                    "isDisabled": false,
                    "iconUrl": "https://treepz.s3.us-east-1.amazonaws.com/1679090968660-icon-3.png",
                    "createdAt": "2023-03-17T22:09:28.718Z",
                    "updatedAt": "2023-03-17T22:09:28.718Z"
                }
            ]
        }
    },
    {
        "id": "31604df1-3fa2-48a0-80e4-37f35b62fb30",
        "driverId": "985f9bd0-43c1-4372-a8e8-9e72b59803c2",
        "isAvailable": true,
        "isBooked": false,
        "airportTransfer": false,
        "interCity": false,
        "rentalBooking": true,
        "vehicleId": "74744992-6133-4fd2-b553-5e093f39983a",
        "createdAt": "2023-04-17T13:17:39.329Z",
        "updatedAt": "2023-11-27T03:30:00.168Z",
        "locationKeywords": [
            "surulere",
            "ikeja",
            "lagos",
            "nigeria"
        ],
        "longitude": 3.3489671,
        "latitude": 6.4926317,
        "tripCoverageRange": null,
        "tripType": "hired",
        "couponId": null,
        "description": null,
        "discountId": null,
        "pricePerDay": 30000,
        "pricePerHour": 1250,
        "pricePerMonth": 840000,
        "pricePerWeek": 210000,
        "halfDayPrice": 15000,
        "airportTransferPrice": 0,
        "country": "NIGERIA",
        "currency": "NGN",
        "currencySymbol": "₦",
        "timezone": "Africa/Lagos",
        "promotionId": "d142e49d-bc3f-4948-ab97-ce15929c4be9",
        "promotionExpiry": "2023-04-24T13:19:14.045Z",
        "promotionActive": false,
        "availableTimes": [
            "2023-11-27",
            "2023-11-28",
            "2023-11-29",
            "2023-11-30",
            "2023-12-01",
            "2023-12-02",
            "2023-12-03",
            "2023-12-04",
            "2023-12-05",
            "2023-12-06",
            "2023-12-07",
            "2023-12-08",
            "2023-12-09",
            "2023-12-10",
            "2023-12-11",
            "2023-12-12",
            "2023-12-13",
            "2023-12-14",
            "2023-12-15",
            "2023-12-16",
            "2023-12-17",
            "2023-12-18",
            "2023-12-19",
            "2023-12-20",
            "2023-12-21",
            "2023-12-22",
            "2023-12-23",
            "2023-12-24",
            "2023-12-25",
            "2023-12-26",
            "2023-12-27",
            "2023-12-28",
            "2023-12-29",
            "2023-12-30",
            "2023-12-31",
            "2024-01-01",
            "2024-01-02",
            "2024-01-03",
            "2024-01-04",
            "2024-01-05",
            "2024-01-06",
            "2024-01-07",
            "2024-01-08",
            "2024-01-09",
            "2024-01-10",
            "2024-01-11",
            "2024-01-12",
            "2024-01-13",
            "2024-01-14",
            "2024-01-15",
            "2024-01-16",
            "2024-01-17",
            "2024-01-18",
            "2024-01-19",
            "2024-01-20",
            "2024-01-21",
            "2024-01-22",
            "2024-01-23",
            "2024-01-24",
            "2024-01-25",
            "2024-01-26",
            "2024-01-27",
            "2024-01-28",
            "2024-01-29",
            "2024-01-30",
            "2024-01-31",
            "2024-02-01",
            "2024-02-02",
            "2024-02-03",
            "2024-02-04",
            "2024-02-05",
            "2024-02-06",
            "2024-02-07",
            "2024-02-08",
            "2024-02-09",
            "2024-02-10",
            "2024-02-11",
            "2024-02-12",
            "2024-02-13",
            "2024-02-14",
            "2024-02-15",
            "2024-02-16",
            "2024-02-17",
            "2024-02-18",
            "2024-02-19",
            "2024-02-20",
            "2024-02-21",
            "2024-02-22",
            "2024-02-23",
            "2024-02-24",
            "2024-02-25",
            "2024-02-26",
            "2024-02-27",
            "2024-02-28",
            "2024-02-29",
            "2024-03-01",
            "2024-03-02",
            "2024-03-03",
            "2024-03-04",
            "2024-03-05",
            "2024-03-06",
            "2024-03-07",
            "2024-03-08",
            "2024-03-09",
            "2024-03-10",
            "2024-03-11",
            "2024-03-12",
            "2024-03-13",
            "2024-03-14",
            "2024-03-15",
            "2024-03-16",
            "2024-03-17",
            "2024-03-18",
            "2024-03-19",
            "2024-03-20",
            "2024-03-21",
            "2024-03-22",
            "2024-03-23",
            "2024-03-24",
            "2024-03-25",
            "2024-03-26",
            "2024-03-27",
            "2024-03-28",
            "2024-03-29",
            "2024-03-30",
            "2024-03-31",
            "2024-04-01",
            "2024-04-02",
            "2024-04-03",
            "2024-04-04",
            "2024-04-05",
            "2024-04-06",
            "2024-04-07",
            "2024-04-08",
            "2024-04-09",
            "2024-04-10",
            "2024-04-11",
            "2024-04-12",
            "2024-04-13",
            "2024-04-14",
            "2024-04-15",
            "2024-04-16",
            "2024-04-17",
            "2024-04-18",
            "2024-04-19",
            "2024-04-20",
            "2024-04-21",
            "2024-04-22",
            "2024-04-23",
            "2024-04-24",
            "2024-04-25",
            "2024-04-26",
            "2024-04-27",
            "2024-04-28",
            "2024-04-29",
            "2024-04-30",
            "2024-05-01",
            "2024-05-02",
            "2024-05-03",
            "2024-05-04",
            "2024-05-05",
            "2024-05-06",
            "2024-05-07",
            "2024-05-08",
            "2024-05-09",
            "2024-05-10",
            "2024-05-11",
            "2024-05-12",
            "2024-05-13",
            "2024-05-14",
            "2024-05-15",
            "2024-05-16",
            "2024-05-17",
            "2024-05-18",
            "2024-05-19",
            "2024-05-20",
            "2024-05-21",
            "2024-05-22",
            "2024-05-23",
            "2024-05-24",
            "2024-05-25",
            "2024-05-26",
            "2024-05-27",
            "2024-05-28",
            "2024-05-29",
            "2024-05-30",
            "2024-05-31",
            "2024-06-01",
            "2024-06-02",
            "2024-06-03",
            "2024-06-04",
            "2024-06-05",
            "2024-06-06",
            "2024-06-07",
            "2024-06-08",
            "2024-06-09",
            "2024-06-10",
            "2024-06-11",
            "2024-06-12",
            "2024-06-13",
            "2024-06-14",
            "2024-06-15",
            "2024-06-16",
            "2024-06-17",
            "2024-06-18",
            "2024-06-19",
            "2024-06-20",
            "2024-06-21",
            "2024-06-22",
            "2024-06-23",
            "2024-06-24",
            "2024-06-25",
            "2024-06-26",
            "2024-06-27",
            "2024-06-28",
            "2024-06-29",
            "2024-06-30",
            "2024-07-01",
            "2024-07-02",
            "2024-07-03",
            "2024-07-04",
            "2024-07-05",
            "2024-07-06",
            "2024-07-07",
            "2024-07-08",
            "2024-07-09",
            "2024-07-10",
            "2024-07-11",
            "2024-07-12",
            "2024-07-13",
            "2024-07-14",
            "2024-07-15",
            "2024-07-16",
            "2024-07-17",
            "2024-07-18",
            "2024-07-19",
            "2024-07-20",
            "2024-07-21",
            "2024-07-22",
            "2024-07-23",
            "2024-07-24",
            "2024-07-25",
            "2024-07-26",
            "2024-07-27",
            "2024-07-28",
            "2024-07-29",
            "2024-07-30",
            "2024-07-31",
            "2024-08-01",
            "2024-08-02",
            "2024-08-03",
            "2024-08-04",
            "2024-08-05",
            "2024-08-06",
            "2024-08-07",
            "2024-08-08",
            "2024-08-09",
            "2024-08-10",
            "2024-08-11",
            "2024-08-12",
            "2024-08-13",
            "2024-08-14",
            "2024-08-15",
            "2024-08-16",
            "2024-08-17",
            "2024-08-18",
            "2024-08-19",
            "2024-08-20",
            "2024-08-21",
            "2024-08-22",
            "2024-08-23",
            "2024-08-24",
            "2024-08-25",
            "2024-08-26",
            "2024-08-27",
            "2024-08-28",
            "2024-08-29",
            "2024-08-30",
            "2024-08-31",
            "2024-09-01",
            "2024-09-02",
            "2024-09-03",
            "2024-09-04",
            "2024-09-05",
            "2024-09-06",
            "2024-09-07",
            "2024-09-08",
            "2024-09-09",
            "2024-09-10",
            "2024-09-11",
            "2024-09-12",
            "2024-09-13",
            "2024-09-14",
            "2024-09-15",
            "2024-09-16",
            "2024-09-17",
            "2024-09-18",
            "2024-09-19",
            "2024-09-20",
            "2024-09-21",
            "2024-09-22",
            "2024-09-23",
            "2024-09-24",
            "2024-09-25",
            "2024-09-26",
            "2024-09-27",
            "2024-09-28",
            "2024-09-29",
            "2024-09-30",
            "2024-10-01",
            "2024-10-02",
            "2024-10-03",
            "2024-10-04",
            "2024-10-05",
            "2024-10-06",
            "2024-10-07",
            "2024-10-08",
            "2024-10-09",
            "2024-10-10",
            "2024-10-11",
            "2024-10-12",
            "2024-10-13",
            "2024-10-14",
            "2024-10-15",
            "2024-10-16",
            "2024-10-17",
            "2024-10-18",
            "2024-10-19",
            "2024-10-20",
            "2024-10-21",
            "2024-10-22",
            "2024-10-23",
            "2024-10-24",
            "2024-10-25",
            "2024-10-26",
            "2024-10-27",
            "2024-10-28",
            "2024-10-29",
            "2024-10-30",
            "2024-10-31",
            "2024-11-01",
            "2024-11-02",
            "2024-11-03",
            "2024-11-04",
            "2024-11-05",
            "2024-11-06",
            "2024-11-07",
            "2024-11-08",
            "2024-11-09",
            "2024-11-10",
            "2024-11-11",
            "2024-11-12",
            "2024-11-13",
            "2024-11-14",
            "2024-11-15",
            "2024-11-16",
            "2024-11-17",
            "2024-11-18",
            "2024-11-19",
            "2024-11-20",
            "2024-11-21",
            "2024-11-22",
            "2024-11-23",
            "2024-11-24",
            "2024-11-25",
            "2024-11-26",
            "2024-11-27",
            "2024-11-28",
            "2024-11-29",
            "2024-11-30",
            "2024-12-01",
            "2024-12-02",
            "2024-12-03",
            "2024-12-04",
            "2024-12-05",
            "2024-12-06",
            "2024-12-07",
            "2024-12-08",
            "2024-12-09",
            "2024-12-10",
            "2024-12-11",
            "2024-12-12",
            "2024-12-13",
            "2024-12-14",
            "2024-12-15",
            "2024-12-16",
            "2024-12-17",
            "2024-12-18",
            "2024-12-19",
            "2024-12-20",
            "2024-12-21",
            "2024-12-22",
            "2024-12-23",
            "2024-12-24",
            "2024-12-25",
            "2024-12-26",
            "2024-12-27",
            "2024-12-28",
            "2024-12-29",
            "2024-12-30",
            "2024-12-31",
            "2025-01-01",
            "2025-01-02",
            "2025-01-03",
            "2025-01-04",
            "2025-01-05",
            "2025-01-06",
            "2025-01-07",
            "2025-01-08",
            "2025-01-09",
            "2025-01-10",
            "2025-01-11",
            "2025-01-12",
            "2025-01-13",
            "2025-01-14",
            "2025-01-15",
            "2025-01-16",
            "2025-01-17",
            "2025-01-18",
            "2025-01-19",
            "2025-01-20",
            "2025-01-21",
            "2025-01-22",
            "2025-01-23",
            "2025-01-24",
            "2025-01-25",
            "2025-01-26",
            "2025-01-27",
            "2025-01-28",
            "2025-01-29",
            "2025-01-30",
            "2025-01-31",
            "2025-02-01",
            "2025-02-02",
            "2025-02-03",
            "2025-02-04",
            "2025-02-05",
            "2025-02-06",
            "2025-02-07",
            "2025-02-08",
            "2025-02-09",
            "2025-02-10",
            "2025-02-11",
            "2025-02-12",
            "2025-02-13",
            "2025-02-14",
            "2025-02-15",
            "2025-02-16",
            "2025-02-17",
            "2025-02-18",
            "2025-02-19",
            "2025-02-20",
            "2025-02-21",
            "2025-02-22",
            "2025-02-23",
            "2025-02-24",
            "2025-02-25",
            "2025-02-26",
            "2025-02-27",
            "2025-02-28",
            "2025-03-01",
            "2025-03-02",
            "2025-03-03",
            "2025-03-04",
            "2025-03-05",
            "2025-03-06",
            "2025-03-07",
            "2025-03-08",
            "2025-03-09",
            "2025-03-10",
            "2025-03-11",
            "2025-03-12",
            "2025-03-13",
            "2025-03-14",
            "2025-03-15",
            "2025-03-16",
            "2025-03-17",
            "2025-03-18",
            "2025-03-19",
            "2025-03-20",
            "2025-03-21",
            "2025-03-22",
            "2025-03-23",
            "2025-03-24",
            "2025-03-25",
            "2025-03-26",
            "2025-03-27",
            "2025-03-28",
            "2025-03-29",
            "2025-03-30",
            "2025-03-31",
            "2025-04-01",
            "2025-04-02",
            "2025-04-03",
            "2025-04-04",
            "2025-04-05",
            "2025-04-06",
            "2025-04-07",
            "2025-04-08",
            "2025-04-09",
            "2025-04-10",
            "2025-04-11",
            "2025-04-12",
            "2025-04-13",
            "2025-04-14",
            "2025-04-15",
            "2025-04-16",
            "2025-04-17",
            "2025-04-18",
            "2025-04-19",
            "2025-04-20",
            "2025-04-21",
            "2025-04-22",
            "2025-04-23",
            "2025-04-24",
            "2025-04-25",
            "2025-04-26",
            "2025-04-27",
            "2025-04-28",
            "2025-04-29",
            "2025-04-30",
            "2025-05-01",
            "2025-05-02",
            "2025-05-03",
            "2025-05-04",
            "2025-05-05",
            "2025-05-06",
            "2025-05-07",
            "2025-05-08",
            "2025-05-09",
            "2025-05-10",
            "2025-05-11",
            "2025-05-12",
            "2025-05-13",
            "2025-05-14",
            "2025-05-15",
            "2025-05-16",
            "2025-05-17",
            "2025-05-18",
            "2025-05-19",
            "2025-05-20",
            "2025-05-21",
            "2025-05-22",
            "2025-05-23",
            "2025-05-24",
            "2025-05-25",
            "2025-05-26",
            "2025-05-27",
            "2025-05-28",
            "2025-05-29",
            "2025-05-30",
            "2025-05-31",
            "2025-06-01",
            "2025-06-02",
            "2025-06-03",
            "2025-06-04",
            "2025-06-05",
            "2025-06-06",
            "2025-06-07",
            "2025-06-08",
            "2025-06-09",
            "2025-06-10",
            "2025-06-11",
            "2025-06-12",
            "2025-06-13",
            "2025-06-14",
            "2025-06-15",
            "2025-06-16",
            "2025-06-17",
            "2025-06-18",
            "2025-06-19",
            "2025-06-20",
            "2025-06-21",
            "2025-06-22",
            "2025-06-23",
            "2025-06-24",
            "2025-06-25",
            "2025-06-26",
            "2025-06-27",
            "2025-06-28",
            "2025-06-29",
            "2025-06-30",
            "2025-07-01",
            "2025-07-02",
            "2025-07-03",
            "2025-07-04",
            "2025-07-05",
            "2025-07-06",
            "2025-07-07",
            "2025-07-08",
            "2025-07-09",
            "2025-07-10",
            "2025-07-11",
            "2025-07-12",
            "2025-07-13",
            "2025-07-14",
            "2025-07-15",
            "2025-07-16",
            "2025-07-17",
            "2025-07-18",
            "2025-07-19",
            "2025-07-20",
            "2025-07-21",
            "2025-07-22",
            "2025-07-23",
            "2025-07-24",
            "2025-07-25",
            "2025-07-26",
            "2025-07-27",
            "2025-07-28",
            "2025-07-29",
            "2025-07-30",
            "2025-07-31",
            "2025-08-01",
            "2025-08-02",
            "2025-08-03",
            "2025-08-04",
            "2025-08-05",
            "2025-08-06",
            "2025-08-07",
            "2025-08-08",
            "2025-08-09",
            "2025-08-10",
            "2025-08-11",
            "2025-08-12",
            "2025-08-13",
            "2025-08-14",
            "2025-08-15",
            "2025-08-16",
            "2025-08-17",
            "2025-08-18",
            "2025-08-19",
            "2025-08-20",
            "2025-08-21",
            "2025-08-22",
            "2025-08-23",
            "2025-08-24",
            "2025-08-25",
            "2025-08-26",
            "2025-08-27",
            "2025-08-28",
            "2025-08-29",
            "2025-08-30",
            "2025-08-31",
            "2025-09-01",
            "2025-09-02",
            "2025-09-03",
            "2025-09-04",
            "2025-09-05",
            "2025-09-06",
            "2025-09-07",
            "2025-09-08",
            "2025-09-09",
            "2025-09-10",
            "2025-09-11",
            "2025-09-12",
            "2025-09-13",
            "2025-09-14",
            "2025-09-15",
            "2025-09-16",
            "2025-09-17",
            "2025-09-18",
            "2025-09-19",
            "2025-09-20",
            "2025-09-21",
            "2025-09-22",
            "2025-09-23",
            "2025-09-24",
            "2025-09-25",
            "2025-09-26",
            "2025-09-27",
            "2025-09-28",
            "2025-09-29",
            "2025-09-30",
            "2025-10-01",
            "2025-10-02",
            "2025-10-03",
            "2025-10-04",
            "2025-10-05",
            "2025-10-06",
            "2025-10-07",
            "2025-10-08",
            "2025-10-09",
            "2025-10-10",
            "2025-10-11",
            "2025-10-12",
            "2025-10-13",
            "2025-10-14",
            "2025-10-15",
            "2025-10-16",
            "2025-10-17",
            "2025-10-18",
            "2025-10-19",
            "2025-10-20",
            "2025-10-21",
            "2025-10-22",
            "2025-10-23",
            "2025-10-24",
            "2025-10-25",
            "2025-10-26",
            "2025-10-27",
            "2025-10-28",
            "2025-10-29",
            "2025-10-30",
            "2025-10-31",
            "2025-11-01",
            "2025-11-02",
            "2025-11-03",
            "2025-11-04",
            "2025-11-05",
            "2025-11-06",
            "2025-11-07",
            "2025-11-08",
            "2025-11-09",
            "2025-11-10",
            "2025-11-11",
            "2025-11-12",
            "2025-11-13",
            "2025-11-14",
            "2025-11-15",
            "2025-11-16",
            "2025-11-17",
            "2025-11-18",
            "2025-11-19",
            "2025-11-20",
            "2025-11-21",
            "2025-11-22",
            "2025-11-23",
            "2025-11-24",
            "2025-11-25",
            "2025-11-26",
            "2025-11-27",
            "2025-11-28",
            "2025-11-29",
            "2025-11-30",
            "2025-12-01",
            "2025-12-02",
            "2025-12-03",
            "2025-12-04",
            "2025-12-05",
            "2025-12-06",
            "2025-12-07",
            "2025-12-08",
            "2025-12-09",
            "2025-12-10",
            "2025-12-11",
            "2025-12-12",
            "2025-12-13",
            "2025-12-14",
            "2025-12-15",
            "2025-12-16",
            "2025-12-17",
            "2025-12-18",
            "2025-12-19",
            "2025-12-20",
            "2025-12-21",
            "2025-12-22",
            "2025-12-23",
            "2025-12-24",
            "2025-12-25",
            "2025-12-26",
            "2025-12-27",
            "2025-12-28",
            "2025-12-29",
            "2025-12-30",
            "2025-12-31",
            "2026-01-01",
            "2026-01-02",
            "2026-01-03",
            "2026-01-04",
            "2026-01-05",
            "2026-01-06",
            "2026-01-07",
            "2026-01-08",
            "2026-01-09",
            "2026-01-10",
            "2026-01-11",
            "2026-01-12",
            "2026-01-13",
            "2026-01-14",
            "2026-01-15",
            "2026-01-16",
            "2026-01-17",
            "2026-01-18",
            "2026-01-19",
            "2026-01-20",
            "2026-01-21",
            "2026-01-22",
            "2026-01-23",
            "2026-01-24",
            "2026-01-25",
            "2026-01-26",
            "2026-01-27",
            "2026-01-28",
            "2026-01-29",
            "2026-01-30",
            "2026-01-31",
            "2026-02-01",
            "2026-02-02",
            "2026-02-03",
            "2026-02-04",
            "2026-02-05",
            "2026-02-06",
            "2026-02-07",
            "2026-02-08",
            "2026-02-09",
            "2026-02-10",
            "2026-02-11",
            "2026-02-12",
            "2026-02-13",
            "2026-02-14",
            "2026-02-15",
            "2026-02-16",
            "2026-02-17",
            "2026-02-18",
            "2026-02-19",
            "2026-02-20",
            "2026-02-21",
            "2026-02-22",
            "2026-02-23",
            "2026-02-24",
            "2026-02-25",
            "2026-02-26",
            "2026-02-27",
            "2026-02-28",
            "2026-03-01",
            "2026-03-02",
            "2026-03-03",
            "2026-03-04",
            "2026-03-05",
            "2026-03-06",
            "2026-03-07",
            "2026-03-08",
            "2026-03-09",
            "2026-03-10",
            "2026-03-11",
            "2026-03-12",
            "2026-03-13",
            "2026-03-14",
            "2026-03-15",
            "2026-03-16",
            "2026-03-17",
            "2026-03-18",
            "2026-03-19",
            "2026-03-20",
            "2026-03-21",
            "2026-03-22",
            "2026-03-23",
            "2026-03-24",
            "2026-03-25",
            "2026-03-26",
            "2026-03-27",
            "2026-03-28",
            "2026-03-29",
            "2026-03-30",
            "2026-03-31",
            "2026-04-01",
            "2026-04-02",
            "2026-04-03",
            "2026-04-04",
            "2026-04-05",
            "2026-04-06",
            "2026-04-07",
            "2026-04-08",
            "2026-04-09",
            "2026-04-10",
            "2026-04-11",
            "2026-04-12",
            "2026-04-13",
            "2026-04-14",
            "2026-04-15",
            "2026-04-16",
            "2026-04-17",
            "2026-04-18",
            "2026-04-19",
            "2026-04-20",
            "2026-04-21",
            "2026-04-22",
            "2026-04-23",
            "2026-04-24",
            "2026-04-25",
            "2026-04-26",
            "2026-04-27",
            "2026-04-28",
            "2026-04-29",
            "2026-04-30",
            "2026-05-01",
            "2026-05-02",
            "2026-05-03",
            "2026-05-04",
            "2026-05-05",
            "2026-05-06",
            "2026-05-07",
            "2026-05-08",
            "2026-05-09",
            "2026-05-10",
            "2026-05-11",
            "2026-05-12",
            "2026-05-13",
            "2026-05-14",
            "2026-05-15",
            "2026-05-16",
            "2026-05-17",
            "2026-05-18",
            "2026-05-19",
            "2026-05-20",
            "2026-05-21",
            "2026-05-22",
            "2026-05-23",
            "2026-05-24",
            "2026-05-25",
            "2026-05-26",
            "2026-05-27",
            "2026-05-28",
            "2026-05-29",
            "2026-05-30",
            "2026-05-31",
            "2026-06-01",
            "2026-06-02",
            "2026-06-03",
            "2026-06-04",
            "2026-06-05",
            "2026-06-06",
            "2026-06-07",
            "2026-06-08",
            "2026-06-09",
            "2026-06-10",
            "2026-06-11",
            "2026-06-12",
            "2026-06-13",
            "2026-06-14",
            "2026-06-15",
            "2026-06-16",
            "2026-06-17",
            "2026-06-18",
            "2026-06-19",
            "2026-06-20",
            "2026-06-21",
            "2026-06-22",
            "2026-06-23",
            "2026-06-24",
            "2026-06-25",
            "2026-06-26",
            "2026-06-27",
            "2026-06-28",
            "2026-06-29",
            "2026-06-30",
            "2026-07-01",
            "2026-07-02",
            "2026-07-03",
            "2026-07-04",
            "2026-07-05",
            "2026-07-06",
            "2026-07-07",
            "2026-07-08",
            "2026-07-09",
            "2026-07-10",
            "2026-07-11",
            "2026-07-12",
            "2026-07-13",
            "2026-07-14",
            "2026-07-15",
            "2026-07-16",
            "2026-07-17",
            "2026-07-18",
            "2026-07-19",
            "2026-07-20",
            "2026-07-21",
            "2026-07-22",
            "2026-07-23",
            "2026-07-24",
            "2026-07-25",
            "2026-07-26",
            "2026-07-27",
            "2026-07-28",
            "2026-07-29",
            "2026-07-30",
            "2026-07-31",
            "2026-08-01",
            "2026-08-02",
            "2026-08-03",
            "2026-08-04",
            "2026-08-05",
            "2026-08-06",
            "2026-08-07",
            "2026-08-08",
            "2026-08-09",
            "2026-08-10",
            "2026-08-11",
            "2026-08-12",
            "2026-08-13",
            "2026-08-14",
            "2026-08-15",
            "2026-08-16",
            "2026-08-17",
            "2026-08-18",
            "2026-08-19",
            "2026-08-20",
            "2026-08-21",
            "2026-08-22",
            "2026-08-23",
            "2026-08-24",
            "2026-08-25",
            "2026-08-26",
            "2026-08-27",
            "2026-08-28",
            "2026-08-29",
            "2026-08-30",
            "2026-08-31",
            "2026-09-01",
            "2026-09-02",
            "2026-09-03",
            "2026-09-04",
            "2026-09-05",
            "2026-09-06",
            "2026-09-07",
            "2026-09-08",
            "2026-09-09",
            "2026-09-10",
            "2026-09-11",
            "2026-09-12",
            "2026-09-13",
            "2026-09-14",
            "2026-09-15",
            "2026-09-16",
            "2026-09-17",
            "2026-09-18",
            "2026-09-19",
            "2026-09-20",
            "2026-09-21",
            "2026-09-22",
            "2026-09-23",
            "2026-09-24",
            "2026-09-25",
            "2026-09-26",
            "2026-09-27",
            "2026-09-28",
            "2026-09-29",
            "2026-09-30",
            "2026-10-01",
            "2026-10-02",
            "2026-10-03",
            "2026-10-04",
            "2026-10-05",
            "2026-10-06",
            "2026-10-07",
            "2026-10-08",
            "2026-10-09",
            "2026-10-10",
            "2026-10-11",
            "2026-10-12",
            "2026-10-13",
            "2026-10-14",
            "2026-10-15",
            "2026-10-16",
            "2026-10-17",
            "2026-10-18",
            "2026-10-19",
            "2026-10-20",
            "2026-10-21",
            "2026-10-22",
            "2026-10-23",
            "2026-10-24",
            "2026-10-25",
            "2026-10-26",
            "2026-10-27",
            "2026-10-28",
            "2026-10-29",
            "2026-10-30",
            "2026-10-31",
            "2026-11-01",
            "2026-11-02",
            "2026-11-03",
            "2026-11-04",
            "2026-11-05",
            "2026-11-06",
            "2026-11-07",
            "2026-11-08",
            "2026-11-09",
            "2026-11-10",
            "2026-11-11",
            "2026-11-12",
            "2026-11-13",
            "2026-11-14",
            "2026-11-15",
            "2026-11-16",
            "2026-11-17",
            "2026-11-18",
            "2026-11-19",
            "2026-11-20",
            "2026-11-21",
            "2026-11-22",
            "2026-11-23",
            "2026-11-24",
            "2026-11-25",
            "2026-11-26",
            "2026-11-27",
            "2026-11-28",
            "2026-11-29",
            "2026-11-30",
            "2026-12-01",
            "2026-12-02",
            "2026-12-03",
            "2026-12-04",
            "2026-12-05",
            "2026-12-06",
            "2026-12-07",
            "2026-12-08",
            "2026-12-09",
            "2026-12-10",
            "2026-12-11",
            "2026-12-12",
            "2026-12-13",
            "2026-12-14",
            "2026-12-15",
            "2026-12-16",
            "2026-12-17",
            "2026-12-18",
            "2026-12-19",
            "2026-12-20",
            "2026-12-21",
            "2026-12-22",
            "2026-12-23",
            "2026-12-24",
            "2026-12-25",
            "2026-12-26",
            "2026-12-27",
            "2026-12-28",
            "2026-12-29",
            "2026-12-30",
            "2026-12-31",
            "2027-01-01",
            "2027-01-02",
            "2027-01-03",
            "2027-01-04",
            "2027-01-05",
            "2027-01-06",
            "2027-01-07",
            "2027-01-08",
            "2027-01-09",
            "2027-01-10",
            "2027-01-11",
            "2027-01-12",
            "2027-01-13",
            "2027-01-14",
            "2027-01-15",
            "2027-01-16",
            "2027-01-17",
            "2027-01-18",
            "2027-01-19",
            "2027-01-20",
            "2027-01-21",
            "2027-01-22",
            "2027-01-23",
            "2027-01-24",
            "2027-01-25",
            "2027-01-26",
            "2027-01-27",
            "2027-01-28",
            "2027-01-29",
            "2027-01-30",
            "2027-01-31",
            "2027-02-01",
            "2027-02-02",
            "2027-02-03",
            "2027-02-04",
            "2027-02-05",
            "2027-02-06",
            "2027-02-07",
            "2027-02-08",
            "2027-02-09",
            "2027-02-10",
            "2027-02-11",
            "2027-02-12",
            "2027-02-13",
            "2027-02-14",
            "2027-02-15",
            "2027-02-16",
            "2027-02-17",
            "2027-02-18",
            "2027-02-19",
            "2027-02-20",
            "2027-02-21",
            "2027-02-22",
            "2027-02-23",
            "2027-02-24",
            "2027-02-25",
            "2027-02-26",
            "2027-02-27",
            "2027-02-28",
            "2027-03-01",
            "2027-03-02",
            "2027-03-03",
            "2027-03-04",
            "2027-03-05",
            "2027-03-06",
            "2027-03-07",
            "2027-03-08",
            "2027-03-09",
            "2027-03-10",
            "2027-03-11",
            "2027-03-12",
            "2027-03-13",
            "2027-03-14",
            "2027-03-15",
            "2027-03-16",
            "2027-03-17",
            "2027-03-18",
            "2027-03-19",
            "2027-03-20",
            "2027-03-21",
            "2027-03-22",
            "2027-03-23",
            "2027-03-24",
            "2027-03-25",
            "2027-03-26",
            "2027-03-27",
            "2027-03-28",
            "2027-03-29",
            "2027-03-30",
            "2027-03-31",
            "2027-04-01",
            "2027-04-02",
            "2027-04-03",
            "2027-04-04",
            "2027-04-05",
            "2027-04-06",
            "2027-04-07",
            "2027-04-08",
            "2027-04-09",
            "2027-04-10",
            "2027-04-11",
            "2027-04-12",
            "2027-04-13",
            "2027-04-14",
            "2027-04-15",
            "2027-04-16",
            "2027-04-17",
            "2027-04-18",
            "2027-04-19",
            "2027-04-20",
            "2027-04-21",
            "2027-04-22",
            "2027-04-23",
            "2027-04-24",
            "2027-04-25",
            "2027-04-26",
            "2027-04-27",
            "2027-04-28",
            "2027-04-29",
            "2027-04-30",
            "2027-05-01",
            "2027-05-02",
            "2027-05-03",
            "2027-05-04",
            "2027-05-05",
            "2027-05-06",
            "2027-05-07",
            "2027-05-08",
            "2027-05-09",
            "2027-05-10",
            "2027-05-11",
            "2027-05-12",
            "2027-05-13",
            "2027-05-14",
            "2027-05-15",
            "2027-05-16",
            "2027-05-17",
            "2027-05-18",
            "2027-05-19",
            "2027-05-20",
            "2027-05-21",
            "2027-05-22",
            "2027-05-23",
            "2027-05-24",
            "2027-05-25",
            "2027-05-26",
            "2027-05-27",
            "2027-05-28",
            "2027-05-29",
            "2027-05-30",
            "2027-05-31",
            "2027-06-01",
            "2027-06-02",
            "2027-06-03",
            "2027-06-04",
            "2027-06-05",
            "2027-06-06",
            "2027-06-07",
            "2027-06-08",
            "2027-06-09",
            "2027-06-10",
            "2027-06-11",
            "2027-06-12",
            "2027-06-13",
            "2027-06-14",
            "2027-06-15",
            "2027-06-16",
            "2027-06-17",
            "2027-06-18",
            "2027-06-19",
            "2027-06-20",
            "2027-06-21",
            "2027-06-22",
            "2027-06-23",
            "2027-06-24",
            "2027-06-25",
            "2027-06-26",
            "2027-06-27",
            "2027-06-28",
            "2027-06-29",
            "2027-06-30",
            "2027-07-01",
            "2027-07-02",
            "2027-07-03",
            "2027-07-04",
            "2027-07-05",
            "2027-07-06",
            "2027-07-07",
            "2027-07-08",
            "2027-07-09",
            "2027-07-10",
            "2027-07-11",
            "2027-07-12",
            "2027-07-13",
            "2027-07-14",
            "2027-07-15",
            "2027-07-16",
            "2027-07-17",
            "2027-07-18",
            "2027-07-19",
            "2027-07-20",
            "2027-07-21",
            "2027-07-22",
            "2027-07-23",
            "2027-07-24",
            "2027-07-25",
            "2027-07-26",
            "2027-07-27",
            "2027-07-28",
            "2027-07-29",
            "2027-07-30",
            "2027-07-31",
            "2027-08-01",
            "2027-08-02",
            "2027-08-03",
            "2027-08-04",
            "2027-08-05",
            "2027-08-06",
            "2027-08-07",
            "2027-08-08",
            "2027-08-09",
            "2027-08-10",
            "2027-08-11",
            "2027-08-12",
            "2027-08-13",
            "2027-08-14",
            "2027-08-15",
            "2027-08-16",
            "2027-08-17",
            "2027-08-18",
            "2027-08-19",
            "2027-08-20",
            "2027-08-21",
            "2027-08-22",
            "2027-08-23",
            "2027-08-24",
            "2027-08-25",
            "2027-08-26",
            "2027-08-27",
            "2027-08-28",
            "2027-08-29",
            "2027-08-30",
            "2027-08-31",
            "2027-09-01",
            "2027-09-02",
            "2027-09-03",
            "2027-09-04",
            "2027-09-05",
            "2027-09-06",
            "2027-09-07",
            "2027-09-08",
            "2027-09-09",
            "2027-09-10",
            "2027-09-11",
            "2027-09-12",
            "2027-09-13",
            "2027-09-14",
            "2027-09-15",
            "2027-09-16",
            "2027-09-17",
            "2027-09-18",
            "2027-09-19",
            "2027-09-20",
            "2027-09-21",
            "2027-09-22",
            "2027-09-23",
            "2027-09-24",
            "2027-09-25",
            "2027-09-26",
            "2027-09-27",
            "2027-09-28",
            "2027-09-29",
            "2027-09-30",
            "2027-10-01",
            "2027-10-02",
            "2027-10-03",
            "2027-10-04",
            "2027-10-05",
            "2027-10-06",
            "2027-10-07",
            "2027-10-08",
            "2027-10-09",
            "2027-10-10",
            "2027-10-11",
            "2027-10-12",
            "2027-10-13",
            "2027-10-14",
            "2027-10-15",
            "2027-10-16",
            "2027-10-17",
            "2027-10-18",
            "2027-10-19",
            "2027-10-20",
            "2027-10-21",
            "2027-10-22",
            "2027-10-23",
            "2027-10-24",
            "2027-10-25",
            "2027-10-26",
            "2027-10-27",
            "2027-10-28",
            "2027-10-29",
            "2027-10-30",
            "2027-10-31",
            "2027-11-01",
            "2027-11-02",
            "2027-11-03",
            "2027-11-04",
            "2027-11-05",
            "2027-11-06",
            "2027-11-07",
            "2027-11-08",
            "2027-11-09",
            "2027-11-10",
            "2027-11-11",
            "2027-11-12",
            "2027-11-13",
            "2027-11-14",
            "2027-11-15",
            "2027-11-16",
            "2027-11-17",
            "2027-11-18",
            "2027-11-19",
            "2027-11-20",
            "2027-11-21",
            "2027-11-22",
            "2027-11-23",
            "2027-11-24",
            "2027-11-25",
            "2027-11-26",
            "2027-11-27",
            "2027-11-28",
            "2027-11-29",
            "2027-11-30"
        ],
        "documents": [],
        "driveType": "chaffeured",
        "vehicle": {
            "id": "74744992-6133-4fd2-b553-5e093f39983a",
            "driverId": "985f9bd0-43c1-4372-a8e8-9e72b59803c2",
            "vehicleMode": "Road",
            "vehicleMakeId": "97b05890-9c29-4419-a1cc-cae326fd3f84",
            "vehicleModelId": "781a5525-6b7f-4176-b079-1fe233ce6e8c",
            "vehicleColorId": "d898518b-f98b-4b58-a539-3c78d7e0aa2d",
            "vehicleYear": "2023",
            "vehicleCategory": "suvs",
            "vehicleSittingCapacity": 6,
            "vehicleFuelType": null,
            "vehicleGuideLine": "The vehicle is a new latest RAV4 2023 with very comfortable seats and interior. The car is fully equipped with various amenities including Bluetooth connectivity, charging port for riders and full option AC.",
            "vehicleDoors": 0,
            "vehicleHasAirCondition": false,
            "smokingAllowed": false,
            "vehiclePlateNumber": "WA001LSR",
            "vehicleImages": [
                "https://treepz.s3.us-east-1.amazonaws.com/1681737367380-img_0684.jpg",
                "https://treepz.s3.us-east-1.amazonaws.com/1681737367381-img_0685.jpg",
                "https://treepz.s3.us-east-1.amazonaws.com/1687194149520-47790310-408e-4259-9088-42ceddcc5530.jpg",
                "https://treepz.s3.us-east-1.amazonaws.com/1687194083919-642e6f46-5183-47d9-9902-83b8cc31674f.jpg",
                "https://treepz.s3.us-east-1.amazonaws.com/1687354396582-52d02008-440e-43e2-ba7b-925953213bff.jpeg",
                "https://treepz.s3.us-east-1.amazonaws.com/1687354524126-9f12e2cc-7584-481b-b70c-686437a71a1d.jpeg"
            ],
            "createdAt": "2023-04-17T13:14:46.431Z",
            "updatedAt": "2023-10-03T14:32:08.794Z",
            "companyId": null,
            "transportPartnerAdminId": null,
            "enterpriseAdminId": null,
            "vehicleLocation": "Surulere, Ikeja, Lagos, Nigeria",
            "vehicleLocationDetails": {
                "city": "Ikeja",
                "type": "Point",
                "country": "NG",
                "zipcode": "101241",
                "coordinates": [
                    3.3489671,
                    6.4926317
                ],
                "formattedAddress": "Surulere, 101241, Ikeja, Lagos, Nigeria"
            },
            "vehicleMake": {
                "id": "97b05890-9c29-4419-a1cc-cae326fd3f84",
                "name": "TOYOTA",
                "isDisabled": false,
                "createdAt": "2023-03-10T11:44:22.396Z",
                "weight": 100,
                "updatedAt": "2023-04-11T13:35:55.852Z",
                "vehicleCategories": [
                    "cars_and_sedans",
                    "trucks",
                    "suvs",
                    "mini_vans",
                    "bus",
                    "luxury_vehicle",
                    "vehicle"
                ]
            },
            "vehicleModel": {
                "id": "781a5525-6b7f-4176-b079-1fe233ce6e8c",
                "name": "RAV4",
                "isDisabled": false,
                "iconUrl": null,
                "vehicleMakeId": "97b05890-9c29-4419-a1cc-cae326fd3f84",
                "weight": 0,
                "vehicleCategory": "suvs",
                "createdAt": "2023-03-15T14:47:31.704Z",
                "updatedAt": "2023-03-15T14:47:31.704Z"
            },
            "vehicleColor": {
                "id": "d898518b-f98b-4b58-a539-3c78d7e0aa2d",
                "color": "Gray",
                "hexCode": "#26282a ",
                "isDisabled": false,
                "createdAt": "2023-03-15T20:50:36.264Z",
                "updatedAt": "2023-03-24T10:43:37.856Z"
            },
            "vehicleAmenities": [
                {
                    "id": "b77f3eff-0810-4352-94e2-25c5b823e718",
                    "name": "Bluetooth",
                    "isDisabled": false,
                    "iconUrl": "https://treepz.s3.us-east-1.amazonaws.com/1679089020566-icon-2.png",
                    "createdAt": "2023-02-06T15:53:22.885Z",
                    "updatedAt": "2023-03-17T22:08:09.224Z"
                }
            ]
        }
    },
    {
        "id": "79508327-e27a-465a-a104-7e1a803e9dc0",
        "driverId": "4fbb889b-75ca-48c7-b6d9-58a51bdedbab",
        "isAvailable": true,
        "isBooked": false,
        "airportTransfer": false,
        "interCity": false,
        "rentalBooking": true,
        "vehicleId": "02168fcd-89e9-46f7-b538-323d29604035",
        "createdAt": "2023-03-10T18:28:37.335Z",
        "updatedAt": "2023-11-27T03:30:00.195Z",
        "locationKeywords": [
            "lekki",
            "lagos",
            "nigeria"
        ],
        "longitude": 3.5851718,
        "latitude": 6.4698419,
        "tripCoverageRange": null,
        "tripType": "hired",
        "couponId": null,
        "description": null,
        "discountId": null,
        "pricePerDay": 65000,
        "pricePerHour": 0,
        "pricePerMonth": 800000,
        "pricePerWeek": 250000,
        "halfDayPrice": 30000,
        "airportTransferPrice": 0,
        "country": "NIGERIA",
        "currency": "NGN",
        "currencySymbol": "₦",
        "timezone": "Africa/Lagos",
        "promotionId": "7c6689c0-8785-4d86-93d5-558a3e2192cd",
        "promotionExpiry": "2023-05-18T21:38:14.025Z",
        "promotionActive": false,
        "availableTimes": [
            "2023-11-27",
            "2023-11-28"
        ],
        "documents": [],
        "driveType": "chaffeured",
        "vehicle": {
            "id": "02168fcd-89e9-46f7-b538-323d29604035",
            "driverId": "4fbb889b-75ca-48c7-b6d9-58a51bdedbab",
            "vehicleMode": "Road",
            "vehicleMakeId": "32a7af19-c272-41dc-b803-4a2dc3b5b876",
            "vehicleModelId": "5b5664f9-44ec-4268-a447-987e5f36111f",
            "vehicleColorId": "4c415b07-6578-49a7-8439-1e5e6542848b",
            "vehicleYear": "2016",
            "vehicleCategory": "cars_and_sedans",
            "vehicleSittingCapacity": 5,
            "vehicleFuelType": null,
            "vehicleGuideLine": "Smooth ride with chilling air condition system and nice interior for your rental pleasure…",
            "vehicleDoors": 0,
            "vehicleHasAirCondition": false,
            "smokingAllowed": true,
            "vehiclePlateNumber": "KJV 559 HB",
            "vehicleImages": [
                "https://treepz.s3.us-east-1.amazonaws.com/1678472597973-img_4796.jpg",
                "https://treepz.s3.us-east-1.amazonaws.com/1681247803744-img_7006.jpg",
                "https://treepz.s3.us-east-1.amazonaws.com/1681247803759-img_7005.jpg",
                "https://treepz.s3.us-east-1.amazonaws.com/1678983147855-bl%20image.jpeg",
                "https://treepz.s3.us-east-1.amazonaws.com/1678983147855-infiniti.jpg"
            ],
            "createdAt": "2023-03-10T18:16:00.250Z",
            "updatedAt": "2023-06-21T20:16:01.444Z",
            "companyId": null,
            "transportPartnerAdminId": null,
            "enterpriseAdminId": null,
            "vehicleLocation": "Lekki, Lagos, Nigeria",
            "vehicleLocationDetails": {
                "city": "Lekki",
                "type": "Point",
                "country": "NG",
                "coordinates": [
                    3.5851718,
                    6.4698419
                ],
                "formattedAddress": "Lekki, Lagos, Nigeria"
            },
            "vehicleMake": {
                "id": "32a7af19-c272-41dc-b803-4a2dc3b5b876",
                "name": "HONDA",
                "isDisabled": false,
                "createdAt": "2023-03-10T11:44:22.396Z",
                "weight": 100,
                "updatedAt": "2023-04-11T13:36:15.209Z",
                "vehicleCategories": [
                    "cars_and_sedans",
                    "trucks",
                    "suvs",
                    "mini_vans",
                    "bus",
                    "luxury_vehicle",
                    "vehicle"
                ]
            },
            "vehicleModel": {
                "id": "5b5664f9-44ec-4268-a447-987e5f36111f",
                "name": "Accord",
                "isDisabled": false,
                "iconUrl": null,
                "vehicleMakeId": "32a7af19-c272-41dc-b803-4a2dc3b5b876",
                "weight": 0,
                "vehicleCategory": "cars_and_sedans",
                "createdAt": "2023-03-10T11:46:22.617Z",
                "updatedAt": "2023-03-10T11:46:22.617Z"
            },
            "vehicleColor": {
                "id": "4c415b07-6578-49a7-8439-1e5e6542848b",
                "color": "Black",
                "hexCode": "#0d1116 ",
                "isDisabled": false,
                "createdAt": "2023-03-15T20:50:36.264Z",
                "updatedAt": "2023-03-24T08:55:11.273Z"
            },
            "vehicleAmenities": [
                {
                    "id": "b77f3eff-0810-4352-94e2-25c5b823e718",
                    "name": "Bluetooth",
                    "isDisabled": false,
                    "iconUrl": "https://treepz.s3.us-east-1.amazonaws.com/1679089020566-icon-2.png",
                    "createdAt": "2023-02-06T15:53:22.885Z",
                    "updatedAt": "2023-03-17T22:08:09.224Z"
                },
                {
                    "id": "81697304-bd81-41fc-8d0b-239516e0f218",
                    "name": "Bin",
                    "isDisabled": false,
                    "iconUrl": "https://treepz.s3.us-east-1.amazonaws.com/1679090918352-icon.png",
                    "createdAt": "2023-03-17T22:08:38.446Z",
                    "updatedAt": "2023-03-17T22:08:38.446Z"
                },
                {
                    "id": "41f70b50-a5bb-4c5c-9cd1-2a02ef5b80d7",
                    "name": "Sunroof",
                    "isDisabled": false,
                    "iconUrl": "https://treepz.s3.us-east-1.amazonaws.com/1679090968660-icon-3.png",
                    "createdAt": "2023-03-17T22:09:28.718Z",
                    "updatedAt": "2023-03-17T22:09:28.718Z"
                },
                {
                    "id": "ad74a198-a1fd-4bad-9c9f-448f5602764d",
                    "name": "Pets friendly",
                    "isDisabled": false,
                    "iconUrl": "https://treepz.s3.us-east-1.amazonaws.com/1679091004122-pets%201.png",
                    "createdAt": "2023-03-17T22:10:04.173Z",
                    "updatedAt": "2023-03-17T22:10:04.173Z"
                }
            ]
        }
    },
    {
        "id": "5149967e-7120-4af0-a13d-6741388159ad",
        "driverId": "d551e9bc-293c-49a0-9cf2-6e2678e2f132",
        "isAvailable": true,
        "isBooked": false,
        "airportTransfer": false,
        "interCity": false,
        "rentalBooking": true,
        "vehicleId": "1611db2a-f4b2-4cf0-9dfd-5d79b3bd6a76",
        "createdAt": "2023-07-06T14:05:11.149Z",
        "updatedAt": "2023-11-27T03:30:00.211Z",
        "locationKeywords": [
            "surulere",
            "ikeja",
            "lagos",
            "nigeria"
        ],
        "longitude": 3.348572,
        "latitude": 6.498292999999999,
        "tripCoverageRange": null,
        "tripType": "hired",
        "couponId": null,
        "description": null,
        "discountId": null,
        "pricePerDay": 37500,
        "pricePerHour": 0,
        "pricePerMonth": 0,
        "pricePerWeek": 0,
        "halfDayPrice": 0,
        "airportTransferPrice": 0,
        "country": "NIGERIA",
        "currency": "NGN",
        "currencySymbol": "₦",
        "timezone": "Africa/Lagos",
        "promotionId": null,
        "promotionExpiry": null,
        "promotionActive": false,
        "availableTimes": [
            "2023-11-27",
            "2023-11-28",
            "2023-11-29",
            "2023-11-30",
            "2023-12-01",
            "2023-12-02",
            "2023-12-03",
            "2023-12-04",
            "2023-12-05",
            "2023-12-06",
            "2023-12-07",
            "2023-12-08",
            "2023-12-09",
            "2023-12-10",
            "2023-12-11",
            "2023-12-12",
            "2023-12-13",
            "2023-12-14",
            "2023-12-15",
            "2023-12-16",
            "2023-12-17",
            "2023-12-18",
            "2023-12-19",
            "2023-12-20",
            "2023-12-21",
            "2023-12-22",
            "2023-12-23",
            "2023-12-24",
            "2023-12-25",
            "2023-12-26",
            "2023-12-27",
            "2023-12-28",
            "2023-12-29",
            "2023-12-30",
            "2023-12-31",
            "2024-01-01",
            "2024-01-02",
            "2024-01-03",
            "2024-01-04",
            "2024-01-05",
            "2024-01-06",
            "2024-01-07",
            "2024-01-08",
            "2024-01-09",
            "2024-01-10",
            "2024-01-11",
            "2024-01-12",
            "2024-01-13",
            "2024-01-14",
            "2024-01-15",
            "2024-01-16",
            "2024-01-17",
            "2024-01-18",
            "2024-01-19",
            "2024-01-20",
            "2024-01-21",
            "2024-01-22",
            "2024-01-23",
            "2024-01-24",
            "2024-01-25",
            "2024-01-26",
            "2024-01-27",
            "2024-01-28",
            "2024-01-29",
            "2024-01-30",
            "2024-01-31",
            "2024-02-01",
            "2024-02-02",
            "2024-02-03",
            "2024-02-04",
            "2024-02-05",
            "2024-02-06",
            "2024-02-07",
            "2024-02-08",
            "2024-02-09",
            "2024-02-10",
            "2024-02-11",
            "2024-02-12",
            "2024-02-13",
            "2024-02-14",
            "2024-02-15",
            "2024-02-16",
            "2024-02-17",
            "2024-02-18",
            "2024-02-19",
            "2024-02-20",
            "2024-02-21",
            "2024-02-22",
            "2024-02-23",
            "2024-02-24",
            "2024-02-25",
            "2024-02-26",
            "2024-02-27",
            "2024-02-28",
            "2024-02-29",
            "2024-03-01",
            "2024-03-02",
            "2024-03-03",
            "2024-03-04",
            "2024-03-05",
            "2024-03-06",
            "2024-03-07",
            "2024-03-08",
            "2024-03-09",
            "2024-03-10",
            "2024-03-11",
            "2024-03-12",
            "2024-03-13",
            "2024-03-14",
            "2024-03-15",
            "2024-03-16",
            "2024-03-17",
            "2024-03-18",
            "2024-03-19",
            "2024-03-20",
            "2024-03-21",
            "2024-03-22",
            "2024-03-23",
            "2024-03-24",
            "2024-03-25",
            "2024-03-26",
            "2024-03-27",
            "2024-03-28",
            "2024-03-29",
            "2024-03-30",
            "2024-03-31",
            "2024-04-01",
            "2024-04-02",
            "2024-04-03",
            "2024-04-04",
            "2024-04-05",
            "2024-04-06",
            "2024-04-07",
            "2024-04-08",
            "2024-04-09",
            "2024-04-10",
            "2024-04-11",
            "2024-04-12",
            "2024-04-13",
            "2024-04-14",
            "2024-04-15",
            "2024-04-16",
            "2024-04-17",
            "2024-04-18",
            "2024-04-19",
            "2024-04-20",
            "2024-04-21",
            "2024-04-22",
            "2024-04-23",
            "2024-04-24",
            "2024-04-25",
            "2024-04-26",
            "2024-04-27",
            "2024-04-28",
            "2024-04-29",
            "2024-04-30",
            "2024-05-01",
            "2024-05-02",
            "2024-05-03",
            "2024-05-04",
            "2024-05-05",
            "2024-05-06",
            "2024-05-07",
            "2024-05-08",
            "2024-05-09",
            "2024-05-10",
            "2024-05-11",
            "2024-05-12",
            "2024-05-13",
            "2024-05-14",
            "2024-05-15",
            "2024-05-16",
            "2024-05-17",
            "2024-05-18",
            "2024-05-19",
            "2024-05-20",
            "2024-05-21",
            "2024-05-22",
            "2024-05-23",
            "2024-05-24",
            "2024-05-25",
            "2024-05-26",
            "2024-05-27",
            "2024-05-28",
            "2024-05-29",
            "2024-05-30",
            "2024-05-31",
            "2024-06-01",
            "2024-06-02",
            "2024-06-03",
            "2024-06-04",
            "2024-06-05",
            "2024-06-06",
            "2024-06-07",
            "2024-06-08",
            "2024-06-09",
            "2024-06-10",
            "2024-06-11",
            "2024-06-12",
            "2024-06-13",
            "2024-06-14",
            "2024-06-15",
            "2024-06-16",
            "2024-06-17",
            "2024-06-18",
            "2024-06-19",
            "2024-06-20",
            "2024-06-21",
            "2024-06-22",
            "2024-06-23",
            "2024-06-24",
            "2024-06-25",
            "2024-06-26",
            "2024-06-27",
            "2024-06-28",
            "2024-06-29",
            "2024-06-30",
            "2024-07-01",
            "2024-07-02",
            "2024-07-03",
            "2024-07-04",
            "2024-07-05",
            "2024-07-06",
            "2024-07-07",
            "2024-07-08",
            "2024-07-09",
            "2024-07-10",
            "2024-07-11",
            "2024-07-12",
            "2024-07-13",
            "2024-07-14",
            "2024-07-15",
            "2024-07-16",
            "2024-07-17",
            "2024-07-18",
            "2024-07-19",
            "2024-07-20",
            "2024-07-21",
            "2024-07-22",
            "2024-07-23",
            "2024-07-24",
            "2024-07-25",
            "2024-07-26",
            "2024-07-27",
            "2024-07-28",
            "2024-07-29",
            "2024-07-30",
            "2024-07-31",
            "2024-08-01",
            "2024-08-02",
            "2024-08-03",
            "2024-08-04",
            "2024-08-05",
            "2024-08-06",
            "2024-08-07",
            "2024-08-08",
            "2024-08-09",
            "2024-08-10",
            "2024-08-11",
            "2024-08-12",
            "2024-08-13",
            "2024-08-14",
            "2024-08-15",
            "2024-08-16",
            "2024-08-17",
            "2024-08-18",
            "2024-08-19",
            "2024-08-20",
            "2024-08-21",
            "2024-08-22",
            "2024-08-23",
            "2024-08-24",
            "2024-08-25",
            "2024-08-26",
            "2024-08-27",
            "2024-08-28",
            "2024-08-29",
            "2024-08-30",
            "2024-08-31",
            "2024-09-01",
            "2024-09-02",
            "2024-09-03",
            "2024-09-04",
            "2024-09-05",
            "2024-09-06",
            "2024-09-07",
            "2024-09-08",
            "2024-09-09",
            "2024-09-10",
            "2024-09-11",
            "2024-09-12",
            "2024-09-13",
            "2024-09-14",
            "2024-09-15",
            "2024-09-16",
            "2024-09-17",
            "2024-09-18",
            "2024-09-19",
            "2024-09-20",
            "2024-09-21",
            "2024-09-22",
            "2024-09-23",
            "2024-09-24",
            "2024-09-25",
            "2024-09-26",
            "2024-09-27",
            "2024-09-28",
            "2024-09-29",
            "2024-09-30",
            "2024-10-01",
            "2024-10-02",
            "2024-10-03",
            "2024-10-04",
            "2024-10-05",
            "2024-10-06",
            "2024-10-07",
            "2024-10-08",
            "2024-10-09",
            "2024-10-10",
            "2024-10-11",
            "2024-10-12",
            "2024-10-13",
            "2024-10-14",
            "2024-10-15",
            "2024-10-16",
            "2024-10-17",
            "2024-10-18",
            "2024-10-19",
            "2024-10-20",
            "2024-10-21",
            "2024-10-22",
            "2024-10-23",
            "2024-10-24",
            "2024-10-25",
            "2024-10-26",
            "2024-10-27",
            "2024-10-28",
            "2024-10-29",
            "2024-10-30",
            "2024-10-31",
            "2024-11-01",
            "2024-11-02",
            "2024-11-03",
            "2024-11-04",
            "2024-11-05",
            "2024-11-06",
            "2024-11-07",
            "2024-11-08",
            "2024-11-09",
            "2024-11-10",
            "2024-11-11",
            "2024-11-12",
            "2024-11-13",
            "2024-11-14",
            "2024-11-15",
            "2024-11-16",
            "2024-11-17",
            "2024-11-18",
            "2024-11-19",
            "2024-11-20",
            "2024-11-21",
            "2024-11-22",
            "2024-11-23",
            "2024-11-24",
            "2024-11-25",
            "2024-11-26",
            "2024-11-27",
            "2024-11-28",
            "2024-11-29",
            "2024-11-30",
            "2024-12-01",
            "2024-12-02",
            "2024-12-03",
            "2024-12-04",
            "2024-12-05",
            "2024-12-06",
            "2024-12-07",
            "2024-12-08",
            "2024-12-09",
            "2024-12-10",
            "2024-12-11",
            "2024-12-12",
            "2024-12-13",
            "2024-12-14",
            "2024-12-15",
            "2024-12-16",
            "2024-12-17",
            "2024-12-18",
            "2024-12-19",
            "2024-12-20",
            "2024-12-21",
            "2024-12-22",
            "2024-12-23",
            "2024-12-24",
            "2024-12-25",
            "2024-12-26",
            "2024-12-27",
            "2024-12-28",
            "2024-12-29",
            "2024-12-30",
            "2024-12-31",
            "2025-01-01",
            "2025-01-02",
            "2025-01-03",
            "2025-01-04",
            "2025-01-05",
            "2025-01-06",
            "2025-01-07",
            "2025-01-08",
            "2025-01-09",
            "2025-01-10",
            "2025-01-11",
            "2025-01-12",
            "2025-01-13",
            "2025-01-14",
            "2025-01-15",
            "2025-01-16",
            "2025-01-17",
            "2025-01-18",
            "2025-01-19",
            "2025-01-20",
            "2025-01-21",
            "2025-01-22",
            "2025-01-23",
            "2025-01-24",
            "2025-01-25",
            "2025-01-26",
            "2025-01-27",
            "2025-01-28",
            "2025-01-29",
            "2025-01-30",
            "2025-01-31",
            "2025-02-01",
            "2025-02-02",
            "2025-02-03",
            "2025-02-04",
            "2025-02-05",
            "2025-02-06",
            "2025-02-07",
            "2025-02-08",
            "2025-02-09",
            "2025-02-10",
            "2025-02-11",
            "2025-02-12",
            "2025-02-13",
            "2025-02-14",
            "2025-02-15",
            "2025-02-16",
            "2025-02-17",
            "2025-02-18",
            "2025-02-19",
            "2025-02-20",
            "2025-02-21",
            "2025-02-22",
            "2025-02-23",
            "2025-02-24",
            "2025-02-25",
            "2025-02-26",
            "2025-02-27",
            "2025-02-28",
            "2025-03-01",
            "2025-03-02",
            "2025-03-03",
            "2025-03-04",
            "2025-03-05",
            "2025-03-06",
            "2025-03-07",
            "2025-03-08",
            "2025-03-09",
            "2025-03-10",
            "2025-03-11",
            "2025-03-12",
            "2025-03-13",
            "2025-03-14",
            "2025-03-15",
            "2025-03-16",
            "2025-03-17",
            "2025-03-18",
            "2025-03-19",
            "2025-03-20",
            "2025-03-21",
            "2025-03-22",
            "2025-03-23",
            "2025-03-24",
            "2025-03-25",
            "2025-03-26",
            "2025-03-27",
            "2025-03-28",
            "2025-03-29",
            "2025-03-30",
            "2025-03-31",
            "2025-04-01",
            "2025-04-02",
            "2025-04-03",
            "2025-04-04",
            "2025-04-05",
            "2025-04-06",
            "2025-04-07",
            "2025-04-08",
            "2025-04-09",
            "2025-04-10",
            "2025-04-11",
            "2025-04-12",
            "2025-04-13",
            "2025-04-14",
            "2025-04-15",
            "2025-04-16",
            "2025-04-17",
            "2025-04-18",
            "2025-04-19",
            "2025-04-20",
            "2025-04-21",
            "2025-04-22",
            "2025-04-23",
            "2025-04-24",
            "2025-04-25",
            "2025-04-26",
            "2025-04-27",
            "2025-04-28",
            "2025-04-29",
            "2025-04-30",
            "2025-05-01",
            "2025-05-02",
            "2025-05-03",
            "2025-05-04",
            "2025-05-05",
            "2025-05-06",
            "2025-05-07",
            "2025-05-08",
            "2025-05-09",
            "2025-05-10",
            "2025-05-11",
            "2025-05-12",
            "2025-05-13",
            "2025-05-14",
            "2025-05-15",
            "2025-05-16",
            "2025-05-17",
            "2025-05-18",
            "2025-05-19",
            "2025-05-20",
            "2025-05-21",
            "2025-05-22",
            "2025-05-23",
            "2025-05-24",
            "2025-05-25",
            "2025-05-26",
            "2025-05-27",
            "2025-05-28",
            "2025-05-29",
            "2025-05-30",
            "2025-05-31",
            "2025-06-01",
            "2025-06-02",
            "2025-06-03",
            "2025-06-04",
            "2025-06-05",
            "2025-06-06",
            "2025-06-07",
            "2025-06-08",
            "2025-06-09",
            "2025-06-10",
            "2025-06-11",
            "2025-06-12",
            "2025-06-13",
            "2025-06-14",
            "2025-06-15",
            "2025-06-16",
            "2025-06-17",
            "2025-06-18",
            "2025-06-19",
            "2025-06-20",
            "2025-06-21",
            "2025-06-22",
            "2025-06-23",
            "2025-06-24",
            "2025-06-25",
            "2025-06-26",
            "2025-06-27",
            "2025-06-28",
            "2025-06-29",
            "2025-06-30",
            "2025-07-01",
            "2025-07-02",
            "2025-07-03",
            "2025-07-04",
            "2025-07-05",
            "2025-07-06",
            "2025-07-07",
            "2025-07-08",
            "2025-07-09",
            "2025-07-10",
            "2025-07-11",
            "2025-07-12",
            "2025-07-13",
            "2025-07-14",
            "2025-07-15",
            "2025-07-16",
            "2025-07-17",
            "2025-07-18",
            "2025-07-19",
            "2025-07-20",
            "2025-07-21",
            "2025-07-22",
            "2025-07-23",
            "2025-07-24",
            "2025-07-25",
            "2025-07-26",
            "2025-07-27",
            "2025-07-28",
            "2025-07-29",
            "2025-07-30",
            "2025-07-31",
            "2025-08-01",
            "2025-08-02",
            "2025-08-03",
            "2025-08-04",
            "2025-08-05",
            "2025-08-06",
            "2025-08-07",
            "2025-08-08",
            "2025-08-09",
            "2025-08-10",
            "2025-08-11",
            "2025-08-12",
            "2025-08-13",
            "2025-08-14",
            "2025-08-15",
            "2025-08-16",
            "2025-08-17",
            "2025-08-18",
            "2025-08-19",
            "2025-08-20",
            "2025-08-21",
            "2025-08-22",
            "2025-08-23",
            "2025-08-24",
            "2025-08-25",
            "2025-08-26",
            "2025-08-27",
            "2025-08-28",
            "2025-08-29",
            "2025-08-30",
            "2025-08-31",
            "2025-09-01",
            "2025-09-02",
            "2025-09-03",
            "2025-09-04",
            "2025-09-05",
            "2025-09-06",
            "2025-09-07",
            "2025-09-08",
            "2025-09-09",
            "2025-09-10",
            "2025-09-11",
            "2025-09-12",
            "2025-09-13",
            "2025-09-14",
            "2025-09-15",
            "2025-09-16",
            "2025-09-17",
            "2025-09-18",
            "2025-09-19",
            "2025-09-20",
            "2025-09-21",
            "2025-09-22",
            "2025-09-23",
            "2025-09-24",
            "2025-09-25",
            "2025-09-26",
            "2025-09-27",
            "2025-09-28",
            "2025-09-29",
            "2025-09-30",
            "2025-10-01",
            "2025-10-02",
            "2025-10-03",
            "2025-10-04",
            "2025-10-05",
            "2025-10-06",
            "2025-10-07",
            "2025-10-08",
            "2025-10-09",
            "2025-10-10",
            "2025-10-11",
            "2025-10-12",
            "2025-10-13",
            "2025-10-14",
            "2025-10-15",
            "2025-10-16",
            "2025-10-17",
            "2025-10-18",
            "2025-10-19",
            "2025-10-20",
            "2025-10-21",
            "2025-10-22",
            "2025-10-23",
            "2025-10-24",
            "2025-10-25",
            "2025-10-26",
            "2025-10-27",
            "2025-10-28",
            "2025-10-29",
            "2025-10-30",
            "2025-10-31",
            "2025-11-01",
            "2025-11-02",
            "2025-11-03",
            "2025-11-04",
            "2025-11-05",
            "2025-11-06",
            "2025-11-07",
            "2025-11-08",
            "2025-11-09",
            "2025-11-10",
            "2025-11-11",
            "2025-11-12",
            "2025-11-13",
            "2025-11-14",
            "2025-11-15",
            "2025-11-16",
            "2025-11-17",
            "2025-11-18",
            "2025-11-19",
            "2025-11-20",
            "2025-11-21",
            "2025-11-22",
            "2025-11-23",
            "2025-11-24",
            "2025-11-25",
            "2025-11-26",
            "2025-11-27",
            "2025-11-28",
            "2025-11-29",
            "2025-11-30",
            "2025-12-01",
            "2025-12-02",
            "2025-12-03",
            "2025-12-04",
            "2025-12-05",
            "2025-12-06",
            "2025-12-07",
            "2025-12-08",
            "2025-12-09",
            "2025-12-10",
            "2025-12-11",
            "2025-12-12",
            "2025-12-13",
            "2025-12-14",
            "2025-12-15",
            "2025-12-16",
            "2025-12-17",
            "2025-12-18",
            "2025-12-19",
            "2025-12-20",
            "2025-12-21",
            "2025-12-22",
            "2025-12-23",
            "2025-12-24",
            "2025-12-25",
            "2025-12-26",
            "2025-12-27",
            "2025-12-28",
            "2025-12-29",
            "2025-12-30",
            "2025-12-31",
            "2026-01-01",
            "2026-01-02",
            "2026-01-03",
            "2026-01-04",
            "2026-01-05",
            "2026-01-06",
            "2026-01-07",
            "2026-01-08",
            "2026-01-09",
            "2026-01-10",
            "2026-01-11",
            "2026-01-12",
            "2026-01-13",
            "2026-01-14",
            "2026-01-15",
            "2026-01-16",
            "2026-01-17",
            "2026-01-18",
            "2026-01-19",
            "2026-01-20",
            "2026-01-21",
            "2026-01-22",
            "2026-01-23",
            "2026-01-24",
            "2026-01-25",
            "2026-01-26",
            "2026-01-27",
            "2026-01-28",
            "2026-01-29",
            "2026-01-30",
            "2026-01-31",
            "2026-02-01",
            "2026-02-02",
            "2026-02-03",
            "2026-02-04",
            "2026-02-05",
            "2026-02-06",
            "2026-02-07",
            "2026-02-08",
            "2026-02-09",
            "2026-02-10",
            "2026-02-11",
            "2026-02-12",
            "2026-02-13",
            "2026-02-14",
            "2026-02-15",
            "2026-02-16",
            "2026-02-17",
            "2026-02-18",
            "2026-02-19",
            "2026-02-20",
            "2026-02-21",
            "2026-02-22",
            "2026-02-23",
            "2026-02-24",
            "2026-02-25",
            "2026-02-26",
            "2026-02-27",
            "2026-02-28",
            "2026-03-01",
            "2026-03-02",
            "2026-03-03",
            "2026-03-04",
            "2026-03-05",
            "2026-03-06",
            "2026-03-07",
            "2026-03-08",
            "2026-03-09",
            "2026-03-10",
            "2026-03-11",
            "2026-03-12",
            "2026-03-13",
            "2026-03-14",
            "2026-03-15",
            "2026-03-16",
            "2026-03-17",
            "2026-03-18",
            "2026-03-19",
            "2026-03-20",
            "2026-03-21",
            "2026-03-22",
            "2026-03-23",
            "2026-03-24",
            "2026-03-25",
            "2026-03-26",
            "2026-03-27",
            "2026-03-28",
            "2026-03-29",
            "2026-03-30",
            "2026-03-31",
            "2026-04-01",
            "2026-04-02",
            "2026-04-03",
            "2026-04-04",
            "2026-04-05",
            "2026-04-06",
            "2026-04-07",
            "2026-04-08",
            "2026-04-09",
            "2026-04-10",
            "2026-04-11",
            "2026-04-12",
            "2026-04-13",
            "2026-04-14",
            "2026-04-15",
            "2026-04-16",
            "2026-04-17",
            "2026-04-18",
            "2026-04-19",
            "2026-04-20",
            "2026-04-21",
            "2026-04-22",
            "2026-04-23",
            "2026-04-24",
            "2026-04-25",
            "2026-04-26",
            "2026-04-27",
            "2026-04-28",
            "2026-04-29",
            "2026-04-30",
            "2026-05-01",
            "2026-05-02",
            "2026-05-03",
            "2026-05-04",
            "2026-05-05",
            "2026-05-06",
            "2026-05-07",
            "2026-05-08",
            "2026-05-09",
            "2026-05-10",
            "2026-05-11",
            "2026-05-12",
            "2026-05-13",
            "2026-05-14",
            "2026-05-15",
            "2026-05-16",
            "2026-05-17",
            "2026-05-18",
            "2026-05-19",
            "2026-05-20",
            "2026-05-21",
            "2026-05-22",
            "2026-05-23",
            "2026-05-24",
            "2026-05-25",
            "2026-05-26",
            "2026-05-27",
            "2026-05-28",
            "2026-05-29",
            "2026-05-30",
            "2026-05-31",
            "2026-06-01",
            "2026-06-02",
            "2026-06-03",
            "2026-06-04",
            "2026-06-05",
            "2026-06-06",
            "2026-06-07",
            "2026-06-08",
            "2026-06-09",
            "2026-06-10",
            "2026-06-11",
            "2026-06-12",
            "2026-06-13",
            "2026-06-14",
            "2026-06-15",
            "2026-06-16",
            "2026-06-17",
            "2026-06-18",
            "2026-06-19",
            "2026-06-20",
            "2026-06-21",
            "2026-06-22",
            "2026-06-23",
            "2026-06-24",
            "2026-06-25",
            "2026-06-26",
            "2026-06-27",
            "2026-06-28",
            "2026-06-29",
            "2026-06-30",
            "2026-07-01",
            "2026-07-02",
            "2026-07-03",
            "2026-07-04",
            "2026-07-05",
            "2026-07-06",
            "2026-07-07",
            "2026-07-08",
            "2026-07-09",
            "2026-07-10",
            "2026-07-11",
            "2026-07-12",
            "2026-07-13",
            "2026-07-14",
            "2026-07-15",
            "2026-07-16",
            "2026-07-17",
            "2026-07-18",
            "2026-07-19",
            "2026-07-20",
            "2026-07-21",
            "2026-07-22",
            "2026-07-23",
            "2026-07-24",
            "2026-07-25",
            "2026-07-26",
            "2026-07-27",
            "2026-07-28",
            "2026-07-29",
            "2026-07-30",
            "2026-07-31",
            "2026-08-01",
            "2026-08-02",
            "2026-08-03",
            "2026-08-04",
            "2026-08-05",
            "2026-08-06",
            "2026-08-07",
            "2026-08-08",
            "2026-08-09",
            "2026-08-10",
            "2026-08-11",
            "2026-08-12",
            "2026-08-13",
            "2026-08-14",
            "2026-08-15",
            "2026-08-16",
            "2026-08-17",
            "2026-08-18",
            "2026-08-19",
            "2026-08-20",
            "2026-08-21",
            "2026-08-22",
            "2026-08-23",
            "2026-08-24",
            "2026-08-25",
            "2026-08-26",
            "2026-08-27",
            "2026-08-28",
            "2026-08-29",
            "2026-08-30",
            "2026-08-31",
            "2026-09-01",
            "2026-09-02",
            "2026-09-03",
            "2026-09-04",
            "2026-09-05",
            "2026-09-06",
            "2026-09-07",
            "2026-09-08",
            "2026-09-09",
            "2026-09-10",
            "2026-09-11",
            "2026-09-12",
            "2026-09-13",
            "2026-09-14",
            "2026-09-15",
            "2026-09-16",
            "2026-09-17",
            "2026-09-18",
            "2026-09-19",
            "2026-09-20",
            "2026-09-21",
            "2026-09-22",
            "2026-09-23",
            "2026-09-24",
            "2026-09-25",
            "2026-09-26",
            "2026-09-27",
            "2026-09-28",
            "2026-09-29",
            "2026-09-30",
            "2026-10-01",
            "2026-10-02",
            "2026-10-03",
            "2026-10-04",
            "2026-10-05",
            "2026-10-06",
            "2026-10-07",
            "2026-10-08",
            "2026-10-09",
            "2026-10-10",
            "2026-10-11",
            "2026-10-12",
            "2026-10-13",
            "2026-10-14",
            "2026-10-15",
            "2026-10-16",
            "2026-10-17",
            "2026-10-18",
            "2026-10-19",
            "2026-10-20",
            "2026-10-21",
            "2026-10-22",
            "2026-10-23",
            "2026-10-24",
            "2026-10-25",
            "2026-10-26",
            "2026-10-27",
            "2026-10-28",
            "2026-10-29",
            "2026-10-30",
            "2026-10-31",
            "2026-11-01",
            "2026-11-02",
            "2026-11-03",
            "2026-11-04",
            "2026-11-05",
            "2026-11-06",
            "2026-11-07",
            "2026-11-08",
            "2026-11-09",
            "2026-11-10",
            "2026-11-11",
            "2026-11-12",
            "2026-11-13",
            "2026-11-14",
            "2026-11-15",
            "2026-11-16",
            "2026-11-17",
            "2026-11-18",
            "2026-11-19",
            "2026-11-20",
            "2026-11-21",
            "2026-11-22",
            "2026-11-23",
            "2026-11-24",
            "2026-11-25",
            "2026-11-26",
            "2026-11-27",
            "2026-11-28",
            "2026-11-29",
            "2026-11-30",
            "2026-12-01",
            "2026-12-02",
            "2026-12-03",
            "2026-12-04",
            "2026-12-05",
            "2026-12-06",
            "2026-12-07",
            "2026-12-08",
            "2026-12-09",
            "2026-12-10",
            "2026-12-11",
            "2026-12-12",
            "2026-12-13",
            "2026-12-14",
            "2026-12-15",
            "2026-12-16",
            "2026-12-17",
            "2026-12-18",
            "2026-12-19",
            "2026-12-20",
            "2026-12-21",
            "2026-12-22",
            "2026-12-23",
            "2026-12-24",
            "2026-12-25",
            "2026-12-26",
            "2026-12-27",
            "2026-12-28",
            "2026-12-29",
            "2026-12-30",
            "2026-12-31",
            "2027-01-01",
            "2027-01-02",
            "2027-01-03",
            "2027-01-04",
            "2027-01-05",
            "2027-01-06",
            "2027-01-07",
            "2027-01-08",
            "2027-01-09",
            "2027-01-10",
            "2027-01-11",
            "2027-01-12",
            "2027-01-13",
            "2027-01-14",
            "2027-01-15",
            "2027-01-16",
            "2027-01-17",
            "2027-01-18",
            "2027-01-19",
            "2027-01-20",
            "2027-01-21",
            "2027-01-22",
            "2027-01-23",
            "2027-01-24",
            "2027-01-25",
            "2027-01-26",
            "2027-01-27",
            "2027-01-28",
            "2027-01-29",
            "2027-01-30",
            "2027-01-31",
            "2027-02-01",
            "2027-02-02",
            "2027-02-03",
            "2027-02-04",
            "2027-02-05",
            "2027-02-06",
            "2027-02-07",
            "2027-02-08",
            "2027-02-09",
            "2027-02-10",
            "2027-02-11",
            "2027-02-12",
            "2027-02-13",
            "2027-02-14",
            "2027-02-15",
            "2027-02-16",
            "2027-02-17",
            "2027-02-18",
            "2027-02-19",
            "2027-02-20",
            "2027-02-21",
            "2027-02-22",
            "2027-02-23",
            "2027-02-24",
            "2027-02-25",
            "2027-02-26",
            "2027-02-27",
            "2027-02-28",
            "2027-03-01",
            "2027-03-02",
            "2027-03-03",
            "2027-03-04",
            "2027-03-05",
            "2027-03-06",
            "2027-03-07",
            "2027-03-08",
            "2027-03-09",
            "2027-03-10",
            "2027-03-11",
            "2027-03-12",
            "2027-03-13",
            "2027-03-14",
            "2027-03-15",
            "2027-03-16",
            "2027-03-17",
            "2027-03-18",
            "2027-03-19",
            "2027-03-20",
            "2027-03-21",
            "2027-03-22",
            "2027-03-23",
            "2027-03-24",
            "2027-03-25",
            "2027-03-26",
            "2027-03-27",
            "2027-03-28",
            "2027-03-29",
            "2027-03-30",
            "2027-03-31",
            "2027-04-01",
            "2027-04-02",
            "2027-04-03",
            "2027-04-04",
            "2027-04-05",
            "2027-04-06",
            "2027-04-07",
            "2027-04-08",
            "2027-04-09",
            "2027-04-10",
            "2027-04-11",
            "2027-04-12",
            "2027-04-13",
            "2027-04-14",
            "2027-04-15",
            "2027-04-16",
            "2027-04-17",
            "2027-04-18",
            "2027-04-19",
            "2027-04-20",
            "2027-04-21",
            "2027-04-22",
            "2027-04-23",
            "2027-04-24",
            "2027-04-25",
            "2027-04-26",
            "2027-04-27",
            "2027-04-28",
            "2027-04-29",
            "2027-04-30",
            "2027-05-01",
            "2027-05-02",
            "2027-05-03",
            "2027-05-04",
            "2027-05-05",
            "2027-05-06",
            "2027-05-07",
            "2027-05-08",
            "2027-05-09",
            "2027-05-10",
            "2027-05-11",
            "2027-05-12",
            "2027-05-13",
            "2027-05-14",
            "2027-05-15",
            "2027-05-16",
            "2027-05-17",
            "2027-05-18",
            "2027-05-19",
            "2027-05-20",
            "2027-05-21",
            "2027-05-22",
            "2027-05-23",
            "2027-05-24",
            "2027-05-25",
            "2027-05-26",
            "2027-05-27",
            "2027-05-28",
            "2027-05-29",
            "2027-05-30",
            "2027-05-31",
            "2027-06-01",
            "2027-06-02",
            "2027-06-03",
            "2027-06-04",
            "2027-06-05",
            "2027-06-06",
            "2027-06-07",
            "2027-06-08",
            "2027-06-09",
            "2027-06-10",
            "2027-06-11",
            "2027-06-12",
            "2027-06-13",
            "2027-06-14",
            "2027-06-15",
            "2027-06-16",
            "2027-06-17",
            "2027-06-18",
            "2027-06-19",
            "2027-06-20",
            "2027-06-21",
            "2027-06-22",
            "2027-06-23",
            "2027-06-24",
            "2027-06-25",
            "2027-06-26",
            "2027-06-27",
            "2027-06-28",
            "2027-06-29",
            "2027-06-30",
            "2027-07-01",
            "2027-07-02",
            "2027-07-03",
            "2027-07-04",
            "2027-07-05",
            "2027-07-06",
            "2027-07-07",
            "2027-07-08",
            "2027-07-09",
            "2027-07-10",
            "2027-07-11",
            "2027-07-12",
            "2027-07-13",
            "2027-07-14",
            "2027-07-15",
            "2027-07-16",
            "2027-07-17",
            "2027-07-18",
            "2027-07-19",
            "2027-07-20",
            "2027-07-21",
            "2027-07-22",
            "2027-07-23",
            "2027-07-24",
            "2027-07-25",
            "2027-07-26",
            "2027-07-27",
            "2027-07-28",
            "2027-07-29",
            "2027-07-30",
            "2027-07-31",
            "2027-08-01",
            "2027-08-02",
            "2027-08-03",
            "2027-08-04",
            "2027-08-05",
            "2027-08-06",
            "2027-08-07",
            "2027-08-08",
            "2027-08-09",
            "2027-08-10",
            "2027-08-11",
            "2027-08-12",
            "2027-08-13",
            "2027-08-14",
            "2027-08-15",
            "2027-08-16",
            "2027-08-17",
            "2027-08-18",
            "2027-08-19",
            "2027-08-20",
            "2027-08-21"
        ],
        "documents": [],
        "driveType": "chaffeured",
        "vehicle": {
            "id": "1611db2a-f4b2-4cf0-9dfd-5d79b3bd6a76",
            "driverId": "d551e9bc-293c-49a0-9cf2-6e2678e2f132",
            "vehicleMode": "Road",
            "vehicleMakeId": "97b05890-9c29-4419-a1cc-cae326fd3f84",
            "vehicleModelId": "7b3567eb-5f78-44eb-9012-94a82323727d",
            "vehicleColorId": "4c415b07-6578-49a7-8439-1e5e6542848b",
            "vehicleYear": "2020",
            "vehicleCategory": "vehicle",
            "vehicleSittingCapacity": 4,
            "vehicleFuelType": null,
            "vehicleGuideLine": "Test",
            "vehicleDoors": 0,
            "vehicleHasAirCondition": false,
            "smokingAllowed": false,
            "vehiclePlateNumber": "WA 003 SLR",
            "vehicleImages": [
                "https://treepz.s3.us-east-1.amazonaws.com/1688652148541-a46576cf-2503-4150-80cc-e3527e08246a.jpeg",
                "https://treepz.s3.us-east-1.amazonaws.com/1688652148541-3598d860-544d-4514-bff2-307136a9a7c7.jpeg",
                "https://treepz.s3.us-east-1.amazonaws.com/1688652148541-1805a20d-e290-4090-b7b9-757e354fc0c1.jpeg"
            ],
            "createdAt": "2023-07-05T16:08:07.986Z",
            "updatedAt": "2023-07-06T14:02:28.631Z",
            "companyId": null,
            "transportPartnerAdminId": null,
            "enterpriseAdminId": null,
            "vehicleLocation": "Surulere, Ikeja, Lagos, Nigeria",
            "vehicleLocationDetails": {
                "city": "Ikeja",
                "type": "Point",
                "country": "NG",
                "coordinates": [
                    3.348572,
                    6.498292999999999
                ],
                "formattedAddress": "Surulere, Ikeja, Lagos, Nigeria"
            },
            "vehicleMake": {
                "id": "97b05890-9c29-4419-a1cc-cae326fd3f84",
                "name": "TOYOTA",
                "isDisabled": false,
                "createdAt": "2023-03-10T11:44:22.396Z",
                "weight": 100,
                "updatedAt": "2023-04-11T13:35:55.852Z",
                "vehicleCategories": [
                    "cars_and_sedans",
                    "trucks",
                    "suvs",
                    "mini_vans",
                    "bus",
                    "luxury_vehicle",
                    "vehicle"
                ]
            },
            "vehicleModel": {
                "id": "7b3567eb-5f78-44eb-9012-94a82323727d",
                "name": "RAV4 Prime",
                "isDisabled": false,
                "iconUrl": null,
                "vehicleMakeId": "97b05890-9c29-4419-a1cc-cae326fd3f84",
                "weight": 0,
                "vehicleCategory": "suvs",
                "createdAt": "2023-03-15T14:47:31.704Z",
                "updatedAt": "2023-03-15T14:47:31.704Z"
            },
            "vehicleColor": {
                "id": "4c415b07-6578-49a7-8439-1e5e6542848b",
                "color": "Black",
                "hexCode": "#0d1116 ",
                "isDisabled": false,
                "createdAt": "2023-03-15T20:50:36.264Z",
                "updatedAt": "2023-03-24T08:55:11.273Z"
            },
            "vehicleAmenities": [
                {
                    "id": "b77f3eff-0810-4352-94e2-25c5b823e718",
                    "name": "Bluetooth",
                    "isDisabled": false,
                    "iconUrl": "https://treepz.s3.us-east-1.amazonaws.com/1679089020566-icon-2.png",
                    "createdAt": "2023-02-06T15:53:22.885Z",
                    "updatedAt": "2023-03-17T22:08:09.224Z"
                }
            ]
        }
    },
    {
        "id": "59ff00c0-6459-4afd-990e-62baeb1aad6f",
        "driverId": "a9b3e455-3e86-435f-ba27-24986210d594",
        "isAvailable": true,
        "isBooked": false,
        "airportTransfer": false,
        "interCity": false,
        "rentalBooking": true,
        "vehicleId": "1c5dbe1a-ac35-4103-8f2c-6939dd79ff7c",
        "createdAt": "2023-03-24T14:58:34.678Z",
        "updatedAt": "2023-11-27T03:30:00.229Z",
        "locationKeywords": [
            "ikeja",
            "lagos",
            "nigeria"
        ],
        "longitude": 3.3514863,
        "latitude": 6.601838,
        "tripCoverageRange": null,
        "tripType": "hired",
        "couponId": null,
        "description": null,
        "discountId": null,
        "pricePerDay": 6000,
        "pricePerHour": 500,
        "pricePerMonth": 180000,
        "pricePerWeek": 42000,
        "halfDayPrice": 3000,
        "airportTransferPrice": 0,
        "country": "NIGERIA",
        "currency": "NGN",
        "currencySymbol": "₦",
        "timezone": "Africa/Lagos",
        "promotionId": "8f5a1e13-0317-4c93-99f4-012d4a170aa7",
        "promotionExpiry": "2023-05-08T08:27:14.468Z",
        "promotionActive": false,
        "availableTimes": [
            "2023-11-27",
            "2023-11-28",
            "2023-11-29",
            "2023-11-30",
            "2023-12-01",
            "2023-12-02",
            "2023-12-03",
            "2023-12-04",
            "2023-12-05",
            "2023-12-06",
            "2023-12-07",
            "2023-12-08",
            "2023-12-09",
            "2023-12-10",
            "2023-12-11",
            "2023-12-12",
            "2023-12-13",
            "2023-12-14",
            "2023-12-15",
            "2023-12-16",
            "2023-12-17",
            "2023-12-18",
            "2023-12-19",
            "2023-12-20",
            "2023-12-21",
            "2023-12-22",
            "2023-12-23",
            "2023-12-24",
            "2023-12-25",
            "2023-12-26",
            "2023-12-27",
            "2023-12-28",
            "2023-12-29",
            "2023-12-30",
            "2023-12-31",
            "2024-01-01",
            "2024-01-02",
            "2024-01-03",
            "2024-01-04",
            "2024-01-05",
            "2024-01-06",
            "2024-01-07",
            "2024-01-08",
            "2024-01-09",
            "2024-01-10",
            "2024-01-11",
            "2024-01-12",
            "2024-01-13",
            "2024-01-14",
            "2024-01-15",
            "2024-01-16",
            "2024-01-17",
            "2024-01-18",
            "2024-01-19",
            "2024-01-20",
            "2024-01-21",
            "2024-01-22",
            "2024-01-23",
            "2024-01-24",
            "2024-01-25",
            "2024-01-26",
            "2024-01-27",
            "2024-01-28",
            "2024-01-29",
            "2024-01-30",
            "2024-01-31"
        ],
        "documents": [],
        "driveType": "chaffeured",
        "vehicle": {
            "id": "1c5dbe1a-ac35-4103-8f2c-6939dd79ff7c",
            "driverId": "a9b3e455-3e86-435f-ba27-24986210d594",
            "vehicleMode": "Road",
            "vehicleMakeId": "b68fc801-cf70-4eca-a12b-cf771cbfe0e4",
            "vehicleModelId": "3f3ce134-7797-4420-8b19-d97cab191f99",
            "vehicleColorId": "105b6f97-7448-4012-b79d-65b83beda398",
            "vehicleYear": "2022",
            "vehicleCategory": "luxury_vehicle",
            "vehicleSittingCapacity": 5,
            "vehicleFuelType": null,
            "vehicleGuideLine": "Comfort",
            "vehicleDoors": 0,
            "vehicleHasAirCondition": false,
            "smokingAllowed": true,
            "vehiclePlateNumber": "JKV XYZ",
            "vehicleImages": [
                "https://treepz.s3.us-east-1.amazonaws.com/1679669863073-img_0831.jpg",
                "https://treepz.s3.us-east-1.amazonaws.com/1679669863077-img_0833.jpg",
                "https://treepz.s3.us-east-1.amazonaws.com/1679669863109-img_0832.jpg",
                "https://treepz.s3.us-east-1.amazonaws.com/1686134063224-0b6479a2-e7f5-4f3e-8a29-05293218a71b.jpeg",
                "https://treepz.s3.us-east-1.amazonaws.com/1686134323325-9215550e-4489-493f-8023-38c59ae2f65b.jpeg",
                "https://treepz.s3.us-east-1.amazonaws.com/1686134068387-326b5351-633d-4f44-8461-12754989de6e.png",
                "https://treepz.s3.us-east-1.amazonaws.com/1686134068465-0b6479a2-e7f5-4f3e-8a29-05293218a71b.jpeg",
                "https://treepz.s3.us-east-1.amazonaws.com/1686134068465-326b5351-633d-4f44-8461-12754989de6e.png",
                "https://treepz.s3.us-east-1.amazonaws.com/1686134068664-0b6479a2-e7f5-4f3e-8a29-05293218a71b.jpeg",
                "https://treepz.s3.us-east-1.amazonaws.com/1686134068664-326b5351-633d-4f44-8461-12754989de6e.png"
            ],
            "createdAt": "2023-03-24T14:37:43.334Z",
            "updatedAt": "2023-06-07T11:17:07.860Z",
            "companyId": null,
            "transportPartnerAdminId": null,
            "enterpriseAdminId": null,
            "vehicleLocation": "Ikeja, Lagos, Nigeria",
            "vehicleLocationDetails": {
                "city": "Ikeja",
                "type": "Point",
                "country": "NG",
                "coordinates": [
                    3.3514863,
                    6.601838
                ],
                "formattedAddress": "Ikeja, Lagos, Nigeria"
            },
            "vehicleMake": {
                "id": "b68fc801-cf70-4eca-a12b-cf771cbfe0e4",
                "name": "Rolls-Royce",
                "isDisabled": false,
                "createdAt": "2023-03-24T13:59:27.496Z",
                "weight": 0,
                "updatedAt": "2023-03-24T14:05:15.672Z",
                "vehicleCategories": [
                    "luxury_vehicle"
                ]
            },
            "vehicleModel": {
                "id": "3f3ce134-7797-4420-8b19-d97cab191f99",
                "name": "Silver Seraph",
                "isDisabled": false,
                "iconUrl": null,
                "vehicleMakeId": "b68fc801-cf70-4eca-a12b-cf771cbfe0e4",
                "weight": 0,
                "vehicleCategory": "luxury_vehicle",
                "createdAt": "2023-03-24T14:05:58.067Z",
                "updatedAt": "2023-03-24T15:00:45.675Z"
            },
            "vehicleColor": {
                "id": "105b6f97-7448-4012-b79d-65b83beda398",
                "color": "Cream",
                "hexCode": "#f7edd5 ",
                "isDisabled": false,
                "createdAt": "2023-03-15T20:50:36.264Z",
                "updatedAt": "2023-03-24T10:22:48.682Z"
            },
            "vehicleAmenities": [
                {
                    "id": "b77f3eff-0810-4352-94e2-25c5b823e718",
                    "name": "Bluetooth",
                    "isDisabled": false,
                    "iconUrl": "https://treepz.s3.us-east-1.amazonaws.com/1679089020566-icon-2.png",
                    "createdAt": "2023-02-06T15:53:22.885Z",
                    "updatedAt": "2023-03-17T22:08:09.224Z"
                },
                {
                    "id": "81697304-bd81-41fc-8d0b-239516e0f218",
                    "name": "Bin",
                    "isDisabled": false,
                    "iconUrl": "https://treepz.s3.us-east-1.amazonaws.com/1679090918352-icon.png",
                    "createdAt": "2023-03-17T22:08:38.446Z",
                    "updatedAt": "2023-03-17T22:08:38.446Z"
                },
                {
                    "id": "41f70b50-a5bb-4c5c-9cd1-2a02ef5b80d7",
                    "name": "Sunroof",
                    "isDisabled": false,
                    "iconUrl": "https://treepz.s3.us-east-1.amazonaws.com/1679090968660-icon-3.png",
                    "createdAt": "2023-03-17T22:09:28.718Z",
                    "updatedAt": "2023-03-17T22:09:28.718Z"
                },
                {
                    "id": "ad74a198-a1fd-4bad-9c9f-448f5602764d",
                    "name": "Pets friendly",
                    "isDisabled": false,
                    "iconUrl": "https://treepz.s3.us-east-1.amazonaws.com/1679091004122-pets%201.png",
                    "createdAt": "2023-03-17T22:10:04.173Z",
                    "updatedAt": "2023-03-17T22:10:04.173Z"
                }
            ]
        }
    },
    {
        "id": "b838bccc-ae6a-4aeb-9eab-ba37e2fccd51",
        "driverId": "a9b3e455-3e86-435f-ba27-24986210d594",
        "isAvailable": true,
        "isBooked": false,
        "airportTransfer": false,
        "interCity": false,
        "rentalBooking": true,
        "vehicleId": "03f66c71-e684-478b-87bb-451dfea0edf9",
        "createdAt": "2023-03-30T23:13:20.989Z",
        "updatedAt": "2023-11-27T03:30:00.242Z",
        "locationKeywords": [
            "ikoyi",
            "106104",
            "lagos",
            "nigeria"
        ],
        "longitude": 3.433333,
        "latitude": 6.449999999999999,
        "tripCoverageRange": null,
        "tripType": "hired",
        "couponId": null,
        "description": null,
        "discountId": null,
        "pricePerDay": 1200000,
        "pricePerHour": 100000,
        "pricePerMonth": 36000000,
        "pricePerWeek": 8400000,
        "halfDayPrice": 600000,
        "airportTransferPrice": 0,
        "country": "NIGERIA",
        "currency": "NGN",
        "currencySymbol": "₦",
        "timezone": "Africa/Lagos",
        "promotionId": "edfda4c1-009f-4ff9-b336-e13c5964f654",
        "promotionExpiry": "2023-04-17T20:27:56.769Z",
        "promotionActive": false,
        "availableTimes": [
            "2023-11-27",
            "2023-11-28",
            "2023-11-29",
            "2023-11-30",
            "2023-12-01",
            "2023-12-02",
            "2023-12-03",
            "2023-12-04",
            "2023-12-05",
            "2023-12-06",
            "2023-12-07",
            "2023-12-08",
            "2023-12-09",
            "2023-12-10",
            "2023-12-11",
            "2023-12-12",
            "2023-12-13",
            "2023-12-14",
            "2023-12-15",
            "2023-12-16",
            "2023-12-17",
            "2023-12-18",
            "2023-12-19",
            "2023-12-20",
            "2023-12-21",
            "2023-12-22",
            "2023-12-23",
            "2023-12-24",
            "2023-12-25",
            "2023-12-26",
            "2023-12-27",
            "2023-12-28",
            "2023-12-29",
            "2023-12-30",
            "2023-12-31",
            "2024-01-01",
            "2024-01-02",
            "2024-01-03",
            "2024-01-04",
            "2024-01-05",
            "2024-01-06",
            "2024-01-07",
            "2024-01-08",
            "2024-01-09",
            "2024-01-10",
            "2024-01-11",
            "2024-01-12",
            "2024-01-13",
            "2024-01-14",
            "2024-01-15",
            "2024-01-16",
            "2024-01-17",
            "2024-01-18",
            "2024-01-19",
            "2024-01-20",
            "2024-01-21",
            "2024-01-22",
            "2024-01-23",
            "2024-01-24",
            "2024-01-25",
            "2024-01-26",
            "2024-01-27",
            "2024-01-28",
            "2024-01-29",
            "2024-01-30",
            "2024-01-31"
        ],
        "documents": [],
        "driveType": "chaffeured",
        "vehicle": {
            "id": "03f66c71-e684-478b-87bb-451dfea0edf9",
            "driverId": "a9b3e455-3e86-435f-ba27-24986210d594",
            "vehicleMode": "Water",
            "vehicleMakeId": "415477f8-5e8c-489b-bc98-86448b373598",
            "vehicleModelId": "756a536c-e9bb-4849-9be2-353ad515f954",
            "vehicleColorId": "3b03e975-87a3-4d15-a39c-d2b3f4b7fce3",
            "vehicleYear": "2022",
            "vehicleCategory": "yatch",
            "vehicleSittingCapacity": 8,
            "vehicleFuelType": null,
            "vehicleGuideLine": "Exhilarating performance and pitch-perfect handling is fused with Wally's taught aesthetic to offer guests a truly sublime experience on the water.",
            "vehicleDoors": 0,
            "vehicleHasAirCondition": false,
            "smokingAllowed": true,
            "vehiclePlateNumber": "XJV",
            "vehicleImages": [
                "https://treepz.s3.us-east-1.amazonaws.com/1680215137647-img_0913.jpg",
                "https://treepz.s3.us-east-1.amazonaws.com/1680215137648-img_0912.jpg",
                "https://treepz.s3.us-east-1.amazonaws.com/1686597320634-966db84b-72b8-4051-8817-465bc58897c8.jpeg",
                "https://treepz.s3.us-east-1.amazonaws.com/1686120937341-b135b004-fb38-4e1a-a9e4-1fe0fec115b2.jpeg",
                "https://treepz.s3.us-east-1.amazonaws.com/1686601348481-16eb3257-8340-4aa9-9c27-de6e3c3a87f7.jpeg",
                "https://treepz.s3.us-east-1.amazonaws.com/1686597320801-a2cf029d-5c35-4c28-807b-4150c8decc24.jpeg",
                "https://treepz.s3.us-east-1.amazonaws.com/1686599511821-bdaa86e5-97e1-4e3d-927f-8e247ef9d8db.jpeg",
                "https://treepz.s3.us-east-1.amazonaws.com/1686602592926-624b8c9f-6399-4499-99ea-3b4f85e738f2.jpeg",
                "https://treepz.s3.us-east-1.amazonaws.com/1686129195613-71828740-c99e-445f-9bcf-30f313ce8dd2.jpeg",
                "https://treepz.s3.us-east-1.amazonaws.com/1686129195616-71828740-c99e-445f-9bcf-30f313ce8dd2.jpeg"
            ],
            "createdAt": "2023-03-30T22:23:27.934Z",
            "updatedAt": "2023-06-12T20:43:13.019Z",
            "companyId": null,
            "transportPartnerAdminId": null,
            "enterpriseAdminId": null,
            "vehicleLocation": "Ikoyi, 106104, Lagos, Nigeria",
            "vehicleLocationDetails": {
                "city": "Lagos",
                "type": "Point",
                "country": "NG",
                "zipcode": "106104",
                "coordinates": [
                    3.433333,
                    6.449999999999999
                ],
                "formattedAddress": "Ikoyi, 106104, Lagos, Nigeria"
            },
            "vehicleMake": {
                "id": "415477f8-5e8c-489b-bc98-86448b373598",
                "name": "Wally",
                "isDisabled": false,
                "createdAt": "2023-03-30T12:44:09.415Z",
                "weight": 0,
                "updatedAt": "2023-03-30T12:44:47.589Z",
                "vehicleCategories": [
                    "yatch"
                ]
            },
            "vehicleModel": {
                "id": "756a536c-e9bb-4849-9be2-353ad515f954",
                "name": "power58X",
                "isDisabled": false,
                "iconUrl": null,
                "vehicleMakeId": "415477f8-5e8c-489b-bc98-86448b373598",
                "weight": 0,
                "vehicleCategory": "yatch",
                "createdAt": "2023-03-30T12:45:46.914Z",
                "updatedAt": "2023-03-30T12:46:56.074Z"
            },
            "vehicleColor": {
                "id": "3b03e975-87a3-4d15-a39c-d2b3f4b7fce3",
                "color": "Blue",
                "hexCode": "#08e9fa ",
                "isDisabled": false,
                "createdAt": "2023-03-15T20:50:36.264Z",
                "updatedAt": "2023-03-15T20:50:36.264Z"
            },
            "vehicleAmenities": [
                {
                    "id": "b77f3eff-0810-4352-94e2-25c5b823e718",
                    "name": "Bluetooth",
                    "isDisabled": false,
                    "iconUrl": "https://treepz.s3.us-east-1.amazonaws.com/1679089020566-icon-2.png",
                    "createdAt": "2023-02-06T15:53:22.885Z",
                    "updatedAt": "2023-03-17T22:08:09.224Z"
                },
                {
                    "id": "81697304-bd81-41fc-8d0b-239516e0f218",
                    "name": "Bin",
                    "isDisabled": false,
                    "iconUrl": "https://treepz.s3.us-east-1.amazonaws.com/1679090918352-icon.png",
                    "createdAt": "2023-03-17T22:08:38.446Z",
                    "updatedAt": "2023-03-17T22:08:38.446Z"
                }
            ]
        }
    },
    {
        "id": "2f7d1be8-e56a-4b36-8438-f3195ed79cbf",
        "driverId": "a9b3e455-3e86-435f-ba27-24986210d594",
        "isAvailable": true,
        "isBooked": false,
        "airportTransfer": false,
        "interCity": false,
        "rentalBooking": true,
        "vehicleId": "108bc18c-66fc-4524-8e2c-64e80516437f",
        "createdAt": "2023-05-16T11:56:17.127Z",
        "updatedAt": "2023-11-27T03:30:00.248Z",
        "locationKeywords": [
            "lagos",
            "nigeria"
        ],
        "longitude": 3.3792057,
        "latitude": 6.5243793,
        "tripCoverageRange": null,
        "tripType": "hired",
        "couponId": null,
        "description": null,
        "discountId": null,
        "pricePerDay": 12000,
        "pricePerHour": 1000,
        "pricePerMonth": 360000,
        "pricePerWeek": 84000,
        "halfDayPrice": 6000,
        "airportTransferPrice": 0,
        "country": "NIGERIA",
        "currency": "NGN",
        "currencySymbol": "₦",
        "timezone": "Africa/Lagos",
        "promotionId": null,
        "promotionExpiry": null,
        "promotionActive": false,
        "availableTimes": [
            "2023-11-27",
            "2023-11-28",
            "2023-11-29",
            "2023-11-30",
            "2023-12-01",
            "2023-12-02",
            "2023-12-03",
            "2023-12-04",
            "2023-12-05",
            "2023-12-06",
            "2023-12-07",
            "2023-12-08",
            "2023-12-09",
            "2023-12-10",
            "2023-12-11",
            "2023-12-12",
            "2023-12-13",
            "2023-12-14",
            "2023-12-15",
            "2023-12-16",
            "2023-12-17",
            "2023-12-18",
            "2023-12-19",
            "2023-12-20",
            "2023-12-21",
            "2023-12-22",
            "2023-12-23",
            "2023-12-24",
            "2023-12-25",
            "2023-12-26",
            "2023-12-27",
            "2023-12-28",
            "2023-12-29",
            "2023-12-30",
            "2023-12-31",
            "2024-01-01",
            "2024-01-02",
            "2024-01-03",
            "2024-01-04",
            "2024-01-05",
            "2024-01-06",
            "2024-01-07",
            "2024-01-08",
            "2024-01-09",
            "2024-01-10",
            "2024-01-11",
            "2024-01-12",
            "2024-01-13",
            "2024-01-14",
            "2024-01-15",
            "2024-01-16",
            "2024-01-17",
            "2024-01-18",
            "2024-01-19",
            "2024-01-20",
            "2024-01-21",
            "2024-01-22",
            "2024-01-23",
            "2024-01-24",
            "2024-01-25",
            "2024-01-26",
            "2024-01-27",
            "2024-01-28",
            "2024-01-29",
            "2024-01-30",
            "2024-01-31"
        ],
        "documents": [],
        "driveType": "chaffeured",
        "vehicle": {
            "id": "108bc18c-66fc-4524-8e2c-64e80516437f",
            "driverId": "a9b3e455-3e86-435f-ba27-24986210d594",
            "vehicleMode": "Road",
            "vehicleMakeId": "d52fdc53-b543-4413-9417-5ad36658b9bb",
            "vehicleModelId": "e5312b5c-002e-415a-b2a6-46a45e5a7cc7",
            "vehicleColorId": "6cb52de7-d005-4eb0-ac3d-ac503cb4a882",
            "vehicleYear": "2020",
            "vehicleCategory": "suvs",
            "vehicleSittingCapacity": 10,
            "vehicleFuelType": null,
            "vehicleGuideLine": "Works for me",
            "vehicleDoors": 0,
            "vehicleHasAirCondition": false,
            "smokingAllowed": false,
            "vehiclePlateNumber": "XGH",
            "vehicleImages": [
                "https://treepz.s3.us-east-1.amazonaws.com/1684238150332-d22e381c5ed7.png",
                "https://treepz.s3.us-east-1.amazonaws.com/1684238150338-7bd3c1208f14.png",
                "https://treepz.s3.us-east-1.amazonaws.com/1684238150347-a0b4a991f013.png",
                "https://treepz.s3.us-east-1.amazonaws.com/1684238150355-eca96200a99a.png",
                "https://treepz.s3.us-east-1.amazonaws.com/1684238150365-7eadd0ee32a5.png",
                "https://treepz.s3.us-east-1.amazonaws.com/1686153206016-5aac05a1-772a-423b-8088-a23bb54b1808.jpg",
                "https://treepz.s3.us-east-1.amazonaws.com/1686599899448-f283a37f-e5cc-4945-b9fc-9646a7789f94.jpeg",
                "https://treepz.s3.us-east-1.amazonaws.com/1686599899563-1f6531ab-a33c-47e2-bef8-3c75d6dd7dfa.jpeg",
                "https://treepz.s3.us-east-1.amazonaws.com/1686147501685-21c3d91e-37ca-46b2-84ac-b9b2c1a8df0c.jpeg"
            ],
            "createdAt": "2023-05-16T11:54:27.238Z",
            "updatedAt": "2023-06-12T19:58:19.652Z",
            "companyId": null,
            "transportPartnerAdminId": null,
            "enterpriseAdminId": null,
            "vehicleLocation": "Lagos, Nigeria",
            "vehicleLocationDetails": {
                "city": "Lagos",
                "type": "Point",
                "country": "NG",
                "coordinates": [
                    3.3792057,
                    6.5243793
                ],
                "formattedAddress": "Lagos, Nigeria"
            },
            "vehicleMake": {
                "id": "d52fdc53-b543-4413-9417-5ad36658b9bb",
                "name": "ACURA",
                "isDisabled": false,
                "createdAt": "2023-03-10T11:44:22.396Z",
                "weight": 0,
                "updatedAt": "2023-03-10T11:44:22.396Z",
                "vehicleCategories": [
                    "cars_and_sedans",
                    "trucks",
                    "suvs",
                    "mini_vans",
                    "bus",
                    "luxury_vehicle",
                    "vehicle"
                ]
            },
            "vehicleModel": {
                "id": "e5312b5c-002e-415a-b2a6-46a45e5a7cc7",
                "name": "RDX",
                "isDisabled": false,
                "iconUrl": null,
                "vehicleMakeId": "d52fdc53-b543-4413-9417-5ad36658b9bb",
                "weight": 0,
                "vehicleCategory": "suvs",
                "createdAt": "2023-03-15T14:00:20.848Z",
                "updatedAt": "2023-03-15T14:00:20.848Z"
            },
            "vehicleColor": {
                "id": "6cb52de7-d005-4eb0-ac3d-ac503cb4a882",
                "color": "White",
                "hexCode": "#FFFFFF",
                "isDisabled": false,
                "createdAt": "2023-02-06T19:24:59.933Z",
                "updatedAt": "2023-02-06T19:24:59.933Z"
            },
            "vehicleAmenities": [
                {
                    "id": "b77f3eff-0810-4352-94e2-25c5b823e718",
                    "name": "Bluetooth",
                    "isDisabled": false,
                    "iconUrl": "https://treepz.s3.us-east-1.amazonaws.com/1679089020566-icon-2.png",
                    "createdAt": "2023-02-06T15:53:22.885Z",
                    "updatedAt": "2023-03-17T22:08:09.224Z"
                },
                {
                    "id": "81697304-bd81-41fc-8d0b-239516e0f218",
                    "name": "Bin",
                    "isDisabled": false,
                    "iconUrl": "https://treepz.s3.us-east-1.amazonaws.com/1679090918352-icon.png",
                    "createdAt": "2023-03-17T22:08:38.446Z",
                    "updatedAt": "2023-03-17T22:08:38.446Z"
                }
            ]
        }
    }
]

const CarGridShow = () => {
    const seat = useRef();
    const progressRef = useRef(null);
    const [completeData, setCompleteData] = useState([]);
    const [vehiclesData, setVehiclesData] = useState([]);
    const [prevData, setPrevData] = useState([]); // handles data before a filter is applied
    // const [minPrice, setMinPrice] = useState(0)
    // const [maxPrice, setMaxPrice] = useState(0)
    const [selfDrivenChecked, setSelfDrivenChecked] = useState(false)
    const [chauffeuredChecked, setChauffeuredChecked] = useState(false)
    const [fullDayChecked, setFullDayChecked] = useState(false)
    const [hourlyChecked, setHourlyChecked] = useState(false)
    const [halfDayChecked, setHalfDayChecked] = useState(false)
    const [weeklyChecked, setWeeklyChecked] = useState(false)
    const [monthlyChecked, setMonthlyChecked] = useState(false)
    const [sedanChecked, setSedanChecked] = useState(false)
    const [luxuriousChecked, setLuxuriousChecked] = useState(false)
    const [commercialChecked, setCommercialChecked] = useState(false)
    const [yatchChecked, setYatchChecked] = useState(false)
    const [suvChecked, setSuvChecked] = useState(false)
    const [busChecked, setBusChecked] = useState(false)
    const [seats, setSeats] = useState(4)
    const [seatsValue, setSeatsValue] = useState(4)
    const [toyotaChecked, setToyotaChecked] = useState(false)
    const [lexusChecked, setLexusChecked] = useState(false)
    const [hondaChecked, setHondaChecked] = useState(false)
    const [acuraChecked, setAcuraChecked] = useState(false)
    const [royceChecked, setRoyceChecked] = useState(false)
    const [ac, setAc] = useState(false)
    const [bluetooth, setBluetooth] = useState(false)
    const [babySit, setBabySit] = useState(false)
    const [wifi, setWifi] = useState(false)
    const [priceFiltered, setPriceFiltered] = useState(false)
    const [resultsCount, setResultsCount] = useState(0)
    const [filters, setFilters] = useState({})

    const router = useRouter()
    const dispatch = useDispatch()

    const { vehicles, isLoading, isError } = fetchVehicleListing();
    console.log({vehicles, isLoading, isError});
    const {minPrice, maxPrice} = useSelector(state=>state.marketplace);
    console.log({minPrice, maxPrice})

    const [minValue, setMinValue] = useState(minPrice);
    const [maxValue, setMaxValue] = useState(maxPrice);

    useEffect(() => {
        if (minValue === 0 || maxValue === 0){
            setMinValue(minPrice)
            setMaxValue(maxPrice)
        }
    }, [minPrice, maxPrice]);

    useEffect(() => {
        // add condition to make it load only if vehicle data is empty
        const headingSize = isMobile? 24: 40;

        // if (isLoading) return <Spinner/>
        // add available filter
        // add filter for intercity or rental or airport transfer

        // restructure the fetched data to get the keys we need
        if (vehicles === undefined){
            let data = vehicles?.data;
            dispatch(setAllVehicleListings(data));
            data = data?.map(({id,currencySymbol,driveType,pricePerDay,vehicle,vehicleId,isAvailable,
                                  pricePerHour, pricePerMonth, pricePerWeek, halfDayPrice,availableTimes}) =>
                ({id,currencySymbol,driveType,pricePerDay,vehicle,vehicleId,isAvailable,
                    pricePerHour, pricePerMonth, pricePerWeek, halfDayPrice,availableTimes}))

            setCompleteData(data);
            // setVehiclesData(data); // actual
            setVehiclesData(FEATURED_CARS); // dummy data
            // dispatch(setVehiclesListing(data)) // actual
            dispatch(setVehiclesListing(FEATURED_CARS)) // dummy data
            // dispatch(setFilterResult(data)) // actual
            dispatch(setFilterResult(FEATURED_CARS)) // dummy data
            console.log({FEATURED_CARS})
            // console.log({data})
        }

    },[isLoading,router])

    let results = useSelector(state => state.marketplace?.filterResult)
    let listings = useSelector(state => state.marketplace?.vehiclesListing)
    // console.log("Selector results: ", results)

    useEffect(() => {
        if (results?.length){
            const minMax = getMinMaxValues(results,"pricePerDay")
            setMinValue(minMax?.min)
            setMaxValue(minMax?.max)
            // console.log({minMax})
            dispatch(setMinPrice(minMax?.min))
            dispatch(setMaxPrice(minMax?.max))
            console.log({minMax})
        }

    },[isLoading])

    useEffect(() => {
        setResultsCount(results?.length)
    }, [results]);

    // useEffect(() => {
    //     if (vehiclesData?.length){
    //         const minMax = getMinMaxValues(vehiclesData,"pricePerDay")
    //         setMinPrice(minMax?.min)
    //         setMaxPrice(minMax?.max)
    //         console.log({minMax})
    //     }
    //
    // },[vehiclesData])

    //sample amenities filtering
    useEffect(() => {
        if (vehiclesData?.length > 0){
            const pw = filterPriceBetween(vehiclesData,24000,30000)
            console.log({pw});
        }

    },[vehiclesData])

    const handleSelfDrivenFilter = async () => {
        if (chauffeuredChecked){
            handleChaufferedFilter()
        }
        let f = filters
        if (!selfDrivenChecked){
            if (f?.driveType){
                f?.driveType?.push('selfDriven')
            }
            else{
                f['driveType'] = ['selfDriven']
            }
            console.log({f})
            setFilters(f)
        }
        else{
            if (f?.driveType?.includes('selfDriven')){
                console.log("It includes")
                let indexOf = f?.driveType?.indexOf('selfDriven')
                f?.driveType?.splice(indexOf,1)
                console.log("Inner f: ",f)
                console.log({indexOf})
            }
            // console.log({f})
            setFilters(f)
        }
        console.log("final f: ", f)

        const filteredData = multipleFilter(listings,f)
        // console.log({filteredData})
        dispatch(setFilterResult(filteredData))
        setSelfDrivenChecked(prevState => !prevState)
    }

    const handleFullDayFilter = async () => {
        let f = filters
        if (!fullDayChecked){
            if (f?.duration){
                f?.duration?.push('daily')
            }
            else{
                f['duration'] = ['daily']
            }
            console.log({f})
            setFilters(f)
        }
        else{
            if (f?.duration?.includes('daily')){
                console.log("It includes")
                let indexOf = f?.duration?.indexOf('daily')
                f?.duration?.splice(indexOf,1)
                console.log("Inner f: ",f)
                console.log({indexOf})
            }
            // console.log({f})
            setFilters(f)
        }
        console.log("final f: ", f)

        const filteredData = multipleFilter(listings,f)
        // console.log({filteredData})
        dispatch(setFilterResult(filteredData))

        setFullDayChecked(prevState => !prevState)
    }

    const handleChaufferedFilter = async () => {
        if (selfDrivenChecked){
            handleSelfDrivenFilter()
        }

        let f = filters
        if (!chauffeuredChecked){
            if (f?.driveType){
                f?.driveType?.push('chaffeured')
            }
            else{
                f['driveType'] = ['chaffeured']
            }
            console.log({f})
            setFilters(f)
        }
        else{
            if (f?.driveType?.includes('chaffeured')){
                console.log("It includes")
                let indexOf = f?.driveType?.indexOf('chaffeured')
                f?.driveType?.splice(indexOf,1)
                console.log("Inner f: ",f)
                console.log({indexOf})
            }
            // console.log({f})
            setFilters(f)
        }
        console.log("final f: ", f)

        const filteredData = multipleFilter(listings,f)
        // console.log({filteredData})
        dispatch(setFilterResult(filteredData))

        setChauffeuredChecked(prevState => !prevState)
    }

    const handleLuxuriousFilter = async () => {
        // if (selfDrivenChecked){
        //     handleSelfDrivenFilter()
        // }

        let f = filters
        if (!luxuriousChecked){
            if (f?.vehicleType){
                f?.vehicleType?.push('luxuty')
            }
            else{
                f['vehicleType'] = ['luxury']
            }
            console.log({f})
            setFilters(f)
        }
        else{
            if (f?.vehicleType?.includes('luxury')){
                console.log("It includes")
                let indexOf = f?.vehicleType?.indexOf('luxury')
                f?.vehicleType?.splice(indexOf,1)
                console.log("Inner f: ",f)
                console.log({indexOf})
            }
            // console.log({f})
            setFilters(f)
        }
        console.log("final f: ", f)

        const filteredData = multipleFilter(listings,f)
        // console.log({filteredData})
        dispatch(setFilterResult(filteredData))

        setLuxuriousChecked(prevState => !prevState)
    }

    const handleHourlyFilter = async () => {
        let f = filters
        if (!hourlyChecked){
            if (f?.duration){
                f?.duration?.push('hourly')
            }
            else{
                f['duration'] = ['hourly']
            }
            console.log({f})
            setFilters(f)
        }
        else{
            if (f?.duration?.includes('hourly')){
                console.log("It includes")
                let indexOf = f?.duration?.indexOf('hourly')
                f?.duration?.splice(indexOf,1)
                console.log("Inner f: ",f)
                console.log({indexOf})
            }
            // console.log({f})
            setFilters(f)
        }
        console.log("final f: ", f)

        const filteredData = multipleFilter(listings,f)
        // console.log({filteredData})
        dispatch(setFilterResult(filteredData))

        setHourlyChecked(prevState => !prevState)
    }

    const handleHalfDayFilter = async () => {
        let f = filters
        if (!halfDayChecked){
            if (f?.duration){
                f?.duration?.push('halfDay')
            }
            else{
                f['duration'] = ['halfDay']
            }
            console.log({f})
            setFilters(f)
        }
        else{
            if (f?.duration?.includes('halfDay')){
                console.log("It includes")
                let indexOf = f?.duration?.indexOf('halfDay')
                f?.duration?.splice(indexOf,1)
                console.log("Inner f: ",f)
                console.log({indexOf})
            }
            // console.log({f})
            setFilters(f)
        }
        console.log("final f: ", f)

        const filteredData = multipleFilter(listings,f)
        // console.log({filteredData})
        dispatch(setFilterResult(filteredData))

        setHalfDayChecked(prevState => !prevState)
    }

    const handleWeeklyFilter = async () => {
        let f = filters
        if (!weeklyChecked){
            if (f?.duration){
                f?.duration?.push('weekly')
            }
            else{
                f['duration'] = ['weekly']
            }
            console.log({f})
            setFilters(f)
        }
        else{
            if (f?.duration?.includes('weekly')){
                console.log("It includes")
                let indexOf = f?.duration?.indexOf('weekly')
                f?.duration?.splice(indexOf,1)
                console.log("Inner f: ",f)
                console.log({indexOf})
            }
            // console.log({f})
            setFilters(f)
        }
        console.log("final f: ", f)

        const filteredData = multipleFilter(listings,f)
        // console.log({filteredData})
        dispatch(setFilterResult(filteredData))

        setWeeklyChecked(prevState => !prevState)
    }

    const handleMonthlyFilter = async () => {
        let f = filters
        if (!monthlyChecked){
            if (f?.duration){
                f?.duration?.push('monthly')
            }
            else{
                f['duration'] = ['monthly']
            }
            console.log({f})
            setFilters(f)
        }
        else{
            if (f?.duration?.includes('monthly')){
                console.log("It includes")
                let indexOf = f?.duration?.indexOf('monthly')
                f?.duration?.splice(indexOf,1)
                console.log("Inner f: ",f)
                console.log({indexOf})
            }
            // console.log({f})
            setFilters(f)
        }
        console.log("final f: ", f)

        const filteredData = multipleFilter(listings,f)
        // console.log({filteredData})
        dispatch(setFilterResult(filteredData))

        setMonthlyChecked(prevState => !prevState)
    }

    const handleSedanClicked = async () => {
        let f = filters
        if (!sedanChecked){
            if (f?.vehicleType){
                f?.vehicleType?.push('sedan')
            }
            else{
                f['vehicleType'] = ['sedan']
            }
            console.log({f})
            setFilters(f)
        }
        else{
            if (f?.vehicleType?.includes('sedan')){
                console.log("It includes")
                let indexOf = f?.vehicleType?.indexOf('sedan')
                f?.vehicleType?.splice(indexOf,1)
                console.log("Inner f: ",f)
                console.log({indexOf})
            }
            // console.log({f})
            setFilters(f)
        }
        console.log("final f: ", f)

        const filteredData = multipleFilter(listings,f)
        // console.log({filteredData})
        dispatch(setFilterResult(filteredData))

        setSedanChecked(prevState => !prevState)
    }

    const handleBusClicked = async () => {
        let f = filters
        if (!busChecked){
            if (f?.vehicleType){
                f?.vehicleType?.push('bus')
            }
            else{
                f['vehicleType'] = ['bus']
            }
            console.log({f})
            setFilters(f)
        }
        else{
            if (f?.vehicleType?.includes('bus')){
                console.log("It includes")
                let indexOf = f?.vehicleType?.indexOf('bus')
                f?.vehicleType?.splice(indexOf,1)
                console.log("Inner f: ",f)
                console.log({indexOf})
            }
            // console.log({f})
            setFilters(f)
        }
        console.log("final f: ", f)

        const filteredData = multipleFilter(listings,f)
        // console.log({filteredData})
        dispatch(setFilterResult(filteredData))

        setBusChecked(prevState => !prevState)
    }

    const handleSuvClicked = async () => {
        let f = filters
        if (!suvChecked){
            if (f?.vehicleType){
                f?.vehicleType?.push('suv')
            }
            else{
                f['vehicleType'] = ['suv']
            }
            console.log({f})
            setFilters(f)
        }
        else{
            if (f?.vehicleType?.includes('suv')){
                console.log("It includes")
                let indexOf = f?.vehicleType?.indexOf('suv')
                f?.vehicleType?.splice(indexOf,1)
                console.log("Inner f: ",f)
                console.log({indexOf})
            }
            // console.log({f})
            setFilters(f)
        }
        console.log("final f: ", f)

        const filteredData = multipleFilter(listings,f)
        // console.log({filteredData})
        dispatch(setFilterResult(filteredData))

        setSuvChecked(prevState => !prevState)
    }


    const handleYatchClicked = async () => {
        let f = filters
        if (!yatchChecked){
            if (f?.vehicleType){
                f?.vehicleType?.push('yatch')
            }
            else{
                f['vehicleType'] = ['yatch']
            }
            console.log({f})
            setFilters(f)
        }
        else{
            if (f?.vehicleType?.includes('yatch')){
                console.log("It includes")
                let indexOf = f?.vehicleType?.indexOf('yatch')
                f?.vehicleType?.splice(indexOf,1)
                console.log("Inner f: ",f)
                console.log({indexOf})
            }
            // console.log({f})
            setFilters(f)
        }
        console.log("final f: ", f)

        const filteredData = multipleFilter(listings,f)
        // console.log({filteredData})
        dispatch(setFilterResult(filteredData))

        setYatchChecked(prevState => !prevState)
    }

    const handleOnSeatsReduced = (seats) => {
        seats--
        setPrevData(vehiclesData)
        setVehiclesData(filterNumOfSeats(vehiclesData,seats))
    }

    const handleSeatsDecrease = () => {
        handleSeatsChange(seatsValue - 1)
        setSeatsValue(seatsValue - 1);

    };

    const handleSeatsIncrease = () => {
        handleSeatsChange(seatsValue + 1)
        setSeatsValue(seatsValue + 1);
    };

    const handleSeatsChange = (val) => {
        setSeatsValue(val);

        let f = filters
        f['seats'] = val;
        // if (!seatsValue){
        //     if (f?.vehicleType){
        //         f?.vehicleType?.push('seats')
        //     }
        //     else{
        //         f['vehicleType'] = ['yatch']
        //     }
        //     console.log({f})
        //     setFilters(f)
        // }
        // else{
        //     if (f?.vehicleType?.includes('yatch')){
        //         console.log("It includes")
        //         let indexOf = f?.vehicleType?.indexOf('yatch')
        //         f?.vehicleType?.splice(indexOf,1)
        //         console.log("Inner f: ",f)
        //         console.log({indexOf})
        //     }
        //     // console.log({f})
        //     setFilters(f)
        // }
        console.log("final f: ", f)

        const filteredData = multipleFilter(listings,f)
        // console.log({filteredData})
        dispatch(setFilterResult(filteredData))
    };


    useEffect(() => {
        // setPrevData(vehiclesData)
        setVehiclesData(filterNumOfSeats(completeData,seatsValue))
    },[seatsValue])

    const handleToyotaClicked = () => {
        let f = filters
        if (!toyotaChecked){
            if (f?.vehicleMake){
                f?.vehicleMake?.push('toyota')
            }
            else{
                f['vehicleMake'] = ['toyota']
            }
            console.log({f})
            setFilters(f)
        }
        else{
            if (f?.vehicleMake?.includes('toyota')){
                console.log("It includes")
                let indexOf = f?.vehicleMake?.indexOf('toyota')
                f?.vehicleMake?.splice(indexOf,1)
                console.log("Inner f: ",f)
                console.log({indexOf})
            }
            // console.log({f})
            setFilters(f)
        }
        console.log("final f: ", f)

        const filteredData = multipleFilter(listings,f)
        // console.log({filteredData})
        dispatch(setFilterResult(filteredData))
        
        setToyotaChecked(prevState => !prevState)
    }

    const handleLexusClicked = () => {
        let f = filters
        if (!lexusChecked){
            if (f?.vehicleMake){
                f?.vehicleMake?.push('lexus')
            }
            else{
                f['vehicleMake'] = ['lexus']
            }
            console.log({f})
            setFilters(f)
        }
        else{
            if (f?.vehicleMake?.includes('lexus')){
                console.log("It includes")
                let indexOf = f?.vehicleMake?.indexOf('lexus')
                f?.vehicleMake?.splice(indexOf,1)
                console.log("Inner f: ",f)
                console.log({indexOf})
            }
            // console.log({f})
            setFilters(f)
        }
        console.log("final f: ", f)

        const filteredData = multipleFilter(listings,f)
        // console.log({filteredData})
        dispatch(setFilterResult(filteredData))
        
        setLexusChecked(prevState => !prevState)
    }

    const handleHondaClicked = () => {
        let f = filters
        if (!hondaChecked){
            if (f?.vehicleMake){
                f?.vehicleMake?.push('honda')
            }
            else{
                f['vehicleMake'] = ['honda']
            }
            console.log({f})
            setFilters(f)
        }
        else{
            if (f?.vehicleMake?.includes('honda')){
                console.log("It includes")
                let indexOf = f?.vehicleMake?.indexOf('honda')
                f?.vehicleMake?.splice(indexOf,1)
                console.log("Inner f: ",f)
                console.log({indexOf})
            }
            // console.log({f})
            setFilters(f)
        }
        console.log("final f: ", f)

        const filteredData = multipleFilter(listings,f)
        // console.log({filteredData})
        dispatch(setFilterResult(filteredData))

        setHondaChecked(prevState => !prevState)
    }

    const handleAcuraClicked = () => {
        let f = filters
        if (!acuraChecked){
            if (f?.vehicleMake){
                f?.vehicleMake?.push('acura')
            }
            else{
                f['vehicleMake'] = ['acura']
            }
            console.log({f})
            setFilters(f)
        }
        else{
            if (f?.vehicleMake?.includes('acura')){
                console.log("It includes")
                let indexOf = f?.vehicleMake?.indexOf('acura')
                f?.vehicleMake?.splice(indexOf,1)
                console.log("Inner f: ",f)
                console.log({indexOf})
            }
            // console.log({f})
            setFilters(f)
        }
        console.log("final f: ", f)

        const filteredData = multipleFilter(listings,f)
        // console.log({filteredData})
        dispatch(setFilterResult(filteredData))

        setAcuraChecked(prevState => !prevState)
    }

    const handleRoyceClicked = () => {
        let f = filters
        if (!royceChecked){
            if (f?.vehicleMake){
                f?.vehicleMake?.push('royce')
            }
            else{
                f['vehicleMake'] = ['royce']
            }
            console.log({f})
            setFilters(f)
        }
        else{
            if (f?.vehicleMake?.includes('royce')){
                console.log("It includes")
                let indexOf = f?.vehicleMake?.indexOf('royce')
                f?.vehicleMake?.splice(indexOf,1)
                console.log("Inner f: ",f)
                console.log({indexOf})
            }
            // console.log({f})
            setFilters(f)
        }
        console.log("final f: ", f)

        const filteredData = multipleFilter(listings,f)
        // console.log({filteredData})
        dispatch(setFilterResult(filteredData))

        setRoyceChecked(prevState => !prevState)
    }

    const handleAcClicked = () => {
        let f = filters
        if (!ac){
            if (f?.amenities){
                f?.amenities?.push('ac')
            }
            else{
                f['amenities'] = ['ac']
            }
            console.log({f})
            setFilters(f)
        }
        else{
            if (f?.amenities?.includes('ac')){
                console.log("It includes")
                let indexOf = f?.amenities?.indexOf('ac')
                f?.amenities?.splice(indexOf,1)
                console.log("Inner f: ",f)
                console.log({indexOf})
            }
            // console.log({f})
            setFilters(f)
        }
        console.log("final f: ", f)

        const filteredData = multipleFilter(listings,f)
        // console.log({filteredData})
        dispatch(setFilterResult(filteredData))

        setAc(!ac)
    }

    const handleBluetoothClicked = () => {
        let f = filters
        if (!bluetooth){
            if (f?.amenities){
                f?.amenities?.push('bluetooth')
            }
            else{
                f['amenities'] = ['bluetooth']
            }
            console.log({f})
            setFilters(f)
        }
        else{
            if (f?.amenities?.includes('bluetooth')){
                console.log("It includes")
                let indexOf = f?.amenities?.indexOf('bluetooth')
                f?.amenities?.splice(indexOf,1)
                console.log("Inner f: ",f)
                console.log({indexOf})
            }
            // console.log({f})
            setFilters(f)
        }
        console.log("final f: ", f)

        const filteredData = multipleFilter(listings,f)
        // console.log({filteredData})
        dispatch(setFilterResult(filteredData))

        setBluetooth(!bluetooth)
    }

    const handleBabySitClicked = () => {
        let f = filters
        if (!babySit){
            if (f?.amenities){
                f?.amenities?.push('baby-sit')
            }
            else{
                f['amenities'] = ['baby-sit']
            }
            console.log({f})
            setFilters(f)
        }
        else{
            if (f?.amenities?.includes('baby-sit')){
                console.log("It includes")
                let indexOf = f?.amenities?.indexOf('baby-sit')
                f?.amenities?.splice(indexOf,1)
                console.log("Inner f: ",f)
                console.log({indexOf})
            }
            // console.log({f})
            setFilters(f)
        }
        console.log("final f: ", f)

        const filteredData = multipleFilter(listings,f)
        // console.log({filteredData})
        dispatch(setFilterResult(filteredData))

        setBabySit(!babySit)
    }

    const handleWifiClicked = () => {
        let f = filters
        if (!babySit){
            if (f?.amenities){
                f?.amenities?.push('wifi')
            }
            else{
                f['amenities'] = ['wifi']
            }
            console.log({f})
            setFilters(f)
        }
        else{
            if (f?.amenities?.includes('wifi')){
                console.log("It includes")
                let indexOf = f?.amenities?.indexOf('wifi')
                f?.amenities?.splice(indexOf,1)
                console.log("Inner f: ",f)
                console.log({indexOf})
            }
            // console.log({f})
            setFilters(f)
        }
        console.log("final f: ", f)

        const filteredData = multipleFilter(listings,f)
        // console.log({filteredData})
        dispatch(setFilterResult(filteredData))

        setWifi(!wifi)
    }

    // const handleBluetoothClicked = () => {
    //
    //     if (!bluetooth){
    //         setVehiclesData(filterAmenities(completeData,"bluetooth"))
    //         setBluetooth(prevState => !prevState)
    //     }
    //     else{
    //         setVehiclesData(completeData)
    //         setBluetooth(prevState => !prevState)
    //     }
    // }

    const handleResetFilters = () => {
        setAc(false)
        setLexusChecked(false)
        setToyotaChecked(false)
        setSuvChecked(false)
        setCommercialChecked(false)
        setBluetooth(false)
        setSeats(4)
        setSeatsValue(4)
        setSedanChecked(false)
        setMonthlyChecked(false)
        setHalfDayChecked(false)
        setHourlyChecked(false)
        setWeeklyChecked(false)
        setFullDayChecked(false)
        setSelfDrivenChecked(false)
        setChauffeuredChecked(false)
        setHondaChecked(false)
        setRoyceChecked(false)
        setAcuraChecked(false)
        setYatchChecked(false)
        setBusChecked(false)

        dispatch(setFilterResult(listings));

    }

    const sortByPricePerDay = (mainArray) => {
        // Create a copy of the array to avoid modifying the original const array
        const sortedArray = [...mainArray];

        // Use the Array.sort() method to sort the array based on the "pricePerDay" property.
        sortedArray.sort((a, b) => a.pricePerDay - b.pricePerDay);

        if (!priceFiltered) {
            dispatch(setFilterResult(sortedArray));
        } else {
            dispatch(setFilterResult(listings));
        }

        setPriceFiltered(prevState => !prevState);

        return sortedArray;
    }

    const cardClicked = async (item) => {
        dispatch(setSelectedRide(item));
        // localStorage.setItem("selected", JSON.stringify(item))
        await router.push("/vehicle-details")
    }
    
    const handleMin = (e) => {
        if (maxValue - minValue >= 100 && maxValue <= 1000) {
            if (parseInt(e.target.value) > parseInt(maxValue)) {
            } else {
                setMinValue(parseInt(e.target.value));
            }
        } else {
            if (parseInt(e.target.value) < minValue) {
                setMinValue(parseInt(e.target.value));
            }
        }
    };

    const handleMax = (e) => {
        if (maxValue - minValue >= 100 && maxValue <= 1000) {
            if (parseInt(e.target.value) < parseInt(minValue)) {
            } else {
                setMaxValue(parseInt(e.target.value));
            }
        } else {
            if (parseInt(e.target.value) > maxValue) {
                setMaxValue(parseInt(e.target.value));
            }
        }
    };

    const handlePriceSorting = () => {
        const res = sortByPricePerDay(listings)
        // dispatch(setFilterResult(res))
    }

    const handlePriceFiltering = (values) => {
        console.log({lowValue: values?.lowerValue})
        console.log({highValue: values?.upperValue})
        const f = filters;
        f['priceBetween'] = {
            low: values?.lowerValue,
            high: values?.upperValue
        }
        setFilterResult(f);

        const filteredData = multipleFilter(listings,f)
        // console.log({filteredData})
        dispatch(setFilterResult(filteredData))
    }

    // useEffect(() => {
    //     progressRef.current.style.left = (minValue / 1000) * 10 + "%";
    //     progressRef.current.style.right = 10 - (maxValue / 1000) * 10 + "%";
    // }, [minValue, maxValue]);

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className='flex items-start gap-6 px-32 w-full'>
            <div className="w-72 self-stretch rounded-xl bg-white px-4 tz-shadow tz-border-gray-1">
                <div className="flex justify-between items-center w-full py-2 mb-8 tz-border-bottom-1 tz-bg-gradient">
                    <div className="font-medium tz-text-dark">Filter</div>
                    <span onClick={handleResetFilters} style={{cursor: 'pointer'}} className="flex items-center gap-1 tz-text-orange-1">
                        <Image src="/assets/images/refresh-line.png" alt="" width={16} height={16} /> Refresh
                    </span>
                </div>
                <div className="flex flex-col items-start gap-5 w-64 w-full">
                    <div className="w-full">
                        <div className="text-sm font-medium tz-text-dark mb-1">Price range</div>
                        <div className="flex items-center justify-between self-stretch w-full mb-4">
                            <div className="flex items-center">
                                <span className="text-sm font-light tz-text-dark">Display total price </span>
                                <span className="text-xs tz-text-gray">(incl. all fees)</span>
                            </div>
                            <div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" name="totalPrice" class="sr-only peer" />
                                    <div class="w-9 h-5 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-[#FDF2D0] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#F8B02B]"></div>
                                </label>
                            </div>
                        </div>
                        <div className="mb-0">Price range</div>
                        <div className="mb-4">
                            {/*<div className="slider relative h-1 rounded-md tz-bg-gray-2">*/}
                            {/*    /!*<div className="progress absolute h-1 rounded tz-bg-range" ref={progressRef}></div>*!/*/}
                            {/*</div>*/}
                            <div className="input-range relative">
                                {!isLoading && <RangeSlider
                                    min={minValue}
                                    max={maxValue}
                                    step={1000}
                                    onChange={handlePriceFiltering}
                                />}
                                {/*<RangeSlider min={minValue} max={maxValue}*/}
                                {/*    thumbsDisabled={[true,false]}*/}
                                {/*    rangeSlideDisabled={true}*/}
                                {/*    defaultValue={[minValue,maxValue]}*/}
                                {/*    step={1000}*/}
                                {/*    />*/}
                                {/*<RangeSlider min={minValue} max={maxValue} step={1000} defaultValue={[minValue,maxValue]} />*/}
                                {/*<input type="range" name="" value={minValue} min={0} step={1000} max={maxValue} onChange={handleMin} className="absolute w-full -top-1 h-1 bg-red-300 appearance-none accent-[#D3D6D9]" />*/}
                                {/*<input type="range" name="" value={maxValue} min={0} step={1000} max={maxValue} onChange={handleMax} className="absolute w-full -top-1 h-1 bg-red-300 appearance-none accent-[#D3D6D9] [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-12 [&::-webkit-slider-thumb]:w-12 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500" />*/}
                            </div>
                        </div>
                        {/*<div className="flex items-center justify-between self-stretch">*/}
                        {/*    <div className="flex items-center justify-center px-3 py-1 bg-white rounded tz-border-light-3">*/}
                        {/*        <span className="text-xs tz-text-gray">NGN</span>*/}
                        {/*        <input type="number" name="" size="5" onChange={(e) => setMinValue(e.target.value)} value={minValue} className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-xs outline-none w-12 h-4 px-1 border-0 focus:ring-0 tz-text-gray" />*/}
                        {/*    </div>*/}
                        {/*    <div className="w-4 h-[2px] tz-bg-light-1"></div>*/}
                        {/*    <div className="flex items-center justify-center px-3 py-1 bg-white rounded tz-border-light-3">*/}
                        {/*        <span className="text-xs tz-text-gray">NGN</span>*/}
                        {/*        <input type="number" name="" size="5" onChange={(e) => setMaxValue(e.target.value)} value={maxValue} className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-xs outline-none w-12 h-4 px-1 border-0 focus:ring-0 tz-text-gray" />*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>

                    <div className="flex flex-col items-start gap-4 pt-5 w-full tz-border-top-1">
                        <div className="text-sm font-medium tz-text-dark">Popular filters</div>
                        <div className="flex flex-col items-start gap-3">
                            <label className="flex items-center gap-2" for="selfDriven">
                                <input checked={selfDrivenChecked} onChange={handleSelfDrivenFilter} type="checkbox" name="" className="w-5 h-5 accent-[#F8B02B] focus:ring-2 focus:ring-[#F8B02B] rounded tz-text-orange-1 tz-checbox-border" id="selfDriven" />
                                <span className="text-sm tz-text-gray-3">Self driven</span>
                            </label>
                            <label className="flex items-center gap-2" for="fullDay">
                                <input checked={fullDayChecked} onChange={handleFullDayFilter} type="checkbox" name="" className="w-5 h-5 accent-[#F8B02B] focus:ring-2 focus:ring-[#F8B02B] rounded tz-text-orange-1 tz-checbox-border" id="fullDay" />
                                <span className="text-sm tz-text-gray-3">Full day</span>
                            </label>
                            <label className="flex items-center gap-2" for="luxurious">
                                <input checked={luxuriousChecked} onChange={handleLuxuriousFilter} type="checkbox" name="" className="w-5 h-5 accent-[#F8B02B] focus:ring-2 focus:ring-[#F8B02B] rounded tz-text-orange-1 tz-checbox-border" id="luxurious" />
                                <span className="text-sm tz-text-gray-3">Luxurious</span>
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-4 pt-5 w-full tz-border-top-1">
                        <div className="text-sm font-medium tz-text-dark">Star ratings</div>
                        <div className="flex items-center gap-3">
                            <Link href="" className="flex justify-center items-center gap-1 px-2 py-1 rounded  hover:bg-[#101010] hover:text-white text-sm tz-text-dark-3 tz-bg-gh">
                                <Image src="/assets/images/star.png" alt="" width={14} height={14} /> {'<2'}
                            </Link>
                            <Link href="" className="flex justify-center items-center gap-1 px-2 py-1 rounded  hover:bg-[#101010] hover:text-white text-sm tz-text-dark-3 tz-bg-gh">
                                <Image src="/assets/images/star.png" alt="" width={14} height={14} /> 3
                            </Link>
                            <Link href="" className="flex justify-center items-center gap-1 px-2 py-1 rounded  hover:bg-[#101010] hover:text-white text-sm tz-text-dark-3 tz-bg-gh">
                                <Image src="/assets/images/star.png" alt="" width={14} height={14} /> 4
                            </Link>
                            <Link href="" className="flex justify-center items-center gap-1 px-2 py-1 rounded  hover:bg-[#101010] hover:text-white text-sm tz-text-dark-3 tz-bg-gh">
                                <Image src="/assets/images/star.png" alt="" width={14} height={14} /> 5
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-4 pt-5 w-full tz-border-top-1">
                        <div className="text-sm font-medium tz-text-dark">Hire mode</div>
                        <div className="flex flex-col items-start gap-2">
                            <div className="flex items-center gap-2">
                                <input checked={selfDrivenChecked} onChange={handleSelfDrivenFilter} type="checkbox" name="" className="w-5 h-5 accent-[#F8B02B] focus:ring-2 focus:ring-[#F8B02B] rounded tz-text-orange-1 tz-checbox-border" />
                                <div className="flex flex-col items-start">
                                    <span className="text-sm tz-text-gray-3">Self driven</span>
                                    <span className="text-[0.625em] tz-text-gray">You will drive yourself</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <input checked={chauffeuredChecked} onChange={handleChaufferedFilter} type="checkbox" name="" className="w-5 h-5 accent-[#F8B02B] focus:ring-2 focus:ring-[#F8B02B] rounded tz-text-orange-1 tz-checbox-border" />
                                <div className="flex flex-col items-start">
                                    <span className="text-sm tz-text-gray-3">Chauffeured</span>
                                    <span className="text-[0.625em] tz-text-gray">A driver takes you around</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-4 pt-5 w-full tz-border-top-1">
                        <div className="text-sm font-medium tz-text-dark">Duration</div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="flex items-start gap-3 justify-start w-full">
                                <FilterButton selected={hourlyChecked} onPress={handleHourlyFilter} text={"Hourly"} url="" onClcik={() => console.log('clicked')} />
                                <FilterButton selected={halfDayChecked} onPress={handleHalfDayFilter} text={"Half day"} url=""  />
                            </div>
                            <div className="flex items-start gap-3 justify-start w-full">
                                <FilterButton selected={fullDayChecked} onPress={handleFullDayFilter} text={"Full day"} url="" />
                                <FilterButton selected={weeklyChecked} onPress={handleWeeklyFilter} text={"Weekly"} url="" />
                            </div>
                            <div className="flex items-start gap-3 justify-start w-full">
                                <FilterButton selected={monthlyChecked} onPress={handleMonthlyFilter} text={"Monthly"} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-4 pt-5 w-full tz-border-top-1">
                        <div className="text-sm font-medium tz-text-dark">Vehicle type</div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="flex items-start gap-3 justify-start w-full">
                                <FilterButton selected={sedanChecked} onPress={handleSedanClicked} text={"Sedan"} url="" icon={true} img={"/assets/images/car.png"} imgLight={"/assets/images/car-light.png"} onClcik={() => console.log('clicked')} />
                                <FilterButton selected={suvChecked} onPress={handleSuvClicked} text={"SUV"} url="" icon={true} img={"/assets/images/car.png"} imgLight={"/assets/images/car-light.png"} onClcik={() => console.log('clicked')} />
                            </div> 
                            <div className="flex items-start gap-3 justify-start w-full">
                                <FilterButton selected={busChecked} onPress={handleBusClicked} text={"Bus"} url="" icon={true} img={"/assets/images/car.png"} imgLight={"/assets/images/car-light.png"} onClcik={() => console.log('clicked')} />
                                <FilterButton selected={yatchChecked} onPress={handleYatchClicked} text={"Yatch"} url="" icon={true} img={"/assets/images/car.png"} imgLight={"/assets/images/car-light.png"} onClcik={() => console.log('clicked')} />
                            </div>
                            <div className="flex items-start gap-3 justify-start w-full">
                                <FilterButton text={"Show more"} url="" icon={true} img={"/assets/images/more-2-fill.png"} onClcik={() => console.log('clicked')} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-4 pt-5 w-full tz-border-top-1">
                        <div className="text-sm font-medium tz-text-dark">Number of seats</div>
                        <div className="flex justify-between items-start w-full">
                            <div className="text-sm tz-text-gray-3">Number of seats</div>
                            <div className="flex justify-between items-center w-[4.5em] p-1 bg-white rounded-[2rem] tz-border-gray-1">
                                <button onClick={handleSeatsDecrease} id="increment">
                                    <Image src="/assets/images/subtract-fill.png" alt="" width={16} height={16} />
                                </button>
                                <input
                                    onChange={el => handleSeatsChange(el?.target?.value)}
                                    type="number"
                                    min="1"
                                    size="2"
                                    name="numOfSeat"
                                    value={seatsValue}
                                    ref={seat}
                                    class="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-xs font-medium outline-none w-8 h-4 text-center border-0 focus:ring-0 tz-text-dark" 
                                />
                                <button onClick={handleSeatsIncrease} id="decrement">
                                    <Image src="/assets/images/add-line.png" alt="" width={16} height={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-4 pt-5 w-full tz-border-top-1">
                        <div className="text-sm font-medium tz-text-dark">Car make</div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="flex items-start gap-3 justify-start w-full">
                                <FilterButton selected={toyotaChecked} onPress={handleToyotaClicked} text={"Toyota"} url="" onClcik={() => console.log('clicked')} />
                                <FilterButton selected={hondaChecked} onPress={handleHondaClicked} text={"Honda"} url="" onClcik={() => console.log('clicked')} />
                            </div>
                            <div className="flex items-start gap-3 justify-start w-full">
                                <FilterButton selected={lexusChecked} onPress={handleLexusClicked} text={"Lexus"} url="" onClcik={() => console.log('clicked')} />
                                <FilterButton selected={acuraChecked} onPress={handleAcuraClicked} text={"Acura"} url="" onClcik={() => console.log('clicked')} />
                            </div>
                            <div className="flex items-start gap-3 justify-start w-full">
                                <FilterButton selected={royceChecked} onPress={handleRoyceClicked} text={"Rolls-Royce"} url="" onClcik={() => console.log('clicked')} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-4 pt-5 w-full mb-8 tz-border-top-1">
                        <div className="text-sm font-medium tz-text-dark">Vehicle type</div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="flex items-start gap-3 justify-start w-full">
                                <FilterButton selected={ac} onPress={handleAcClicked} text={"Air-conditioning"} url="" icon={true} img={"/assets/images/car.png"} imgLight={"/assets/images/car-light.png"} onClcik={() => console.log('clicked')} />
                            </div>
                            <div className="flex items-start gap-3 justify-start w-full">
                                <FilterButton selected={bluetooth} onPress={handleBluetoothClicked} text={"Bluetooth"} url="" icon={true} img={"/assets/images/bluetooth.png"} onClcik={() => console.log('clicked')} />
                                <FilterButton selected={babySit} onPress={handleBabySitClicked} text={"Baby sit"} url="" icon={true} img={"/assets/images/car.png"} imgLight={"/assets/images/car-light.png"} onClcik={() => console.log('clicked')} />
                            </div>
                            <div className="flex items-start gap-3 justify-start w-full">
                                <FilterButton selected={wifi} onPress={handleWifiClicked} text={"Wi-fi"} url="" icon={true} img={"/assets/images/wifi.png"} onClcik={() => console.log('clicked')} />
                                <FilterButton text={"Show more"} url="" icon={true} img={"/assets/images/more-2-fill.png"} onClcik={() => console.log('clicked')} />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center w-full mb-5">
                        <button
                            onClick={handleResetFilters}
                            type='button'
                            className="flex py-2 px-6 justify-center items-center text-sm font-medium w-48 rounded-lg hover:bg-opacity-80 tz-text-dark-1 tz-bg-orange-1"
                        >
                            Reset all filters
                        </button>
                    </div>

                </div>
            </div>
            <div className="flex flex-col items-start gap-10 w-full">
                <div className="flex flex-col items-start gap-5">
                    <div className="text-3xl font-semibold tz-text-dark">{resultsCount} car{resultsCount === 1? '': 's'} available</div>
                    <div className="flex items-start content-start self-stretch flex-wrap gap-4">
                        <FilterButton text={"Most popular"} url="" bg={"tz-bg-dark-1"} onClcik={() => console.log('clicked')} />
                        <FilterButton selected={priceFiltered} onPress={handlePriceSorting} text={"Price"} url="" onClcik={() => console.log('clicked')} />
                        <FilterButton text={"Star rating"} url="" onClcik={() => console.log('clicked')} />
                        {/*<FilterButton text={"Distance"} url="" onClcik={() => console.log('clicked')} />*/}
                        <FilterButton selected={chauffeuredChecked} onPress={handleChaufferedFilter} text={"Chauffeured"} url="" onClcik={() => console.log('clicked')} />
                        <FilterButton selected={sedanChecked} onPress={handleSedanClicked} text={"Sedan"} url="" icon={true} img={"/assets/images/car.png"} imgLight={"/assets/images/car-light.png"} onClcik={() => console.log('clicked')} />
                        <FilterButton selected={suvChecked} onPress={handleSuvClicked} text={"SUV"} url="" icon={true} img={"/assets/images/car.png"} imgLight={"/assets/images/car-light.png"} onClcik={() => console.log('clicked')} />
                        <FilterButton selected={busChecked} onPress={handleBusClicked} text={"Bus"} url="" icon={true} img={"/assets/images/car.png"} imgLight={"/assets/images/car-light.png"} onClcik={() => console.log('clicked')} />
                        {/*<FilterButton selected={yatchChecked} onPress={handleYatchClicked} text={"Yatch"} url="" icon={true} img={"/assets/images/car.png"} imgLight={"/assets/images/car-light.png"} onClcik={() => console.log('clicked')} />*/}
                        <FilterButton selected={toyotaChecked} onPress={handleToyotaClicked} text={"Toyota"} url="" onClcik={() => console.log('clicked')} />
                        <FilterButton selected={hondaChecked} onPress={handleHondaClicked} text={"Honda"} url="" onClcik={() => console.log('clicked')} />
                        <FilterButton selected={lexusChecked} onPress={handleLexusClicked} text={"Lexus"} url="" onClcik={() => console.log('clicked')} />
                        <FilterButton selected={acuraChecked} onPress={handleAcuraClicked} text={"Acura"} url="" onClcik={() => console.log('clicked')} />
                    </div>
                </div>
                <div className="w-full">
                    {results && <div className="grid grid-cols-3 gap-6 w-full">
                        {
                            results?.map((item, index) => {
                                return <div key={index} style={{cursor: 'pointer'}}>
                                    <CarCard
                                        onClick={() => cardClicked(item)}
                                        carImage={item?.vehicle?.vehicleImages}
                                        carName={item.vehicle?.vehicleMake?.name + " " + item?.vehicle?.vehicleModel?.name}
                                        location={item.location}
                                        hasAC={item.vehicle?.vehicleHasAirCondition}
                                        hasWifi={item.hasWifi}
                                        hasDisabledSeat={item.hasDisabledSeat}
                                        isChauffeured={item?.driveType === "chaffeured"}
                                        isPromoted={item.isPromoted}
                                        isSelfDrive={item.isSelfDrive}
                                        isRareFind={item.isRareFind}
                                        rating={item.rating}
                                        numSeats={item?.vehicle?.vehicleSittingCapacity}
                                        price={Number(item.pricePerDay).toLocaleString()}
                                        tripsCount={item.trips}
                                        // carName={item.carName}
                                        // carImage={item.image}
                                        // location={item.location}
                                        // hasAC={item.hasAC}
                                        // hasWifi={item.hasWifi}
                                        // hasDisabledSeat={item.hasDisabledSeat}
                                        // isChauffeured={item.isChauffeured}
                                        // isPromoted={item.isPromoted}
                                        // isSelfDrive={item.isSelfDrive}
                                        // isRareFind={item.isRareFind}
                                        // rating={item.rating}
                                        // numSeats={item.seats}
                                        // price={item.price}
                                        // tripsCount={item.trips}
                                    />
                                </div>
                            })
                        }
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default CarGridShow;
