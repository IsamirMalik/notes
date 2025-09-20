// Given an array we need to print every third element of the array . 

// 1. Do not print the first element .
// 2. Print the first element also .

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function forLoop(array) {

    let n = array.length;
    // Not printing the first element
    for (let i = 2; i < n; i += 3) {
        console.log(array[i])
    }

    // Print the first element
    for (let i = 0; i < n; i += 3) {
        console.log(array[i])
    }

}

forLoop(arr)