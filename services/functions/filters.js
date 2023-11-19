import {findMatchingVehicleAmenities, findObjectsWithAmenity, getObjectsWithMatchingKeyValue} from "./common";

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
    return cardsData.filter(el => el?.hasOwnProperty("pricePerDay"));
}

export function filterHourly(cardsData){
    return cardsData.filter(el => el?.hasOwnProperty("pricePerHour"));
}

export function filterHalfDay(cardsData){
    return cardsData.filter(el => el?.hasOwnProperty("halfDayPrice"));
}

export function filterWeekly(cardsData){
    return cardsData.filter(el => el?.hasOwnProperty("pricePerWeek"));
}

export function filterMonthly(cardsData){
    return cardsData.filter(el => el?.hasOwnProperty("pricePerMonth"));
}

export function filterNumOfSeats(cardsData, num){
    return cardsData.filter(el => el?.vehicle?.vehicleSittingCapacity === num);
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
    return findObjectsWithAmenity(cardsData,"name","Bluetooth")
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