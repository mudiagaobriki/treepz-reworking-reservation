function hasMatchingKey(arr, outerKey, innerKey, targetValue) {
    for (const obj of arr) {
        if (obj[outerKey] && obj[outerKey][innerKey] === targetValue) {
            return true;
        }
    }
    return false;
}
function hasMatchingKeyInArray(arr, outerKey, innerKey, targetValue) {
    for (const obj of arr) {
        if (obj[outerKey] && Array.isArray(obj[outerKey])) {
            for (const innerObj of obj[outerKey]) {
                if (innerObj[innerKey] === targetValue) {
                    return true;
                }
            }
        }
    }
    return false;
}

function hasMatchingValueInArray(arr, outerKey, innerKey, targetValue) {
    for (const obj of arr) {
        if (obj[outerKey] && Array.isArray(obj[outerKey][innerKey])) {
            if (obj[outerKey][innerKey].includes(targetValue)) {
                return true;
            }
        }
    }
    return false;
}

function hasMatchingKeyValue(arr, outerKey, innerKey, targetKey, targetValue) {
    for (const obj of arr) {
        if (obj[outerKey] && Array.isArray(obj[outerKey])) {
            for (const innerObj of obj[outerKey]) {
                if (innerObj[innerKey] && innerObj[innerKey][targetKey] === targetValue) {
                    return true;
                }
            }
        }
    }
    return false;
}

function getObjectWithMatchingKeyValue(arr, outerKey, innerKey, targetKey, targetValue) {
    for (const obj of arr) {
        if (obj[outerKey] && Array.isArray(obj[outerKey])) {
            for (const innerObj of obj[outerKey]) {
                if (innerObj[innerKey] && innerObj[innerKey][targetKey] === targetValue) {
                    return obj;
                }
            }
        }
    }
    return null; // Return null if no match is found
}

export function getObjectsWithMatchingKeyValue(arr, outerKey, innerKey, targetKey, targetValue) {
    const matchingObjects = [];

    for (const obj of arr) {
        if (obj[outerKey] && Array.isArray(obj[outerKey])) {
            for (const innerObj of obj[outerKey]) {
                if (innerObj[innerKey] && innerObj[innerKey][targetKey] === targetValue) {
                    matchingObjects.push(obj);
                    break; // If a match is found, break to prevent duplicate entries
                }
            }
        }
    }

    return matchingObjects;
}

export function findMatchingVehicleAmenities(data, keyToMatch, valueToMatch) {
    const matchingObjects = [];

    for (const item of data) {
        if (item.vehicle && item.vehicle.vehicleAmenities && Array.isArray(item.vehicle.vehicleAmenities)) {
            for (const amenity of item.vehicle.vehicleAmenities) {
                if (amenity[keyToMatch] === valueToMatch) {
                    matchingObjects.push(amenity);
                }
            }
        }
    }

    return matchingObjects;
}

export function findObjectsWithAmenity(data, keyToMatch, valueToMatch) {
    const matchingObjects = [];

    for (const item of data) {
        if (item.vehicle && item.vehicle.vehicleAmenities && Array.isArray(item.vehicle.vehicleAmenities)) {
            for (const amenity of item.vehicle.vehicleAmenities) {
                if (amenity[keyToMatch] === valueToMatch) {
                    matchingObjects.push(item);
                    break; // Add the object only once
                }
            }
        }
    }

    return matchingObjects;
}

export function getMinMaxValues(arr, key) {
    if (arr?.length === 0) {
        return { min: undefined, max: undefined };
    }

    let min = arr[0][key];
    let max = arr[0][key];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i][key] < min) {
            min = arr[i][key];
        }
        if (arr[i][key] > max) {
            max = arr[i][key];
        }
    }

    return { min, max };
}

