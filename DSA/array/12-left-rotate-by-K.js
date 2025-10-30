// Given an array and an integer k, we need to left - rotate the array by K .


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = 2;

function leftRotate(array, num) {
    let n = array.length;
    num = num % n;

    let temp = [];
    let index = 0;

    while (index < num) {
        temp[index] = array[index];
        index++;
    }

    for (let index = num; index < n; index++) {
        array[index - num] = array[index]
    }

    // console.log(array)

    let count = 0
    for (let index = n - num; index < n; index++) {
        array[index] = temp[count++]
    }

    // console.log(temp);

}

leftRotate(arr, k);
console.log(arr);
