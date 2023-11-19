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
    filterChauffeured,
    filterFullDay, filterHalfDay,
    filterHourly, filterMonthly, filterNumOfSeats,
    filterPriceBetween,
    filterSelfDriven, filterVehicleMake, filterVehicleType, filterWeekly
} from "../../services/functions/filters";
import {useDispatch, useSelector} from "react-redux";
import {setFilterResult, setSelectedRide, setVehiclesListing} from "../../redux/features/marketplaceSlice";
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
    const seat = useRef();
    const progressRef = useRef(null);
    const [minValue, setMinValue] = useState(250);
    const [maxValue, setMaxValue] = useState(750);
    const [completeData, setCompleteData] = useState([]);
    const [vehiclesData, setVehiclesData] = useState([]);
    const [prevData, setPrevData] = useState([]); // handles data before a filter is applied
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)
    const [selfDrivenChecked, setSelfDrivenChecked] = useState(false)
    const [chauffeuredChecked, setChauffeuredChecked] = useState(false)
    const [fullDayChecked, setFullDayChecked] = useState(false)
    const [hourlyChecked, setHourlyChecked] = useState(false)
    const [halfDayChecked, setHalfDayChecked] = useState(false)
    const [weeklyChecked, setWeeklyChecked] = useState(false)
    const [monthlyChecked, setMonthlyChecked] = useState(false)
    const [sedanChecked, setSedanChecked] = useState(false)
    const [commercialChecked, setCommercialChecked] = useState(false)
    const [suvChecked, setSuvChecked] = useState(false)
    const [seats, setSeats] = useState(4)
    const [seatsValue, setSeatsValue] = useState(4)
    const [toyotaChecked, setToyotaChecked] = useState(false)
    const [lexusChecked, setLexusChecked] = useState(false)
    const [ac, setAc] = useState(false)
    const [bluetooth, setBluetooth] = useState(false)
    const [priceFiltered, setPriceFiltered] = useState(false)

    const router = useRouter()
    const dispatch = useDispatch()

    const { vehicles, isLoading, isError } = fetchVehicleListing();
    console.log({vehicles, isLoading, isError});

    useEffect(() => {
        const headingSize = isMobile? 24: 40;

        // if (isLoading) return <Spinner/>
        // add available filter
        // add filter for intercity or rental or airport transfer

        // restructure the fetched data to get the keys we need
        let data = vehicles?.data;
        data = data?.map(({id,currencySymbol,driveType,pricePerDay,vehicle,vehicleId,isAvailable,
                              pricePerHour, pricePerMonth, pricePerWeek, halfDayPrice}) =>
            ({id,currencySymbol,driveType,pricePerDay,vehicle,vehicleId,isAvailable,
                pricePerHour, pricePerMonth, pricePerWeek, halfDayPrice}))

        setCompleteData(data);
        setVehiclesData(data);
        dispatch(setVehiclesListing(data))
        dispatch(setFilterResult(data))

        console.log({data})
    },[isLoading,router])

    let results = useSelector(state => state.marketplace?.filterResult)
    let listings = useSelector(state => state.marketplace?.vehiclesListing)
    console.log("Selector results: ", results)

    useEffect(() => {
        if (vehiclesData?.length){
            const minMax = getMinMaxValues(vehiclesData,"pricePerDay")
            setMinPrice(minMax?.min)
            setMaxPrice(minMax?.max)
            console.log({minMax})
        }

    },[vehiclesData])

    //sample amenities filtering
    useEffect(() => {
        if (vehiclesData?.length > 0){
            const pw = filterPriceBetween(vehiclesData,24000,30000)
            console.log({pw});
        }

    },[vehiclesData])

    const handleSelfDrivenFilter = async () => {
        if (chauffeuredChecked){
            await handleChaufferedFilter();
        }

        console.log("Previous data on Self Driven Click: ", {prevData})

        //apply the filter
        if (!selfDrivenChecked){
            const res = filterSelfDriven(listings)
            dispatch(setFilterResult(res))
        }
        else{
            setVehiclesData(prevData);
        }

        setSelfDrivenChecked(prevState => !prevState)
    }

    const handleFullDayFilter = async () => {
        if (hourlyChecked){
            await handleHourlyFilter();
            // alert("Mudi")
        }
        if (halfDayChecked){
            await handleHalfDayFilter();
            // alert("Mudi")
        }
        if (weeklyChecked){
            await handleWeeklyFilter()
        }
        if (monthlyChecked){
            await handleMonthlyFilter();
        }

        if (!fullDayChecked){
            const res = filterFullDay(listings)
            dispatch(setFilterResult(res))
        }
        else{
            setVehiclesData(prevData);
        }

        setFullDayChecked(prevState => !prevState)
    }

    const handleChaufferedFilter = async () => {
        if (selfDrivenChecked){
            await handleSelfDrivenFilter();
            // alert("Mudi")
        }

        console.log("Previous data on Chauffeured Click: ", {prevData})

        if (!chauffeuredChecked){
            const res = filterChauffeured(listings)
            dispatch(setFilterResult(res))
        }
        else{
            setVehiclesData(prevData);
        }

        setChauffeuredChecked(prevState => !prevState)
    }

    const handleHourlyFilter = async () => {
        if (fullDayChecked){
            await handleFullDayFilter();
            // alert("Mudi")
        }
        if (halfDayChecked){
            await handleHalfDayFilter();
            // alert("Mudi")
        }
        if (weeklyChecked){
            await handleWeeklyFilter()
        }
        if (monthlyChecked){
            await handleMonthlyFilter();
        }


        if (!hourlyChecked){
            const res = filterHourly(listings)
            dispatch(setFilterResult(res))
        }
        else{
            setVehiclesData(prevData);
        }

        setHourlyChecked(prevState => !prevState)
    }

    const handleHalfDayFilter = async () => {
        if (fullDayChecked){
            await handleFullDayFilter();
            // alert("Mudi")
        }
        if (hourlyChecked){
            await handleHourlyFilter();
        }
        if (weeklyChecked){
            await handleWeeklyFilter()
        }
        if (monthlyChecked){
            await handleMonthlyFilter();
        }

        if (!halfDayChecked){
            const res = filterHalfDay(listings)
            dispatch(setFilterResult(res))
        }
        else{
            setVehiclesData(prevData);
        }

        setHalfDayChecked(prevState => !prevState)
    }

    const handleWeeklyFilter = async () => {
        if (fullDayChecked){
            await handleFullDayFilter();
            // alert("Mudi")
        }
        if (hourlyChecked){
            await handleHourlyFilter();
        }
        if (halfDayChecked){
            await handleHalfDayFilter();
        }
        if (monthlyChecked){
            await handleMonthlyFilter();
        }

        if (!weeklyChecked){
            const res = filterWeekly(listings)
            dispatch(setFilterResult(res))
        }
        else{
            setVehiclesData(prevData);
        }

        setWeeklyChecked(prevState => !prevState)
    }

    const handleMonthlyFilter = async () => {
        if (fullDayChecked){
            await handleFullDayFilter();
            // alert("Mudi")
        }
        if (hourlyChecked){
            await handleHourlyFilter();
        }
        if (halfDayChecked){
            await handleHalfDayFilter();
        }
        if (weeklyChecked){
            await handleWeeklyFilter();
        }

        if (!monthlyChecked){
            // setPrevData(vehiclesData);
            // // console.log("vehiclesData keys: ", filterHalfDay(vehiclesData))
            // setVehiclesData(prevState => filterMonthly(vehiclesData))
            const res = filterMonthly(listings)
            dispatch(setFilterResult(res))
        }
        else{
            setVehiclesData(prevData);
        }

        setMonthlyChecked(prevState => !prevState)
    }

    const handleSedanClicked = async () => {
        if (commercialChecked){
            await handleCommercialClicked();
            setPrevData(vehiclesData);
            // alert("Mudi")
        }
        if (suvChecked){
            await handleSuvClicked();
            setPrevData(vehiclesData);
            // alert("Mudi")
        }

        if (!sedanChecked){
            // setPrevData(vehiclesData);
            // console.log("From Sedan clicked: ", {prevData})
            // // console.log("vehiclesData keys: ", filterHalfDay(vehiclesData))
            // if (prevData?.length > 0)
            //     // setVehiclesData(prevState => filterVehicleType(prevData,"sedan"))
            //     setVehiclesData(prevState => filterVehicleType(completeData,"sedan"))
            // else{
            //     // setVehiclesData(prevState => filterVehicleType(vehiclesData,"sedan"))
            //     setVehiclesData(prevState => filterVehicleType(completeData,"sedan"))
            // }
            const res = filterVehicleType(listings,'sedan')
            dispatch(setFilterResult(res))
        }
        else{
            // setVehiclesData(prevData);
            setVehiclesData(completeData);
        }

        setSedanChecked(prevState => !prevState)
    }

    const handleCommercialClicked = async () => {
        if (sedanChecked){
            await handleSedanClicked();
            setVehiclesData(prevData)
            // alert("Mudi")
        }
        if (suvChecked){
            await handleSuvClicked();
            setVehiclesData(prevData)
            // alert("Mudi")
        }

        if (!commercialChecked){
            const res = filterVehicleType(listings,'vehicle')
            dispatch(setFilterResult(res))
        }
        else{
            // setVehiclesData(prevData);
            setVehiclesData(completeData);
        }

        setCommercialChecked(prevState => !prevState)
    }

    const handleSuvClicked = async () => {
        if (sedanChecked){
            await handleSedanClicked();
            setPrevData(vehiclesData);
            // alert("Mudi")
        }
        if (commercialChecked){
            await handleCommercialClicked();
            setPrevData(vehiclesData);
            // alert("Mudi")
        }

        if (!suvChecked){
            const res = filterVehicleType(listings,'suv')
            dispatch(setFilterResult(res))
        }
        else{
            // setVehiclesData(prevData);
            setVehiclesData(completeData);
        }

        setSuvChecked(prevState => !prevState)
    }

    const handleOnSeatsReduced = (seats) => {
        seats--
        setPrevData(vehiclesData)
        setVehiclesData(filterNumOfSeats(vehiclesData,seats))
    }

    const handleSeatsDecrease = () => {
        setSeatsValue(seatsValue - 1);
    };

    const handleSeatsIncrease = () => {
        setSeatsValue(seatsValue + 1);
    };

    const handleSeatsChange = (event) => {
        setSeatsValue(event.target.value);
    };

    useEffect(() => {
        // setPrevData(vehiclesData)
        setVehiclesData(filterNumOfSeats(completeData,seatsValue))
    },[seatsValue])

    const handleToyotaClicked = () => {
        if (lexusChecked){
            handleLexusClicked()
        }

        // setVehiclesData(filterVehicleMake(completeData,"toyota"))
        const res = filterVehicleMake(listings,'toyota')
        dispatch(setFilterResult(res))
        setToyotaChecked(prevState => !prevState)
    }

    const handleLexusClicked = () => {
        if (toyotaChecked){
            handleToyotaClicked()
        }

        const res = filterVehicleMake(listings,'lexus')
        dispatch(setFilterResult(res))
        setLexusChecked(prevState => !prevState)
    }

    const handleAcClicked = () => {

        if (!ac){
            setVehiclesData(filterAC(completeData))
            setAc(prevState => !prevState)
        }
        else{
            setVehiclesData(completeData)
            setAc(prevState => !prevState)
        }
    }

    const handleBluetoothClicked = () => {

        if (!bluetooth){
            setVehiclesData(filterAmenities(completeData,"bluetooth"))
            setBluetooth(prevState => !prevState)
        }
        else{
            setVehiclesData(completeData)
            setBluetooth(prevState => !prevState)
        }
    }

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

        setVehiclesData(completeData);
    }

    const sortByPricePerDay = (mainArray) => {
        // Use the Array.sort() method to sort the array based on the "pricePerDay" property.
        mainArray.sort((a, b) => a.pricePerDay - b.pricePerDay);

        // If you want to sort in descending order, you can use b - a instead.
        // mainArray.sort((a, b) => b.pricePerDay - a.pricePerDay);

        if (priceFiltered){
            setVehiclesData(completeData);
        }

        setPriceFiltered(prevState => !prevState)

        return mainArray;
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

    useEffect(() => {
        progressRef.current.style.left = (minValue / 1000) * 10 + "%";
        progressRef.current.style.right = 10 - (maxValue / 1000) * 10 + "%";
    }, [minValue, maxValue]);

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className='flex items-start gap-6 px-32 w-full'>
            <div className="w-72 self-stretch rounded-xl bg-white px-4 tz-shadow tz-border-gray-1">
                <div className="flex justify-between items-center w-full py-2 mb-8 tz-border-bottom-1 tz-bg-gradient">
                    <div className="font-medium tz-text-dark">Filter</div>
                    <Link href="" className="flex items-center gap-1 tz-text-orange-1">
                        <Image src="/assets/images/refresh-line.png" alt="" width={16} height={16} /> Refresh
                    </Link>
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
                        <div className="mb-4">Price range</div>
                        <div className="mb-4">
                            <div className="slider relative h-1 rounded-md tz-bg-gray-2">
                                <div className="progress absolute h-1 rounded tz-bg-range" ref={progressRef}></div>
                            </div>
                            <div className="input-range relative">
                                <input type="range" name="" value={minValue} min={0} step={10} max={1000} onChange={handleMin} className="absolute w-full -top-1 h-1 bg-red-300 appearance-none accent-[#D3D6D9]" />
                                <input type="range" name="" value={maxValue} min={0} step={10} max={1000} onChange={handleMax} className="absolute w-full -top-1 h-1 bg-red-300 appearance-none accent-[#D3D6D9] [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-12 [&::-webkit-slider-thumb]:w-12 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between self-stretch">
                            <div className="flex items-center justify-center px-3 py-1 bg-white rounded tz-border-light-3">
                                <span className="text-xs tz-text-gray">NGN</span>
                                <input type="number" name="" size="5" onChange={(e) => setMinValue(e.target.value)} value={minValue} className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-xs outline-none w-12 h-4 px-1 border-0 focus:ring-0 tz-text-gray" />
                            </div>
                            <div className="w-4 h-[2px] tz-bg-light-1"></div>
                            <div className="flex items-center justify-center px-3 py-1 bg-white rounded tz-border-light-3">
                                <span className="text-xs tz-text-gray">NGN</span>
                                <input type="number" name="" size="5" onChange={(e) => setMaxValue(e.target.value)} value={maxValue} className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-xs outline-none w-12 h-4 px-1 border-0 focus:ring-0 tz-text-gray" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-4 pt-5 w-full tz-border-top-1">
                        <div className="text-sm font-medium tz-text-dark">Popular filters</div>
                        <div className="flex flex-col items-start gap-3">
                            <label className="flex items-center gap-2" for="selfDriven">
                                <input checked={selfDrivenChecked} onChange={handleSelfDrivenFilter} type="checkbox" name="" className="w-5 h-5 accent-[#F8B02B] focus:ring-2 focus:ring-[#F8B02B] rounded tz-text-orange-1 tz-checbox-border" id="selfDriven" />
                                <span className="text-sm tz-text-gray-3">Self driven</span>
                            </label>
                            <label className="flex items-center gap-2" for="fullDay">
                                <input type="checkbox" name="" className="w-5 h-5 accent-[#F8B02B] focus:ring-2 focus:ring-[#F8B02B] rounded tz-text-orange-1 tz-checbox-border" id="fullDay" /> 
                                <span className="text-sm tz-text-gray-3">Full day</span>
                            </label>
                            <label className="flex items-center gap-2" for="luxurious">
                                <input type="checkbox" name="" className="w-5 h-5 accent-[#F8B02B] focus:ring-2 focus:ring-[#F8B02B] rounded tz-text-orange-1 tz-checbox-border" id="luxurious" /> 
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
                                <FilterButton text={"Hourly"} url="" onClcik={() => console.log('clicked')} />
                                <FilterButton text={"Half day"} url="" onClcik={() => console.log('clicked')} />
                            </div>
                            <div className="flex items-start gap-3 justify-start w-full">
                                <FilterButton text={"Full day"} url="" onClcik={() => console.log('clicked')} />
                                <FilterButton text={"Weekly"} url="" onClcik={() => console.log('clicked')} />
                            </div>
                            <div className="flex items-start gap-3 justify-start w-full">
                                <FilterButton text={"Monthly"} url="" onClcik={() => console.log('clicked')} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-4 pt-5 w-full tz-border-top-1">
                        <div className="text-sm font-medium tz-text-dark">Vehicle type</div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="flex items-start gap-3 justify-start w-full">
                                <FilterButton text={"Sedan"} url="" icon={true} img={"/assets/images/car.png"} imgLight={"/assets/images/car-light.png"} onClcik={() => console.log('clicked')} />
                                <FilterButton text={"Sedan"} url="" icon={true} img={"/assets/images/car.png"} imgLight={"/assets/images/car-light.png"} onClcik={() => console.log('clicked')} />
                            </div> 
                            <div className="flex items-start gap-3 justify-start w-full">
                                <FilterButton text={"Sedan"} url="" icon={true} img={"/assets/images/car.png"} imgLight={"/assets/images/car-light.png"} onClcik={() => console.log('clicked')} />
                                <FilterButton text={"Commercial"} url="" icon={true} img={"/assets/images/car.png"} imgLight={"/assets/images/car-light.png"} onClcik={() => console.log('clicked')} />
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
                                <button onClick={() => seat.current.stepDown()} id="increment">
                                    <Image src="/assets/images/subtract-fill.png" alt="" width={16} height={16} />
                                </button>
                                <input
                                    type="number"
                                    value="4"
                                    min="1"
                                    size="2"
                                    name="numOfSeat"
                                    ref={seat}
                                    class="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-xs font-medium outline-none w-8 h-4 text-center border-0 focus:ring-0 tz-text-dark" 
                                />
                                <button onClick={() => seat.current.stepUp()} id="decrement">
                                    <Image src="/assets/images/add-line.png" alt="" width={16} height={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-4 pt-5 w-full tz-border-top-1">
                        <div className="text-sm font-medium tz-text-dark">Car make</div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="flex items-start gap-3 justify-start w-full">
                                <FilterButton text={"Toyota"} url="" onClcik={() => console.log('clicked')} />
                                <FilterButton text={"Audi"} url="" onClcik={() => console.log('clicked')} />
                            </div>
                            <div className="flex items-start gap-3 justify-start w-full">
                                <FilterButton text={"Mercedes-Benz"} url="" onClcik={() => console.log('clicked')} />
                                <FilterButton text={"Nissan"} url="" onClcik={() => console.log('clicked')} />
                            </div>
                            <div className="flex items-start gap-3 justify-start w-full">
                                <FilterButton text={"Monthly"} url="" onClcik={() => console.log('clicked')} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-4 pt-5 w-full mb-8 tz-border-top-1">
                        <div className="text-sm font-medium tz-text-dark">Vehicle type</div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="flex items-start gap-3 justify-start w-full">
                                <FilterButton text={"Air-conditioning"} url="" icon={true} img={"/assets/images/car.png"} imgLight={"/assets/images/car-light.png"} onClcik={() => console.log('clicked')} />
                            </div>
                            <div className="flex items-start gap-3 justify-start w-full">
                                <FilterButton text={"Bluetooth"} url="" icon={true} img={"/assets/images/bluetooth.png"} onClcik={() => console.log('clicked')} />
                                <FilterButton text={"Baby sit"} url="" icon={true} img={"/assets/images/car.png"} imgLight={"/assets/images/car-light.png"} onClcik={() => console.log('clicked')} />
                            </div>
                            <div className="flex items-start gap-3 justify-start w-full">
                                <FilterButton text={"Wi-fi"} url="" icon={true} img={"/assets/images/wifi.png"} onClcik={() => console.log('clicked')} />
                                <FilterButton text={"Show more"} url="" icon={true} img={"/assets/images/more-2-fill.png"} onClcik={() => console.log('clicked')} />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center w-full mb-5">
                        <Link 
                            href="" 
                            className="flex py-2 px-6 justify-center items-center text-sm font-medium w-48 rounded-lg hover:bg-opacity-80 tz-text-dark-1 tz-bg-orange-1"
                        >
                            Reset all filters
                        </Link>
                    </div>

                </div>
            </div>
            <div className="flex flex-col items-start gap-10 w-full">
                <div className="flex flex-col items-start gap-5">
                    <div className="text-3xl font-semibold tz-text-dark">{vehiclesData?.length} cars available</div>
                    <div className="flex items-start content-start self-stretch flex-wrap gap-4">
                        <FilterButton text={"Most popular"} url="" bg={"tz-bg-dark-1"} onClcik={() => console.log('clicked')} />
                        <FilterButton text={"Price"} url="" onClcik={() => console.log('clicked')} />
                        <FilterButton text={"Star rating"} url="" onClcik={() => console.log('clicked')} />
                        <FilterButton text={"Distance"} url="" onClcik={() => console.log('clicked')} />
                        <FilterButton text={"Chauffeured"} url="" onClcik={() => console.log('clicked')} />
                    </div>
                </div>
                <div className="w-full">
                    {results && <div className="grid grid-cols-3 gap-6 w-full">
                        {
                            results?.map((item, index) => {
                                return <div key={index}>
                                    <CarCard
                                        onClick={() => cardClicked(item)}
                                        carImage={item?.vehicle?.vehicleImages[0]}
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
