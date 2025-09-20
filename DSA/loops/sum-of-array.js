// Given an array , we need to print the sum of all elements .

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];


function forLoop(array) {

    let n = array.length;
    let sum = 0;

    for (let i = 0; i < n; i++) {

        sum += array[i];

    }

    console.log(sum)
}

function whileLoop(array) {

    let n = array.length;
    let i = 0, sum = 0;

    while (i < n) {

        sum += array[i];
        i++;
    }

    console.log(sum)
}

forLoop(arr);
whileLoop(arr);