// An array is given , we need to left - rotate the array by 1 place towards .

let arr = [1, 2, 3, 4, 5];

function leftRotateByOne(array) {
    let n = array.length;
    let temp = array[0];

    for (let index = 1; index < n; index++) {
        array[index - 1] = array[index]
    };
    array[n - 1] = temp;
}

leftRotateByOne(arr);
console.log(arr)