// Example usage:
// const data = [
//     {
//         vehicle: {
//             vehicleAmenities: [
//                 { type: "GPS", description: "GPS navigation system" },
//                 { type: "Bluetooth", description: "Bluetooth connectivity" },
//             ],
//         },
//     },
//     {
//         vehicle: {
//             vehicleAmenities: [
//                 { type: "Bluetooth", description: "Bluetooth connectivity" },
//                 { type: "Stereo", description: "Premium stereo system" },
//             ],
//         },
//     },
//     {
//         vehicle: {
//             vehicleAmenities: [
//                 { type: "GPS", description: "GPS navigation system" },
//                 { type: "Air Conditioning", description: "Climate control" },
//             ],
//         },
//     },
// ];
//
// const matchingObjects = findObjectsWithAmenity(data, "type", "Bluetooth");
// console.log(matchingObjects);
// Output: [
//   {
//     vehicle: {
//       vehicleAmenities: [ { type: "GPS", description: "GPS navigation system" }, { type: "Bluetooth", description: "Bluetooth connectivity" } ]
//     }
//   },
//   {
//     vehicle: {
//       vehicleAmenities: [ { type: "Bluetooth", description: "Bluetooth connectivity" }, { type: "Stereo", description: "Premium stereo system" } ]
//     }
//   }
// ]


// Example usage:
// const data = [
//     {
//         vehicle: {
//             vehicleAmenities: [
//                 { type: "GPS", description: "GPS navigation system" },
//                 { type: "Bluetooth", description: "Bluetooth connectivity" },
//             ],
//         },
//     },
//     {
//         vehicle: {
//             vehicleAmenities: [
//                 { type: "Bluetooth", description: "Bluetooth connectivity" },
//                 { type: "Stereo", description: "Premium stereo system" },
//             ],
//         },
//     },
// ];
//
// const matchingAmenities = findMatchingVehicleAmenities(data, "type", "Bluetooth");
// console.log(matchingAmenities);
// // Output: [{ type: "Bluetooth", description: "Bluetooth connectivity" }, { type: "Bluetooth", description: "Bluetooth connectivity" }]


// // Example usage:
// const data = [
//     { id: 1, details: [{ value: { key: "A" } }, { value: { key: "B" } }] },
//     { id: 2, details: [{ value: { key: "C" } }, { value: { key: "D" } }] },
//     { id: 3, details: [{ value: { key: "E" } }, { value: { key: "C" } }] },
// ];
//
// const matchingObjects = getObjectsWithMatchingKeyValue(data, 'details', 'value', 'key', 'C');
// console.log(matchingObjects);
// // Output: [{ id: 2, details: [{ value: { key: "C" } }, { value: { key: "D" } } }, { id: 3, details: [{ value: { key: "E" } }, { value: { key: "C" } } }]


// // Example usage:
// const data = [
//     { id: 1, details: [{ value: { key: "A" } }, { value: { key: "B" } }] },
//     { id: 2, details: [{ value: { key: "C" } }, { value: { key: "D" } }] },
//     { id: 3, details: [{ value: { key: "E" } }, { value: { key: "F" } }] },
// ];
//
// const matchingObject = getObjectWithMatchingKeyValue(data, 'details', 'value', 'key', 'C');
// console.log(matchingObject); // Output: { id: 2, details: [{ value: { key: "C" } }, { value: { key: "D" } }] }


// // Example usage:
// const data = [
//     { id: 1, details: [{ value: { key: "A" } }, { value: { key: "B" } }] },
//     { id: 2, details: [{ value: { key: "C" } }, { value: { key: "D" } }] },
//     { id: 3, details: [{ value: { key: "E" } }, { value: { key: "F" } }] },
// ];
//
// const hasMatching = hasMatchingKeyValue(data, 'details', 'value', 'key', 'C');
// console.log(hasMatching); // Output: true


// // Example usage:
// const data = [
//     { id: 1, details: { value: [10, 15] } },
//     { id: 2, details: { value: [5, 12] } },
//     { id: 3, details: { value: [20, 25] } },
// ];
//
// const hasMatching = hasMatchingValueInArray(data, 'details', 'value', 12);
// console.log(hasMatching); // Output: true


// // Example usage:
// const data = [
//     { id: 1, details: [{ value: 10 }, { value: 15 }] },
//     { id: 2, details: [{ value: 5 }, { value: 12 }] },
//     { id: 3, details: [{ value: 20 }, { value: 25 }] },
// ];
//
// const hasMatching = hasMatchingKeyInArray(data, 'details', 'value', 12);
// console.log(hasMatching); // Output: true


// // Example usage:
// const data = [
//     { id: 1, details: { value: 10 } },
//     { id: 2, details: { value: 5 } },
//     { id: 3, details: { value: 20 } },
// ];
//
// const hasMatching = hasMatchingKey(data, 'details', 'value', 5);
// console.log(hasMatching); // Output: true
