// Given an array , we need to print all its elements in the reverse order .

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function forLoop(array) {

    let n = array.length;

    for (let i = n - 1; i >= 0; i--) {

        console.log(array[i]);

    }
}

function whileLoop(array) {

    let n = array.length;
    let i = n - 1;

    while (i >= 0) {

        console.log(array[i]);
        i--;

    }
}

forLoop(arr);
whileLoop(arr);

