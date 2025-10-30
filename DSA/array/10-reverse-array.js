// An array is given we need to reverse it .

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reverseArray = (array) => {
    let start = 0;
    let end = array.length - 1;

    while (start < end) {
        [array[start], array[end]] = [array[end], array[start]];
        start++;
        end--;
    }
   
}



reverseArray(arr);

arr = arr.reverse();

console.log(arr)