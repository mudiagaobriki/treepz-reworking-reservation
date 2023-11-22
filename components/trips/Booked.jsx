'use client';

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";

import Title from '@/components/trips/Title';
import CarCard2 from '@/components/trips/CarCard2';
import EmptyState from '@/components/items/EmptyState';
import TripReservation from '@/components/modals/TripReservation';

import Modal from 'flowbite';
import {useSelector} from "react-redux";
import {BASE_URL} from "../../public/assets/constants/constants";
import axios from "axios";

const FEATURED_CARS = [
  {
    carName: "Mercedes Maybach",
    isChauffeured: true,
    isAirportTransfer: false,
    isIntercityTravel: false,
    rating: 4.9,
    trips: 30,
    status: "Payment confirmed",
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
    status: "Payment confirmed",
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
    status: "Payment confirmed",
    hasLiked: true,
    tripDate: "Trip date: Jun, 12 - July, 13, 2023",
    tripTime: "Time: 2:30 PM WAT",
    price: "NGN400,456.89",
    image: "/assets/images/featuredCars/car6.png",
    location: "Adekunle Jone, Ikeja, Lagos"
  },
  {
    carName: "Honda accord Mach 1",
    isChauffeured: true,
    rating: 4.9,
    trips: 30,
    status: "Payment confirmed",
    hasLiked: true,
    tripDate: "Trip date: Jun, 12 - July, 13, 2023",
    tripTime: "Time: 2:30 PM WAT",
    price: "NGN400,456.89",
    image: "/assets/images/featuredCars/car4.png",
    location: "Adekunle Jone, Ikeja, Lagos"
  }
];
const DUMMY_BOOKINGS = [
  {
    "id": "53bddc25-a72b-4e51-bd36-2fbd8a9968ae",
    "userId": "30b928b0-185c-4b7a-b39a-1b7e2a04fbe4",
    "fleetOwnerId": null,
    "paymentId": "388e93b4-8440-41ef-9206-9ec4a74568c8",
    "routeId": null,
    "offerId": null,
    "pickUpTime": "2023-03-31T00:00:00.000Z",
    "dropOffTime": "2023-03-31T00:00:00.000Z",
    "pickUpLocation": null,
    "dropOffLocation": null,
    "cancelledBy": null,
    "status": "in_transit",
    "context": "direct_booking",
    "expiryTime": "2023-03-31T11:54:03.354Z",
    "confirmationExpiryTime": "2023-03-31T11:53:41.397Z",
    "listedVehicleId": "dbb57b2f-44f2-44a5-bdd0-1b7a5f3dffd0",
    "organisationId": null,
    "checkedIn": true,
    "checkedOut": false,
    "checkInTime": "2023-03-31T11:44:56.909Z",
    "checkOutTime": null,
    "arrivedAtPickUpTime": "2023-03-31T11:44:31.569Z",
    "arrivedAtDropOffTime": null,
    "enroutePickUpTime": "2023-03-31T11:44:28.994Z",
    "rentalType": "daily",
    "rentalTypeDuration": 1,
    "checkOutBy": null,
    "completedDate": "2023-03-31T11:44:28.000Z",
    "surcharge": 0,
    "totalAmount": 21600,
    "securityDeposit": 3600,
    "amount": 18000,
    "createdAt": "2023-03-31T11:43:33.381Z",
    "updatedAt": "2023-03-31T11:44:56.910Z",
    "vehicleListing": {
      "id": "dbb57b2f-44f2-44a5-bdd0-1b7a5f3dffd0",
      "driverId": "bf9065f1-5ba6-4905-ba22-64dad551f7af",
      "isAvailable": true,
      "isBooked": false,
      "vehicleId": "8f2a7d81-dc48-450f-8fd3-59e8210830ae",
      "createdAt": "2023-03-15T13:32:04.695Z",
      "updatedAt": "2023-03-31T11:44:12.910Z",
      "locationKeywords": [
        "alimosho",
        "rd",
        "lagos",
        "nigeria"
      ],
      "longitude": 3.30092,
      "latitude": 6.61146,
      "tripCoverageRange": null,
      "tripType": "hired",
      "couponId": null,
      "description": null,
      "discountId": null,
      "pricePerDay": 18000,
      "pricePerHour": 1500,
      "pricePerMonth": 540000,
      "pricePerWeek": 126000,
      "halfDayPrice": 9000,
      "promotionId": "ed3c8ece-b7ab-4ff6-b1a6-128764b84471",
      "promotionExpiry": "2023-04-07T18:08:25.605Z",
      "promotionActive": true,
      "availableTimes": [],
      "driveType": "chaffeured",
      "vehicle": {
        "id": "8f2a7d81-dc48-450f-8fd3-59e8210830ae",
        "driverId": "bf9065f1-5ba6-4905-ba22-64dad551f7af",
        "vehicleMode": "Road",
        "vehicleMakeId": "557144c6-2065-4835-9cd7-d12b84587c9b",
        "vehicleModelId": "f59e2274-d849-4b13-92e1-ab67dfd0488f",
        "vehicleColorId": "6cb52de7-d005-4eb0-ac3d-ac503cb4a882",
        "vehicleYear": "2022",
        "vehicleCategory": "bus",
        "vehicleSittingCapacity": 5,
        "vehicleFuelType": null,
        "vehicleGuideLine": "Bentley Description",
        "vehicleDoors": 0,
        "vehicleHasAirCondition": false,
        "vehiclePlateNumber": "12345",
        "vehicleImages": [
          "https://treepz.s3.us-east-1.amazonaws.com/1678887110395-ezgif.com-webp-to-jpg.jpg",
          "https://treepz.s3.us-east-1.amazonaws.com/1678887110396-car-7.jpeg",
          "https://treepz.s3.us-east-1.amazonaws.com/1678887110400-car-8.jpeg"
        ],
        "createdAt": "2023-03-15T13:30:51.923Z",
        "updatedAt": "2023-03-30T10:41:00.060Z",
        "companyId": null,
        "transportPartnerAdminId": null,
        "enterpriseAdminId": null,
        "vehicleLocation": "Alimosho Rd, Lagos, Nigeria",
        "vehicleLocationDetails": {
          "city": "Lagos",
          "type": "Point",
          "state": "LA",
          "street": "Alimosho Rd",
          "country": "NG",
          "zipcode": "",
          "coordinates": [
            3.30092,
            6.61146
          ],
          "formattedAddress": "Alimosho Rd, Lagos, LA, NG"
        },
        "vehicleModel": {
          "id": "f59e2274-d849-4b13-92e1-ab67dfd0488f",
          "name": "Azure",
          "isDisabled": false,
          "iconUrl": null,
          "vehicleMakeId": "557144c6-2065-4835-9cd7-d12b84587c9b",
          "vehicleCategory": "cars_and_sedans",
          "createdAt": "2023-03-10T16:40:42.607Z",
          "updatedAt": "2023-03-10T16:40:42.607Z"
        },
        "vehicleMake": {
          "id": "557144c6-2065-4835-9cd7-d12b84587c9b",
          "name": "BENTLEY",
          "isDisabled": false,
          "createdAt": "2023-03-10T11:44:22.396Z",
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
    "vehicleRoute": null,
    "offer": [],
    "user": {
      "firstName": "Mike",
      "lastName": "Abiona",
      "email": "qrlaewlzxern@eurokool.com",
      "profileImageUrl": null,
      "createdAt": "2023-02-17T15:53:59.517Z",
      "phoneNumber": "+2347067087123",
      "userRating": 5,
      "id": "30b928b0-185c-4b7a-b39a-1b7e2a04fbe4"
    },
    "driver": {
      "firstName": "clsdxkjihzb",
      "lastName": "Password",
      "email": "clsdxkjihzbcpa@eurokool.com",
      "profileImageUrl": "https://treepz.s3.us-east-1.amazonaws.com/1678269212784-santa.jpeg",
      "createdAt": "2023-03-08T09:48:04.851Z",
      "phoneNumber": "+234812345678",
      "userRating": 4,
      "id": "bf9065f1-5ba6-4905-ba22-64dad551f7af"
    }
  },
  {
    "id": "6ea1ba46-419a-4058-92cd-c64e53dc0e0d",
    "userId": "30b928b0-185c-4b7a-b39a-1b7e2a04fbe4",
    "fleetOwnerId": null,
    "paymentId": "c9af4f28-3863-4fd2-a1df-6292a026ccc6",
    "routeId": null,
    "offerId": null,
    "pickUpTime": "2023-03-31T00:00:00.000Z",
    "dropOffTime": "2023-03-31T00:00:00.000Z",
    "pickUpLocation": null,
    "dropOffLocation": null,
    "cancelledBy": null,
    "status": "completed",
    "context": "direct_booking",
    "expiryTime": "2023-03-30T12:23:58.099Z",
    "confirmationExpiryTime": "2023-03-30T12:23:30.183Z",
    "listedVehicleId": "dbb57b2f-44f2-44a5-bdd0-1b7a5f3dffd0",
    "organisationId": null,
    "checkedIn": true,
    "checkedOut": true,
    "checkInTime": "2023-03-30T12:16:28.740Z",
    "checkOutTime": "2023-03-30T12:16:56.422Z",
    "arrivedAtPickUpTime": "2023-03-30T12:15:32.587Z",
    "arrivedAtDropOffTime": "2023-03-30T12:16:48.502Z",
    "enroutePickUpTime": "2023-03-30T12:15:28.130Z",
    "rentalType": "daily",
    "rentalTypeDuration": 1,
    "checkOutBy": "user",
    "completedDate": "2023-03-30T12:16:45.000Z",
    "surcharge": 0,
    "totalAmount": 21600,
    "securityDeposit": 3600,
    "amount": 18000,
    "createdAt": "2023-03-30T12:13:26.100Z",
    "updatedAt": "2023-03-30T12:16:56.423Z",
    "vehicleListing": {
      "id": "dbb57b2f-44f2-44a5-bdd0-1b7a5f3dffd0",
      "driverId": "bf9065f1-5ba6-4905-ba22-64dad551f7af",
      "isAvailable": true,
      "isBooked": false,
      "vehicleId": "8f2a7d81-dc48-450f-8fd3-59e8210830ae",
      "createdAt": "2023-03-15T13:32:04.695Z",
      "updatedAt": "2023-03-31T11:44:12.910Z",
      "locationKeywords": [
        "alimosho",
        "rd",
        "lagos",
        "nigeria"
      ],
      "longitude": 3.30092,
      "latitude": 6.61146,
      "tripCoverageRange": null,
      "tripType": "hired",
      "couponId": null,
      "description": null,
      "discountId": null,
      "pricePerDay": 18000,
      "pricePerHour": 1500,
      "pricePerMonth": 540000,
      "pricePerWeek": 126000,
      "halfDayPrice": 9000,
      "promotionId": "ed3c8ece-b7ab-4ff6-b1a6-128764b84471",
      "promotionExpiry": "2023-04-07T18:08:25.605Z",
      "promotionActive": true,
      "availableTimes": [],
      "driveType": "chaffeured",
      "vehicle": {
        "id": "8f2a7d81-dc48-450f-8fd3-59e8210830ae",
        "driverId": "bf9065f1-5ba6-4905-ba22-64dad551f7af",
        "vehicleMode": "Road",
        "vehicleMakeId": "557144c6-2065-4835-9cd7-d12b84587c9b",
        "vehicleModelId": "f59e2274-d849-4b13-92e1-ab67dfd0488f",
        "vehicleColorId": "6cb52de7-d005-4eb0-ac3d-ac503cb4a882",
        "vehicleYear": "2022",
        "vehicleCategory": "bus",
        "vehicleSittingCapacity": 5,
        "vehicleFuelType": null,
        "vehicleGuideLine": "Bentley Description",
        "vehicleDoors": 0,
        "vehicleHasAirCondition": false,
        "vehiclePlateNumber": "12345",
        "vehicleImages": [
          "https://treepz.s3.us-east-1.amazonaws.com/1678887110395-ezgif.com-webp-to-jpg.jpg",
          "https://treepz.s3.us-east-1.amazonaws.com/1678887110396-car-7.jpeg",
          "https://treepz.s3.us-east-1.amazonaws.com/1678887110400-car-8.jpeg"
        ],
        "createdAt": "2023-03-15T13:30:51.923Z",
        "updatedAt": "2023-03-30T10:41:00.060Z",
        "companyId": null,
        "transportPartnerAdminId": null,
        "enterpriseAdminId": null,
        "vehicleLocation": "Alimosho Rd, Lagos, Nigeria",
        "vehicleLocationDetails": {
          "city": "Lagos",
          "type": "Point",
          "state": "LA",
          "street": "Alimosho Rd",
          "country": "NG",
          "zipcode": "",
          "coordinates": [
            3.30092,
            6.61146
          ],
          "formattedAddress": "Alimosho Rd, Lagos, LA, NG"
        },
        "vehicleModel": {
          "id": "f59e2274-d849-4b13-92e1-ab67dfd0488f",
          "name": "Azure",
          "isDisabled": false,
          "iconUrl": null,
          "vehicleMakeId": "557144c6-2065-4835-9cd7-d12b84587c9b",
          "vehicleCategory": "cars_and_sedans",
          "createdAt": "2023-03-10T16:40:42.607Z",
          "updatedAt": "2023-03-10T16:40:42.607Z"
        },
        "vehicleMake": {
          "id": "557144c6-2065-4835-9cd7-d12b84587c9b",
          "name": "BENTLEY",
          "isDisabled": false,
          "createdAt": "2023-03-10T11:44:22.396Z",
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
    "vehicleRoute": null,
    "offer": [],
    "user": {
      "firstName": "Mike",
      "lastName": "Abiona",
      "email": "qrlaewlzxern@eurokool.com",
      "profileImageUrl": null,
      "createdAt": "2023-02-17T15:53:59.517Z",
      "phoneNumber": "+2347067087123",
      "userRating": 5,
      "id": "30b928b0-185c-4b7a-b39a-1b7e2a04fbe4"
    },
    "driver": {
      "firstName": "clsdxkjihzb",
      "lastName": "Password",
      "email": "clsdxkjihzbcpa@eurokool.com",
      "profileImageUrl": "https://treepz.s3.us-east-1.amazonaws.com/1678269212784-santa.jpeg",
      "createdAt": "2023-03-08T09:48:04.851Z",
      "phoneNumber": "+234812345678",
      "userRating": 4,
      "id": "bf9065f1-5ba6-4905-ba22-64dad551f7af"
    }
  },
  {
    "id": "f25f66b3-2fbb-4f2b-af43-6a7b612aee52",
    "userId": "30b928b0-185c-4b7a-b39a-1b7e2a04fbe4",
    "fleetOwnerId": null,
    "paymentId": "db704825-5ddb-437d-93ed-bcbbc878cb4f",
    "routeId": null,
    "offerId": null,
    "pickUpTime": "2023-03-30T00:00:00.000Z",
    "dropOffTime": "2023-03-30T00:00:00.000Z",
    "pickUpLocation": null,
    "dropOffLocation": null,
    "cancelledBy": null,
    "status": "completed",
    "context": "direct_booking",
    "expiryTime": "2023-03-30T11:53:31.543Z",
    "confirmationExpiryTime": "2023-03-30T11:52:49.557Z",
    "listedVehicleId": "dbb57b2f-44f2-44a5-bdd0-1b7a5f3dffd0",
    "organisationId": null,
    "checkedIn": true,
    "checkedOut": true,
    "checkInTime": "2023-03-30T12:10:51.493Z",
    "checkOutTime": "2023-03-30T12:11:51.676Z",
    "arrivedAtPickUpTime": "2023-03-30T12:04:35.784Z",
    "arrivedAtDropOffTime": "2023-03-30T12:11:08.358Z",
    "enroutePickUpTime": "2023-03-30T11:59:54.036Z",
    "rentalType": "daily",
    "rentalTypeDuration": 1,
    "checkOutBy": "user",
    "completedDate": "2023-03-30T12:11:04.000Z",
    "surcharge": 0,
    "totalAmount": 21600,
    "securityDeposit": 3600,
    "amount": 18000,
    "createdAt": "2023-03-30T11:42:40.304Z",
    "updatedAt": "2023-03-30T12:11:51.678Z",
    "vehicleListing": {
      "id": "dbb57b2f-44f2-44a5-bdd0-1b7a5f3dffd0",
      "driverId": "bf9065f1-5ba6-4905-ba22-64dad551f7af",
      "isAvailable": true,
      "isBooked": false,
      "vehicleId": "8f2a7d81-dc48-450f-8fd3-59e8210830ae",
      "createdAt": "2023-03-15T13:32:04.695Z",
      "updatedAt": "2023-03-31T11:44:12.910Z",
      "locationKeywords": [
        "alimosho",
        "rd",
        "lagos",
        "nigeria"
      ],
      "longitude": 3.30092,
      "latitude": 6.61146,
      "tripCoverageRange": null,
      "tripType": "hired",
      "couponId": null,
      "description": null,
      "discountId": null,
      "pricePerDay": 18000,
      "pricePerHour": 1500,
      "pricePerMonth": 540000,
      "pricePerWeek": 126000,
      "halfDayPrice": 9000,
      "promotionId": "ed3c8ece-b7ab-4ff6-b1a6-128764b84471",
      "promotionExpiry": "2023-04-07T18:08:25.605Z",
      "promotionActive": true,
      "availableTimes": [],
      "driveType": "chaffeured",
      "vehicle": {
        "id": "8f2a7d81-dc48-450f-8fd3-59e8210830ae",
        "driverId": "bf9065f1-5ba6-4905-ba22-64dad551f7af",
        "vehicleMode": "Road",
        "vehicleMakeId": "557144c6-2065-4835-9cd7-d12b84587c9b",
        "vehicleModelId": "f59e2274-d849-4b13-92e1-ab67dfd0488f",
        "vehicleColorId": "6cb52de7-d005-4eb0-ac3d-ac503cb4a882",
        "vehicleYear": "2022",
        "vehicleCategory": "bus",
        "vehicleSittingCapacity": 5,
        "vehicleFuelType": null,
        "vehicleGuideLine": "Bentley Description",
        "vehicleDoors": 0,
        "vehicleHasAirCondition": false,
        "vehiclePlateNumber": "12345",
        "vehicleImages": [
          "https://treepz.s3.us-east-1.amazonaws.com/1678887110395-ezgif.com-webp-to-jpg.jpg",
          "https://treepz.s3.us-east-1.amazonaws.com/1678887110396-car-7.jpeg",
          "https://treepz.s3.us-east-1.amazonaws.com/1678887110400-car-8.jpeg"
        ],
        "createdAt": "2023-03-15T13:30:51.923Z",
        "updatedAt": "2023-03-30T10:41:00.060Z",
        "companyId": null,
        "transportPartnerAdminId": null,
        "enterpriseAdminId": null,
        "vehicleLocation": "Alimosho Rd, Lagos, Nigeria",
        "vehicleLocationDetails": {
          "city": "Lagos",
          "type": "Point",
          "state": "LA",
          "street": "Alimosho Rd",
          "country": "NG",
          "zipcode": "",
          "coordinates": [
            3.30092,
            6.61146
          ],
          "formattedAddress": "Alimosho Rd, Lagos, LA, NG"
        },
        "vehicleModel": {
          "id": "f59e2274-d849-4b13-92e1-ab67dfd0488f",
          "name": "Azure",
          "isDisabled": false,
          "iconUrl": null,
          "vehicleMakeId": "557144c6-2065-4835-9cd7-d12b84587c9b",
          "vehicleCategory": "cars_and_sedans",
          "createdAt": "2023-03-10T16:40:42.607Z",
          "updatedAt": "2023-03-10T16:40:42.607Z"
        },
        "vehicleMake": {
          "id": "557144c6-2065-4835-9cd7-d12b84587c9b",
          "name": "BENTLEY",
          "isDisabled": false,
          "createdAt": "2023-03-10T11:44:22.396Z",
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
    "vehicleRoute": null,
    "offer": [],
    "user": {
      "firstName": "Mike",
      "lastName": "Abiona",
      "email": "qrlaewlzxern@eurokool.com",
      "profileImageUrl": null,
      "createdAt": "2023-02-17T15:53:59.517Z",
      "phoneNumber": "+2347067087123",
      "userRating": 5,
      "id": "30b928b0-185c-4b7a-b39a-1b7e2a04fbe4"
    },
    "driver": {
      "firstName": "clsdxkjihzb",
      "lastName": "Password",
      "email": "clsdxkjihzbcpa@eurokool.com",
      "profileImageUrl": "https://treepz.s3.us-east-1.amazonaws.com/1678269212784-santa.jpeg",
      "createdAt": "2023-03-08T09:48:04.851Z",
      "phoneNumber": "+234812345678",
      "userRating": 4,
      "id": "bf9065f1-5ba6-4905-ba22-64dad551f7af"
    }
  },
  {
    "id": "513aed72-29ed-4e03-8caf-e2415063ace0",
    "userId": "30b928b0-185c-4b7a-b39a-1b7e2a04fbe4",
    "fleetOwnerId": null,
    "paymentId": "31498317-c190-4795-9029-416e0ad50805",
    "routeId": null,
    "offerId": null,
    "pickUpTime": "2023-04-20T00:00:00.000Z",
    "dropOffTime": "2023-04-20T00:00:00.000Z",
    "pickUpLocation": null,
    "dropOffLocation": null,
    "cancelledBy": null,
    "status": "completed",
    "context": "direct_booking",
    "expiryTime": "2023-03-28T11:06:47.253Z",
    "confirmationExpiryTime": "2023-03-28T11:06:37.884Z",
    "listedVehicleId": "dbb57b2f-44f2-44a5-bdd0-1b7a5f3dffd0",
    "organisationId": null,
    "checkedIn": true,
    "checkedOut": true,
    "checkInTime": "2023-03-28T10:58:37.729Z",
    "checkOutTime": "2023-03-28T11:08:50.535Z",
    "arrivedAtPickUpTime": "2023-03-28T10:58:29.756Z",
    "arrivedAtDropOffTime": "2023-03-28T10:58:50.531Z",
    "enroutePickUpTime": "2023-03-28T10:58:14.270Z",
    "rentalType": "daily",
    "rentalTypeDuration": 1,
    "checkOutBy": "system",
    "completedDate": "2023-03-28T10:58:49.000Z",
    "surcharge": 0,
    "totalAmount": 21600,
    "securityDeposit": 3600,
    "amount": 18000,
    "createdAt": "2023-03-28T10:56:33.398Z",
    "updatedAt": "2023-03-28T11:08:50.537Z",
    "vehicleListing": {
      "id": "dbb57b2f-44f2-44a5-bdd0-1b7a5f3dffd0",
      "driverId": "bf9065f1-5ba6-4905-ba22-64dad551f7af",
      "isAvailable": true,
      "isBooked": false,
      "vehicleId": "8f2a7d81-dc48-450f-8fd3-59e8210830ae",
      "createdAt": "2023-03-15T13:32:04.695Z",
      "updatedAt": "2023-03-31T11:44:12.910Z",
      "locationKeywords": [
        "alimosho",
        "rd",
        "lagos",
        "nigeria"
      ],
      "longitude": 3.30092,
      "latitude": 6.61146,
      "tripCoverageRange": null,
      "tripType": "hired",
      "couponId": null,
      "description": null,
      "discountId": null,
      "pricePerDay": 18000,
      "pricePerHour": 1500,
      "pricePerMonth": 540000,
      "pricePerWeek": 126000,
      "halfDayPrice": 9000,
      "promotionId": "ed3c8ece-b7ab-4ff6-b1a6-128764b84471",
      "promotionExpiry": "2023-04-07T18:08:25.605Z",
      "promotionActive": true,
      "availableTimes": [],
      "driveType": "chaffeured",
      "vehicle": {
        "id": "8f2a7d81-dc48-450f-8fd3-59e8210830ae",
        "driverId": "bf9065f1-5ba6-4905-ba22-64dad551f7af",
        "vehicleMode": "Road",
        "vehicleMakeId": "557144c6-2065-4835-9cd7-d12b84587c9b",
        "vehicleModelId": "f59e2274-d849-4b13-92e1-ab67dfd0488f",
        "vehicleColorId": "6cb52de7-d005-4eb0-ac3d-ac503cb4a882",
        "vehicleYear": "2022",
        "vehicleCategory": "bus",
        "vehicleSittingCapacity": 5,
        "vehicleFuelType": null,
        "vehicleGuideLine": "Bentley Description",
        "vehicleDoors": 0,
        "vehicleHasAirCondition": false,
        "vehiclePlateNumber": "12345",
        "vehicleImages": [
          "https://treepz.s3.us-east-1.amazonaws.com/1678887110395-ezgif.com-webp-to-jpg.jpg",
          "https://treepz.s3.us-east-1.amazonaws.com/1678887110396-car-7.jpeg",
          "https://treepz.s3.us-east-1.amazonaws.com/1678887110400-car-8.jpeg"
        ],
        "createdAt": "2023-03-15T13:30:51.923Z",
        "updatedAt": "2023-03-30T10:41:00.060Z",
        "companyId": null,
        "transportPartnerAdminId": null,
        "enterpriseAdminId": null,
        "vehicleLocation": "Alimosho Rd, Lagos, Nigeria",
        "vehicleLocationDetails": {
          "city": "Lagos",
          "type": "Point",
          "state": "LA",
          "street": "Alimosho Rd",
          "country": "NG",
          "zipcode": "",
          "coordinates": [
            3.30092,
            6.61146
          ],
          "formattedAddress": "Alimosho Rd, Lagos, LA, NG"
        },
        "vehicleModel": {
          "id": "f59e2274-d849-4b13-92e1-ab67dfd0488f",
          "name": "Azure",
          "isDisabled": false,
          "iconUrl": null,
          "vehicleMakeId": "557144c6-2065-4835-9cd7-d12b84587c9b",
          "vehicleCategory": "cars_and_sedans",
          "createdAt": "2023-03-10T16:40:42.607Z",
          "updatedAt": "2023-03-10T16:40:42.607Z"
        },
        "vehicleMake": {
          "id": "557144c6-2065-4835-9cd7-d12b84587c9b",
          "name": "BENTLEY",
          "isDisabled": false,
          "createdAt": "2023-03-10T11:44:22.396Z",
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
    "vehicleRoute": null,
    "offer": [],
    "user": {
      "firstName": "Mike",
      "lastName": "Abiona",
      "email": "qrlaewlzxern@eurokool.com",
      "profileImageUrl": null,
      "createdAt": "2023-02-17T15:53:59.517Z",
      "phoneNumber": "+2347067087123",
      "userRating": 5,
      "id": "30b928b0-185c-4b7a-b39a-1b7e2a04fbe4"
    },
    "driver": {
      "firstName": "clsdxkjihzb",
      "lastName": "Password",
      "email": "clsdxkjihzbcpa@eurokool.com",
      "profileImageUrl": "https://treepz.s3.us-east-1.amazonaws.com/1678269212784-santa.jpeg",
      "createdAt": "2023-03-08T09:48:04.851Z",
      "phoneNumber": "+234812345678",
      "userRating": 4,
      "id": "bf9065f1-5ba6-4905-ba22-64dad551f7af"
    }
  },
  {
    "id": "b21ff1e3-3c1e-431e-9818-f23432dd1058",
    "userId": "30b928b0-185c-4b7a-b39a-1b7e2a04fbe4",
    "fleetOwnerId": null,
    "paymentId": "89183f0b-7d7d-476f-b977-6fd89fd5ab1f",
    "routeId": null,
    "offerId": null,
    "pickUpTime": "2023-04-19T00:00:00.000Z",
    "dropOffTime": "2023-04-19T00:00:00.000Z",
    "pickUpLocation": null,
    "dropOffLocation": null,
    "cancelledBy": null,
    "status": "completed",
    "context": "direct_booking",
    "expiryTime": "2023-03-28T10:54:12.972Z",
    "confirmationExpiryTime": "2023-03-28T10:53:58.613Z",
    "listedVehicleId": "dbb57b2f-44f2-44a5-bdd0-1b7a5f3dffd0",
    "organisationId": null,
    "checkedIn": true,
    "checkedOut": true,
    "checkInTime": "2023-03-28T10:44:48.908Z",
    "checkOutTime": "2023-03-28T10:55:34.178Z",
    "arrivedAtPickUpTime": "2023-03-28T10:44:45.692Z",
    "arrivedAtDropOffTime": "2023-03-28T10:44:52.566Z",
    "enroutePickUpTime": "2023-03-28T10:44:43.457Z",
    "rentalType": "daily",
    "rentalTypeDuration": 1,
    "checkOutBy": "user",
    "completedDate": "2023-03-28T10:44:51.000Z",
    "surcharge": 0,
    "totalAmount": 21600,
    "securityDeposit": 3600,
    "amount": 18000,
    "createdAt": "2023-03-28T10:43:53.524Z",
    "updatedAt": "2023-03-28T10:55:34.180Z",
    "vehicleListing": {
      "id": "dbb57b2f-44f2-44a5-bdd0-1b7a5f3dffd0",
      "driverId": "bf9065f1-5ba6-4905-ba22-64dad551f7af",
      "isAvailable": true,
      "isBooked": false,
      "vehicleId": "8f2a7d81-dc48-450f-8fd3-59e8210830ae",
      "createdAt": "2023-03-15T13:32:04.695Z",
      "updatedAt": "2023-03-31T11:44:12.910Z",
      "locationKeywords": [
        "alimosho",
        "rd",
        "lagos",
        "nigeria"
      ],
      "longitude": 3.30092,
      "latitude": 6.61146,
      "tripCoverageRange": null,
      "tripType": "hired",
      "couponId": null,
      "description": null,
      "discountId": null,
      "pricePerDay": 18000,
      "pricePerHour": 1500,
      "pricePerMonth": 540000,
      "pricePerWeek": 126000,
      "halfDayPrice": 9000,
      "promotionId": "ed3c8ece-b7ab-4ff6-b1a6-128764b84471",
      "promotionExpiry": "2023-04-07T18:08:25.605Z",
      "promotionActive": true,
      "availableTimes": [],
      "driveType": "chaffeured",
      "vehicle": {
        "id": "8f2a7d81-dc48-450f-8fd3-59e8210830ae",
        "driverId": "bf9065f1-5ba6-4905-ba22-64dad551f7af",
        "vehicleMode": "Road",
        "vehicleMakeId": "557144c6-2065-4835-9cd7-d12b84587c9b",
        "vehicleModelId": "f59e2274-d849-4b13-92e1-ab67dfd0488f",
        "vehicleColorId": "6cb52de7-d005-4eb0-ac3d-ac503cb4a882",
        "vehicleYear": "2022",
        "vehicleCategory": "bus",
        "vehicleSittingCapacity": 5,
        "vehicleFuelType": null,
        "vehicleGuideLine": "Bentley Description",
        "vehicleDoors": 0,
        "vehicleHasAirCondition": false,
        "vehiclePlateNumber": "12345",
        "vehicleImages": [
          "https://treepz.s3.us-east-1.amazonaws.com/1678887110395-ezgif.com-webp-to-jpg.jpg",
          "https://treepz.s3.us-east-1.amazonaws.com/1678887110396-car-7.jpeg",
          "https://treepz.s3.us-east-1.amazonaws.com/1678887110400-car-8.jpeg"
        ],
        "createdAt": "2023-03-15T13:30:51.923Z",
        "updatedAt": "2023-03-30T10:41:00.060Z",
        "companyId": null,
        "transportPartnerAdminId": null,
        "enterpriseAdminId": null,
        "vehicleLocation": "Alimosho Rd, Lagos, Nigeria",
        "vehicleLocationDetails": {
          "city": "Lagos",
          "type": "Point",
          "state": "LA",
          "street": "Alimosho Rd",
          "country": "NG",
          "zipcode": "",
          "coordinates": [
            3.30092,
            6.61146
          ],
          "formattedAddress": "Alimosho Rd, Lagos, LA, NG"
        },
        "vehicleModel": {
          "id": "f59e2274-d849-4b13-92e1-ab67dfd0488f",
          "name": "Azure",
          "isDisabled": false,
          "iconUrl": null,
          "vehicleMakeId": "557144c6-2065-4835-9cd7-d12b84587c9b",
          "vehicleCategory": "cars_and_sedans",
          "createdAt": "2023-03-10T16:40:42.607Z",
          "updatedAt": "2023-03-10T16:40:42.607Z"
        },
        "vehicleMake": {
          "id": "557144c6-2065-4835-9cd7-d12b84587c9b",
          "name": "BENTLEY",
          "isDisabled": false,
          "createdAt": "2023-03-10T11:44:22.396Z",
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
    "vehicleRoute": null,
    "offer": [],
    "user": {
      "firstName": "Mike",
      "lastName": "Abiona",
      "email": "qrlaewlzxern@eurokool.com",
      "profileImageUrl": null,
      "createdAt": "2023-02-17T15:53:59.517Z",
      "phoneNumber": "+2347067087123",
      "userRating": 5,
      "id": "30b928b0-185c-4b7a-b39a-1b7e2a04fbe4"
    },
    "driver": {
      "firstName": "clsdxkjihzb",
      "lastName": "Password",
      "email": "clsdxkjihzbcpa@eurokool.com",
      "profileImageUrl": "https://treepz.s3.us-east-1.amazonaws.com/1678269212784-santa.jpeg",
      "createdAt": "2023-03-08T09:48:04.851Z",
      "phoneNumber": "+234812345678",
      "userRating": 4,
      "id": "bf9065f1-5ba6-4905-ba22-64dad551f7af"
    }
  },
  {
    "id": "d98e9b82-c7db-407d-ad0d-2ec913eff13c",
    "userId": "30b928b0-185c-4b7a-b39a-1b7e2a04fbe4",
    "fleetOwnerId": null,
    "paymentId": "5943a7be-594d-4b24-adf1-080fc6e921a5",
    "routeId": null,
    "offerId": null,
    "pickUpTime": "2023-03-29T00:00:00.000Z",
    "dropOffTime": "2023-03-29T00:00:00.000Z",
    "pickUpLocation": null,
    "dropOffLocation": null,
    "cancelledBy": null,
    "status": "completed",
    "context": "direct_booking",
    "expiryTime": "2023-03-28T10:37:52.091Z",
    "confirmationExpiryTime": "2023-03-28T10:37:29.760Z",
    "listedVehicleId": "59ff00c0-6459-4afd-990e-62baeb1aad6f",
    "organisationId": null,
    "checkedIn": true,
    "checkedOut": true,
    "checkInTime": "2023-03-28T10:28:44.855Z",
    "checkOutTime": "2023-03-28T10:38:49.082Z",
    "arrivedAtPickUpTime": "2023-03-28T10:28:38.253Z",
    "arrivedAtDropOffTime": "2023-03-28T10:28:48.982Z",
    "enroutePickUpTime": "2023-03-28T10:28:34.245Z",
    "rentalType": "daily",
    "rentalTypeDuration": 1,
    "checkOutBy": "system",
    "completedDate": "2023-03-28T10:28:48.000Z",
    "surcharge": 0,
    "totalAmount": 7200,
    "securityDeposit": 1200,
    "amount": 6000,
    "createdAt": "2023-03-28T10:27:18.896Z",
    "updatedAt": "2023-03-28T10:38:49.083Z",
    "vehicleListing": {
      "id": "59ff00c0-6459-4afd-990e-62baeb1aad6f",
      "driverId": "a9b3e455-3e86-435f-ba27-24986210d594",
      "isAvailable": true,
      "isBooked": false,
      "vehicleId": "1c5dbe1a-ac35-4103-8f2c-6939dd79ff7c",
      "createdAt": "2023-03-24T14:58:34.678Z",
      "updatedAt": "2023-03-31T13:35:00.093Z",
      "locationKeywords": [
        "ikeja",
        "lagos",
        "nigeria"
      ],
      "longitude": 3.34854,
      "latitude": 6.60776,
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
      "promotionId": "644c50fd-1dd5-4e79-9d06-94251ff84c2a",
      "promotionExpiry": "2023-04-03T20:02:14.362Z",
      "promotionActive": true,
      "availableTimes": [
        "2023-03-31"
      ],
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
        "vehiclePlateNumber": "JKV XYZ",
        "vehicleImages": [
          "https://treepz.s3.us-east-1.amazonaws.com/1679669863073-img_0831.jpg",
          "https://treepz.s3.us-east-1.amazonaws.com/1679669863077-img_0833.jpg",
          "https://treepz.s3.us-east-1.amazonaws.com/1679669863109-img_0832.jpg"
        ],
        "createdAt": "2023-03-24T14:37:43.334Z",
        "updatedAt": "2023-03-30T12:26:53.378Z",
        "companyId": null,
        "transportPartnerAdminId": null,
        "enterpriseAdminId": null,
        "vehicleLocation": "Ikeja, Lagos, Nigeria",
        "vehicleLocationDetails": {
          "city": "",
          "type": "Point",
          "state": "LA",
          "street": "",
          "country": "NG",
          "zipcode": "",
          "coordinates": [
            3.34854,
            6.60776
          ],
          "formattedAddress": ", , LA, NG"
        },
        "vehicleModel": {
          "id": "3f3ce134-7797-4420-8b19-d97cab191f99",
          "name": "Silver Seraph",
          "isDisabled": false,
          "iconUrl": null,
          "vehicleMakeId": "b68fc801-cf70-4eca-a12b-cf771cbfe0e4",
          "vehicleCategory": "luxury_vehicle",
          "createdAt": "2023-03-24T14:05:58.067Z",
          "updatedAt": "2023-03-24T15:00:45.675Z"
        },
        "vehicleMake": {
          "id": "b68fc801-cf70-4eca-a12b-cf771cbfe0e4",
          "name": "Rolls-Royce",
          "isDisabled": false,
          "createdAt": "2023-03-24T13:59:27.496Z",
          "updatedAt": "2023-03-24T14:05:15.672Z",
          "vehicleCategories": [
            "luxury_vehicle"
          ]
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
    "vehicleRoute": null,
    "offer": [],
    "user": {
      "firstName": "Mike",
      "lastName": "Abiona",
      "email": "qrlaewlzxern@eurokool.com",
      "profileImageUrl": null,
      "createdAt": "2023-02-17T15:53:59.517Z",
      "phoneNumber": "+2347067087123",
      "userRating": 5,
      "id": "30b928b0-185c-4b7a-b39a-1b7e2a04fbe4"
    },
    "driver": {
      "firstName": "Joshua",
      "lastName": "Driver",
      "email": "olatundejosh@gmail.com",
      "profileImageUrl": "https://treepz.s3.us-east-1.amazonaws.com/1678209119394-img_0551%20copy.jpg",
      "createdAt": "2023-03-07T16:44:04.383Z",
      "phoneNumber": "+2348133150074",
      "userRating": 4.9,
      "id": "a9b3e455-3e86-435f-ba27-24986210d594"
    }
  },
  {
    "id": "c72e9d24-13f9-4c93-b855-d93031a96bce",
    "userId": "30b928b0-185c-4b7a-b39a-1b7e2a04fbe4",
    "fleetOwnerId": null,
    "paymentId": "3bd0c39e-b428-4585-8840-988e3f2d268f",
    "routeId": null,
    "offerId": null,
    "pickUpTime": "2023-04-05T00:00:00.000Z",
    "dropOffTime": "2023-04-05T00:00:00.000Z",
    "pickUpLocation": "Lagos, Nigeria",
    "dropOffLocation": null,
    "cancelledBy": null,
    "status": "completed",
    "context": "direct_booking",
    "expiryTime": "2023-03-28T09:52:24.083Z",
    "confirmationExpiryTime": "2023-03-28T09:52:17.531Z",
    "listedVehicleId": "59ff00c0-6459-4afd-990e-62baeb1aad6f",
    "organisationId": null,
    "checkedIn": true,
    "checkedOut": true,
    "checkInTime": "2023-03-28T09:42:56.019Z",
    "checkOutTime": "2023-03-28T09:43:16.443Z",
    "arrivedAtPickUpTime": "2023-03-28T09:42:49.891Z",
    "arrivedAtDropOffTime": "2023-03-28T09:43:04.364Z",
    "enroutePickUpTime": "2023-03-28T09:42:47.798Z",
    "rentalType": "daily",
    "rentalTypeDuration": 1,
    "checkOutBy": "user",
    "completedDate": "2023-03-28T09:43:03.000Z",
    "surcharge": 0,
    "totalAmount": 7200,
    "securityDeposit": 1200,
    "amount": 6000,
    "createdAt": "2023-03-28T09:42:05.752Z",
    "updatedAt": "2023-03-28T09:43:16.444Z",
    "vehicleListing": {
      "id": "59ff00c0-6459-4afd-990e-62baeb1aad6f",
      "driverId": "a9b3e455-3e86-435f-ba27-24986210d594",
      "isAvailable": true,
      "isBooked": false,
      "vehicleId": "1c5dbe1a-ac35-4103-8f2c-6939dd79ff7c",
      "createdAt": "2023-03-24T14:58:34.678Z",
      "updatedAt": "2023-03-31T13:35:00.093Z",
      "locationKeywords": [
        "ikeja",
        "lagos",
        "nigeria"
      ],
      "longitude": 3.34854,
      "latitude": 6.60776,
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
      "promotionId": "644c50fd-1dd5-4e79-9d06-94251ff84c2a",
      "promotionExpiry": "2023-04-03T20:02:14.362Z",
      "promotionActive": true,
      "availableTimes": [
        "2023-03-31"
      ],
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
        "vehiclePlateNumber": "JKV XYZ",
        "vehicleImages": [
          "https://treepz.s3.us-east-1.amazonaws.com/1679669863073-img_0831.jpg",
          "https://treepz.s3.us-east-1.amazonaws.com/1679669863077-img_0833.jpg",
          "https://treepz.s3.us-east-1.amazonaws.com/1679669863109-img_0832.jpg"
        ],
        "createdAt": "2023-03-24T14:37:43.334Z",
        "updatedAt": "2023-03-30T12:26:53.378Z",
        "companyId": null,
        "transportPartnerAdminId": null,
        "enterpriseAdminId": null,
        "vehicleLocation": "Ikeja, Lagos, Nigeria",
        "vehicleLocationDetails": {
          "city": "",
          "type": "Point",
          "state": "LA",
          "street": "",
          "country": "NG",
          "zipcode": "",
          "coordinates": [
            3.34854,
            6.60776
          ],
          "formattedAddress": ", , LA, NG"
        },
        "vehicleModel": {
          "id": "3f3ce134-7797-4420-8b19-d97cab191f99",
          "name": "Silver Seraph",
          "isDisabled": false,
          "iconUrl": null,
          "vehicleMakeId": "b68fc801-cf70-4eca-a12b-cf771cbfe0e4",
          "vehicleCategory": "luxury_vehicle",
          "createdAt": "2023-03-24T14:05:58.067Z",
          "updatedAt": "2023-03-24T15:00:45.675Z"
        },
        "vehicleMake": {
          "id": "b68fc801-cf70-4eca-a12b-cf771cbfe0e4",
          "name": "Rolls-Royce",
          "isDisabled": false,
          "createdAt": "2023-03-24T13:59:27.496Z",
          "updatedAt": "2023-03-24T14:05:15.672Z",
          "vehicleCategories": [
            "luxury_vehicle"
          ]
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
    "vehicleRoute": null,
    "offer": [],
    "user": {
      "firstName": "Mike",
      "lastName": "Abiona",
      "email": "qrlaewlzxern@eurokool.com",
      "profileImageUrl": null,
      "createdAt": "2023-02-17T15:53:59.517Z",
      "phoneNumber": "+2347067087123",
      "userRating": 5,
      "id": "30b928b0-185c-4b7a-b39a-1b7e2a04fbe4"
    },
    "driver": {
      "firstName": "Joshua",
      "lastName": "Driver",
      "email": "olatundejosh@gmail.com",
      "profileImageUrl": "https://treepz.s3.us-east-1.amazonaws.com/1678209119394-img_0551%20copy.jpg",
      "createdAt": "2023-03-07T16:44:04.383Z",
      "phoneNumber": "+2348133150074",
      "userRating": 4.9,
      "id": "a9b3e455-3e86-435f-ba27-24986210d594"
    }
  },
  {
    "id": "ac7fa970-2421-4842-ac49-74eacb105cdf",
    "userId": "30b928b0-185c-4b7a-b39a-1b7e2a04fbe4",
    "fleetOwnerId": null,
    "paymentId": "3de01bef-2a23-47f4-a6e1-3359fc053a59",
    "routeId": null,
    "offerId": null,
    "pickUpTime": "2023-04-04T00:00:00.000Z",
    "dropOffTime": "2023-04-04T00:00:00.000Z",
    "pickUpLocation": "Lagos, Nigeria",
    "dropOffLocation": null,
    "cancelledBy": null,
    "status": "completed",
    "context": "direct_booking",
    "expiryTime": "2023-03-28T09:45:59.396Z",
    "confirmationExpiryTime": "2023-03-28T09:45:40.278Z",
    "listedVehicleId": "59ff00c0-6459-4afd-990e-62baeb1aad6f",
    "organisationId": null,
    "checkedIn": true,
    "checkedOut": true,
    "checkInTime": "2023-03-28T09:37:19.773Z",
    "checkOutTime": "2023-03-28T09:41:50.645Z",
    "arrivedAtPickUpTime": "2023-03-28T09:37:12.499Z",
    "arrivedAtDropOffTime": "2023-03-28T09:37:31.432Z",
    "enroutePickUpTime": "2023-03-28T09:37:04.166Z",
    "rentalType": "daily",
    "rentalTypeDuration": 1,
    "checkOutBy": "user",
    "completedDate": "2023-03-28T09:37:29.000Z",
    "surcharge": 0,
    "totalAmount": 7200,
    "securityDeposit": 1200,
    "amount": 6000,
    "createdAt": "2023-03-28T09:35:29.445Z",
    "updatedAt": "2023-03-28T09:41:50.646Z",
    "vehicleListing": {
      "id": "59ff00c0-6459-4afd-990e-62baeb1aad6f",
      "driverId": "a9b3e455-3e86-435f-ba27-24986210d594",
      "isAvailable": true,
      "isBooked": false,
      "vehicleId": "1c5dbe1a-ac35-4103-8f2c-6939dd79ff7c",
      "createdAt": "2023-03-24T14:58:34.678Z",
      "updatedAt": "2023-03-31T13:35:00.093Z",
      "locationKeywords": [
        "ikeja",
        "lagos",
        "nigeria"
      ],
      "longitude": 3.34854,
      "latitude": 6.60776,
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
      "promotionId": "644c50fd-1dd5-4e79-9d06-94251ff84c2a",
      "promotionExpiry": "2023-04-03T20:02:14.362Z",
      "promotionActive": true,
      "availableTimes": [
        "2023-03-31"
      ],
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
        "vehiclePlateNumber": "JKV XYZ",
        "vehicleImages": [
          "https://treepz.s3.us-east-1.amazonaws.com/1679669863073-img_0831.jpg",
          "https://treepz.s3.us-east-1.amazonaws.com/1679669863077-img_0833.jpg",
          "https://treepz.s3.us-east-1.amazonaws.com/1679669863109-img_0832.jpg"
        ],
        "createdAt": "2023-03-24T14:37:43.334Z",
        "updatedAt": "2023-03-30T12:26:53.378Z",
        "companyId": null,
        "transportPartnerAdminId": null,
        "enterpriseAdminId": null,
        "vehicleLocation": "Ikeja, Lagos, Nigeria",
        "vehicleLocationDetails": {
          "city": "",
          "type": "Point",
          "state": "LA",
          "street": "",
          "country": "NG",
          "zipcode": "",
          "coordinates": [
            3.34854,
            6.60776
          ],
          "formattedAddress": ", , LA, NG"
        },
        "vehicleModel": {
          "id": "3f3ce134-7797-4420-8b19-d97cab191f99",
          "name": "Silver Seraph",
          "isDisabled": false,
          "iconUrl": null,
          "vehicleMakeId": "b68fc801-cf70-4eca-a12b-cf771cbfe0e4",
          "vehicleCategory": "luxury_vehicle",
          "createdAt": "2023-03-24T14:05:58.067Z",
          "updatedAt": "2023-03-24T15:00:45.675Z"
        },
        "vehicleMake": {
          "id": "b68fc801-cf70-4eca-a12b-cf771cbfe0e4",
          "name": "Rolls-Royce",
          "isDisabled": false,
          "createdAt": "2023-03-24T13:59:27.496Z",
          "updatedAt": "2023-03-24T14:05:15.672Z",
          "vehicleCategories": [
            "luxury_vehicle"
          ]
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
    "vehicleRoute": null,
    "offer": [],
    "user": {
      "firstName": "Mike",
      "lastName": "Abiona",
      "email": "qrlaewlzxern@eurokool.com",
      "profileImageUrl": null,
      "createdAt": "2023-02-17T15:53:59.517Z",
      "phoneNumber": "+2347067087123",
      "userRating": 5,
      "id": "30b928b0-185c-4b7a-b39a-1b7e2a04fbe4"
    },
    "driver": {
      "firstName": "Joshua",
      "lastName": "Driver",
      "email": "olatundejosh@gmail.com",
      "profileImageUrl": "https://treepz.s3.us-east-1.amazonaws.com/1678209119394-img_0551%20copy.jpg",
      "createdAt": "2023-03-07T16:44:04.383Z",
      "phoneNumber": "+2348133150074",
      "userRating": 4.9,
      "id": "a9b3e455-3e86-435f-ba27-24986210d594"
    }
  },
  {
    "id": "e8886b81-9e60-4ad2-a301-0d29dd1d4445",
    "userId": "30b928b0-185c-4b7a-b39a-1b7e2a04fbe4",
    "fleetOwnerId": null,
    "paymentId": "588a0464-b2a6-4d12-9cee-5f433fa010d3",
    "routeId": null,
    "offerId": null,
    "pickUpTime": "2023-04-03T00:00:00.000Z",
    "dropOffTime": "2023-04-03T00:00:00.000Z",
    "pickUpLocation": null,
    "dropOffLocation": null,
    "cancelledBy": null,
    "status": "completed",
    "context": "direct_booking",
    "expiryTime": "2023-03-28T09:37:35.669Z",
    "confirmationExpiryTime": "2023-03-28T09:35:05.585Z",
    "listedVehicleId": "59ff00c0-6459-4afd-990e-62baeb1aad6f",
    "organisationId": null,
    "checkedIn": true,
    "checkedOut": true,
    "checkInTime": "2023-03-28T09:28:37.473Z",
    "checkOutTime": "2023-03-28T09:28:54.446Z",
    "arrivedAtPickUpTime": "2023-03-28T09:28:34.228Z",
    "arrivedAtDropOffTime": "2023-03-28T09:28:44.816Z",
    "enroutePickUpTime": "2023-03-28T09:28:28.323Z",
    "rentalType": "daily",
    "rentalTypeDuration": 1,
    "checkOutBy": "user",
    "completedDate": "2023-03-28T09:28:43.000Z",
    "surcharge": 0,
    "totalAmount": 7200,
    "securityDeposit": 1200,
    "amount": 6000,
    "createdAt": "2023-03-28T09:24:59.532Z",
    "updatedAt": "2023-03-28T09:28:54.447Z",
    "vehicleListing": {
      "id": "59ff00c0-6459-4afd-990e-62baeb1aad6f",
      "driverId": "a9b3e455-3e86-435f-ba27-24986210d594",
      "isAvailable": true,
      "isBooked": false,
      "vehicleId": "1c5dbe1a-ac35-4103-8f2c-6939dd79ff7c",
      "createdAt": "2023-03-24T14:58:34.678Z",
      "updatedAt": "2023-03-31T13:35:00.093Z",
      "locationKeywords": [
        "ikeja",
        "lagos",
        "nigeria"
      ],
      "longitude": 3.34854,
      "latitude": 6.60776,
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
      "promotionId": "644c50fd-1dd5-4e79-9d06-94251ff84c2a",
      "promotionExpiry": "2023-04-03T20:02:14.362Z",
      "promotionActive": true,
      "availableTimes": [
        "2023-03-31"
      ],
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
        "vehiclePlateNumber": "JKV XYZ",
        "vehicleImages": [
          "https://treepz.s3.us-east-1.amazonaws.com/1679669863073-img_0831.jpg",
          "https://treepz.s3.us-east-1.amazonaws.com/1679669863077-img_0833.jpg",
          "https://treepz.s3.us-east-1.amazonaws.com/1679669863109-img_0832.jpg"
        ],
        "createdAt": "2023-03-24T14:37:43.334Z",
        "updatedAt": "2023-03-30T12:26:53.378Z",
        "companyId": null,
        "transportPartnerAdminId": null,
        "enterpriseAdminId": null,
        "vehicleLocation": "Ikeja, Lagos, Nigeria",
        "vehicleLocationDetails": {
          "city": "",
          "type": "Point",
          "state": "LA",
          "street": "",
          "country": "NG",
          "zipcode": "",
          "coordinates": [
            3.34854,
            6.60776
          ],
          "formattedAddress": ", , LA, NG"
        },
        "vehicleModel": {
          "id": "3f3ce134-7797-4420-8b19-d97cab191f99",
          "name": "Silver Seraph",
          "isDisabled": false,
          "iconUrl": null,
          "vehicleMakeId": "b68fc801-cf70-4eca-a12b-cf771cbfe0e4",
          "vehicleCategory": "luxury_vehicle",
          "createdAt": "2023-03-24T14:05:58.067Z",
          "updatedAt": "2023-03-24T15:00:45.675Z"
        },
        "vehicleMake": {
          "id": "b68fc801-cf70-4eca-a12b-cf771cbfe0e4",
          "name": "Rolls-Royce",
          "isDisabled": false,
          "createdAt": "2023-03-24T13:59:27.496Z",
          "updatedAt": "2023-03-24T14:05:15.672Z",
          "vehicleCategories": [
            "luxury_vehicle"
          ]
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
    "vehicleRoute": null,
    "offer": [],
    "user": {
      "firstName": "Mike",
      "lastName": "Abiona",
      "email": "qrlaewlzxern@eurokool.com",
      "profileImageUrl": null,
      "createdAt": "2023-02-17T15:53:59.517Z",
      "phoneNumber": "+2347067087123",
      "userRating": 5,
      "id": "30b928b0-185c-4b7a-b39a-1b7e2a04fbe4"
    },
    "driver": {
      "firstName": "Joshua",
      "lastName": "Driver",
      "email": "olatundejosh@gmail.com",
      "profileImageUrl": "https://treepz.s3.us-east-1.amazonaws.com/1678209119394-img_0551%20copy.jpg",
      "createdAt": "2023-03-07T16:44:04.383Z",
      "phoneNumber": "+2348133150074",
      "userRating": 4.9,
      "id": "a9b3e455-3e86-435f-ba27-24986210d594"
    }
  },
  {
    "id": "5e5006e2-f10e-4cb6-8929-30a60931efd5",
    "userId": "30b928b0-185c-4b7a-b39a-1b7e2a04fbe4",
    "fleetOwnerId": null,
    "paymentId": "7ef0a3f3-bc71-4e87-8ba1-0ea10122f9e0",
    "routeId": null,
    "offerId": null,
    "pickUpTime": "2023-04-02T00:00:00.000Z",
    "dropOffTime": "2023-04-02T00:00:00.000Z",
    "pickUpLocation": null,
    "dropOffLocation": null,
    "cancelledBy": null,
    "status": "completed",
    "context": "direct_booking",
    "expiryTime": "2023-03-28T09:23:28.828Z",
    "confirmationExpiryTime": "2023-03-28T09:22:50.242Z",
    "listedVehicleId": "59ff00c0-6459-4afd-990e-62baeb1aad6f",
    "organisationId": null,
    "checkedIn": true,
    "checkedOut": true,
    "checkInTime": "2023-03-28T09:13:59.655Z",
    "checkOutTime": "2023-03-28T09:14:56.185Z",
    "arrivedAtPickUpTime": "2023-03-28T09:13:56.426Z",
    "arrivedAtDropOffTime": "2023-03-28T09:14:09.521Z",
    "enroutePickUpTime": "2023-03-28T09:13:48.051Z",
    "rentalType": "daily",
    "rentalTypeDuration": 1,
    "checkOutBy": "user",
    "completedDate": "2023-03-28T09:14:09.000Z",
    "surcharge": 0,
    "totalAmount": 7200,
    "securityDeposit": 1200,
    "amount": 6000,
    "createdAt": "2023-03-28T09:12:44.932Z",
    "updatedAt": "2023-03-28T09:14:56.187Z",
    "vehicleListing": {
      "id": "59ff00c0-6459-4afd-990e-62baeb1aad6f",
      "driverId": "a9b3e455-3e86-435f-ba27-24986210d594",
      "isAvailable": true,
      "isBooked": false,
      "vehicleId": "1c5dbe1a-ac35-4103-8f2c-6939dd79ff7c",
      "createdAt": "2023-03-24T14:58:34.678Z",
      "updatedAt": "2023-03-31T13:35:00.093Z",
      "locationKeywords": [
        "ikeja",
        "lagos",
        "nigeria"
      ],
      "longitude": 3.34854,
      "latitude": 6.60776,
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
      "promotionId": "644c50fd-1dd5-4e79-9d06-94251ff84c2a",
      "promotionExpiry": "2023-04-03T20:02:14.362Z",
      "promotionActive": true,
      "availableTimes": [
        "2023-03-31"
      ],
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
        "vehiclePlateNumber": "JKV XYZ",
        "vehicleImages": [
          "https://treepz.s3.us-east-1.amazonaws.com/1679669863073-img_0831.jpg",
          "https://treepz.s3.us-east-1.amazonaws.com/1679669863077-img_0833.jpg",
          "https://treepz.s3.us-east-1.amazonaws.com/1679669863109-img_0832.jpg"
        ],
        "createdAt": "2023-03-24T14:37:43.334Z",
        "updatedAt": "2023-03-30T12:26:53.378Z",
        "companyId": null,
        "transportPartnerAdminId": null,
        "enterpriseAdminId": null,
        "vehicleLocation": "Ikeja, Lagos, Nigeria",
        "vehicleLocationDetails": {
          "city": "",
          "type": "Point",
          "state": "LA",
          "street": "",
          "country": "NG",
          "zipcode": "",
          "coordinates": [
            3.34854,
            6.60776
          ],
          "formattedAddress": ", , LA, NG"
        },
        "vehicleModel": {
          "id": "3f3ce134-7797-4420-8b19-d97cab191f99",
          "name": "Silver Seraph",
          "isDisabled": false,
          "iconUrl": null,
          "vehicleMakeId": "b68fc801-cf70-4eca-a12b-cf771cbfe0e4",
          "vehicleCategory": "luxury_vehicle",
          "createdAt": "2023-03-24T14:05:58.067Z",
          "updatedAt": "2023-03-24T15:00:45.675Z"
        },
        "vehicleMake": {
          "id": "b68fc801-cf70-4eca-a12b-cf771cbfe0e4",
          "name": "Rolls-Royce",
          "isDisabled": false,
          "createdAt": "2023-03-24T13:59:27.496Z",
          "updatedAt": "2023-03-24T14:05:15.672Z",
          "vehicleCategories": [
            "luxury_vehicle"
          ]
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
    "vehicleRoute": null,
    "offer": [],
    "user": {
      "firstName": "Mike",
      "lastName": "Abiona",
      "email": "qrlaewlzxern@eurokool.com",
      "profileImageUrl": null,
      "createdAt": "2023-02-17T15:53:59.517Z",
      "phoneNumber": "+2347067087123",
      "userRating": 5,
      "id": "30b928b0-185c-4b7a-b39a-1b7e2a04fbe4"
    },
    "driver": {
      "firstName": "Joshua",
      "lastName": "Driver",
      "email": "olatundejosh@gmail.com",
      "profileImageUrl": "https://treepz.s3.us-east-1.amazonaws.com/1678209119394-img_0551%20copy.jpg",
      "createdAt": "2023-03-07T16:44:04.383Z",
      "phoneNumber": "+2348133150074",
      "userRating": 4.9,
      "id": "a9b3e455-3e86-435f-ba27-24986210d594"
    }
  }
]

const Booked = () => {
  const [bookings, setBookings] = useState([])

  const {currentUser, token, isLogin} = useSelector(state => state.auth)
  const bearerToken = token?.token;
  // console.log({currentUser, token, isLogin})

  useEffect(() => {
    FetchUserBookings()
        .then((res) => {
          setBookings(res)
        })
  },[])

  const FetchUserBookings = async () => {
    const url = `${BASE_URL}/order?id=30b928b0-185c-4b7a-b39a-1b7e2a04fbe4&populateHost=true`

    try {
      const headers = {
        Authorization: `Bearer ${bearerToken}`,
      }
      const res = await axios.get(url, {headers})
      // console.log({res})

      if (res?.status === 200) {
        console.log("User Bookings: ", res?.data?.data)
        return res?.data?.data
      }
    } catch (ex) {
      console.log({ex})
      alert("Invalid credentials. Please try again")
    }
  }

  const FetchUserWallet = async () => {
    const url = `${BASE_URL}/billing/wallet`

    try {
      const headers = {
        Authorization: `Bearer ${bearerToken}`,
      }
      const res = await axios.get(url, {headers})
      // console.log({res})

      if (res?.status === 200) {
        console.log("User wallet: ", res?.data?.data)
        return res?.data?.data
      }
    } catch (ex) {
      console.log({ex})
      alert("Invalid credentials. Please try again")
    }
  }

    return (
        <div className="flex flex-col items-start gap-16 w-full px-32 pb-0 bg-white">
            <Title title="Ongoing rides" />
          {!bookings?.length && <div className="w-full">
                {/*<button type="button" data-modal-target="trip-reservation-modal" data-modal-toggle="trip-reservation-modal" >test</button>*/}
              <EmptyState
                    image="/assets/images/no-trip-booked.png" 
                    title="No trips booked...yet!" 
                    description="Explore our marketplace to find a car for your next adventure" 
                    width="340"
                    height="200"
                    btnText="Explore now"
                />
            </div>}
            <div className="w-full">
                <div className="flex justify-between items-center w-full">
                    {
                        DUMMY_BOOKINGS.map((item, index) => {
                          const listing = item?.vehicleListing;
                            return <div key={index}>
                                <CarCard2
                                    carName={listing?.vehicle?.vehicleMake?.name + " " + listing?.vehicle?.vehicleModel?.name}
                                    carImage={listing?.vehicle?.vehicleImages}
                                    location={listing?.vehicle?.vehicleLocation}
                                    hasLiked={item.hasLiked}
                                    tripDate={`${new Date(item?.pickUpTime)?.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})} - 
                                    ${new Date(item?.dropOffTime)?.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})}`}
                                    status={item.status?.replace("_", " ")}
                                    isChauffeured={listing?.driveType === "chaffeured"}
                                    isPromoted={item.isPromoted}
                                    isAirportTransfer={item.isAirportTransfer}
                                    isIntercityTravel={item.isIntercityTravel}
                                    rating={item.rating}
                                    tripTime={item.tripTime}
                                    price={item.totalAmount}
                                    tripsCount={item.trips}
                                />
                            </div>
                        })
                    }
                </div>
            </div>
            <TripReservation />
        </div>
    );
};

export default Booked;
