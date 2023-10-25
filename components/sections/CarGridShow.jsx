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
                                        /*carName={item.carName}
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
                                        tripsCount={item.trips}*/
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


/*
const FeaturedCarItem = ({carImage, carName, price, location, rating=4.9, tripsCount=30,
                             hasDisabledSeat=true, numSeats=4, hasAC=true, hasWifi=true,
                             isChauffeured=false, isPromoted=false, isSelfDrive=false, isRareFind=false}) => {
    const attendedImg = () => isChauffeured ? chauffeured : selfDrive

    return (
        <div>
            <Card style={{minWidth: 200, borderRadius: 12}} className="mb-3">

                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <Image src={carImage} alt="car" style={{width: '100%', height: 180}} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={carImage} alt="car" style={{width: '100%', height: 180}} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={carImage} alt="car" style={{width: '100%', height: 180}} />
                    </Carousel.Item>
                </Carousel>

                {/*<Image src={carImage} alt="car" style={{width: '100%', height: 200}} />*}
                <Card.ImgOverlay>
                    <div className="d-flex justify-content-between">
                        <div className="bg-white px-2 py-1 rounded-pill" style={{fontSize: 14}}>{location}</div>
                        <div><FontAwesomeIcon icon={faHeart} size="lg" className="text-white" /></div>
                    </div>
                </Card.ImgOverlay>
                <Card.Body>
                    <div className="d-flex w-100 justify-content-between" style={{marginBottom: 12}}>
                        <div>
                            {isChauffeured &&
                                <span className="badge me-2" style={{backgroundColor: '#E5F7E7', color: '#00AC11'}}>
                                    <FontAwesomeIcon size="xs" icon={faUser} /> Chauffeured
                                </span>}
                            {isSelfDrive &&
                                <span className="badge me-2" style={{backgroundColor: '#DDEFFA', color: '#1B97DB'}}>
                                    <FontAwesomeIcon size="xs" icon={faCompass} /> Self drive
                                </span>}
                            {isPromoted && <span className="badge me-2" style={{backgroundColor: '#D8E2FB', color: '#3B6FE9'}}>Promoted</span>}
                            {isRareFind && <span className="badge me-2" style={{backgroundColor: '#FBF2CB', color: '#C8811A'}}>Rare find</span>}
                        </div>
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon size="xs" icon={faStar} style={{color: '#F8B84E'}} />&nbsp;
                            <span style={{fontSize: 12, fontWeight: '500'}}>
                                {rating} ({tripsCount} trips)
                            </span>
                        </div>
                    </div>
                    <Card.Title style={{fontSize: 16, fontWeight: '500', marginBottom: 15}}>{carName}</Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-between">
                            <div className='d-flex align-items-center'>
                                {hasDisabledSeat && <Image style={{marginRight: 8}} src={disabledSeat} alt='disabled seat' height={16} width={16} />}
                                <span style={{height:16, fontSize: 12, fontWeight: '600', color: '#7D7D81', marginRight:8,}}>{numSeats}</span>
                                {hasAC && <Image style={{marginRight: 8}} src={ac} alt='air conditioner' height={16} width={16} />}
                                {hasWifi && <Image src={wifi} alt='wifi' height={16} width={16} />}
                            </div>
                            <div>
                                <span style={{color: '#5C5C61', fontSize: 13}}>
                                    <span style={{fontSize: 16, fontWeight: '700', color: '#101010'}}>
                                        &#8358; {price}
                                    </span>/day
                                </span>
                                <div>
                                    <span className="text-secondary border-bottom" style={{fontSize: 12}}>&#8358; {price} total</span>
                                </div>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};*/
