import {findMatchingVehicleAmenities, findObjectsWithAmenity, getObjectsWithMatchingKeyValue} from "./common";
import {relativizeURL} from "next/dist/shared/lib/router/utils/relativize-url";

export function filterSelfDriven(cardsData){
    return cardsData.filter(el => el?.driveType?.toLowerCase() !== "chaffeured");
}

export function filterChauffeured(cardsData){
    return cardsData.filter(el => el?.driveType?.toLowerCase() === "chaffeured")
}

export function filterIsAvailable(cardsData){
    return cardsData.filter(el => el?.isAvailable === true);
}

export function filterFullDay(cardsData){
    console.log("Price per day: ", cardsData[0]?.pricePerDay)
    // return cardsData.filter(el => (el?.hasOwnProperty("pricePerDay") || el?.pricePerday > 0));
    return cardsData.filter(el => ( Number(el?.pricePerDay) > 0));
}

export function filterHourly(cardsData){
    return cardsData.filter(el => (el?.hasOwnProperty("pricePerHour") && el?.pricePerHour > 0));
}

export function filterHalfDay(cardsData){
    return cardsData.filter(el => (el?.hasOwnProperty("halfDayPrice") && el?.halfDayPrice > 0));
}

export function filterWeekly(cardsData){
    return cardsData.filter(el => (el?.hasOwnProperty("pricePerWeek") && el?.pricePerWeek > 0));
}

export function filterMonthly(cardsData){
    return cardsData.filter(el => (el?.hasOwnProperty("pricePerMonth") && el?.pricePerMonth > 0));
}

export function filterNumOfSeats(cardsData, num){
    console.log({seatsFilterData: cardsData})
    return cardsData?.filter(el => el?.vehicle?.vehicleSittingCapacity === num);
}

export function filterVehicleMode(cardsData, mode){
    return cardsData.filter(el => el?.vehicle?.vehicleMode?.toLowerCase() === mode?.toLowerCase());
}

export function filterVehicleType(cardsData, category){
    return cardsData.filter(el => el?.vehicle?.vehicleCategory?.includes(category?.toLowerCase()));
}

export function filterVehicleMake(cardsData, make){
    return cardsData.filter(el => el?.vehicle?.vehicleMake?.name?.toLowerCase()?.includes(make?.toLowerCase()));
}

export function filterAC(cardsData){
    return cardsData.filter(el => el?.vehicle?.vehicleHasAirCondition === true );
}

export function filterAmenities(cardsData, amenity){
    return findObjectsWithAmenity(cardsData,"name",amenity)
}

export function filterPriceBetween(cardsData, low, high) {
    return cardsData.filter(el => (el?.pricePerDay >= low && el?.pricePerDay <= high));
}

export function sortByDistance(cardsData) {
    return cardsData.filter(el => (el?.pricePerDay >= low && el?.pricePerDay <= high));
}

export function filterRentals(cardsData) {
    return cardsData.filter(el => (el?.rentalBooking ===  true));
}

export function filterIntercity(cardsData) {
    return cardsData.filter(el => (el?.intercity ===  true));
}

export function filterAirportTransfer(cardsData) {
    return cardsData.filter(el => (el?.airportTransfer ===  true));
}

export function sortByPrice(cardsData){
    let res = cardsData
    console.log('sorted: ',res?.sort((a,b) => a.pricePerday - b.pricePerDay))
}

export function filterData(data, filters) {
    if (!Array.isArray(data) || data.length === 0 || typeof filters !== 'object') {
        return [];
    }

    return data.filter(item => {
        for (const key in filters) {
            if (Object.prototype.hasOwnProperty.call(filters, key)) {
                const filterValue = filters[key];

                if (key === 'driveType' && item.driveType !== filterValue) {
                    return false;
                }

                if (key === 'vehicleModel.vehicleCategory' && item.vehicleModel && item.vehicleModel.vehicleCategory !== filterValue) {
                    return false;
                }

                if (key === 'vehicleMake.name' && item.vehicleMake && item.vehicleMake.name !== filterValue) {
                    return false;
                }

                if (key === 'amenities' && (!item.amenities || !item.amenities.includes(filterValue))) {
                    return false;
                }
            }
        }
        return true;
    });
}

export function filterObjects(array, filters) {
    return array.filter(obj => {
        for (const key in filters) {
            if (filters.hasOwnProperty(key)) {
                if (Array.isArray(filters[key])) {
                    // If the filter value is an array, check if any value matches
                    if (!filters[key].some(val => !obj[key] || !obj[key].includes(val))) {
                        continue;
                    } else {
                        return false;
                    }
                } else {
                    // Check for exact match for other filter types
                    if (obj[key] !== filters[key]) {
                        return false;
                    }
                }
            }
        }
        return true;
    });
}

