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
//     { id: 1, value: 10 },
//     { id: 2, value: 5 },
//     { id: 3, value: 20 },
//     { id: 4, value: 7 },
// ];
//
// const result = getMinMaxValues(data, 'value');
// console.log("Minimum value:", result.min); // Output: Minimum value: 5
// console.log("Maximum value:", result.max); // Output: Maximum value: 20