export const multipleFilter = (cardsData,filter) => {
    let result = cardsData
    if (filter?.hasOwnProperty('driveType') && filter?.driveType?.length > 0){
        // if (filter?.driveType === 'chaffeured'){
        //     result =filterChauffeured(result)
        // }
        // else{
        //     result = filterSelfDriven(result)
        // }
        // console.log({filter})
        // console.log("Length: ",filter?.driveType?.length)
        // if (filter?.driveType?.length === 0) return cardsData
        let output = []
        // console.log('pre-make result: ', result)
        filter?.driveType?.forEach((item,index) => {
            if (item === 'chaffeured'){
                output = [...output,...filterChauffeured(result)]
            }
            else{
                output = [...output,...filterSelfDriven(result)]
            }
        })
        result = findCommonObjects(output,result)
        result = Array.from(new Set(result))
    }
    if (filter?.hasOwnProperty('daily')){
        result =filterFullDay(result)
    }
    if (filter?.hasOwnProperty('hourly')){
        result =filterHourly(result)
    }
    if (filter?.hasOwnProperty('halfDay')){
        result =filterHalfDay(result)
    }
    if (filter?.hasOwnProperty('weekly')){
        result =filterWeekly(result)
    }
    if (filter?.hasOwnProperty('monthly')){
        result =filterMonthly(result)
    }
    if (filter?.hasOwnProperty('vehicleType') && filter?.vehicleType?.length > 0){
        // result = filterVehicleType(result, filter?.vehicleType)
        let output = []
        // console.log('pre-make result: ', result)
        filter?.vehicleType?.forEach((item,index) => {
            // console.log('make item: ', item)
            output = [...output,...filterVehicleType(result, item)]
            // console.log({output})
            // result?.push(filterVehicleMake(result, item))
        })
        result = findCommonObjects(output,result)
    }
    if (filter?.hasOwnProperty('duration') && filter?.duration?.length > 0){
        // result = filterVehicleType(result, filter?.vehicleType)
        let output = []
        // console.log('pre-make result: ', result)
        filter?.duration?.forEach((item,index) => {
            if (item === 'hourly'){
                output = [...output,...filterHourly(result)]
            }
            else if (item === "halfDay"){
                output = [...output,...filterHalfDay(result)]
            }
            else if (item === "daily"){
                output = [...output,...filterFullDay(result)]
                console.log("Pre result: ", result)
                console.log("Output: ", output)
            }
            else if (item === "weekly"){
                output = [...output,...filterWeekly(result)]
            }
            else if (item === 'monthly'){
                output = [...output,...filterMonthly(result)]
            }

            // console.log({output})
            // result?.push(filterVehicleMake(result, item))
        })
        result = findCommonObjects(output,result)
        result = Array.from(new Set(result))
    }
    if (filter?.hasOwnProperty('vehicleMake') && filter?.vehicleMake?.length > 0){
        let output = []
        // console.log('pre-make result: ', result)
        filter?.vehicleMake?.forEach((item,index) => {
            // console.log('make item: ', item)
            output = [...output,...filterVehicleMake(result, item)]
            // console.log({output})
            // result?.push(filterVehicleMake(result, item))
        })
        result = findCommonObjects(output,result)
    }
    if (filter?.hasOwnProperty('seats')){
        // console.log("In here")
        console.log({result})
        result = result?.filter(el => el?.vehicle?.vehicleSittingCapacity === filter?.seats);
        // result = filterNumOfSeats(k, filter?.seats)
    }
    if (filter?.hasOwnProperty('priceBetween')){ // object of prices (low and high
        result = filterPriceBetween(result, filter?.priceBetween?.low, filter?.priceBetween?.high)
    }
    if (filter?.hasOwnProperty('amenities') && filter?.amenities?.length > 0){ // array of amenities
        // filters?.amenities?.forEach((item, index) => {
        //     if ('amenities' !== 'ac')
        //         result = filterAmenities(result, item)
        //     else
        //         result = filterAC(result)
        // })
        let output = []
        // console.log('pre-make result: ', result)
        filter?.amenities?.forEach((item,index) => {
            if (item === 'ac'){
                output = [...output,...filterAC(result)]
            }
            else {
                output = [...output,...filterAmenities(result,item)]
            }

            console.log({output})
            // result?.push(filterVehicleMake(result, item))
        })
        result = findCommonObjects(output,result)
        result = Array.from(new Set(result))
    }

    return result;
}

export function searchRentals(cardsData,pickupTime){
    return cardsData?.filter(el => el?.availableTimes?.includes(pickupTime))
}

// Example usage:
const dataArray = [/* Your array of objects here */];
const filters = {
    driveType: 'sedan', // Example filter value for driveType
    'vehicleModel.vehicleCategory': 'compact', // Example filter value for vehicleModel.vehicleCategory
    'vehicleMake.name': 'Toyota', // Example filter value for vehicleMake.name
    amenities: 'GPS' // Example filter value for amenities
};

function findCommonObjects(arr1, arr2) {
    const commonObjects = arr1.filter(obj1 =>
        arr2.some(obj2 => obj2.id === obj1.id)
    );
    return commonObjects;
}

const filteredData = filterData(dataArray, filters);
console.log(filteredData);